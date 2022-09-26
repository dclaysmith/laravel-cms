<?php

namespace Dclaysmith\LaravelCms\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;
use Dclaysmith\LaravelCms\View\Composers\RenderComposer;

class LaravelCmsServiceProvider extends ServiceProvider
{
    public function boot()
    {

        /**
         * Load Migrations to update the database
         */
        $this->loadMigrationsFrom(__DIR__.'/../../database/migrations');

        /**
         * Load Views
         */
        $this->loadViewsFrom(__DIR__.'/../../resources/views', 'laravel-cms');
        $this->publishes([
            __DIR__.'/../../resources/views' => resource_path('views/vendor/laravel-cms'),
        ], "views");
        $this->publishes([
            __DIR__.'/../../src/View/Components/' => app_path('View/Components/LaravelCms'),
            __DIR__.'/../../resources/views/components/' => resource_path('views/components/laravel-cms'),
        ], "components");       
        
        /**
         * Load Routes
         */
        $this->loadRoutesFrom(__DIR__.'/../../routes/laravel-cms.php');

        /**
         * Publish Config
         */
        $this->publishes([
            __DIR__.'/../../config/laravel-cms.php' => config_path('laravel-cms.php'),
        ], "config");

        /**
         * Define a composer for the render view
         */
        View::composer('render', RenderComposer::class);     

        /**
         * Publish Admin
         */
        $this->publishes([
            __DIR__.'/../../public/build/' => public_path('vendor/laravel-cms'),
        ], 'vue');        
    }
}