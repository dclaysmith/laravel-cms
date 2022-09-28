#!/bin/bash
echo "Run Build"
npm run build
echo "cd ../../"
cd ../../
echo "Update Project"
# composer update; 
rm -rf public/vendor/laravel-cms; php artisan vendor:publish --provider="Dclaysmith\LaravelCms\Providers\LaravelCmsServiceProvider"
echo "cd ../Package"
cd ./packages/LaravelCms/