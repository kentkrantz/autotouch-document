# AutoTouch Document

`Applicable to version 5.1.5 or higher`

> - AutoTouch is a "Macro" tool used to record and playback human touching and pressing on the mobile device.
> - It simulates touching and keys pressing.
> - It runs Lua scripts.
> - It provides several extended functions to achieve automation.
> - It needs Jailbreak environment.
> - It provides a Script Store to sell and buy scripts.

### [中文文档](/zh-Hans/doc)

### [QA](/QA)

Table of Contents
=================

   * [Usage](#usage)
      * [How to install?](#how-to-install)
      * [How to use Activator?](#how-to-use-activator)
      * [How to record?](#how-to-record)
      * [How to play script?](#how-to-play-script)
      * [How to take screenshot?](#how-to-take-screenshot)
      * [How to write a script?](#how-to-write-a-script)
      * [How to use the "Function Helper" while script coding?](#how-to-use-the-function-helper-while-script-coding)
      * [How to write and manage scripts on the computer?](#how-to-write-and-manage-scripts-on-the-computer)
      * [How to use Package to orgainize the script project?](#how-to-use-package-to-orgainize-the-script-project)
      * [How to encrypt the scripts?](#how-to-encrypt-the-scripts)
      * [How to sell your script in Script Store?](#how-to-sell-your-script-in-script-store)
      * [How to download and buy scripts from Script Store?](#how-to-download-and-buy-scripts-from-script-store)
      * [How to buy AutoTouch license?](#how-to-buy-autotouch-license)
   * [Script](#script)
      * [Basis](#basis)
      * [Develop Tool](#develop-tool)
      * [Coordinate, Size and Orientation System](#coordinate-size-and-orientation-system)
      * [Extension Libraries](#extension-libraries)
         * [LuaCURL](#luacurl)
         * [LuaSocket](#luasocket)
         * [LuaSec](#luasec)
         * [LuaSqlite3](#luasqlite3)
         * [json.lua](#jsonlua)
         * [Plist](#plist)
         * [Penlight](#penlight)
         * [LuaFileSystem](#luafilesystem)
         * [WebSocket](#websocket)
      * [Extension Functions](#extension-functions)
         * [touchDown(id, x, y)](#touchdownid-x-y)
         * [touchMove(id, x, y)](#touchmoveid-x-y)
         * [touchUp(id, x, y)](#touchupid-x-y)
         * [keyDown(keyType)](#keydownkeytype)
         * [keyUp(keyType)](#keyupkeytype)
         * [getColor(x, y)](#getcolorx-y)
         * [getColors(locations)](#getcolorslocations)
         * [findColor(color, count, region, debug, rightToLeft, bottomToTop)](#findcolorcolor-count-region-debug-righttoleft-bottomtotop)
         * [findColors(colors, count, region, debug, rightToLeft, bottomToTop)](#findcolorscolors-count-region-debug-righttoleft-bottomtotop)
         * [findImage(targetImagePath, count, threshold, region, debug, method)](#findimagetargetimagepath-count-threshold-region-debug-method)
         * [screenshot(filePath, region)](#screenshotfilepath-region)
         * [appRun(appIdentifier)](#apprunappidentifier)
         * [appKill(appIdentifier)](#appkillappidentifier)
         * [appState(appIdentifier)](#appstateappidentifier)
         * [rootDir()](#rootdir)
         * [currentPath()](#currentpath)
         * [usleep(microseconds)](#usleepmicroseconds)
         * [log(content)](#logcontent)
         * [alert(message)](#alertmessage)
         * [toast(message, delay)](#toastmessage-delay)
         * [vibrate()](#vibrate)
         * [playAudio(audioFile, times)](#playaudioaudiofile-times)
         * [stopAudio()](#stopaudio)
         * [getOrientation()](#getorientation)
         * [getScreenResolution()](#getscreenresolution)
         * [getSN()](#getsn)
         * [getVersion()](#getversion)
         * [frontMostAppId()](#frontmostappid)
         * [frontMostAppOrientation()](#frontmostapporientation)
         * [intToRgb(intColor)](#inttorgbintcolor)
         * [rgbToInt(r, g, b)](#rgbtointr-g-b)
         * [copyText(text)](#copytexttext)
         * [clipText()](#cliptext)
         * [inputText(text)](#inputtexttext)
         * [dialog(controls, orientations)](#dialogcontrols-orientations)
         * [clearDialogValues(script)](#cleardialogvaluesscript)
         * [openURL(urlString)](#openurlurlstring)
         * [isLicensed()](#islicensed)
         * [setAutoLaunch(scriptPath, on)](#setautolaunchscriptpath-on)
         * [listAutoLaunch()](#listautolaunch)
         * [stop()](#stop)
         * [ocr(region, languages, threshold, whitelist, blacklist, timeout, tessdataParentDir, debug)](#ocrregion-languages-threshold-whitelist-blacklist-timeout-tessdataparentdir-debug)
      * [HTTP APIs](#http-apis)
         * [Play a script](#play-a-script)
         * [Stop playing a script](#stop-playing-a-script)
         * [List files in a directory](#list-files-in-a-directory)
         * [Create a new directory](#create-a-new-directory)
         * [Create a new file](#create-a-new-file)
         * [Delete a file](#delete-a-file)
         * [Rename a file or directory](#rename-a-file-or-directory)
      * [Constants](#constants)
         * [Types of physical keys](#types-of-physical-keys)
         * [Types of dialog controls](#types-of-dialog-controls)
         * [Types of screen orientations](#types-of-screen-orientations)

# Usage

## How to install?
> - You can search and install AutoTouch in Cydia diredctly, it is released in BigBoss.
> - You can also add the official repo: [https://apt.autotouch.net](https://apt.autotouch.net) to Cydia and install AutoTouch there.
> - There is also a beta repo: [https://beta.autotouch.net](https://beta.autotouch.net) which contains more fresh but not so stable packages.

[Return](#table-of-contents)

## How to use Activator?
> - By default AutoTouch uses volume decrease button holding or pressing to control everything, untill you install Activator by hand.
> - Add official repo: http://rpetri.ch/repo/ to Cydia.
> - Install Activator form that repo.
> - AutoTouch will automatically detect Activator and use it as the default control method.
> - Customize the actions you want to use to control AutoTouch by Activator.

[Return](#table-of-contents)

## How to record?
> - At the interface where you want to start recording , hold volume decrease button (or other main control action set with Activator by youself, this point will not be repeated below) to call out the control panel.
> ![Control Panel](https://i.imgur.com/ELcGi3A.png)
> - Press the "Record" button on the control panel to start recording.
> - It will record all your touching and key pressing to a script until you stop it.
> - Hold on volume decrease button (or other Activator action) again to stop the recording.
> - Then, there will be a Lua script named with create time in the script list. You can edit, rename or playback it.

[Return](#table-of-contents)

## How to play script?
> - Hold on volume decrease button to call out the control panel.
> - Click the script you want to run.
> - There is a play options button on the control panel, it will ask for options if you turn on it.
> - There is a H button means hold mode, it will enter hold mode if you turn on it. In hold mode, every time your tap the volume down button(or action you set in Activator) it will start playing.
> - Hold volume decrease button to forcedly stop the playing, or quit the `Hold mode` status.
> - Long pressing volume down button will stop the playing forcely.

[Return](#table-of-contents)

## How to take screenshot?
> - Press "Snap" button on the control panel to take screenshot, or just use iOS's screenshot method with which you are able to edit it directly.
> - The screenshot will be saved as PNG image into "AutoTouch" album of iOS Photo Library, then it might be used to speficy parameters of getColors, findColors or findImage.

[Return](#table-of-contents)

## How to write a script?
> - Press "+" button on top right of the local script list, choose “Create a script” to open the script editor.
> - Write the code there.
> - Press "save" button to save the script.

[Return](#table-of-contents)

## How to use the "Function Helper" while script coding?
> - There are "Extensions", "Indent" and "Statements" buttons on top of the keyboard in the script editor. You can conveniently insert extended functions, indent or common statement of Lua Language.
> - Press the "Extension" button to present the extended functions list, click a function to insert into the script diretly.
> - Press the "HELPER" button on the function list, it will help you to determine the coordinates, colors or key flags for the functions.
> 
>   ![Function Helper](https://i.imgur.com/ng2QWrz.png)

[Return](#table-of-contents)

## How to write and manage scripts on the computer?
> - Turn on  Web Server at AutoTouch setting and visit the told URL from browser on computer. Manage scripts there.
> - You can also turn on WebDAV Server and connect the told address with  WebDAV client on computer. 

[Return](#table-of-contents)

## How to use Package to orgainize the script project?
> - You can create a Package as script project to contain different scripts, files and images etc. Package must have a main.lua file as the entrance of the execution. A Package in fact is a directory named with .at extension such as xxx.at.
> - Package can be encrypted to xxx.ate which is also execuate-able and can be released to Script Store.

[Return](#table-of-contents)

## How to encrypt the scripts?
> - Tap accessory button of a package or script in the local script list, choose "Encrypt".
> - Input the encryption password. Or leave it blank if you don't want one.
> - Press "Confirm" to complete the encryption. A encrypted file with the same name but ended with .lua.e or .ate will be generated in the script list then.
> - You can play the encrypted scripts, or release them to Script Store.

[Return](#table-of-contents)

## How to sell your script in Script Store?
> - Visit https://m.autotouch.net from browser on computer.
> - Complete the details required to create a new script. 
> - Do provide a detailed and beautify html page for that script as the details page, a YouTube video will be much better.
> - Upload a encrypted script or package as a new version to this script.
> - Wait for the approvement.
> - You should setup the Digital Rights Management in the script by yourself, AutoTouch Script Store can not help you by now.

[Return](#table-of-contents)

## How to download and buy scripts from Script Store?
> - You can directly download all scripts from the store.
> - You need to contact the author to buy the decription password. Do be careful not to be cheated, AutoTouch can do nothing to protect your money provenly.

[Return](#table-of-contents)

## How to buy AutoTouch license?
> - Tap License on AutoTouch settings to enter the license management view.
> - Read the Instructions and do be aware that AutoTouch license has ONE YEAR validity period!
> -  It will automatically activate current device after the payment if you use PayPal (If failed just follow the next step).
> - You can query bought licenses with your PayPal ID email, or any activated device SN.
> - You can activate another device with a license after you query it out.
> - You can also "Activate Current Device" diretly with a license key bought from other devices.
> - You should make sure it shows "License Downloaded" at top-right of the License view after it's activated.
> - It allows only one time activation a day, you may do it again after 24 hours if you need.
![License View](https://i.imgur.com/CB0Fnfm.jpg)

[Return](#table-of-contents)

# Script

## Basis
You can learn how to use Lua language from here:《[Lua Official Reference Manual](http://www.lua.org/manual/5.3/)》

[Return](#table-of-contents)

## Develop Tool
[LuaStudio](http://luastudio.net/) is aprofessional development environment for debugging Lua script in your applications. It's familiar and fast and you'll wonder how you ever worked without it.

[Return](#table-of-contents)

## Coordinate, Size and Orientation System
AutoTouch uses pixel based Native Resolution as the coordinate and size system. Resolutions of different iOS devices are [here](https://developer.apple.com/library/archive/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/Displays/Displays.html), for example, screen size of iPhone X is 1125 x 2436.

Origin point (0, 0) is alwasy at left-top of the **Application Interface**, regardless of the device orientation. Consider only the App interface while using these functions: touchDown,touchMove,touchUp,getColors,findColors,findImage.

![For example](https://i.imgur.com/imDVXXB.png)

[Return](#table-of-contents)

## Extension Libraries
> AutoTouch has some extension libraries built in, while you can also add extension libraries by yourself, just put `.so` files at `/usr/local/lib/lua/5.3` and `.lua` files at `/var/mobile/Library/AutoTouch/Library/LuaLibraries`.

> **ATTENSION:** **DO NOT** use script filename same as the libraries' name, such as `lcurl`, `lfs`, `lsqlite3`.

[Return](#table-of-contents)

### LuaCURL
> curl is used in command lines or scripts to transfer data. It is also used in cars, television sets, routers, printers, audio equipment, mobile phones, tablets, settop boxes, media players and is the internet transfer backbone for thousands of software applications affecting billions of humans daily.

> It supports DICT, FILE, FTP, FTPS, Gopher, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, POP3, POP3S, RTMP, RTSP, SCP, SFTP, SMB, SMBS, SMTP, SMTPS, Telnet and TFTP. curl supports SSL certificates, HTTP POST, HTTP PUT, FTP uploading, HTTP form based upload, proxies, HTTP/2, cookies, user+password authentication (Basic, Plain, Digest, CRAM-MD5, NTLM, Negotiate and Kerberos), file transfer resume, proxy tunneling and more.

> [Learn More](https://github.com/Lua-cURL/Lua-cURLv3)

`Examples:`

```lua
-- HTTP Get
local curl = require('lcurl')
curl.easy{
    url = 'http://httpbin.org/get',
    httpheader = {
      "X-Test-Header1: Header-Data1",
      "X-Test-Header2: Header-Data2",
    },
    writefunction = alert -- use io.stderr:write()
  }
  :perform()
:close()

-- HTTP Post
curl.easy()
  :setopt_url('http://posttestserver.com/post.php')
  :setopt_writefunction(io.write)
  :setopt_httppost(curl.form() -- Lua-cURL guarantee that form will be alive
    :add_content("test_content", "some data", {
      "MyHeader: SomeValue"
    })
    :add_buffer("test_file", "filename", "text data", "text/plain", {
      "Description: my file description"
    })
    :add_file("test_file2", "BuildLog.htm", "application/octet-stream", {
      "Description: my file description"
    })
  )
  :perform()
:close()
```

[Return](#table-of-contents)

### LuaSocket
> LuaSocket is a Lua extension library which supported [TCP](http://w3.impa.br/~diego/software/luasocket/introduction.html#tcp), [UDP](http://w3.impa.br/~diego/software/luasocket/introduction.html#udp), [SMTP](http://w3.impa.br/~diego/software/luasocket/smtp.html), [HTTP](http://w3.impa.br/~diego/software/luasocket/http.html), [FTP](http://w3.impa.br/~diego/software/luasocket/ftp.html) protocols. Learn how to use it from the [Learn More](http://w3.impa.br/~diego/software/luasocket/introduction.html).

[Return](#table-of-contents)

### LuaSec
> LuaSec is a binding for OpenSSL library to provide TLS/SSL communication. It takes an already established TCP connection and creates a secure session between the peers.[Learn More](https://github.com/brunoos/luasec/wiki)

[Return](#table-of-contents)

### LuaSqlite3
> LuaSQLite 3 is a thin wrapper around the public domain SQLite3 database engine. [Learn More](http://lua.sqlite.org/index.cgi/doc/tip/doc/lsqlite3.wiki)

[Return](#table-of-contents)

### json.lua
> json.lua provides operation methods on json.
[GitHub](https://github.com/rxi/json.lua) 
[LICENSE](https://github.com/rxi/json.lua/blob/master/LICENSE)

`Usage`
```lua
local json = require "json"
local jsonString =json.encode({ 1, 2, 3, { x = 10 } }) -- Returns '[1,2,3,{"x":10}]'
local luaTable = json.decode('[1,2,3,{"x":10}]') -- Returns { 1, 2, 3, { x = 10 } }
```

[Return](#table-of-contents)

### Plist
> Plist library provides a batch of methods to operate on plist files.

`Usage`
```lua
local plist = require("plist")

-- Read a plist file, return it as a lua table, return nil if failed.
local luaTable = plist.read(plistFilePath);

-- Write a lua table as a plist into a file, the foramt parameter specifis "xml", "binary" you want to write with.
local done = plist.write(luaTable, plistFilePath, format);

-- Load a plist string to lua table.
local luaTable = plist.load(plistString);

-- Dump a lua table to plist data with format "xml" or "binary"
local plistData = plist.dump(luaTable, format);
```

[Return](#table-of-contents)

### Penlight
> A set of pure Lua libraries focusing on input data handling (such as reading configuration files), functional programming (such as map, reduce, placeholder expressions,etc), and OS path management. 
[GitHub](https://github.com/stevedonovan/Penlight)
[Document](http://stevedonovan.github.io/Penlight/api/index.html)
[LICENSE](https://github.com/stevedonovan/Penlight/blob/master/LICENSE.md)

It has plenty of modules:

Paths, Files and Directories

  * `path`: queries like `isdir`,`isfile`,`exists`, splitting paths like `dirname` and `basename`
  * `dir`: listing files in directories (`getfiles`,`getallfiles`) and creating/removing directory paths
  * `file`: `copy`,`move`; read/write contents with `read` and `write`

Application Support

  * `app`: `require_here` to rebase `require` to work with main script path; simple argument parsing `parse_args`
  * `lapp`: sophisticated usage-text-driven argument parsing for applications
  * `config`: flexibly read Unix config files and Windows INI files
  * `strict`: check for undefined global variables - can use `strict.module` for modules
  * `utils`,`compat`: Penlight support for unified Lua 5.1/5.2 codebases
  * `types`: predicates like `is_callable` and `is_integer`; extended `type` function.

Extra String Operations

  * `utils`: can split a string with a delimiter using `utils.split`
  * `stringx`: extended string functions covering the Python `string` type
  * `stringio`:  open strings for reading, and creating strings using standard Lua IO methods
  * `lexer`:  lexical scanner for splitting text into tokens; special cases for Lua and C
  * `text`:  indenting and dedenting text, wrapping paragraphs; optionally make `%` work as in Python
  * `template`:  small but powerful template expansion engine
  * `sip`:  Simple Input Patterns - higher-level string patterns for parsing text

Extra Table Operations

  * `tablex`: copying, comparing and mapping over
  * `pretty`: pretty-printing Lua tables, and various safe ways to load Lua as data
  * `List`: implementation of Python 'list' type - slices, concatenation and partitioning
  * `Map`, `Set`, `OrderedMap`: classes for specialized kinds of tables
  * `data`: reading tabular data into 2D arrays and efficient queries
  * `array2d`: operations on 2D arrays
  * `permute`: generate permutations

Iterators, OOP and Functional

   * `seq`:  working with iterator pipelines; collecting iterators as tables
   * `class`: a simple reusable class framework
   * `func`: symbolic manipulation of expressions and lambda expressions
   * `utils`: `utils.string_lambda` converts short strings like `|x| x^2` into functions
   * `comprehension`: list comprehensions: `C'x for x=1,4'()=={1,2,3,4}`

[Return](#table-of-contents)

### LuaFileSystem
> LuaFileSystem is a Lua library developed to complement the set of functions related to file systems offered by the standard Lua distribution.

> LuaFileSystem offers a portable way to access the underlying directory structure and file attributes.[Learn More](https://keplerproject.github.io/luafilesystem/index.html)

[Return](#table-of-contents)

### WebSocket
> This module provides Lua modules for [Websocket Version 13](http://tools.ietf.org/html/rfc6455) conformant clients and servers.

[GitHub](https://github.com/lipp/lua-websockets)
[LICENSE](https://github.com/lipp/lua-websockets/blob/master/COPYRIGHT)
[Examples](https://github.com/lipp/lua-websockets/tree/master/examples)

`Usage`
```lua
-- Client
-- connects to a echo websocket server running a localhost:8080
-- sends a strong every second and prints the echoed messages
-- to stdout

local ev = require'ev'
local ws_client = require('websocket.client').ev()

ws_client:on_open(function()
    print('connected')
  end)

ws_client:connect('ws://echo.websocket.org','echo')

ws_client:on_message(function(ws, msg)
    print('received',msg)
  end)

local i = 0

ev.Timer.new(function()
    i = i + 1
    ws_client:send('hello '..i)
end,1,1):start(ev.Loop.default)

ev.Loop.default:loop()
```

[Return](#table-of-contents)

## Extension Functions

Extension functions are used to extend Lua language. Thus, the device can simulate some human abilities of operating the mobile phone. Moreover, extension functions also support functions including: screenshot, color searching, color matching, and picture matching.

[Return](#table-of-contents)

### touchDown(id, x, y)
> Press the coordinate (x,y) on the screen.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| id    | Integer   |   Finger ID. is used to mark a finger in single-touch or multi-touch. |
| x     |   Float   |   x-coordinate on the screen   |
| y     |    Float    |  y-coordinate on the screen  |

`Return`

None

`Examples`
```lua
-- Press by one finger at coordinate (100,200).
touchDown(0, 100, 200); 

-- Press by three fingers at three locations on the screen.
touchDown(0, 100, 200);
touchDown(1, 200, 300);
touchDown(2, 300, 400);

-- Implement a tap function
function tap(x, y)
    touchDown(0, x, y);
    usleep(16000);
    touchUp(0, x, y);
end

-- Tap at (100, 200)
tap(100, 200);

```

[Return](#table-of-contents)

### touchMove(id, x, y)
> Move the finger to coordinate (x,y).

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| id    | Integer   |   Finger ID. is used to mark a finger in single-touch or multi-touch. |
| x     |   Float   |   x-coordinate on the screen   |
| y     |    Float    |  y-coordinate on the screen  |

`Return`

None

`Examples`
```lua
-- Press by one finger at coordinate (100,200) and move the finger to coordinate (200,200).
touchDown(0, 100, 200);
usleep(16000);
touchMove(0, 200, 200);

-- Press by three fingers at three locations on the screen and move to new location.
touchDown(0, 100, 200);
touchDown(1, 200, 300);
touchDown(2, 300, 400);
usleep(16000);
touchMove(0, 150, 250);
touchMove(1, 250, 350);
touchMove(2, 350, 450);

```

[Return](#table-of-contents)

### touchUp(id, x, y)
> Lift the finger from coordinate (x,y)

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| id    | Integer   |   Finger ID. is used to mark a finger in single-touch or multi-touch. |
| x     |   Float   |   x-coordinate on the screen   |
| y     |    Float    |  y-coordinate on the screen  |

`Return`

None

`Examples`
```lua
-- Click the screen once by one finger at coordinate (100,200).
touchDown(0, 100, 200);
usleep(16000);
touchUp(0, 100, 200);

-- Press by three fingers at three locations on the screen, move to new location, and then lift the finger.
touchDown(0, 100, 200);
touchDown(1, 200, 300);
touchDown(2, 300, 400);
usleep(16000);
touchMove(0, 150, 250);
touchMove(1, 250, 350);
touchMove(2, 350, 450);
usleep(16000);
touchUp(0, 150, 250);
touchUp(1, 250, 350);
touchUp(2, 350, 450);
```

[Return](#table-of-contents)

### keyDown(keyType)
> Simulate the pressing of physical key.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| keyType     |   Integer   |   Physical key identification. Now you can use [these physical keys](#types-of-physical-keys).   |

`Return`

None

`Examples`
```lua
-- Simulate the pressing of Home Key.
keyDown(KEY_TYPE.HOME_BUTTON);

-- How to simulate a key pressing?
function keyPress(keyType)
    keyDown(keyType);
    usleep(10000);
    keyUp(keyType);
end
keyPress(KEY_TYPE.HOME_BUTTON);

-- How to simulate a screen lock function?
function lockScreen()
    keyDown(KEY_TYPE.POWER_BUTTON);
    keyUp(KEY_TYPE.POWER_BUTTON);
end

-- How to simulate a screen unlock function?
function unlockScreen()
    keyDown(KEY_TYPE.POWER_BUTTON);
    keyUp(KEY_TYPE.POWER_BUTTON);

    usleep(1000000);

    local w, h = getScreenResolution();

    local x = 10;
    local gap = 120;
    touchDown(0, x, 200);
    while x < w do
        x = x + gap;
        usleep(16000);
        touchMove(0, x, 200);
    end
    touchUp(0, x, 200);
end
```

[Return](#table-of-contents)

### keyUp(keyType)
> Simulate the lifting of physical key.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| keyType     |   Integer   |   Physical key identification. Now you can use [these physical keys](#types-of-physical-keys).   |

`Return`

None

`Examples`
```lua
-- Simulate the action of pressing and lifting Home Key.
keyDown(KEY_TYPE.HOME_BUTTON);
usleep(10000);
keyUp(KEY_TYPE.HOME_BUTTON);
```

[Return](#table-of-contents)

### getColor(x, y)
> Get the color value of the pixel point of the specified coordinate on current screen.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| x     |   Float   |   x-coordinate on the screen   |
| y     |    Float    |  y-coordinate on the screen  |

`Return`

| Return     | Type   |  Specification  |
| -------- | :-----:| ----  |
| color     |   Integer   |   Integer color value of the pixel point   |

`Examples`
```lua
local color = getColor(100, 200)
alert(string.format("Pixel color is :%d", color))
-- Pop up color: 16777215

-- Keep gettting color of a location until it matches a specify color
local color
repeat
   color = getColor(100, 200)
   usleep(50000) -- Wait a while
until( color == 123456 )
-- Continue to do what's next

```

[Return](#table-of-contents)

### getColors(locations)
> Get the color values of the pixel points of the specified coordinates on current screen.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| locations     |   table   |   A grouo of coordinates, just as { {x1,y1}, {x2,y2}, {x3,y4} }   |

`Return`

| Return     | Type   |  Specification  |
| -------- | :-----:| ----  |
| colors     |   table   |   Colors gotten with corresponding order.  |

`Examples`
```lua
local result = getColors({ {100, 200}, {200, 300}, {300, 400} });
for i, v in pairs(result) do
    log(string.format("Gotten color:%d", v));
end
```

[Return](#table-of-contents)

### findColor(color, count, region, debug, rightToLeft, bottomToTop)
> Search the coordinates of the pixel points matching the specified color on current screen.

`Parameters`

| Parameter     | Type   |  Specification  | Optional | Default |
| -------- | :-----:| ----  | :----:  | :----:  |
| color     |   Integer   |   Matched color value.   | NO | |
| count     |   Integer    | The number refers to how many matched pixel points is found at most. 0 is default setting, which shows all matching points are found. 1 refers to only the first matching pixel point is found. 2 refers to only the first two pixel points are found. The less the number is, the faster the speed is.  | NO | 0 |
| region     |   table    | You only search the result in the specified area. This area is the table type including four values {x, y, width, height}. The four values respectively represent the coordinate x, coordinate y, width, and height of the rectangular area. {100,100,200,200} is an example. If you do not want to specify the area, just input nil.  | NO | nil |
| debug    |  boolean  | If pass debug=true, it will produce a image ends with "-Debug.PNG" marked the matching areas. | YES | false |
| rightToLeft    |  boolean  | Search direction, default is left to right. | YES | false |
| bottomToTop    |  boolean  | Search direction, default is top to buttom. | YES | false |

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| locations     |   table   |  Coordinates of matched pixel points. For example: { {x1, y1}, {x2, y2}, ... }  |

`Example`
```lua
-- Example:
local result = findColor(0x0000ff, 2, nil);
for i, v in pairs(result) do
    log(string.format("Found pixel: x:%f, y:%f", v[1], v[2]));
end

-- Example: Search from right to left, from bottom to top
local result = findColor(0x0000ff, 2, nil, nil, true, true);
for i, v in pairs(result) do
    log(string.format("Found rect at: x:%f, y:%f", v[1], v[2]));
end

-- Example:
local result = findColor(0x00ddff, 0, {100, 50, 200, 200});
for i, v in pairs(result) do
    log(string.format("Found pixel: x:%f, y:%f", v[1], v[2]));
end

-- Example:
local region = {100, 50, 200, 200};
local result = findColor(0x00ddff, 0, region);
for i, v in pairs(result) do
    log(string.format("Found pixel: x:%f, y:%f", v[1], v[2]));
end

-- Example:
-- Keep finding a speficied color until it's found.
local locations
repeat
   local locations = findColor(0x0000ff, 2, nil);
   usleep(50000) -- Wait a while
until(#locations > 0)
-- Log the locations if found
for i, v in pairs(locations) do
    log(string.format("Found pixel: x:%f, y:%f", v[1], v[2]));
end
```

`Internal Implementation`
```lua
function findColor(color, count, region, debug, rightToLeft, bottomToTop)
    return findColors({{color,0,0}}, count, region, debug, rightToLeft, bottomToTop);
end
```

[Return](#table-of-contents)

### findColors(colors, count, region, debug, rightToLeft, bottomToTop)
> Search all rectangular areas matching “specified color and their corresponding location and return the coordinate of the pixel point matching the first color in the rectangular area. This function has the search efficiency and availability far beyond findImage. For example, you need not match the whole key picture, but only match the anchors’ color and their corresponding location on the key. You can specify the number of the results by count parameter. 0 refers to all, 1 refers to the first one, and 2 refers to the first tow. region parameter can specify the search area, which is the table type {x,y,width, height}. You only input nil if no data is specified. 

> This function can use the "HELPER" tool in the “Extension Function” of the script-editing interface to select the anchors’ colors from the screenshot and get their corresponding location to the function’s parameter automatically.

> The coordinate of the pixel point pointed by the arrow is the coordinate of the return value.

![IMG_0361.PNG-101.9kB](https://i.imgur.com/ODEtwAz.png)

`Parameters`

| Parameter     | Type   |  Specification  | Optional | Default |
| -------- | :-----:| ----  | :----:  | :----:  |
| colors     |   table   |  Include some color and their corresponding location, such as:{ {0x00ddff,0,0}, {0x00eeff,10,10}, {0x0000ff,0,20} }. The small table in the big table includes 3 values: the first is the color value. The second and the third are the corresponding locations of the colors to the first color. The corresponding location of the first color’s table is always (0,0). {0x00ddff,0,0} is an example. The location values of the successive colors are their locations corresponding to the first color. The matched rectangular area can be found on the screen upon these colors and corresponding location relation.  | NO | |
| count     |   Integer    | The number refers to how many matched pixel points is found at most. 0 is default setting, which shows all matching points are found. 1 refers to only the first matching pixel point is found. 2 refers to only the first two pixel points are found. The less the number is, the faster the speed is. | NO | 0 |
| region     |   table    | You only search the result in the specified area. This area is the table type including four values {x, y, width, height}. The four values respectively represent the coordinate x, coordinate y, width, and height of the rectangular area. {100,100,200,200} is an example. If you do not want to specify the area, just input nil.  | NO | nil |
| debug    |  boolean  | If pass debug=true, it will produce a image ends with "-Debug.PNG" marked the matching areas. | YES | false |
| rightToLeft    |  boolean  | Search direction, default is left to right. | YES | false |
| bottomToTop    |  boolean  | Search direction, default is top to buttom. | YES | false |

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| locations     |   table   |  The coordinate of the first color matched in the found rectangular area, including { {x1, y1}, {x2, y2}, ...}  |

`Examples`
```lua
-- Example:
local result = findColors({ {0x00ddff,0,0}, {0x00eeff,10,10}, {0x0000ff,0,20} }, 2, nil, true);
for i, v in pairs(result) do
    log(string.format("Found rect at: x:%f, y:%f", v[1], v[2]));
end

-- Example: Search from right to left, from bottom to top
local result = findColors({ {0x00ddff,0,0}, {0x00eeff,10,10}, {0x0000ff,0,20} }, 2, nil, true, true);
for i, v in pairs(result) do
    log(string.format("Found rect at: x:%f, y:%f", v[1], v[2]));
end

-- Example:
local colors = { {0x00ddff,0,0}, {0x00eeff,10,10}, {0x0000ff,0,20} };
local result = findColors(colors, 0, nil, true);
for i, v in pairs(result) do
    log(string.format("Found rect at: x:%f, y:%f", v[1], v[2]));
end

-- Example:
local colors = { {0x00ddff,0,0}, {0x00eeff,10,10}, {0x0000ff,0,20} };
local region = {100, 50, 200, 200};
local result = findColors(colors, 0, region);
for i, v in pairs(result) do
    log(string.format("Found rect at: x:%f, y:%f", v[1], v[2]));
end
```

[Return](#table-of-contents)

### findImage(targetImagePath, count, threshold, region, debug, method)
> Search areas matching the specified image on current screen and return the center coordinates. It supports any format of target images. It also provides a debug mode which will produce an image marked the matching areas.

![Imgur](https://i.imgur.com/9eyFOu7.png)

`Parameters`

| Parameter     | Type   |  Specification  | Optional | Default |
| -------- | :-----:| ----  | :----:  | :----:  |
| targetImagePath     |   String   |  Path of the target image to match, for example: "images/gold.PNG". Any image with valid format are supported. If the path starts with character "/", it will be treated as absolute path, if not, it will be treated as relative path. Most of the time we use relative path, speficially for .ate package.    | NO | |
| count     |  integer    | How many areas to find. Pass 0 or nil if you don't want to speficy the count. | YES | 0 |
| threshold |  float    | Searching precision, maximum value is 1 means totally the same, minimum value is -1 means non same, default is 0.9, usually 0.99 is good. Pass nil if you just want to use the default value. | YES | 0.9 |
| region    |  table    | Do searching in which region. Pass nil if you just want to use the default value. | YES | Whole screen |
| debug    |  boolean  | If pass debug=true, it will produce a image ends with "-Debug.PNG" marked the matching areas. | YES | false |
| method    |  integer  | Searching method, default is 1, pass 2 if you want to use the more intelligent method which is able to cover size scale, orientation, color changed, it will be a little slower than method 1. | YES | 1 |

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| center locations     |   table   |  Center coordinates of the matching areas.  |

`Examples`
```lua
-- Example:
local result = findImage("images/Gold.PNG", 5, 0.99, nil, true)
for i, v in pairs(result) do
    log(string.format("Found rect at: x:%f, y:%f", v[1], v[2]));
end

-- Example:
local result = findImage("images/Gold.PNG", nil, nil, nil, true)
for i, v in pairs(result) do
    log(string.format("Found rect at: x:%f, y:%f", v[1], v[2]));
end

-- Example:
local result = findImage("images/Gold.PNG", 3)
for i, v in pairs(result) do
    log(string.format("Found rect at: x:%f, y:%f", v[1], v[2]));
end

-- Example:
local imagePath = "images/spirit.PNG";
local region = {100, 100, 300, 300};
local result = findImage(imagePath, 2, 0.98, region, true)
for i, v in pairs(result) do
    local x = v[1], y = v[2];

    log(string.format("Found rect at: x:%f, y:%f", x, y));
    
    -- Click the found location once.
    tap(x, y);
    usleep(16000);
end

-- Example:
local imagePath = "images/spirit.PNG";
local region = {100, 100, 300, 300};
-- Use method 2 to find image
local result = findImage(imagePath, 2, 0.98, region, true, 2)
```

[Return](#table-of-contents)

### screenshot(filePath, region)
> Take a screenshot for the whole screen or specified area.

> It will save the screenshot image as an PNG into "AutoTouch" album of iOS Photo Library if the filePath parameter is nill, and will save the PNG to the speficied path if filePath is not nil.

> If region parameter is nil, it will take shot of the whole screen.

> By Clicking "+" button at top-right of AutoTouch view, then "Copy Image Here", you are able to copy an image from iOS Photo Library to AutoTouch scripts directory.

`Parameters`

| Parameter     | Type   |  Specification  | Optional | Default |
| -------- | :-----:| ----  | :-----: | :-----: |
| filePath     |   string   | Where to save the image. | YES | "AutoTouch" album of iOS Photo Library |
| region     |   table    | You make a screenshot of the specified area. This area is the table type including four values {x, y, width, height}. The four values respectively represent the coordinate x, coordinate y, width, and height of the rectangular area. {100,100,200,200} is an example. If you do not want to specify the area, just input nil. | YES | nil |

`Return`

None

`Examples`
```lua
-- Take shot of the whole screen and save into  "AutoTouch" album of iOS Photo Library.
screenshot();

-- Take a screenshot of the whole screen and save to the specified path, if no PNG as path extension, .PNG will automatically added.
screenshot ("images/screenshot1");

-- Take a screenshot of the specified area and save.
screenshot ("images/screenshot2.PNG", {100, 100, 200, 200});

-- Take a screenshot of the specified area and save into  "AutoTouch" album of iOS Photo Library.
screenshot (nil, {100, 100, 200, 200});
```

[Return](#table-of-contents)

### appRun(appIdentifier)
> Run specified application.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| appIdentifier     |   string   |  Application identifier, including "com.apple.mobilesafari". You can find the identifier from [this service](https://offcornerdev.com/bundleid.html) |

`Return`

None

`Example`
```lua
-- Run Safari
appRun("com.apple.mobilesafari");
```

[Return](#table-of-contents)

### appKill(appIdentifier)
> Kill specified application.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| appIdentifier     |   string   |  Application identifier, including "com.apple.mobilesafari". You can find the identifier from [this service](https://offcornerdev.com/bundleid.html) |

`Return`

None

`Example`
```lua
-- Kill the running Safari
appKill("com.apple.mobilesafari");
```

[Return](#table-of-contents)

### appState(appIdentifier)
> Get the running state of the specified application

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| appIdentifier     |   string   |  Application identifier, including "com.apple.mobilesafari". You can find the identifier from [this service](https://offcornerdev.com/bundleid.html) |

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| state     |   string   |  State of Character string type: "NOT RUNNING", "ACTIVATED", "DEACTIVATED"。 |

`Example`
```lua
-- Get the state of Safari.
local state = appState("com.apple.mobilesafari");
alert(string.format("State of Safari: %s", state));
-- Pop up the state of Safari: "ACTIVATED"
```

[Return](#table-of-contents)

### rootDir()
> Get the default directory address of the saved script. This is the default saving address of scripts and screenshots: "/var/mobile/Library/AutoTouch/Scripts/".

`Parameters`

None

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| dir     |   string   |  Default directory address of the saved script. |

`Examples`
```lua
local dirPath = rootDir();
alert(dirPath);
-- Popup "/var/mobile/Library/AutoTouch/Scripts/"
```

[Return](#table-of-contents)

### currentPath()
> Get full path of current executing script.

`Parameters`

None

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| path     |   string   |  Full path of current script. |

`Examples`
```lua
local path = currentPath();
alert(path);
-- Popup "/var/mobile/Library/AutoTouch/Scripts/test.lua"
```

[Return](#table-of-contents)

### usleep(microseconds)
> Sleep several microseconds (1/1000000 second)

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| microseconds     |   Integer   |  The number of paused microseconds. |

`Return`

None

`Examples`
```lua
-- Sleep 1 second.
usleep(1000000);
```

[Return](#table-of-contents)

### log(content)
> Record log, can be seen in the log interface.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| content     |   string   |  The log content to be recorded. |

`Return`

None

`Examples`
```lua
log("play here...");
```

[Return](#table-of-contents)

### alert(message)
> Pop up the dialog box to show specified content.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| message     |   string   |  Content to be showed. |

`Return`

None

`Examples`
```lua
alert("Hello World!");
```

[Return](#table-of-contents)

### toast(message, delay)
> Show messages with Toast style and delay for some seconds.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| message     |   string   |  Content to be showed. |
| delay     |   integer   |  How long time to keep showing, default is 2 seconds. |

`Return`

None

`Examples`
```lua
toast("Hello I'm a toast!", 5); -- Show message for 5 seconds.
toast("Hello again!"); -- Show message for 2 seconds.
```

[Return](#table-of-contents)

### vibrate()
> Vibrate once。

`Parameters`

None

`Return`

None

`Examples`
```lua
-- Vibrate once.
vibrate();
```

[Return](#table-of-contents)

### playAudio(audioFile, times)
> Play audio document at specified location.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| audioFile     |   string   |  Absolute path of audio document. |
| times     |   integer   |  Number of repeated plays. 0 represents infinite repeat. |

`Return`

None

`Examples`
```lua
-- Play audio infinitely.
playAudio("/var/audio.mp3", 0);
```

[Return](#table-of-contents)

### stopAudio()
> Stop playing audio.

`Parameters`

None

`Return`

None

`Examples`
```lua
-- Stop playing audio.
stopAudio();
```

[Return](#table-of-contents)

### getOrientation()
> Get orientation of the screen. Return the integer value. Please refer to the “Orientation Type of Screen” for specific correspondence relation.

`Parameters`

None

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| orientation     |   Integer   |  Screen orientation may be [these values](#types-of-screen-orientations) |

`Examples`
```lua
local o = getOrientation();
alert(string.format("Screen orientation is : %d", 0))
-- Pop up the orientation 2 of the screen, and mark the reversed screen.
```

[Return](#table-of-contents)

### getScreenResolution()
> Get screen resolution bese on pixels.

`Parameters`

None

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| width     |   Integer   |  Width of screen resolution. |
| height     |   Integer   |  Height of screen resolution. |

`Examples`
```lua
local w, h = getScreenResolution();
alert(string.format("Resolution of iPhone 6 Plus: width:%d, height:%d", w, h));
-- iPhone 6 Plus’s resolution width is 1242 and resolution height is 2208.
```

[Return](#table-of-contents)

### getSN()
> Get Serial Number of the device.

`Parameters`

None

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| SN     |   string   |  Serial Number of the device. |

`Examples`
```lua
local sn = getSN();
alert(string.format("SN is : %s", sn));
-- Popup shows the SN of the device: C15NFK32TWD2
```

[Return](#table-of-contents)

### getVersion()
> Get version of AutoTouch.

`Parameters`

None

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| version     |   string   |  Version of AutoTouch. |

`Examples`
```lua
local version = getVersion();
alert(string.format("Current version of AutoTouch is : %s", version));
-- Pop up shows current version of AutoTouch: 3.5.3-4
```

[Return](#table-of-contents)

### frontMostAppId()
> Get identifier of current front most App.

`Parameters`

None

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| App Identifier     |   string   |  App Identifier of current front most App. |

`Examples`
```lua
local appId = frontMostAppId();
alert(string.format("Current front most App is : %s", appId));
```

[Return](#table-of-contents)

### frontMostAppOrientation()
> Get orientation of current front most App. See the [Types of orientations](#types-of-screen-orientations)

`Parameters`

None

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| Orientation     |   integer   |  Orientation of current front most App. |

`Examples`
```lua
local orientation = frontMostAppOrientation();
alert(string.format("Orientation of current front most App is : %d", orientation));
```

[Return](#table-of-contents)

### intToRgb(intColor)
> Transit integer color to independent values of R,G,B.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| intColor   |   Integer   | Integer color value |

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| R   |   Integer   | Red color value. |
| G   |   Integer   | Green color value. |
| B   |   Integer   | Blue color value. |

`Examples`
```lua
local r, g, b = intToRgb(0x2b2b2b);
alert(string.format("R:%d, G:%d, B:%d", r, g, b));
```

[Return](#table-of-contents)

### rgbToInt(r, g, b)
> Transit values of R,G,B to integer color value.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| R   |   Integer   | Red color value. |
| G   |   Integer   | Green color value. |
| B   |   Integer   | Blue color value. |

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| intColor   |   Integer   | Integer color value |

`Examples`
```lua
local intColor = rgbToInt(200, 255, 100);
alert(string.format("Int type color: %d", intColor));
```

[Return](#table-of-contents)

### copyText(text)
> Copy specified text to clipboard.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| text     |   string   |  Text to be copied. |

`Return`

None

`Examples`
```lua
copyText("This is a copied text!");
```

[Return](#table-of-contents)

### clipText()
> Get the text in the clipboard.

`Parameters`

None

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| text     |   string   | Text copied in the clipboard. |

`Examples`
```lua
local text = clipText();
alert(text);
-- Popup shows the text to be copied: "This is a copied text!";
```

[Return](#table-of-contents)

### inputText(text)
> Input text to the input box selected now. You can delete a character backspace by inputText("\b").
> **ATTENSION:** Enable inoutText function at AutoTouch Settings > Features before using it.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| text     |   string   |  Text to be input. |

`Return`

None

`Examples`
```lua
inputText("Let's input some text automatically without tapping the keyboard!");
--  Delete 3 character by inputing 3 backspaces.
inputText("\b\b\b"); 
```

[Return](#table-of-contents)

### dialog(controls, orientations)
> Pop up self-defined dialog box to accept the user input. Please refer to the example for specific usage.

`Parameters`

| Parameter     | Type   |  Specification  | Optional | Default |
| -------- | :-----:| ----  | :----:  | :----:  |
| controls     |   table   |  Array of self-defined controls. You can now use [these dialog box controls](#types-of-dialog-controls).  | NO | |
| orientations |  table    | Orientations that dialog can be, see [Types of orientations](#types-of-screen-orientations). | YES | auto |

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| Flag of tapped button    |   integer  |  |

`Examples`
```lua
local label = {type=CONTROLLER_TYPE.LABEL, text="Would you mind to provide some personal informations?"}
local nameInput = {type=CONTROLLER_TYPE.INPUT, title="Name:", key="Name", value="Bob"}
local positionPicker = {type=CONTROLLER_TYPE.PICKER, title="Position:", key="Position", value="CEO", options={"CEO", "CTO", "CFO", "CXO"} }
local developerSwitch = {type=CONTROLLER_TYPE.SWITCH, title="A Developer:", key="ADeveloper", value=1}

-- It's an option for users to determine weather the inputs should be remembered, if you use this control in the dialog.
local remember = {type=CONTROLLER_TYPE.REMEMBER, on=false}

--[[ Define buttons:
type = CONTROLLER_TYPE.BUTTON
title = Button text
color = Button background color, it's optional, the default value is 0x428BCA
width = Button width upon percentage of the dialog width, it's optional, the default value is 0.5, max value is 1.0.
flag = Integer type of button flag for identifying which button is tapped.
collectInputs = Boolean type specifying wheather the dialog should collect the inputs while this button is tapped. ]]--
local btn1 = {type=CONTROLLER_TYPE.BUTTON, title="Button 1", color=0x71C69E, width=0.8, flag=1, collectInputs=false}
local btn2 = {type=CONTROLLER_TYPE.BUTTON, title="Button 2", color=0xFF5733, flag=2, collectInputs=true}
local btn3 = {type=CONTROLLER_TYPE.BUTTON, title="Button 3", color=0xFFB7D0, width=1.0, flag=3, collectInputs=false}
local btn4 = {type=CONTROLLER_TYPE.BUTTON, title="Button 4", width=1.0, flag=4, collectInputs=true}

local controls = {label, nameInput, positionPicker, developerSwitch, btn1, btn2, remember, btn3, btn4}

-- Pop up the dialog. After popping, the script will suspend waiting for user input until any button is tapped, then returns the flag of tapped button.

-- What orientations the dialog could be, it's optional
local orientations = { ORIENTATION_TYPE.LANDSCAPE_LEFT, ORIENTATION_TYPE.LANDSCAPE_RIGHT };

local result = dialog(controls, orientations);

if (result == 1) then
    alert(string.format("name:%s, birthday:%s, gender:%d", nameInput.value, positionPicker.value, developerSwitch.value))
else
    alert(string.format("Dialog returned: %s", result))
end
```
![dialog](https://i.imgur.com/GN9wji7.png)

[Return](#table-of-contents)

### clearDialogValues(script)
> Clear the remembered values of the dialog created by the function dialog.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| script     |   string   | script path. eg. there is a dialog.lua script in the scripts list, use it like this: clearDialogValues("dialog.lua");  |

`Return`

None

`Examples`
```lua
-- There is a dialog.lua script in the scripts list
clearDialogValues("dialog.lua");
```

[Return](#table-of-contents)

### openURL(urlString)
> Open url, or open other apps' url scheme. Look at [Always-Updated List of iOS App URL Scheme Names](https://ios.gadgethacks.com/news/always-updated-list-ios-app-url-scheme-names-0184033/) and example: [Google Maps URL Scheme for iOS](https://developers.google.com/maps/documentation/urls/ios-urlscheme)

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| urlString     |   string   |  Target to open. |

`Return`

None

`Examples`
```lua
openURL("https://autotouch.net")
openURL("prefs:root=General&path=About")
openURL("musics://")
openURL("itms-apps://itunes.apple.com")
openURL("tel://+1123456")
openURL("clashofclans://")
```

[Return](#table-of-contents)

### isLicensed()
> Check if the current device is running licensed AutoTouch

`Parameters`

None

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| licensed     |   boolean   | If current device is licensed. |

`Examples`
```lua
if isLicensed() then
    alert("Your device is licensed by AutoTouch!");
end
```

[Return](#table-of-contents)

### setAutoLaunch(scriptPath, on)
> Switch on/off a script as auto launch.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| filePath     |   string   |  Relative path of a script inside script directory of AutoTouch, such as "/Records/test.lua". |
| on     |   boolean   |  Switch auto launch on or off, true means on, false means off. |

`Return`

None

`Examples`
```lua
setAutoLaunch("/Records/test.lua", true);
```

[Return](#table-of-contents)

### listAutoLaunch()
> List all auto launch scripts

`Parameters`

None

`Return`

| Return     | Type   |  Specification  |
| -------- | :-----:| ----  |
| scripts     |   table   |   Relative path List of auto launch scripts.  |

`Examples`
```lua
local scripts = listAutoLaunch()
for i, v in pairs(scripts) do
    alert(v);
end
```

[Return](#table-of-contents)

### stop()
> SStop the current script execution.

`Parameters`

None

`Return`

None

`Examples`
```lua
-- Exit execution
stop();
```

[Return](#table-of-contents)

### ocr(region, languages, threshold, whitelist, blacklist, timeout, tessdataParentDir, debug)
> Text recognition from the screen with library `tesseract ocr`

`Parameters`

| Parameter     | Type   |  Specification  | Optional | Default |
| -------- | :-----:| ----  | :----:  | :----:  |
| region    |  table    | What region you want to recognize text at the screen. | YES | Whole screen |
| languages    |  String  | Languages you want to recognize, by default AutoTouch has included `eng.traineddata` at `/var/mobile/Library/AutoTouch/Library/tessadata`, you may download other languages you needed to the same dir from [https://github.com/tesseract-ocr/tessdata/tree/3.04.00](https://github.com/tesseract-ocr/tessdata/tree/3.04.00). Somewhat you may even train your own data for `tesseract orc` and put it at `tessadata` dir. | YES | "eng" |
| threshold    |  Integer  | Threshold the image, Adjust this value to improve the accurancy. Value range is from 0 to 255.  | YES | 100 |
| whitelist    |  String  | What characters you want to recognize in the region, such as "0123456789" will find numbers only. | YES | NULL |
| blacklist    |  String  | What characters you do not want to recognize from the region. | YES | NULL |
| timeout    |  Integer  | Timeout in seconds. | YES | 3 |
| tessdataParentDir    |  String  | Parent directory path of the `tessdata` directory, google to know more about `tessdata` of `tesseract ocr`. If this parameter starts with "/", it will be treated as an absolute path, otherwise it will be treated as a relative path. The real `traineddata` files will be at `tessdata` dir inside `tessdataParentDir`. **ATTENSION** this parameter is the **parent dir** of the `tessdata` folder!!! And the folder containers traineddata files must be named `tessdata`.  | YES | `/var/mobile/Library/AutoTouch/Library/` |
| debug    |  boolean  | If pass debug=true, it will produce a image ends with "-Debug.PNG" marked the matching areas. | YES | false |

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| Recognized Text     |   String   |  Recognized Text.  |

`Examples`
```lua
-- Example:
local result = ocr({100, 100, 300, 300}, 'eng', 220)

-- Example:
local result = ocr({100, 100, 300, 300}, 'eng+fra', 220, '0123456789 ', '..........', 5, nil, true)

-- Example:
-- Find English+France at the specified region with threshold 220, using the traindata in `tessdata` folder at the current directory.
-- Like this example, you can put the traindata inside your package project, so you can encrypt and pack them to a single bot.

--+TestOrcProject.at
--+----tesseract
--+--------eng.traindata
--+--------fra.traindata
--+----main.lua
--+----worker.lua

-- `./` means under current directory, it will find `tessdata` folder in current directory.
local result = ocr({100, 100, 300, 300}, 'eng+fra', 220, nil, nil, 5, './', true)
```

[Return](#table-of-contents)

## HTTP APIs
> There is a series of HTTP APIs for AutoTouch controlling in Local Area Netowork, they are the same APIs `Web Server` in AutoTouch Settings is using.

[Return](#table-of-contents)

### Play a script
> GET /control/start_playing?path=/scriptPath

`Parameters`

| Parameter     |  Specification  |
| -------- | ----  |
| path     | Script path.  |

`Return`

Successful:
```json
{
    "status": "success"
}
```

Failed:
```json
{
    "status": "fail",
    "info": ""
}
```

`Examples`

```
HTTP GET http://192.168.1.99:8080/control/start_playing?path=/scriptPath
```

```json
{
    "status": "fail",
    "info": "Script doesn't exist."
}
```

[Return](#table-of-contents)

### Stop playing a script
> GET /control/stop_playing?path=/scriptPath

`Parameters`

| Parameter     |  Specification  |
| -------- | ----  |
| path     | Script path.  |

`Return`

Successful:
```json
{
    "status": "success"
}
```

Failed:
```json
{
    "status": "fail",
    "info": ""
}
```

`Examples`

```
HTTP GET http://192.168.1.99:8080/control/start_playing?path=/scriptPath
```

```json
{
    "status": "fail",
    "info": "Script doesn't exist."
}
```

[Return](#table-of-contents)

### List files in a directory
> GET /files?path=/Records

`Parameters`

| Parameter     |  Specification  |
| -------- | ----  |
| path     | Directory path to list.  |

`Return`

```json
{
    "files": [
        {
            "filePath": "",
            "fileSize": "",
            "iconName": ""
        },
        ...
    ]
}
```

`Examples`

```
HTTP GET http://192.168.1.99:8080/files?path=/Records
```

```json
{
    "files": [
        {
            "filePath": "/Records/2019-03-10: 12:00:00.lua",
            "fileSize": "12kb",
            "iconName": "script"
        },
        ...
    ]
}
```

[Return](#table-of-contents)

### Create a new directory
> GET /file/newFolder?path=/Test

`Parameters`

| Parameter     |  Specification  |
| -------- | ----  |
| path     | New Directory path to create.  |

`Return`

Successful:
```json
{
    "status": "success"
}
```

Failed:
```json
{
    "status": "fail",
    "info": ""
}
```

`Examples`

```
HTTP GET http://192.168.1.99:8080/file/newFolder?path=/Test
```

```json
{
    "status": "success"
}
```

[Return](#table-of-contents)

### Create a new file
> GET /file/new?path=/newFilePath

`Parameters`

| Parameter     |  Specification  |
| -------- | ----  |
| path     | New file path to make.  |

`Return`

Successful:
```json
{
    "status": "success"
}
```

Failed:
```json
{
    "status": "fail",
    "info": ""
}
```

`Examples`

```
HTTP GET http://192.168.1.99:8080/file/new?path=/newFilePath
```

```json
{
    "status": "fail",
    "info": "Invalid file path"
}
```

[Return](#table-of-contents)

### Delete a file
> GET /file/delete?path=/filePathToDelete

`Parameters`

| Parameter     |  Specification  |
| -------- | ----  |
| path     | File path to delete.  |

`Return`

Successful:
```json
{
    "status": "success"
}
```

Failed:
```json
{
    "status": "fail",
    "info": ""
}
```

`Examples`

```
HTTP GET http://192.168.1.99:8080/file/delete?path=/filePathToDelete
```

```json
{
    "status": "fail",
    "info": "Invalid file path"
}
```

[Return](#table-of-contents)

### Rename a file or directory
> GET /file/rename?path=/oldFilePath&newPath=newFilePath

`Parameters`

| Parameter     |  Specification  |
| -------- | ----  |
| path     | Old path.  |
| newPath     | New path.  |

`Return`

Successful:
```json
{
    "status": "success"
}
```

Failed:
```json
{
    "status": "fail",
    "info": ""
}
```

`Examples`

```
HTTP GET http://192.168.1.99:8080/file/rename?path=/oldFilePath&newPath=newFilePath
```

```json
{
    "status": "fail",
    "info": "Invalid file path"
}
```

[Return](#table-of-contents)

## Constants

### Types of physical keys

| Value     |  Specification  |
| -------- | ----  |
| KEY_TYPE.HOME_BUTTON | Home Button |
| KEY_TYPE.VOLUME_DOWN_BUTTON | Volume – Button |
| KEY_TYPE.VOLUME_UP_BUTTON | Volume + Button |
| KEY_TYPE.POWER_BUTTON | Power Button |

[Return](#table-of-contents)

### Types of dialog controls

| Value     |  Specification  |
| -------- | ----  |
| CONTROLLER_TYPE.LABEL | Text label |
| CONTROLLER_TYPE.INPUT | Input box |
| CONTROLLER_TYPE.PICKER | Picker |
| CONTROLLER_TYPE.SWITCH | Switch |
| CONTROLLER_TYPE.BUTTON | Button |
| CONTROLLER_TYPE.REMEMBER | Switch for remember user inputs |

[Return](#table-of-contents)

### Types of screen orientations

| Value     |  Specification  |
| -------- | ----  |
| ORIENTATION_TYPE.UNKNOWN   | Unknown orientation. Practical value is 0. |
| ORIENTATION_TYPE.PORTRAIT | Portrait screen. Home button is at the bottom. Practical value is 1. |
| ORIENTATION_TYPE.PORTRAIT_UPSIDE_DOWN | Upside-down portrait screen. Home button on the top. Practical value is 2. |
| ORIENTATION_TYPE.LANDSCAPE_LEFT | Landscape left screen. Home Key is in the left. Practical value is 3. |
| ORIENTATION_TYPE.LANDSCAPE_RIGHT | Landscape right screen. Home key is in the right. Practical value is 4. |

[Return](#table-of-contents)
