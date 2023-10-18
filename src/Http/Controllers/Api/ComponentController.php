<?php

namespace Dclaysmith\LaravelCms\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

use Dclaysmith\LaravelCms\Models\Component;
use Dclaysmith\LaravelCms\Models\ComponentPage;

use Dclaysmith\LaravelCms\Http\Requests\Api\Component\UpdateRequest;
use Dclaysmith\LaravelCms\Http\Requests\Api\Component\StoreRequest;

use Dclaysmith\LaravelCms\Http\Resources\ComponentResource;

use Dclaysmith\LaravelCms\Http\Traits\AppliesDefaults;
use Dclaysmith\LaravelCms\Http\Traits\AppliesFilters;
use Dclaysmith\LaravelCms\Http\Traits\AppliesIncludes;
use Dclaysmith\LaravelCms\Http\Traits\AppliesPagination;
use Dclaysmith\LaravelCms\Http\Traits\AppliesSorts;

use Dclaysmith\LaravelCms\Http\Filters\Base as Filter;

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

        $this->applyFilters($builder, $request, [
            new \Dclaysmith\LaravelCms\Http\Filters\Boolean("is_global", [
                Filter::TYPE_EQUALS,
                Filter::TYPE_IN,
            ]),
        ]);

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

        $component = Component::create($data);

        /**
         * if a page is provided
         */
        if (\Arr::get($data, "cms_page_id")) {
            $componentPage = ComponentPage::firstOrCreate(
                [
                    "cms_component_id" => $component->id,
                    "cms_page_id" => \Arr::get($data, "cms_page_id"),
                ],
                [
                    "cms_template_section_id" => \Arr::get(
                        $data,
                        "cms_template_section_id"
                    ),
                ]
            );
            // $component->pages()->sync([
            //     \Arr::get($data, "cms_page_id") => [
            //         "cms_template_section_id" => \Arr::get(
            //             $data,
            //             "cms_template_section_id"
            //         ),
            //     ],
            // ]);
        }

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

        if (\Arr::get($data, "cms_page_id")) {
            $componentPage = ComponentPage::updateOrCreate(
                [
                    "cms_component_id" => $component->id,
                    "cms_page_id" => \Arr::get($data, "cms_page_id"),
                ],
                [
                    "cms_template_section_id" => \Arr::get(
                        $data,
                        "cms_template_section_id"
                    ),
                ]
            );
        }

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
