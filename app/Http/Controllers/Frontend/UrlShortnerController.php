<?php

namespace App\Http\Controllers\Frontend;

use App\Helpers\BrowserHelper;
use App\Http\Controllers\Controller;
use App\Models\BowsingInformation;
use App\Models\Url;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use QrCode;

class UrlShortnerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        session(['url' => $request->url]);

        if (Auth::check()) {
            $request->validate([
                'url' => 'required|url',
            ]);

            if (!Url::where('url', $request->url)->exists()) {
                $generate_code = generate_number(3);
                $data = [
                    'url' => $request->url,
                    'url_code' => $generate_code,
                    'generated_url' => url('/') . '/' . $generate_code,
                    'user_id' => Auth::user()->id,
                    'user_ip' => $_SERVER['REMOTE_ADDR'],
                ];
                Url::create($data);
                $request->session()->flush();
            }

            return redirect()->route('frontend.index')->withFlashDanger("This URL already shorted");
        }

        return redirect()->route('frontend.auth.login');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $url = Url::findOrFail($id);
        if ($url) {
            $redirect_url = $url->url;
            $browser_information = $this->getBrosingInformation();
            $browser_information['visit_url'] = $redirect_url;
            BowsingInformation::create($browser_information);
            return redirect($redirect_url);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (Url::destroy($id)) {
            return redirect()->back()->withFlashWithSuccess("Url deleted Success fully");
        }
    }


    public function qurCodeGenerate(Request $request)
    {
        $qrcode = QrCode::size(465)->generate($request->data);
        return $qrcode;
    }

    public function getBrosingInformation()
    {
        $getip = BrowserHelper::get_ip();
        $getbrowser = BrowserHelper::get_browsers();
        $getdevice = BrowserHelper::get_device();
        $getos = BrowserHelper::get_os();

        $location = GeoIP($getip);
        $data = [
            'user_id' => auth()->user()->id,
            'user_ip' => $getip,
            'location' => $location->country,
            'latitude' => $location->lat,
            'longitude' => $location->lon,
            'browser' => $getbrowser,
            'device' => $getdevice,
            'active_status' => auth()->user()->isActive(),
            'previous_url' => "",
            'visit_url' => "",
        ];

        return $data;
    }
}
