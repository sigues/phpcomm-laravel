<?php

namespace App\Providers;

use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\Routing\ResponseFactory;

class ApiResponseServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot(ResponseFactory $factory)
    {
        $factory->macro('api_response', function ($data, $status = 200, $errors = array()) use ($factory) {
          return response()->json([
            'links' => ['self' => request()->url()],
            'data' => $data,
            'errors' => $errors,
            'status' => $status],
            $status);
        });
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
    }
}
