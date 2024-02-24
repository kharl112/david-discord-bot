#!/bin/bash
#
#
set -x 

systemctl disable $PWD/david-bot.service
systemctl enable $PWD/david-bot.service
systemctl start david-bot.service
