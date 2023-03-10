#!/bin/bash
echo "Build Admin"
cd ./resources/admin
echo "$PWD"
rm -rf dist; npm run build
echo "cd ../../"
cd ../../../LaravelCmsDev/
echo "$PWD"
echo "Update Project"
# composer update; 
rm -rf resources/vendor/laravel-cms; php artisan vendor:publish --provider="Dclaysmith\LaravelCms\Providers\LaravelCmsServiceProvider"
echo "cd ../Package"
cd ./packages/LaravelCms/
echo "$PWD"