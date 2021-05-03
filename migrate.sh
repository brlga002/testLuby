#!/bin/bash

php composer.phar install
php artisan migrate
php artisan db:seed
