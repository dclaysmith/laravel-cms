<?php

namespace Dclaysmith\LaravelCms\View\Components;

use Illuminate\View\Component;

class ExampleHtmlComponent extends Component
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
        return '<p>This is an example of a blade-less component.</p>';
    }
}
