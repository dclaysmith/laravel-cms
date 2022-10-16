<?php

namespace Tests\Feature\Api;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RenderControllerTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testIndex()
    {
        $response = $this->post("/api/cms-render?some=param&more=stuff");

        // dd($response->getContent());

        $response->assertStatus(200);
    }
}
