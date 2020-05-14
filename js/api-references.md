Extended JavaScript Functions <!-- omit in toc -->
=====

`Applicable to version 7.0.0 or higher`

Table of Contents
=================

- [Table of Contents](#table-of-contents)
- [Extended Functions](#extended-functions)
    - [console.log()](#consolelog)
    - [alert()](#alert)
    - [usleep(microseconds)](#usleepmicroseconds)
    - [touchDown(id, x, y)](#touchdownid-x-y)
    - [touchMove(id, x, y)](#touchmoveid-x-y)
    - [touchUp(id, x, y)](#touchupid-x-y)
    - [keyDown(keyType)](#keydownkeytype)
    - [keyUp(keyType)](#keyupkeytype)
    - [getColor(x, y)](#getcolorx-y)
    - [getColors(locations)](#getcolorslocations)
    - [findColor(params)](#findcolorparams)
    - [findColors(params)](#findcolorsparams)
    - [findImage](#findimage)
    - [screenshot(savePath, region)](#screenshotsavepath-region)
    - [appRun(appIdentifier)](#apprunappidentifier)
    - [appKill(appIdentifier)](#appkillappidentifier)
    - [appState(appIdentifier)](#appstateappidentifier)
    - [rootDir()](#rootdir)
    - [toast(message, delay)](#toastmessage-delay)
    - [vibrate()](#vibrate)
    - [getDeviceOrientation()](#getdeviceorientation)
    - [getSN()](#getsn)
    - [getVersion()](#getversion)
    - [frontMostAppId()](#frontmostappid)
    - [frontMostAppOrientation()](#frontmostapporientation)
    - [intToRgb(intColor)](#inttorgbintcolor)
    - [rgbToInt(r, g, b)](#rgbtointr-g-b)
    - [copyText(text)](#copytexttext)
    - [clipText()](#cliptext)
    - [inputText(text)](#inputtexttext)
    - [dialog(controls, orientations)](#dialogcontrols-orientations)
    - [clearDialogValues(script)](#cleardialogvaluesscript)
    - [openURL(urlString)](#openurlurlstring)
    - [license()](#license)
    - [setAutoLaunch(scriptPath, on)](#setautolaunchscriptpath-on)
    - [listAutoLaunch()](#listautolaunch)
    - [stop()](#stop)
    - [ocr(region, languages, threshold, whitelist, blacklist, timeout, tessdataParentDir, debug)](#ocrregion-languages-threshold-whitelist-blacklist-timeout-tessdataparentdir-debug)
    - [appInfo(appIdentifier)](#appinfoappidentifier)
    - [setTimer(scriptPath, fireTime, repeat, interval)](#settimerscriptpath-firetime-repeat-interval)
    - [removeTimer(scriptPath)](#removetimerscriptpath)
    - [keepAutoTouchAwake(keepAwake)](#keepautotouchawakekeepawake)
- [Constants](#constants)
    - [Types of physical keys](#types-of-physical-keys)
    - [Types of dialog controls](#types-of-dialog-controls)
    - [Types of device orientations](#types-of-device-orientations)
    - [Types of app interface orientations](#types-of-app-interface-orientations)

------

Extended Functions
=================

### console.log()
> Log message to `Log View`

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| message    | String   |    |

`Return`

None

`Examples`
```js
console.log('What a funny one!')

// 
const something = {
    color: 0xd6e8s9,
    point: {
        x: 100,
        y: 100
    },
    appName: 'IDK'
}
// How to format a string with parameters?
// %s means a String
// %d means a Number
// %j will stringify it as a formated JSON
console.log('I am a log of something interesting: %j', something)

// You can also just use the power feature of JS:

console.log(`I am a log of something interesting: ${ JSON.stringify(something )}`)
```

[Top](#table-of-contents)

------

### alert()
> Popup a message

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| message    | String   |    |

`Return`

None

`Examples`
```js
alert('What a funny one!')

// How to format a string with parameters?
// %s means a String
// %d means a Number
// %j will stringify it as a formated JSON
alert('I am a log of something interesting: %j', something)

// You can also just use the power feature of JS:
alert(`I am a log of something interesting: ${ JSON.stringify(something )}`)
```

[Top](#table-of-contents)

------

### usleep(microseconds)
> Sleep several microseconds (1/1000000 second)

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| microseconds     |   Integer   |  The number of paused microseconds. |

`Return`

None

`Examples`
```js
// Sleep 1 second.
at.usleep(1000000)

// OR import first
const { usleep } = at
usleep(1000000)
```

[Top](#table-of-contents)

------

### touchDown(id, x, y)
> Simulate touch down at (x, y)

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| id    | Integer   |   Finger ID, which is used to mark a finger in single-touch or multi-touch, just use 1 or 2 or 3... |
| x     |   Float   |   x-coordinate on the screen   |
| y     |    Float    |  y-coordinate on the screen  |

`Return`

None

`Examples`
```js
at.touchDown(0, 100, 200)

// OR
const { touchDown } = at;
touchDown(0, 100, 200)
```

[Top](#table-of-contents)

------

### touchMove(id, x, y)
> Move the finger to coordinate (x,y).

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| id    | Integer   |   Finger ID, which is used to mark a finger in single-touch or multi-touch, just use 1 or 2 or 3... |
| x     |   Float   |   x-coordinate on the screen   |
| y     |    Float    |  y-coordinate on the screen  |

`Return`

None

`Examples`
```js
at.touchMove(0, 200, 200)
```

[Top](#table-of-contents)

------

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
```js
at.touchUp(0, 100, 200)
```

[Top](#table-of-contents)

------

### keyDown(keyType)
> Simulate the pressing of physical key.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| keyType     |   Integer   |   Physical key identification. Now you can use [these physical keys](#types-of-physical-keys).   |

`Return`

None

`Examples`
```js
// Simulate the pressing of Home Key.
at.keyDown(KEY_TYPE.HOME_BUTTON)
```

[Top](#table-of-contents)

------

### keyUp(keyType)
> Simulate the lifting of physical key.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| keyType     |   Integer   |   Physical key identification. Now you can use [these physical keys](#types-of-physical-keys).   |

`Return`

None

`Examples`
```js
at.keyUp(KEY_TYPE.HOME_BUTTON)
```

[Top](#table-of-contents)

------

### getColor(x, y)
> Get the color value of the pixel point of the specified coordinate on current screen.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| x     |   Float   |   x-coordinate on the screen   |
| y     |    Float    |  y-coordinate on the screen  |

`Return`
> getColor returns an array containing two elements, first is result, second is error, you should check the error in a good practice

`Examples`
```js
const [result, error] = getColor(100, 200)
if (error) {
    alert('Failed to get color, error: %s', error)
} else {
    alert('Got result by getColor', result)
}

// or ignore the error
const [color] = getColor(100, 200)
alert('Got color ${color} at point 100, 200')
// Go on to do next
```

[Top](#table-of-contents)

------

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
```js
const { getColors } = at

// getColors([{x: x1, y: y1}, {x: x2, y: y2}, ...])
const [result, error] = getColors([
    {x: 100, y: 100},
    {x: 200, y: 200},
    {x: 300, y: 300},
    {x: 400, y: 400},
])
if (error) {
    alert('Failed to get colors, error: %s', error)
} else {
    // print the result by looping
    result.forEach(item => console.log(`Got color: ${item}`))
    // alert the result
    alert('getColors result1:', result1)
}
```

[Top](#table-of-contents)

------

### findColor(params)
> Search the coordinates of the pixel points matching the specified color on current screen.

`Parameters`

> `params` is an `object` which contains:

| Parameter     | Type   |  Specification  | Optional | Default |
| -------- | :-----:| ----  | :----:  | :----:  |
| color     |   Integer   |   Matched color value.   | NO | |
| count     |   Integer    | How many result items you want to get? 0 means all, default is 10, the faster the speed is.  | NO | 10 |
| region     |   table    | You only search the result in the specified area. This area is the table type including four values {x, y, width, height}. The four values respectively represent the coordinate x, coordinate y, width, and height of the rectangular area. {100,100,200,200} is an example. If you do not want to specify the area, just input null.  | NO | null |
| debug    |  boolean  | If pass debug=true, it will produce a image ends with "-Debug.PNG" marked the matching areas. | YES | false |
| rightToLeft    |  boolean  | Search direction, default is left to right. | YES | false |
| bottomToTop    |  boolean  | Search direction, default is top to buttom. | YES | false |

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| locations     |   table   |  Coordinates of matched pixel points. For example: { {x1, y1}, {x2, y2}, ... }  |

`Example`
```js
// import functions from the main module of AutoTouch
const [result, error] = at.findColor({ color: 0xFFFFFF })
if (error) {
    alert('Failed to find colors, error: %s', error)
} else {
    result.forEach(item => console.log('>>>>>>> found color 0xFFFFFF at: %j', item))
    alert('Got result of findColors: ', result)
}
```

`Internal Implementation`
```js
const findColor = function (params) {
	const args = params
	args.colors = [{ color: params.color, x: 0, y: 0 }]
	delete args.color
	return at.findColors(args)
}
```

[Top](#table-of-contents)

------

### findColors(params)
> * Search all rectangular areas matching “specified color and their corresponding location and return the coordinate of the pixel point matching the first color in the rectangular area. This function has the search efficiency and availability far beyond findImage. For example, you need not match the whole key picture, but only match the anchors’ color and their corresponding location on the key. You can specify the number of the results by count parameter. 0 refers to all, 1 refers to the first one, and 2 refers to the first tow. region parameter can specify the search area, which is the table type {x,y,width, height}. You only input null if no data is specified. <br/>
> * This function can use the "HELPER" tool in the “Extension Function” of the script-editing interface to select the anchors’ colors from the screenshot and get their corresponding location to the function’s parameter automatically.<br/>
> * The coordinate of the pixel point pointed by the arrow is the coordinate of the return value.<br/>

![IMG_0361.PNG-101.9kB](https://i.imgur.com/ODEtwAz.png)

`Parameters`

> `params` is an `object` which contains:

| Parameter     | Type   |  Specification  | Optional | Default |
| -------- | :-----:| ----  | :----:  | :----:  |
| colors     |   table   |  Include some color and their corresponding location, such as:{ {0x00ddff,0,0}, {0x00eeff,10,10}, {0x0000ff,0,20} }. The small table in the big table includes 3 values: the first is the color value. The second and the third are the corresponding locations of the colors to the first color. The corresponding location of the first color’s table is always (0,0). {0x00ddff,0,0} is an example. The location values of the successive colors are their locations corresponding to the first color. The matched rectangular area can be found on the screen upon these colors and corresponding location relation.  | NO | |
| count     |   Integer    | How many result items you want to get? 0 means all, default is 10, the faster the speed is.  | NO | 10 |
| region     |   table    | You only search the result in the specified area. This area is the table type including four values {x, y, width, height}. The four values respectively represent the coordinate x, coordinate y, width, and height of the rectangular area. {100,100,200,200} is an example. If you do not want to specify the area, just input null.  | NO | null |
| debug    |  boolean  | If pass debug=true, it will produce a image ends with "-Debug.PNG" marked the matching areas. | YES | false |
| rightToLeft    |  boolean  | Search direction, default is left to right. | YES | false |
| bottomToTop    |  boolean  | Search direction, default is top to buttom. | YES | false |

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| locations     |   table   |  The coordinate of the first color matched in the found rectangular area, including { {x1, y1}, {x2, y2}, ...}  |

`Examples`
```js
const { findColors } = at

const [result, error] = findColors({
    colors: [ // Required parameter
        { color: 16661296, x: 0, y: 0 },
        { color: 1751033, x: -53, y: 67 },
    ]
})
if (error) {
    alert('Failed to find colors, error: %s', error)
} else {
    result.forEach(item => console.log('>>>>>>> found colors at: %j', item))
    alert('Got result by findColors', result)
}

// OR
const [result, error] = findColors({
    colors: [ // Required parameter
        { color: 16661296, x: 0, y: 0 },
        { color: 1751033, x: -53, y: 67 },
    ],
    count: 3
})

// OR
// Prepare parameters
const params = {
    colors: [ // Required parameter
        { color: 16661296, x: 0, y: 0 },
        { color: 1751033, x: -53, y: 67 },
    ],
    count: 3, // optional, default is 10
    region: null, // optional, default is null, null means the whole screen
    debug: true, // optional, default is false, true means turn on the debug mode which will produce an image showing the finding process
    rightToLeft: false, // optiona, default is false, true means do the finding from right to left of the screen
    bottomToTop: false // optiona, default is false, true means do the finding from bottom to top of the screen
}

// Call findColors on synchronous way which WILL block here till get the result
const [result, error] = findColors(params)
if (error) {
    alert('Failed to find colors, error: %s', error)
} else {
    alert('Got result by findColors', result)
}

// OR
// You can also ignore the error checking like this
const [result] = findColors(params)
```

[Top](#table-of-contents)

------

### findImage
> Search areas matching the specified image on current screen and return the center coordinates. It supports any format of target images. It also provides a debug mode which will produce an image marked the matching areas.

![Imgur](https://i.imgur.com/9eyFOu7.png)

`Parameters`

> `params` is an `object` which contains:

| Parameter     | Type   |  Specification  | Optional | Default |
| -------- | :-----:| ----  | :----:  | :----:  |
| targetImagePath     |   String   |  Path of the target image to match, for example: "images/gold.PNG". Any image with valid format are supported. If the path starts with character "/", it will be treated as absolute path, if not, it will be treated as relative path. Most of the time we use relative path, speficially for .ate package.    | NO | |
| count     |   Integer    | How many result items you want to get? 0 means all, default is 10, the faster the speed is.  | NO | 10 |
| threshold |  float    | Searching precision, maximum value is 1 means totally the same, minimum value is -1 means non same, default is 0.9, usually 0.99 is good. Pass null if you just want to use the default value. | YES | 0.9 |
| region    |  table    | Do searching in which region. Pass null if you just want to use the default value. | YES | Whole screen |
| debug    |  boolean  | If pass debug=true, it will produce a image ends with "-Debug.PNG" marked the matching areas. | YES | false |
| method    |  integer  | Searching method, default is 1, pass 2 if you want to use the more intelligent method which is able to cover size scale, orientation, color changed, it will be a little slower than method 1. | YES | 1 |

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| center locations     |   table   |  Center coordinates of the matching areas.  |

`Examples`
```js
// import functions from the main module of AutoTouch
const { findColors } = at

// Prepare parameters
const params = {
    colors: [ // Required parameter
        { color: 16661296, x: 0, y: 0 },
        { color: 1751033, x: -53, y: 67 },
    ],
    count: 3, // optional, default is 10
    region: null, // optional, default is null, null means the whole screen
    debug: true, // optional, default is false, true means turn on the debug mode which will produce an image showing the finding process
    rightToLeft: false, // optiona, default is false, true means do the finding from right to left of the screen
    bottomToTop: false // optiona, default is false, true means do the finding from bottom to top of the screen
}

// Call findColors on synchronous way which WILL block here till get the result
const [result, error] = findColors(params)
if (error) {
    alert('Failed to find colors, error: %s', error)
} else {
    result.forEach(item => console.log('>>>>>>> found image at: %j', item))
    alert('Got result by findColors', result)
}
// You can also ignore the error checking like this
const [result] = findColors({
    colors: [ // Required parameter
        { color: 16661296, x: 0, y: 0 },
        { color: 1751033, x: -53, y: 67 },
    ]
})
```

[Top](#table-of-contents)

------

### screenshot(savePath, region)
> * Take a screenshot for the whole screen or specified area.
> * It will save the screenshot image as an PNG into "AutoTouch" album of iOS Photo Library if the savePath parameter is null, and will save the PNG to the speficied path if savePath is not null.
> * If region parameter is null, it will take shot of the whole screen.
> * By Clicking "+" button at top-right of AutoTouch view, then "Copy Image Here", you are able to copy an image from iOS Photo Library to AutoTouch scripts directory.

`Parameters`

| Parameter     | Type   |  Specification  | Optional | Default |
| -------- | :-----:| ----  | :-----: | :-----: |
| savePath     |   string   | Where to save the image. | YES | "AutoTouch" album of iOS Photo Library |
| region     |   table    | You make a screenshot of the specified area. This area is the table type including four values {x, y, width, height}. The four values respectively represent the coordinate x, coordinate y, width, and height of the rectangular area. {100,100,200,200} is an example. If you do not want to specify the area, just input null. | YES | null |

`Return`

None

`Examples`
```js
// import screenshot function from module at
const { screenshot } = at

// Take screenshot without parameters.
// Without parameter `savePath`, it will save the image to your iOS Album
screenshot()
// or
at.screenshot()

// Specify savePath parameter to take scsreenshot. 
// If the savePath doesn't start with character '/', means it's a relative path, the image will be saved to the relative path of current script
// If the savePath starts with character '/', means it's a absolute path, the image will be saved to the absolute path
screenshot(`images/${new Date().toISOString()}.png`)

// Specify savePath and region, region means the rect area of the screen you want to capture screenshot
screenshot(`images/${new Date().toISOString()}.png`, { x: 0, y: 0, width: 100, height: 200 })

// Prepare parameters before using
const savePath = `images/${new Date().toISOString()}.png`
const region = { x: 0, y: 0, width: 300, height: 500 }
screenshot(savePath, region)
```

[Top](#table-of-contents)

------

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
at.appRun("com.apple.mobilesafari")
```

[Top](#table-of-contents)

------

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
at.appKill("com.apple.mobilesafari")
```

[Top](#table-of-contents)

------

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
const state = appState('com.apple.mobilesafari')
alert('State of Safari: %s', state))
-- Pop up the state of Safari: "ACTIVATED"
```

[Top](#table-of-contents)

------

### rootDir()
> Get the default directory address of the saved script. This is the default saving address of scripts and screenshots: "/var/mobile/Library/AutoTouch/Scripts/".

`Parameters`

None

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| dir     |   string   |  Default directory address of the saved script. |

`Examples`
```js
// Popup "/var/mobile/Library/AutoTouch/Scripts/"
alert(`The root dir of AutoTouch is ${rootDir()}`)
```

[Top](#table-of-contents)

------

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
```js
at.toast("Hello I'm a toast!", 5) -- Show message for 5 seconds.
at.toast("Hello again!") -- Show message for 2 seconds.
```

[Top](#table-of-contents)

------

### vibrate()
> Vibrate once。

`Parameters`

None

`Return`

None

`Examples`
```js
// Vibrate once.
at.vibrate()
```

[Top](#table-of-contents)

------

### getDeviceOrientation()
> Get orientation of the device. Returns string value. Please refer to the "Orientation Type of Screen" for specific correspondence relation.

`Parameters`

None

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| orientation     |   String   |  Screen orientation may be [these values](#types-of-device-orientations) |

`Examples`
```js
alert(`Device orientation is : ${at.getDeviceOrientation()}`)
// Pop up the orientation of the device
```

[Top](#table-of-contents)

------

### getSN()
> Get Serial Number of the device.

`Parameters`

None

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| SN     |   string   |  Serial Number of the device. |

`Examples`
```js
const sn = at.getSN()
alert(`Serial Number of this device is ${sn}`)
// Popup shows the SN of the device: C15NFK32TWD2
```

[Top](#table-of-contents)

------

### getVersion()
> Get version of AutoTouch.

`Parameters`

None

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| version     |   string   |  Version of AutoTouch. |

`Examples`
```js
const version = at.getVersion()
alert(`Current version of AutoTouch is : ${version}`)
// Pop up shows current version of AutoTouch: 3.5.3-4
```

[Top](#table-of-contents)

------

### frontMostAppId()
> Get identifier of current front most App.

`Parameters`

None

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| App Identifier     |   string   |  App Identifier of current front most App. |

`Examples`
```js
const appId = at.frontMostAppId()
alert(`Current front most App is : ${appId}`)
```

[Top](#table-of-contents)

------

### frontMostAppOrientation()
> Get orientation of current front most App. See the [Types of orientations](#types-of-app-interface-orientations)

`Parameters`

None

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| Orientation     |   integer   |  Orientation of current front most App. |

`Examples`
```js
const orientation = at.frontMostAppOrientation()
alert(`Orientation of current front most App is : ${orientation}`)
```

[Top](#table-of-contents)

------

### intToRgb(intColor)
> Transit integer color to independent values of R,G,B.<br/>
> It's in `utils` module, not `at` module

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
```js
const { intToRgb } = utils
const r, g, b = intToRgb(0x2b2b2b)
alert(`red: ${r}, green: ${g}, blue: ${b}`)
```

[Top](#table-of-contents)

------

### rgbToInt(r, g, b)
> Transit values of R,G,B to integer color value.<br/>
> It's in `utils` module, not `at` module

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
```js
const { rgbToInt } = utils
const intColor = rgbToInt(200, 255, 100)
alert(`integer value of rgb(200, 255, 100) is ${intColor}`)
```

[Top](#table-of-contents)

------

### copyText(text)
> Copy specified text to clipboard.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| text     |   string   |  Text to be copied. |

`Return`

None

`Examples`
```js
at.copyText('This is a copied text!')
```

[Top](#table-of-contents)

------

### clipText()
> Get the text in the clipboard.

`Parameters`

None

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| text     |   string   | Text copied in the clipboard. |

`Examples`
```js
const text = at.clipText()
alert(text)
// Popup shows the text to be copied: "This is a copied text!";
```

[Top](#table-of-contents)

------

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
```js
at.inputText("Let's input some text automatically without tapping the keyboard!")
// Delete 3 character by inputing 3 backspaces.
at.inputText("\b\b\b") 
```

[Top](#table-of-contents)

------

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

local result = dialog(controls, orientations)

if (result == 1) then
    alert(string.format("name:%s, birthday:%s, gender:%d", nameInput.value, positionPicker.value, developerSwitch.value))
else
    alert(string.format("Dialog returned: %s", result))
end
```
![dialog](https://i.imgur.com/GN9wji7.png)

[Top](#table-of-contents)

------

### clearDialogValues(script)
> Clear the remembered values of the dialog created by the function dialog.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| script     |   string   | script path. eg. there is a dialog.lua script in the scripts list, use it like this: clearDialogValues("dialog.lua")  |

`Return`

None

`Examples`
```lua
-- There is a dialog.lua script in the scripts list
clearDialogValues("dialog.lua")
```

[Top](#table-of-contents)

------

### openURL(urlString)
> Open url, or open other apps' url scheme. Look at [Always-Updated List of iOS App URL Scheme Names](https://ios.gadgethacks.com/news/always-updated-list-ios-app-url-scheme-names-0184033/) and example: [Google Maps URL Scheme for iOS](https://developers.google.com/maps/documentation/urls/ios-urlscheme)

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| urlString     |   string   |  Target to open. |

`Return`

None

`Examples`
```js
const { openURL } = at

openURL("https://autotouch.net")
openURL("prefs:root=General&path=About")
openURL("musics://")
openURL("itms-apps://itunes.apple.com")
openURL("tel://+1123456")
openURL("clashofclans://")
```

[Top](#table-of-contents)

------

### license()
> Get current license status of AutoTouch

`Parameters`

None

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| license type     |   string   | `BASIC` or `PRO` or `null` |

`Examples`
```js
alert(`AutoTouch license of current device is ${at.license()}!`)
```

[Top](#table-of-contents)

------

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
```js
at.setAutoLaunch("/Records/test.lua", true)
```

[Top](#table-of-contents)

------

### listAutoLaunch()
> List all auto launch scripts

`Parameters`

None

`Return`

| Return     | Type   |  Specification  |
| -------- | :-----:| ----  |
| scripts     |   table   |   Relative path List of auto launch scripts.  |

`Examples`
```js
const scripts = at.listAutoLaunch()
if (scripts) {
    scripts.forEach(item => console.log(`>>>>>>>>>> got a auto launch script at: ${item}`))
} else {
    alert('Auto launch script not found!')
}
```

[Top](#table-of-contents)

------

### stop()
> Stop the current script execution.

`Parameters`

None

`Return`

None

`Examples`
```js
// Exit execution
at.stop()
```

[Top](#table-of-contents)

------

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
local result = ocr({100, 100, 300, 300}, 'eng+fra', 220, '0123456789 ', '..........', 5, null, true)

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
local result = ocr({100, 100, 300, 300}, 'eng+fra', 220, null, null, 5, './', true)
```

[Top](#table-of-contents)

------

### appInfo(appIdentifier)
> Get the speficied App's displayName,executablePath,bundleContainerPath,dataContainerPath.

`Parameters`

| Parameter     | Type   |  Specification  |
| -------- | :-----:| ----  |
| appIdentifier     |  String  |  App identifier，such as "com.apple.mobilesafari", Get identifiers from [here](https://offcornerdev.com/bundleid.html). |

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| info     |  table  |  App info table  |

`Examples`
```lua
local result = appInfo("com.microsoft.Office.Outlook")
alert(table.tostring(result))
```

[Top](#table-of-contents)

------

### setTimer(scriptPath, fireTime, repeat, interval)
> Set timer for a script.

`Parameters`

| Parameter     | Type   |  Specification  | Optional | Default |
| -------- | :-----:| ----  | :----:  | :----:  |
| filePath     |   string   |  Relative path of a script inside script directory of AutoTouch, such as "/Records/test.lua". | NO | |
| fireTime     |   string or integer   |  When should the timer trigger. If this parameter is an integer, it means you want it trigger after n seconds from now on, if it is a string, it should be a datetime with format "2019-09-17 08:12:52" which means the timer will trigger at this time. | NO | |
| repeat     |   boolean   |  If the timer should run repleatly. | NO | |
| interval     |   integer   |  Repeat interval in seconds. | NO | |

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| done    |  boolean  |  If it is successful.  |

`Examples`
```lua
-- trigger after 1000 seconds
local done = setTimer("/Records/test.lua", 1000, false, 0)

-- trigger at 2019-09-17 08:12:52 and repeat every 10000 seconds
local done = setTimer("/Records/test.lua", "2019-09-17 08:12:52", true, 10000)
```

[Top](#table-of-contents)

------

### removeTimer(scriptPath)
> Remove timer of a script.

`Parameters`

| Parameter     | Type   |  Specification  | Optional | Default |
| -------- | :-----:| ----  | :----:  | :----:  |
| filePath     |   string   |  Relative path of a script inside script directory of AutoTouch, such as "/Records/test.lua". | NO | |

`Return`

| Return     | Type  |  Specification  |
| -------- | :-----:| ----  |
| done    |  boolean  |  If it is successful.  |

`Examples`
```lua
local done = removeTimer("/Records/test.lua")
```

[Top](#table-of-contents)

------

### keepAutoTouchAwake(keepAwake)
> Keep AutoTouch awake aginst iOS idle sleep.

`Parameters`

| Parameter     | Type   |  Specification  | Optional | Default |
| -------- | :-----:| ----  | :----:  | :----:  |
| keepAwake     |   boolean   |  Keep AutoTouch awake or not | NO | |

`Return`

None

`Examples`
```lua
keepAutoTouchAwake(true)
```

[Top](#table-of-contents)

------

Constants
=====

### Types of physical keys

| Value                       | Specification   |
| --------------------------- | --------------- |
| KEY_TYPE.HOME_BUTTON        | Home Button     |
| KEY_TYPE.VOLUME_DOWN_BUTTON | Volume – Button |
| KEY_TYPE.VOLUME_UP_BUTTON   | Volume + Button |
| KEY_TYPE.POWER_BUTTON       | Power Button    |

### Types of dialog controls

| Value                    | Specification                   |
| ------------------------ | ------------------------------- |
| CONTROLLER_TYPE.LABEL    | Text label                      |
| CONTROLLER_TYPE.INPUT    | Input box                       |
| CONTROLLER_TYPE.PICKER   | Picker                          |
| CONTROLLER_TYPE.SWITCH   | Switch                          |
| CONTROLLER_TYPE.BUTTON   | Button                          |
| CONTROLLER_TYPE.REMEMBER | Switch for remember user inputs |

### Types of device orientations

| Value                                 | Specification                                                              |
| ------------------------------------- | -------------------------------------------------------------------------- |
| ORIENTATION_TYPE.UNKNOWN              | Unknown orientation. Practical value is 0.                                 |
| ORIENTATION_TYPE.PORTRAIT             | Portrait screen. Home button is at the bottom. Practical value is 1.       |
| ORIENTATION_TYPE.PORTRAIT_UPSIDE_DOWN | Upside-down portrait screen. Home button on the top. Practical value is 2. |
| ORIENTATION_TYPE.LANDSCAPE_LEFT       | Landscape left screen. Home Key is in the left. Practical value is 3.      |
| ORIENTATION_TYPE.LANDSCAPE_RIGHT      | Landscape right screen. Home key is in the right. Practical value is 4.    |
| ORIENTATION_TYPE.FACE_UP              | The device is face up, Practical value is 5.                               |
| ORIENTATION_TYPE.FACE_DOWN            | The device is face down, Practical value is 6.                             |

### Types of app interface orientations

| Value                                 | Specification                                                                  |
| ------------------------------------- | ------------------------------------------------------------------------------ |
| ORIENTATION_TYPE.UNKNOWN              | Unknown orientation. Practical value is string 0.                              |
| ORIENTATION_TYPE.PORTRAIT             | Portrait screen. Home button is at the bottom. Practical value is 1.           |
| ORIENTATION_TYPE.PORTRAIT_UPSIDE_DOWN | Upside-down portrait screen. Home button on the top. Practical value is 2.     |
| ORIENTATION_TYPE.LANDSCAPE_LEFT       | Landscape left screen. Home Key is in the left. Practical value is string 3.   |
| ORIENTATION_TYPE.LANDSCAPE_RIGHT      | Landscape right screen. Home key is in the right. Practical value is string 4. |

[Top](#table-of-contents)
