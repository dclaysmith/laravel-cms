<?php

namespace Dclaysmith\LaravelCms\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

use Dclaysmith\LaravelCms\Models\Component;

use Dclaysmith\LaravelCms\Http\Requests\Api\Component\UpdateRequest;
use Dclaysmith\LaravelCms\Http\Requests\Api\Component\StoreRequest;

use Dclaysmith\LaravelCms\Http\Resources\ComponentResource;

use Dclaysmith\LaravelCms\Http\Traits\AppliesDefaults;
use Dclaysmith\LaravelCms\Http\Traits\AppliesFilters;
use Dclaysmith\LaravelCms\Http\Traits\AppliesIncludes;
use Dclaysmith\LaravelCms\Http\Traits\AppliesPagination;
use Dclaysmith\LaravelCms\Http\Traits\AppliesSorts;

class ComponentController extends Controller
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
        $builder = Component::query();

        $this->applyIncludes($builder, $request, []);

        $this->applyFilters($builder, $request, []);

        $this->applySorts($builder, $request, ["id"], [], ["id"]);

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

        $component = Component::firstOrCreate($data);

        return new ComponentResource($component, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $component = Component::findOrFail($id);

        return new ComponentResource($component, 200);
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

        $component = Component::findOrFail($id);

        $component->fill($data);

        $component->save();

        return new ComponentResource($component, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $component = Component::findOrFail($id);

        $component->delete();

        return response(200);
    }
}
