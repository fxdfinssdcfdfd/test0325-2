#!/bin/sh
UUID=${UUID:-'74188b41-3147-4776-a439-c6de64fc0d5d'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
