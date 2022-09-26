<?php

namespace App\View\Components\LaravelCms;

use Illuminate\View\Component;

class ExampleBladeComponentpwd extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.laravel-cms.example-blade-componentpwd');
    }
}
