<?php

namespace Dclaysmith\LaravelCms\Http\Traits;

use Illuminate\Http\Request;
use Dclaysmith\LaravelCms\Exceptions\InvalidInclude;

trait AppliesIncludes
{
    public function applyIncludes(
        &$builder,
        Request $request,
        $available = [],
        $mappings = []
    ) {
        $includes = $request->input("include", []);

        $notAvailable = array_diff($includes, $available);

        if (count($notAvailable) > 0) {
            throw new InvalidInclude(
                "The following includes cannot be loaded: " .
                    implode(", ", $notAvailable) .
                    ". Allowed ( " .
                    implode(", ", $available) .
                    " )",
                0 // RETURN A USEFUL CODE HERE
            );
        }

        $toApply = array_intersect($includes, $available);
        $with = [];
        foreach ($toApply as $object) {
            if ($mapped = array_get($mappings, $object)) {
                $with[] = $mapped;
            } else {
                $with[] = $object;
            }
        }

        $builder->with($with);
    }
}
