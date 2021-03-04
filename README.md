# clipboardextension
clipboard plugins extension for Firefox  
This extension is compatible with Firefox and Chrome navigators (other navigators have not been tested).  

This plugin actually only works on \*desktop\* site. The FQDN must contains the 'desktop' string.
Plugin can only access navigator clipboard on secured page (with no broken padlock).


## Firefox Installation 

### User mode
To install plugin :
- go to Add-Ons Menu
- choose Manage Your Extensions
- choose Install Add-on From File
- choose abcdesktop-clipboard-helper XPI file 
- confirm the Add abcdesktop Clipboard Helper dialog box
- then, press the OKay, Got it dialog box to confirm that abcdesktop Clipboard Helper has bee added to Firefox.


### Developper mode
To install plugin as developper :  
- type about:debugging  
- click "This Firefox"  
- click "Load Temporay Add-on..."  
- select manifest.json file in plugin source code directory  
- Reload your web site page


## Create the zip file 

```
  ./create_zip.sh 
  adding: Injected.js (deflated 42%)
  adding: contentscript.js (deflated 57%)
  adding: icons/ (stored 0%)
  adding: icons/abcdesktop.svg (deflated 53%)
  adding: manifest.json (deflated 52%)
  adding: popup/ (stored 0%)
  adding: popup/popup.css (deflated 35%)
  adding: popup/popup.html (deflated 39%)
```

The zip file path is `/tmp/abcdesktop-1.0.0.zip` 
