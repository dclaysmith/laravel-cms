<?php

namespace Dclaysmith\LaravelCms\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PageComponentResource extends JsonResource
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
            "page_id" => $this->cms_page_id,
            "component_id" => $this->cms_component_id,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
