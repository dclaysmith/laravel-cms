<?php

namespace Dclaysmith\LaravelCms\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

use Dclaysmith\LaravelCms\Http\Resources\ViewResource;

use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

use Dclaysmith\LaravelCms\Http\Filters\Base as Filter;

class ViewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        /**
         * Retrieve all of the views in the designated folder
         */
        $viewDirectory = config(
            "services.laravel-cms.component-directory",
            "../app/View/Components/Vendor/LaravelCms/UserDefined"
        );

        $views = [];
        foreach (new \DirectoryIterator($viewDirectory) as $file) {
            if ($file->isFile()) {
                $views[] = $file->getFilename();
            }
        }

        $page = (int) $request->get("page", $default = 1);
        $perPage = (int) $request->get("per_page", $default = 25);
        $offset = $page * $perPage - $perPage;

        return new LengthAwarePaginator(
            array_slice($views, $offset, $perPage),
            count($views),
            $perPage,
            $page
        );
    }
}
