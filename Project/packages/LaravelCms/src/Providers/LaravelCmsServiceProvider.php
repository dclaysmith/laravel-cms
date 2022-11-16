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
        $this->loadMigrationsFrom(__DIR__ . "/../../database/migrations");

        /**
         * Load views created by this package, primarily CMS admin pages
         */
        $this->loadViewsFrom(
            __DIR__ . "/../../resources/views/package",
            "laravel-cms"
        );
        // $this->publishes(
        //     [
        //         __DIR__ .
        //         "/../../resources/views/admin.blade.php" => resource_path(
        //             "views/vendor/laravel-cms/admin.blade.php"
        //         ),
        //     ],
        //     "views"
        // );

        /**
         * Publish examples of user-defined view comonents
         */
        $this->publishes(
            [
                __DIR__ . "/../../src/View/Components/UserDefined" => app_path(
                    "View/Components/Vendor/LaravelCms/UserDefined"
                ),
                __DIR__ .
                "/../../resources/views/components/user-defined" => resource_path(
                    "views/components/vendor/laravel-cms/user-defined"
                ),
            ],
            "components"
        );

        /**
         * Load Routes
         */
        $this->loadRoutesFrom(__DIR__ . "/../../routes/laravel-cms.php");

        /**
         * Publish Config
         */
        $this->publishes(
            [
                __DIR__ . "/../../config/laravel-cms.php" => config_path(
                    "laravel-cms.php"
                ),
            ],
            "config"
        );

        /**
         * Publish Admin
         */
        $this->publishes(
            [
                __DIR__ . "/../../public/build/" => public_path(
                    "vendor/laravel-cms"
                ),
            ],
            "vue"
        );
        $this->publishes(
            [
                __DIR__ . "/../../resources/admin/dist" => resource_path(
                    "vendor/laravel-cms/admin"
                ),
            ],
            "vue"
        );
    }
}
