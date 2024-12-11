# LaravelCms

This package is intended for developers and is a work in progress. Do not use.

How to work on UI.

The /Project is just a base Laravel installation.

The real package is in /packages/LaravelCms

But you need to run the Laravel App first

# Run Laravel App (LaravelCms/Project)

cd /public
php -S localhost:8000
or
cd /
php artisan serve --host=localhost --port=8000

## Run Frontend / Vite HMR

cd Project/
npm run dev

# Deploy the Laravel Package (the api stuff)./deploy.sh

Updates the composer-installed package in the test project and publishes artifacts

## Open

http://localhost:8000/admin-dev#/templates

# Development

You can now work on the admin in

/Project/packages/LaravelCms/resources/admin/src

Work in LaravelCms/Project/packages/LaravelCms

# Develop on the admin site...

> Project/packages/LaravelCms/resources/admin

# Build

> Project/packages/LaravelCms/.deploy

# License

This package is open-sourced software licensed under the MIT license.
