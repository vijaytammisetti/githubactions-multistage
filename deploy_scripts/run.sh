#!/usr/bin/env bash

cd /home/ec2-user/node/api
npm install
pm2 start -f server.js
