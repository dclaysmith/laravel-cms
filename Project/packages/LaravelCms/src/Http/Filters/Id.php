<?php

namespace Dclaysmith\LaravelCms\Http\Filters;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class Id extends Base
{
    public function apply(&$builder, $comparator, $value)
    {
        // Apply the filter
        switch ($comparator) {
            case Base::TYPE_EQUALS:
                if (!is_numeric($value)) {
                    throw new \App\Exceptions\Api\InvalidFilter(
                        "Non numeric value provided: " . $value,
                        0 // RETURN A USEFUL CODE HERE
                    );
                }
                $builder->where($this->property(), (int) $value);
                break;
            case Base::TYPE_NOT_EQUALS:
                if (!is_numeric($value)) {
                    throw new \App\Exceptions\Api\InvalidFilter(
                        "Non numeric value provided: " . $value,
                        0 // RETURN A USEFUL CODE HERE
                    );
                }
                $builder->where(function ($query) use ($value) {
                    $query->where($this->property(), "!=", (int) $value);
                    $query->orWhereNull($this->property());
                });
                break;
            case Base::TYPE_IN:
                if (!is_array($value)) {
                    throw new \Exception("The value should be an array.");
                }
                $builder->whereIn($this->property(), $value); // <= array
                break;
            case Base::TYPE_NOT_IN:
                if (!is_array($value)) {
                    throw new \Exception("The value should be an array.");
                }
                $builder->whereNotIn($this->property(), $value); // <= array
                break;
            case Base::TYPE_NULL:
                $builder->whereNull($this->property());
                break;
            case Base::TYPE_NOT_NULL:
                $builder->whereNotNull($this->property());
                break;
        }
    }
}
