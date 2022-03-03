<?php

use App\Http\Controllers\Backend\BrowsingInformationController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\UrlController;
use Illuminate\Support\Facades\Route;
use Tabuna\Breadcrumbs\Trail;


// All route names are prefixed with 'admin.'.
Route::redirect('/', '/admin/dashboard', 301);

Route::get('dashboard', [DashboardController::class, 'index'])
  ->name('dashboard')
  ->breadcrumbs(function (Trail $trail) {
    $trail->push(__('Dashboard'), route('admin.dashboard'));
  });

Route::resource('manage-url', UrlController::class);
Route::post('manage-url/update', [UrlController::class, 'urlStatusUpdate'])->name('url.status');
Route::post('/manage-url-qrcode', [UrlController::class, 'qurCodeGenerate'])->name('qrcode.create');

Route::get('manage-url-report/{name}', [UrlController::class, 'urlReport'])->name('url.report');
Route::resource('browsing/information', BrowsingInformationController::class);
