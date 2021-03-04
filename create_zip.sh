#! /bin/bash
currpath=$(pwd)
version=$(grep '"version"' src/manifest.json | grep -o "[0-9].[0-9].[0-9]")
cd src
zip -r -FS /tmp/abcdesktop-${version}.zip * --exclude *.git*
cd $currpath
