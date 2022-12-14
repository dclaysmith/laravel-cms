<?php

namespace Dclaysmith\LaravelCms\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

use Dclaysmith\LaravelCms\Models\Component;
use Dclaysmith\LaravelCms\Models\ComponentPage;

use Dclaysmith\LaravelCms\Http\Requests\Api\ComponentPage\UpdateRequest;
use Dclaysmith\LaravelCms\Http\Requests\Api\ComponentPage\StoreRequest;
use Dclaysmith\LaravelCms\Http\Requests\Api\ComponentPage\DeleteByLookupRequest;

use Dclaysmith\LaravelCms\Http\Resources\ComponentPageResource;

use Dclaysmith\LaravelCms\Http\Traits\AppliesDefaults;
use Dclaysmith\LaravelCms\Http\Traits\AppliesFilters;
use Dclaysmith\LaravelCms\Http\Traits\AppliesIncludes;
use Dclaysmith\LaravelCms\Http\Traits\AppliesPagination;
use Dclaysmith\LaravelCms\Http\Traits\AppliesSorts;

use Dclaysmith\LaravelCms\Http\Filters\Base as Filter;

class ComponentPageController extends Controller
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
        $builder = ComponentPage::query();

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

        $pageComponent = ComponentPage::firstOrCreate($data);

        $pageComponent->load(["page", "component"]);

        return new ComponentPageResource($pageComponent, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $pageComponent = ComponentPage::findOrFail($id);

        return new ComponentPageResource($pageComponent, 201);
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

        $pageComponent = ComponentPage::findOrFail($id);

        $pageComponent->fill($data);

        $pageComponent->save();

        return new ComponentPageResource($pageComponent, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pageComponent = ComponentPage::findOrFail($id);

        $pageComponent->delete();

        return response(200);
    }

    public function deleteByLookup(DeleteByLookupRequest $request)
    {
        /**
         * If the components aren't global we need to delete them
         */
        Component::where([
            "id" => $request->input("cms_component_id"),
            "is_global" => 0,
        ])->delete();

        ComponentPage::where($request->all())->delete();

        return response(200);
    }
}
