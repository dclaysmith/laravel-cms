<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ComponentControllerTest extends TestCase
{
    use RefreshDatabase;

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
            "html" => "donkey",
            "name" => "donkey",
        ]);

        $responseArray = (array) json_decode($response->content());

        $response->assertJsonStructure([
            "data" => ["id", "name", "html", "created_at", "updated_at"],
        ]);

        $response->assertStatus(201);
    }

    public function testUpdate()
    {
        $existing = \Dclaysmith\LaravelCms\Models\Component::create([
            "name" => "donkey",
            "html" => "donkey",
        ]);

        $response = $this->put("/api/cms-components/" . $existing->id, [
            "name" => "donkey",
            "html" => "new donkey",
        ]);

        $responseArray = (array) json_decode($response->content());

        $response->assertJsonStructure([
            "data" => ["id", "name", "html", "created_at", "updated_at"],
        ]);

        $response->assertStatus(200);
    }

    public function testDelete()
    {
        $existing = \Dclaysmith\LaravelCms\Models\Component::create([
            "name" => "donkey",
            "html" => "new donkey",
        ]);

        $response = $this->delete("/api/cms-components/" . $existing->id);

        $response->assertStatus(200);
    }
}
