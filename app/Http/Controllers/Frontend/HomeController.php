<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;

/**
 * Class HomeController.
 */
class HomeController
{
    /**
     * @return Application|Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        return view('frontend.pages.home');
    }
}
