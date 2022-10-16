<?php

namespace Tests\Feature\Api;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ViewControllerTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testIndex()
    {
        \Config::set(
            "services.laravel-cms.component-directory",
            "./app/View/Components/Vendor/LaravelCms/UserDefined"
        );

        $response = $this->get("/api/cms-views");

        // dd($response->getContent());

        $response->assertStatus(200);
    }
}
