#!/usr/bin/env bash

sudo apt-get update
sudo apt-get upgrade

sudo apt-get install php5 php5-mysql mysql-server curl git nginx

curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
