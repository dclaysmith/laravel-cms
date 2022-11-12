<?php

use Illuminate\Support\Facades\Route;

use Dclaysmith\LaravelCms\Http\Controllers\Api\ComponentController;
use Dclaysmith\LaravelCms\Http\Controllers\Api\ComponentPageController;
use Dclaysmith\LaravelCms\Http\Controllers\Api\MediaController;
use Dclaysmith\LaravelCms\Http\Controllers\Api\PageController;
use Dclaysmith\LaravelCms\Http\Controllers\Api\PathController;
use Dclaysmith\LaravelCms\Http\Controllers\Api\RenderController;
use Dclaysmith\LaravelCms\Http\Controllers\Api\TemplateController;
use Dclaysmith\LaravelCms\Http\Controllers\Api\TemplateSectionController;
use Dclaysmith\LaravelCms\Http\Controllers\Api\ViewController;

Route::middleware("web")->group(function () {
    Route::group(["prefix" => "api"], function () {
        Route::delete("cms-component-page", [
            ComponentPageController::class,
            "deleteByLookup",
        ]);
        Route::resource("cms-component-page", ComponentPageController::class);
        Route::resource("cms-components", ComponentController::class);
        Route::resource("cms-media", MediaController::class);
        Route::resource("cms-pages", PageController::class);
        Route::resource("cms-paths", PathController::class);
        Route::resource("cms-templates", TemplateController::class);
        Route::resource(
            "cms-template-sections",
            TemplateSectionController::class
        );
        Route::resource("cms-views", ViewController::class);
        Route::middleware("guest")->group(function () {
            Route::post("/cms-render/{id}", [RenderController::class, "store"]);
        });
    });
});
