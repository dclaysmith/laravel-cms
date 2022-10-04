<?php

namespace Dclaysmith\LaravelCms\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

use Dclaysmith\LaravelCms\Models\PageComponent;

use Dclaysmith\LaravelCms\Http\Requests\Api\PageComponent\UpdateRequest;
use Dclaysmith\LaravelCms\Http\Requests\Api\PageComponent\StoreRequest;

use Dclaysmith\LaravelCms\Http\Resources\PageComponentResource;

use Dclaysmith\LaravelCms\Http\Traits\AppliesDefaults;
use Dclaysmith\LaravelCms\Http\Traits\AppliesFilters;
use Dclaysmith\LaravelCms\Http\Traits\AppliesIncludes;
use Dclaysmith\LaravelCms\Http\Traits\AppliesPagination;
use Dclaysmith\LaravelCms\Http\Traits\AppliesSorts;

class PageComponentController extends Controller
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
    public function index(Request $request)
    {
        $builder = PageComponent::query();

        $this->applyIncludes($builder, $request, []);

        $this->applyFilters($builder, $request, []);

        $this->applySorts(
            $builder,
            $request,
            ["sort_order"],
            [],
            ["sort_order"]
        );

        return $this->applyPagination($builder, $request);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        $data = $request->validated();

        $pageComponent = PageComponent::firstOrCreate($data);

        return new PageComponentResource($pageComponent, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $pageComponent = PageComponent::findOrFail($id);

        return new PageComponentResource($pageComponent, 201);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, $id)
    {
        $data = $request->validated();

        $pageComponent = PageComponent::findOrFail($id);

        $pageComponent->fill($data);

        $pageComponent->save();

        return new PageComponentResource($pageComponent, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pageComponent = PageComponent::findOrFail($id);

        $pageComponent->delete();

        return response(200);
    }
}
