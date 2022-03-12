#!/bin/bash

sudo npm install pm2 -g
pm2 start service.js
pm2 startup systemd
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp /home/$USER
pm2 save
sudo systemctl start pm2-$USER
systemctl status pm2-$USER