<?php

namespace Dclaysmith\LaravelCms\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Dclaysmith\LaravelCms\Http\Requests\Api\Render\StoreRequest;

use Dclaysmith\LaravelCms\Http\Traits\AppliesDefaults;
use Dclaysmith\LaravelCms\Http\Traits\AppliesFilters;
use Dclaysmith\LaravelCms\Http\Traits\AppliesIncludes;
use Dclaysmith\LaravelCms\Http\Traits\AppliesPagination;
use Dclaysmith\LaravelCms\Http\Traits\AppliesSorts;

use Dclaysmith\LaravelCms\Http\Filters\Base as Filter;

class RenderController extends Controller
{
    use AppliesDefaults,
        AppliesFilters,
        AppliesIncludes,
        AppliesPagination,
        AppliesSorts;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        $view1 = new \App\View\Vendor\LaravelCms\Client\ExampleOne($request);
        $view2 = new \App\View\Vendor\LaravelCms\Client\ExampleTwo($request);

        dd($view2->render());

        return response(["status" => "ok"]);
    }
}
