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
            "id" => (int) $this->id,
            "cms_template_id" => (int) $this->cms_template_id,
            "template" => new TemplateResource($this->whenLoaded("template")),
            "cms_user_id" => (int) $this->cms_user_id,
            "user" => new UserResource($this->whenLoaded("user")),
            "components" => ComponentResource::collection(
                $this->whenLoaded("components")
            ),
            "name" => $this->name,
            "title" => $this->title,
            "meta_keywords" => $this->meta_keywords,
            "meta_description" => $this->meta_description,
            "path" => $this->path,
            "allow_index" => (bool) $this->allow_index,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
