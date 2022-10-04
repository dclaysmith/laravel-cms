<?php

namespace Tests\Feature\Api;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ComponentControllerTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testIndex()
    {
        $response = $this->get("/api/cms-components");

        $response->assertStatus(200);
    }

    public function testStore()
    {
        $response = $this->post("/api/cms-components", [
            "body" => "donkey",
        ]);

        $responseArray = (array) json_decode($response->content());

        $response->assertJsonStructure([
            "data" => ["id", "body", "created_at", "updated_at"],
        ]);

        $response->assertStatus(201);
    }

    public function testUpdate()
    {
        $existing = \Dclaysmith\LaravelCms\Models\Component::create([
            "body" => "Boy...",
        ]);

        $response = $this->put("/api/cms-components/" . $existing->id, [
            "body" => "new body",
        ]);

        $responseArray = (array) json_decode($response->content());

        $response->assertJsonStructure([
            "data" => ["id", "body", "created_at", "updated_at"],
        ]);

        $response->assertStatus(200);
    }

    public function testDelete()
    {
        $existing = \Dclaysmith\LaravelCms\Models\Component::create([
            "body" => "Body...",
        ]);

        $response = $this->delete("/api/cms-components/" . $existing->id);

        $response->assertStatus(200);
    }
}
