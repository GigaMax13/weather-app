#!/bin/bash
# https://medium.com/xcblog/simctl-control-ios-simulators-from-command-line-78b9006a20dc
# xcrun simctl list | egrep '(Booted)'
clear


## iOS 12.4
# iPhone 5s
#declare -a simulators=("259916E8-D044-4947-AF9D-AD84DC030918")

## iOS 14.3
# iPhone 8
declare -a simulators=("8F6CDA73-A6C2-4762-89D9-F85E5B678CD1")

for i in "${simulators[@]}"
do
#    xcrun simctl shutdown "$i"
#    xcrun simctl erase "$i"

    xcrun simctl boot "$i"

#    xcrun simctl install "$i" ~/.expo/ios-simulator-app-cache/Exponent-2.18.2.tar.app

    xcrun simctl openurl "$i" exp://127.0.0.1:19000

    open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app/
done
