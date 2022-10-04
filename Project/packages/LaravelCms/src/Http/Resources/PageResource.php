<?php

namespace Dclaysmith\LaravelCms\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PageResource extends JsonResource
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
            "cms_template_id" => $this->cms_template_id,
            "name" => $this->name,
            "title" => $this->title,
            "meta_keywords" => $this->meta_keywords,
            "meta_description" => $this->meta_description,
            "body" => $this->body,
            "path" => $this->path,
            "allow_index" => $this->allow_index,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
