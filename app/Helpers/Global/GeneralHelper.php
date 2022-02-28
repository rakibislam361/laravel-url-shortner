<?php

use App\Models\Backend\Setting;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Carbon;

if (!function_exists('appName')) {
    /**
     * Helper to grab the application name.
     *
     * @return mixed
     */
    function appName()
    {
        return config('app.name', 'Laravel Boilerplate');
    }
}

if (!function_exists('carbon')) {
    /**
     * Create a new Carbon instance from a time.
     *
     * @param $time
     *
     * @return Carbon
     * @throws Exception
     */
    function carbon($time)
    {
        return new Carbon($time);
    }
}

if (!function_exists('homeRoute')) {
    /**
     * Return the route to the "home" page depending on authentication/authorization status.
     *
     * @return string
     */
    function homeRoute()
    {
        if (auth()->check()) {
            if (auth()->user()->isAdmin()) {
                return 'admin.dashboard';
            }
            if (auth()->user()->isUser()) {
                return 'frontend.index';
            }
        }

        return 'frontend.index';
    }
}


if (!function_exists('general_settings')) {
    /**
     * Helper to grab the application name.
     *
     * @return mixed
     */
    function general_settings($json = false)
    {
        $setting = Cache::get('settings', function () {
            return Setting::whereNotNull('active')->get();
        });

        if ($json) {
            return json_encode($setting->pluck('value', 'key')->toArray());
        }

        return $setting;
    }
}


if (!function_exists('get_setting')) {
    /**
     * Helper to grab the application name.
     *
     * @param $key
     * @param null $default
     * @return mixed
     */
    function get_setting($key, $default = null)
    {
        $setting = general_settings()->where('key', $key)->first();
        return $setting ? $setting->value : $default;
    }
}



if (!function_exists('get_step_value')) {
    function get_step_value($step, $key, $default = null)
    {
        $session = session()->get('member', []);
        if (!empty($session)) {
            $step = key_exists($step, $session) ? $session[$step] : [];
            if (is_array($step)) {
                $default =  key_exists($key, $step) ? $step[$key] : '';
            }
        }
        return $default;
    }
}


if (!function_exists('store_picture')) {
    function store_picture($file, $dir_path = '/', $name = null)
    {
        $imageName = $name ? $name . '.' . $file->getClientOriginalExtension() : $file->getClientOriginalName();
        $dir_path = 'storage/' . $dir_path;
        $pathDir = create_public_directory($dir_path); // manage directory
        $img = Image::make($file);
        $fileSize = round($img->filesize() / 1024); // convert to kb

        if ($img->width() > 1080 || $fileSize > 500) {
            $img->resize(1080, null, function ($c) {
                $c->aspectRatio();
            })->save($pathDir . '/' . $imageName, 90); // save converted photo
        } else {
            $img->save($pathDir . '/' . $imageName, 90); // save original photo
        }

        $thumbPathDir = create_public_directory($dir_path . '/thumbs'); // manage thumbs directory
        if ($img->width() > 350 || $fileSize > 150) {
            $img->resize(350, null, function ($c) {
                $c->aspectRatio();
            })->save($thumbPathDir . '/' . $imageName, 90); // save thumbs photo
        } else {
            $img->save($thumbPathDir . '/' . $imageName, 90); // save thumbs photo
        }

        return $dir_path . '/' . $imageName;
    }
}


if (!function_exists('create_public_directory')) {
    function create_public_directory($path)
    {
        File::isDirectory(public_path('storage')) ?: Artisan::call('storage:link');
        File::isDirectory(public_path($path)) ?: File::makeDirectory(public_path($path), 0777, true, true);
        return public_path($path);
    }
}


if (!function_exists('status_decode')) {
    function status_decode($status)
    {
        return str_replace('_', ' ', $status);
    }
}



if (!function_exists('generate_number')) {
    function generate_number($length)
    {
        $unique_number = bin2hex(random_bytes($length));
        return $unique_number;
    }
}
