#!/bin/bash
tar -zcvf ../server.tar.gz --exclude ./node_modules .
scp -r ../server.tar.gz root@47.104.194.20:~/bishe
ssh root@47.104.194.20 "cd ~/bishe; tar -zxvf server.tar.gz; npm run start"