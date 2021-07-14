#!/usr/bin/env bash

cd /node/api
npm install
pm2 start -f server.js
