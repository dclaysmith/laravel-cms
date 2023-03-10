<?php

namespace App\View\Vendor\LaravelCms\UserDefined;

use Illuminate\View\Component;

class ExampleWithoutTemplate extends Component
{
    var $request;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($request)
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
        $request = json_encode($this->request->all());
        return <<<eof
{$request}  
eof;
    }
}
