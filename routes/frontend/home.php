<?php

use App\Http\Controllers\Backend\BowsingInformationController;
use App\Http\Controllers\Frontend\TermsController;

use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\UrlShortnerController;
use Illuminate\Support\Facades\Route;
use Tabuna\Breadcrumbs\Trail;

/*
 * Frontend Controllers
 * All route names are prefixed with 'frontend.'.
 */

Route::get('/', [HomeController::class, 'index'])
    ->name('index')
    ->breadcrumbs(function (Trail $trail) {
        $trail->push(__('Home'), route('frontend.index'));
    });

Route::get('terms', [TermsController::class, 'index'])
    ->name('pages.terms')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('frontend.index')
            ->push(__('Terms & Conditions'), route('frontend.pages.terms'));
    });

Route::resource('url_shortener', UrlShortnerController::class);
Route::post('url_shortener_qrcode', [UrlShortnerController::class, 'qurCodeGenerate'])->name('qrcode.create');
