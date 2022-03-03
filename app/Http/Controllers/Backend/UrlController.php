<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Backend\Browsinginformation;
use App\Models\Url;
use Auth;
use DB;
use Illuminate\Support\Carbon;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class UrlController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $url = Url::get();
        return view('backend.content.url.index', compact('url'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.content.url.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
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
            return redirect()->back()->withFlashSuccess("This URL shorted successfully");
        }
        return redirect()->back()->withFlashDanger("This URL already shorted");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UrlController  $urlController
     * @return \Illuminate\Http\Response
     */
    public function show(Request $urlController)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UrlController  $urlController
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $urlController)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UrlController  $urlController
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UrlController  $urlController
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (Url::destroy($id)) {
            return redirect()->back()->withFlashSuccess("Url deleted successfully");
        } else {
            return redirect()->back()->withFlashDanger("Something went wrong !");
        }
    }


    public function urlStatusUpdate(Request $request)
    {
        $url = Url::findOrFail($request->id);
        $url->status = $request->status;
        $url->save();
        return 'success';
    }

    public function qurCodeGenerate(Request $request)
    {
        $qrcode = QrCode::size(465)->generate($request->data);
        return $qrcode;
    }

    public function urlReport(Request $request)
    {
        $report_data = Url::with('user');
        $most_visit = 0;
        if ($request->name == "day") {
            $report_data = $report_data->whereDate('created_at', Carbon::today());
        }
        if ($request->name == "week") {
            $report_data = $report_data->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()]);
        }
        if ($request->name == "month") {
            $report_data = $report_data->whereMonth('created_at', date('m'))
                ->whereYear('created_at', date('Y'));
        }
        if ($request->name == "mvisit") {
            $mostVisited = Browsinginformation::select(DB::raw('COUNT(url_id) as visits'), 'url_id')->groupBy('url_id')->get()->toArray();
            $most_visit = max($mostVisited);
            $report_data->find($most_visit['url_id']);
        }

        $report_data = $report_data->orderBy('id', 'DESC')->get();
        return view("backend.content.url.report", compact('report_data', 'most_visit'));
    }
}
