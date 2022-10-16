<?php

namespace Dclaysmith\LaravelCms\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ComponentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "is_global" => (bool) $this->is_global,
            "name" => $this->name,
            "html" => $this->html,
            "view" => $this->view,
            "cms_component_page_id" => $this->whenPivotLoaded(
                "cms_component_page",
                function () {
                    return (int) $this->pivot->id;
                }
            ),
            "cms_page_id" => $this->whenPivotLoaded(
                "cms_component_page",
                function () {
                    return (int) $this->pivot->cms_page_id;
                }
            ),
            "cms_template_section_id" => $this->whenPivotLoaded(
                "cms_component_page",
                function () {
                    return (int) $this->pivot->cms_template_section_id;
                }
            ),
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
