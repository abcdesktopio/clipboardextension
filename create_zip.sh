#! /bin/bash
version=$(grep '"version"' src/manifest.json | grep -o "[0-9].[0-9].[0-9]")
cd src
zip -r -FS ../abcdesktop-${version}.zip * --exclude *.git*
