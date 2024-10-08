<?php

namespace Dclaysmith\LaravelCms\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            "name" => $this->name,
            "title" => $this->title,
            "avatar" => $this->avatar,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
