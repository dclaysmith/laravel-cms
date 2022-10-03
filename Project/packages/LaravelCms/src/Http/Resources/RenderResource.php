<?php

namespace Dclaysmith\LaravelCms\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RenderResource extends JsonResource
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
        ];
    }
}
