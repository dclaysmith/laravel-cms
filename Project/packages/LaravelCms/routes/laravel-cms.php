<?php

use Illuminate\Support\Facades\Route;

// use Dclaysmith\LaravelCms\Http\Controllers\Admin\IndexController AS AdminIndexController;
use Dclaysmith\LaravelCms\Http\Controllers\Api\MediaController;
use Dclaysmith\LaravelCms\Http\Controllers\Api\ObjectController;
use Dclaysmith\LaravelCms\Http\Controllers\Api\PageController;
use Dclaysmith\LaravelCms\Http\Controllers\Api\PageObjectController;
use Dclaysmith\LaravelCms\Http\Controllers\Api\PathController;
use Dclaysmith\LaravelCms\Http\Controllers\Api\RenderController;
use Dclaysmith\LaravelCms\Http\Controllers\Api\TemplateController;
use Dclaysmith\LaravelCms\Http\Controllers\Api\TemplateSectionController;

Route::middleware("web")->group(function () {
    Route::group(["prefix" => "api"], function () {
        Route::resource("cms-media", MediaController::class);
        Route::resource("cms-objects", ObjectController::class);
        Route::resource("cms-pages", PageController::class);
        Route::resource("cms-page-objects", PageObjectController::class);
        Route::resource("cms-paths", PathController::class);
        Route::resource("cms-templates", TemplateController::class);
        Route::resource(
            "cms-template-sections",
            TemplateSectionController::class
        );
        Route::middleware("guest")->group(function () {
            Route::post("/cms-render", [RenderController::class, "store"]);
        });
    });
});
