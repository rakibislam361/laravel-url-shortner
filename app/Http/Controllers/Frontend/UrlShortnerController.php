<?php

namespace App\Http\Controllers\Frontend;

use App\Domains\Auth\Models\User;
use App\Helpers\BrowserHelper;
use App\Http\Controllers\Controller;
use App\Models\Backend\Browsinginformation;
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
        if (Auth::user()) {
            $request->validate([
                'url' => 'required|url',
            ]);

            $generate_code = generate_number(3);
            $url_check = Url::where('user_id', Auth::user()->id)
                ->where('url', $request->url)->first();

            if ($url_check) {
                $url_check->url_code = $generate_code;
                $url_check->generated_url = url('/') . '/' . $generate_code;
                $url_check->user_ip = $_SERVER['REMOTE_ADDR'];
                $url_check->visit_count = $url_check->visit_count + 1;
                $url_check->save();
                return redirect()->back()->withFlashSuccess("This URL shorted successfully");
            } else {
                $data = [
                    'url' => $request->url,
                    'url_code' => $generate_code,
                    'generated_url' => url('/') . '/' . $generate_code,
                    'user_id' => Auth::user()->id,
                    'user_ip' => $_SERVER['REMOTE_ADDR'],
                    'status' => "active"
                ];

                Url::create($data);
                $request->session()->forget('url');
                return redirect()->back()->withFlashSuccess("This URL shorted successfully");
            }
        } else {
            return redirect()->route('frontend.auth.login');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $url = Url::where('id', $id)->where('status', 'active')->first();
        if ($url) {
            $redirect_url = $url->url;
            $browser_information = $this->getBrosingInformation();
            $browser_information['url_id'] = $id;
            $browser_information['visit_url'] = $redirect_url;
            Browsinginformation::create($browser_information);
            return redirect($redirect_url);
        } else {
            return redirect()->back()->withFlashSuccess("This URL has been Expired");
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
            'active_status' => "",
            'previous_url' => "",
            'visit_url' => "",
        ];

        return $data;
    }
}
