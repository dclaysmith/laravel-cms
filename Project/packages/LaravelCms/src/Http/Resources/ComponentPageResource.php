<?php

namespace Dclaysmith\LaravelCms\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ComponentPageResource extends JsonResource
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
            "cms_page_id" => $this->cms_page_id,
            "cms_component_id" => $this->cms_component_id,
            "cms_template_section_id" => $this->cms_template_section_id,
            "html" => $this->html,
            "view" => $this->view,
            "sort_order" => $this->sort_order,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
