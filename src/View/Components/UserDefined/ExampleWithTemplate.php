<?php

namespace App\View\Vendor\LaravelCms\UserDefined;

use Illuminate\View\Component;

class ExampleWithTemplate extends Component
{
    var $request;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($page, $request)
    {
        $this->request = $request;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view("vendor.laravel-cms.client.example-with-template", [
            "someVariable" => "Some value",
        ])->render();
    }
}
