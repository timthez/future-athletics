#!/bin/sh
cd ./_react
yarn install
yarn build
cp ./build/. ../public
echo React build sucessful.