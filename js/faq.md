JavaScript Document <!-- omit in toc -->
=====

`Applicable to version 7.0.0 or higher`

## [JSBridge Document](/js/JSBridge) <!-- omit in toc -->

## [Extended JavaScript Functions References](/js/api-references) <!-- omit in toc -->

## [HTTP APIs](/http-api) <!-- omit in toc -->

Table of Contents
=================

- [Table of Contents](#table-of-contents)
  - [How to start?](#how-to-start)
  - [How to import extended functions of AutoTouch before using?](#how-to-import-extended-functions-of-autotouch-before-using)
  - [How to use another module?](#how-to-use-another-module)
  - [How to log or alert a message ?](#how-to-log-or-alert-a-message)
  - [How to simulate touches?](#how-to-simulate-touches)
  - [How to simulate physical button pressing?](#how-to-simulate-physical-button-pressing)
  - [How to get color of a point on the screen?](#how-to-get-color-of-a-point-on-the-screen)
  - [How to find locations of specified colors from the screen?](#how-to-find-locations-of-specified-colors-from-the-screen)
  - [How to find areas matching the specified image from the screen?](#how-to-find-areas-matching-the-specified-image-from-the-screen)
  - [How to run or stop an app?](#how-to-run-or-stop-an-app)
  - [How to set a script auto luanch?](#how-to-set-a-script-auto-luanch)
  - [How to trigger a script with timer?](#how-to-trigger-a-script-with-timer)
  - [How to keep AutoTouch awake while screen is locked down?](#how-to-keep-autotouch-awake-while-screen-is-locked-down)
  - [How to copy, paste, input text?](#how-to-copy-paste-input-text)
  - [Other stuff](#other-stuff)
  - [Some utils](#some-utils)
    - [dialog(controls, orientations)](#dialogcontrols-orientations)
    - [clearDialogValues(script)](#cleardialogvaluesscript)
    - [ocr(region, languages, threshold, whitelist, blacklist, timeout, tessdataParentDir, debug)](#ocrregion-languages-threshold-whitelist-blacklist-timeout-tessdataparentdir-debug)
  - [Constants](#constants)
  - [Types of physical keys](#types-of-physical-keys)
  - [Types of dialog controls](#types-of-dialog-controls)
  - [Types of screen orientations](#types-of-screen-orientations)


## How to start?
> Learn `JavaScript` for an hour before coding with `AutoTouch`, this document doesn't teach you `JavaScript`.<br/>
> [Here is a good JavaScript tutorial](https://javascript.info/), read it fast.

## How to import extended functions of AutoTouch before using?
> All extended functions are at the main module `at`, you should use them like this:

```js
// Method 1
// import them first
const { touchDown, toast, screenshot } = at
touchDown(1, 100, 200)
toast('message')
screenshot()

// Method 2
// Use them without import
at.touchDown(1, 100, 200)
at.toast('message')
at.screenshot()
```

[Top](#table-of-contents)

------

## How to use another module?
> Use `module.exports` to export a module, use `require()` to import

```js
// module: worker.js
const { touchDown, touchMove, touchUp, usleep, toast } = at

// simulate swapping vertically
function swipeVertically() {
	for (let i = 0; i < 5; i++) {
		touchDown(1, 200, 300);
		for (let y = 300; y <= 900; y += 50) {
			usleep(12000);
			touchMove(1, 200, y);
		}
		touchUp(1, 200, 900);
		usleep(500000);
	}
}

function run() {
	toast("Swiping...");
	// simulate swapping vertically
	swipeVertically();
}

// use module.exports to export, know more with Google 'JavaScript require'
module.exports = {
	run
}
```

```js
// import function `run()` from the module `worker`
const { run } = require("./worker")

// call the function
run()
```

[Top](#table-of-contents)

------

## How to log or alert a message ?
> You can use `console.log` to print a log same with Node.js and browser, while in AT `console.log` will write logs to the `Log View`.<br/>
> Also you can use function `alert` to show message with a popup.<br/>
> `console.log` and `alert` don't need importing separately.

`Relative Extended Functions`
> * [`console.log()`](/js/api-references.md#consolelog)<br/>
> * [`alert()`](/js/api-references.md#alert)

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

// Show a message with alert
alert('I am a log of something interesting: %j', something)

alert(`I am a log of something interesting: ${ JSON.stringify(something )}`)
```

[Top](#table-of-contents)

------

## How to simulate touches?
> Use `touchDown`, `touchMove`, `touchUp`, `usleep`

`Relative Extended Functions`
> * [`touchDown()`](/js/api-references.md#touchDown)<br/>
> * [`touchMove()`](/js/api-references.md#touchMove)<br/>
> * [`touchUp()`](/js/api-references.md#touchUp)

`Examples`
```js
// import
const { touchDown, touchMove, touchUp, usleep } = at

// Click the screen once by one finger at coordinate (100,200).
touchDown(0, 100, 200)
usleep(16000)
touchUp(0, 100, 200)

// Press by three fingers at three locations on the screen.
touchDown(0, 100, 200)
touchDown(1, 200, 300)
touchDown(2, 300, 400)

// Press by three fingers at three locations on the screen, move to new location, and then lift the finger.
touchDown(0, 100, 200)
touchDown(1, 200, 300)
touchDown(2, 300, 400)
usleep(16000)
touchMove(0, 150, 250)
touchMove(1, 250, 350)
touchMove(2, 350, 450)
usleep(16000)
touchUp(0, 150, 250)
touchUp(1, 250, 350)
touchUp(2, 350, 450)

// Implement a tap function
function tap(x, y) {
    touchDown(0, x, y)
    usleep(16000)
    touchUp(0, x, y)
}

// Tap at (100, 200)
tap(100, 200)
```

[Top](#table-of-contents)

------

## How to simulate physical button pressing?
> use `keyDown`, `keyUp`

`Relative Extended Functions`
> * [`keyDown()`](/js/api-references.md#keyDown)<br/>
> * [`keyUp()`](/js/api-references.md#keyUp)

`Examples`
```js
const { keyDown, keyUp, usleep, getScreeninfo } = at;

// Simulate the pressing of Home Key.
keyDown(KEY_TYPE.HOME_BUTTON)

// How to simulate a key pressing?
function keyPress(keyType) {
    keyDown(keyType)
    usleep(10000)
    keyUp(keyType)
}

keyPress(KEY_TYPE.HOME_BUTTON)

// How to simulate a screen lock function?
function lockScreen() {
    keyDown(KEY_TYPE.POWER_BUTTON)
    keyUp(KEY_TYPE.POWER_BUTTON)
}

// How to simulate a screen unlock function?
function unlockScreen() {
    keyDown(KEY_TYPE.POWER_BUTTON)
    keyUp(KEY_TYPE.POWER_BUTTON)

    usleep(1000000)

    // deconstruct result of getScreeninfo
    const { width, height } = getScreeninfo()

    let x = 10;
    const gap = 120;
    touchDown(0, x, 200)
    while(x < width) {
        x = x + gap;
        usleep(16000)
        touchMove(0, x, 200)
    }
    touchUp(0, x, 200)
}
```

[Top](#table-of-contents)

------

## How to get color of a point on the screen?
> Use `getColor`, `getColors`

`Relative Extended Functions`
> * [`getColor()`](/js/api-references.md#getColor)<br/>
> * [`getColors()`](/js/api-references.md#getColors)

`Examples`
```js
const { getColor, getColor, usleep } = at

//---------------------------------------------------
const [result, error] = getColor(100, 200)
if (error) {
    alert('Failed to get color, error: %s', error)
} else {
    alert('Got result by getColor', result)
}

//---------------------------------------------------
// or ignore the error
const [color] = getColor(100, 200)
alert('Got color ${color} at point 100, 200')

//---------------------------------------------------
// Keep getting color of a location until it matches a specify color
let color;
while (color != 123456) {
    const [c, error] = getColor(100, 200)
    if (error) {
        console.log('Failed to getColor, error: %s', error)
    }
    color = c
    usleep(50000) // Wait a while
}
// Go on to do next

//---------------------------------------------------
// gete colors of several points
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

## How to find locations of specified colors from the screen?
> * Use `findColor`, `findColors`, `findColorAsync`, `findColorsAsync`,<br/>
> * Search all rectangular areas matching “specified color and their corresponding location and return the coordinate of the pixel point matching the first color in the rectangular area. This function has the search efficiency and availability far beyond findImage. For example, you need not match the whole key picture, but only match the anchors’ color and their corresponding location on the key. You can specify the number of the results by count parameter. 0 refers to all, 1 refers to the first one, and 2 refers to the first tow. region parameter can specify the search area, which is the table type {x,y,width, height}. You only input nil if no data is specified. <br/>
> * This function can use the "HELPER" tool in the “Extension Function” of the script-editing interface to select the anchors’ colors from the screenshot and get their corresponding location to the function’s parameter automatically.<br/>
> * The coordinate of the pixel point pointed by the arrow is the coordinate of the return value.

![IMG_0361.PNG-101.9kB](https://i.imgur.com/ODEtwAz.png)

`Relative Extended Functions`
> * [`findColor()`](/js/api-references.md#findColor)<br/>
> * [`findColors()`](/js/api-references.md#findColors)<br/>
> * [`findColorAsync()`](/js/api-references.md#findColorAsync)<br/>
> * [`findColorsAsync()`](/js/api-references.md#findColorsAsync)

`Examples`
```js
// import functions from the main module of AutoTouch
const { findColor, findColorAsync, findColors, findColorsAsync } = at

//---------------------------------------------------
// find a specified color synchronously from the screen, 
// synchronous means it will block here until it returns
const [result, error] = findColor({ color: 0xFFFFFF, count: 3 })
if (error) {
    alert('Failed to find colors, error: %s', error)
} else {
    result.forEach(item => console.log('>>>>>>> found color 0xFFFFFF at: %j', item))
    alert('Got result of findColors: ', result)
}

//---------------------------------------------------
// find a specified color asynchronously from the screen, 
// asynchronous means it WILL NOT block here, it get returned values through a callback function
findColorAsync({ color: 0xFFFFFF, count: 3 }, (result, error) => {
    if (error) {
        alert('Failed to find colors, error: %s', error)
        return
    }
    alert('Got result by findColorAsync', result, error)
})

//---------------------------------------------------
// Prepare parameters
const params = {
    colors: [ // Required parameter
        { color: 0xFFEE22, x: 0, y: 0 },
        { color: 0xDDEEAA, x: -53, y: 67 },
    ],
    count: 3, // optional, default is 10
    region: null, // optional, default is null, null means the whole screen
    debug: true, // optional, default is false, true means turn on the debug mode which will produce an image showing the finding process
    rightToLeft: false, // optional, default is false, true means do the finding from right to left of the screen
    bottomToTop: false // optional, default is false, true means do the finding from bottom to top of the screen
}

// Call findColors on synchronous way which WILL block here till get the result
const [result, error] = findColors(params)
if (error) {
    alert('Failed to find colors, error: %s', error)
} else {
    result.forEach(item => console.log('>>>>>>> found colors at: %j', item))
    alert('Got result by findColors', result)
}
// You can also ignore the error checking like this
// const [result] = findColors(params)

//---------------------------------------------------
// Call findColors on asynchronous way which WILL NOT block here
// Incept the returned values through a callback function
findColorsAsync(params, (result, error) => {
    if (error) {
        alert('Failed to find colors, error: %s', error)
        return
    }
    alert('Got result by findColorsAsync', result, error)
})

console.log('Arrive here before findColorsAsync returns result')

//---------------------------------------------------
// You can also define the callback separately
function callback(result, error) {
    if (error) {
        alert('Failed to find colors, error: %s', error)
        return
    }
    alert('Got result by findColorsAsync', result, error)
}

findColorsAsync(params, callback)
```

[Top](#table-of-contents)

------

## How to find areas matching the specified image from the screen?
> * Use `findImage`, `findImageAsync`, `screenshot`
> * Search areas matching the specified image on current screen and return the center coordinates. It supports any format of target images. It also provides a debug mode which will produce an image marked the matching areas.

![Imgur](https://i.imgur.com/9eyFOu7.png)

`Relative Extended Functions`
> * [`findImage()`](/js/api-references.md#findImage)<br/>
> * [`findImageAsync()`](/js/api-references.md#findImageAsync)<br/>
> * [`screenshot()`](/js/api-references.md#screenshot)

`Examples`
```js
// import functions from the main module of AutoTouch
const { screenshot, findImage, findImageAsync } = at

//---------------------------------------------------
const targetImagePath = 'images/test_finding_image.png'

const region = {
    x: 20,
    y: 50,
    width: 200,
    height: 300
}

//---------------------------------------------------
// Capture specified area from the current screen
screenshot(targetImagePath, region)

//---------------------------------------------------
// Prepare parameters
const params = {
    targetImagePath: targetImagePath,
    count: 3, // optional, default is 0, 0 means no limitation
    threshold: 0.9, // optional, default is 0.9
    region: null, // optional, default is null, null means the whole screen
    debug: true, // optional, default is false, true means turn on the debug mode which will produce an image showing the finding process
    method: 1, // optional, default is 1, 2 means a more intelligent method
}

//---------------------------------------------------
// Call findImage on synchronous way which WILL block here till get the result
const [result, error] = findImage(params)
if (error) {
    alert('Failed to find image, error: %s', error)
} else {
    alert('Got result by findImage', result)
}
// You can also ignore the error checking like this
const [result] = findColors(params)

//---------------------------------------------------
// Call findImage on asynchronous way which WILL NOT block here
findImageAsync(params, (result, error) => {
    if (error) {
        alert('Failed to find image, error: %s', error)
        return
    }
    alert('Got result of findImageAsync', result, error)
})

console.log('Arrive here before findImageAsync returns result')

//---------------------------------------------------
// You can also define the callback separately
function callback(result, error) {
    if (error) {
        alert('Failed to find image, error: %s', error)
        return
    }
    alert('Got result of findImageAsync', result, error)
}

findImageAsync(params, callback)
```

[Top](#table-of-contents)

------

## How to run or stop an app?
> * Use `appRun`, `appKill`, `appState`

`Relative Extended Functions`
> * [`appRun()`](/js/api-references.md#appRun)<br/>
> * [`appKill()`](/js/api-references.md#appKill)<br/>
> * [`appState()`](/js/api-references.md#appState)<br/>
> * [`appInfo()`](/js/api-references.md#appInfo)

`Examples`
```js
const { appRun, appKill, appState, appInfo } = at

//---------------------------------------------------
// Run Safari
appRun("com.apple.mobilesafari")

//---------------------------------------------------
// Kill the running Safari
appKill("com.apple.mobilesafari")

//---------------------------------------------------
// Get the state of Safari.
const state = appState("com.apple.mobilesafari")
alert(`State of Safari is: ${state}`)
// Pop up the state of Safari: "ACTIVATED"

//---------------------------------------------------
const result = appInfo("com.microsoft.Office.Outlook")
alert('Informations of Outlook are: %j', result)
```

[Top](#table-of-contents)

------

## How to set a script auto luanch?

`Relative Extended Functions`
> * [`setAutoLaunch()`](/js/api-references.md#setAutoLaunch)
> * [`listAutoLaunch()`](/js/api-references.md#listAutoLaunch)

```js
const { setAutoLaunch, listAutoLaunch } = at

//---------------------------------------------------
// Set the specified script to auto launch
// First parameter is relative path of a script inside script directory of AutoTouch, 
// such as "/Records/test.js" actually is at `/var/mobile/Library/AutoTouch/Scripts/Records/test.js`.
setAutoLaunch("/Records/test.js", true)

//---------------------------------------------------
// Set the specified script off auto launch
setAutoLaunch("/Records/test.js", false)

const autoLaunchScripts = listAutoLaunch()
if (!autoLaunchScripts) {
    alert('No auto launch scripts!')
}
autoLaunchScripts.forEach(item => console.log(`Got a auto launch script: ${item}`))
```

[Top](#table-of-contents)

------

## How to trigger a script with timer?

`Relative Extended Functions`
> * [`setTimer()`](/js/api-references.md#setTimer)
> * [`removeTimer()`](/js/api-references.md#removeTimer)

`Examples`
```js
const { setTimer, removeTimer } = at

//---------------------------------------------------
// trigger after 1000 seconds
setTimer("/Records/test.lua", 1000, false, 0)

// trigger at 2019-09-17 08:12:52 and repeat every 10000 seconds
setTimer("/Records/test.lua", "2019-09-17 08:12:52", true, 10000)

//---------------------------------------------------
// remove the timer
removeTimer("/Records/test.lua")
```

[Top](#table-of-contents)

------

## How to keep AutoTouch awake while screen is locked down?
> You can use `keepAutoTouchAwake()` to keep AutoTouch awake aginst iOS idle sleep.

`Relative Extended Functions`
> * [`keepAutoTouchAwake()`](/js/api-references.md#keepAutoTouchAwake-on)

`Examples`
```lua
keepAutoTouchAwake(true)
```

[Top](#table-of-contents)

-----

## How to copy, paste, input text?
> You need `AutoTouch inputText` special version to enable `inputText` feature

`Relative Extended Functions`
> * [`rootDir()`](/js/api-references.md#rootDir)

`Examples`
```js
const { copyText, clipText, inputText } = at 
//---------------------------------------------------
// Copy specified text to clipboard
copyText("This is a copied text!")

//---------------------------------------------------
// Get the text from the clipboard
const text = clipText()
alert(text)
//Popup shows the text to be copied: "This is a copied text!";

//---------------------------------------------------
// input text to the current input field, this function only works on `AutoTouch inputText` specifal version
inputText("Let's input some text automatically without tapping the keyboard!")
// Delete 3 character by inputing 3 backspaces.
inputText("\b\b\b") 
```

[Top](#table-of-contents)

------

## Other stuff

`Relative Extended Functions`
> * [`rootDir()`](/js/api-references.md#rootDir)
> * [`toast()`](/js/api-references.md#toast)
> * [`getDeviceOrientation()`](/js/api-references.md#getDeviceOrientation)
> * [`getScreenInfo()`](/js/api-references.md#getScreenInfo)
> * [`getSN()`](/js/api-references.md#getSN)
> * [`getLicense()`](/js/api-references.md#getLicense)
> * [`frontMostAppId()`](/js/api-references.md#frontMostAppId)
> * [`frontMostAppOrientation()`](/js/api-references.md#frontMostAppOrientation)

`Examples`
```js
const { rootDir, toast, vibrate, getDeviceOrientation, getScreenInfo, getSN, getLicense, frontMostAppId, frontMostAppOrientation, openURL } = at

//---------------------------------------------------
// Get root dir of AutoTouch
alert(`Root dir path is ${rootDir()}`)

//---------------------------------------------------
// Show message and hold for 5 seconds.
toast("Hello I'm a toast!", 5)
// Show message and hold for default 2 seconds.
toast("Hello again!")

//---------------------------------------------------
// Vibrate once.
vibrate()

//---------------------------------------------------
// Get device orientation
alert(`Current device orientation is : ${getDeviceOrientation()}`)

//---------------------------------------------------
alert(`Current device screen info : ${getScreenInfo()}`)

// Get width, height of the screen
const { width, height } = getScreenInfo()
alert(`Cureen device screen size: width: ${width}, height: ${height}`)

//---------------------------------------------------
// Get device SN
alert(`Serial Number of current device is ${getSN()}`)

//---------------------------------------------------
// get AutoTouch license of current device
alert(`AutoTouch license of current device is ${getLicense()}`)

//---------------------------------------------------
// Get identifier of the current front most app
alert(`Current front most app is : ${frontMostAppId()}`)

//---------------------------------------------------
// get orientation of current front most app
alert(`App interface orientation of current front most app is : ${frontMostAppOrientation()}`)

//---------------------------------------------------
// Open url, or open other apps' url scheme. Look at [Always-Updated List of iOS App URL Scheme Names](https://ios.gadgethacks.com/news/always-updated-list-ios-app-url-scheme-names-0184033/) and example: [Google Maps URL Scheme for iOS](https://developers.google.com/maps/documentation/urls/ios-urlscheme)
openURL("https://autotouch.net")
openURL("prefs:root=General&path=About")
openURL("musics://")
openURL("itms-apps://itunes.apple.com")
openURL("tel://+1123456")
openURL("clashofclans://")
```

[Top](#table-of-contents)

------

## Some utils
> These functions are inside `utils` module, not `at` module

`Relative Extended Functions`
> * [`intToRgb()`](/js/api-references.md#intToRgb)
> * [`rgbToInt()`](/js/api-references.md#rgbToInt)

`Examples`
```js
const { intToRgb, rgbToInt } = utils

//---------------------------------------------------
const color = 0x2B2B2B
const { red, green, blue }  = intToRgb()
alert(`rgb values of ${color.toString(16)} is red: ${red}, green: ${green}, blue: ${blue}`)

//---------------------------------------------------
const [r, g, b] = [200, 255, 100]
const intColor = rgbToInt(r, g, b)
alert(`Integer value of rgb(${r}, ${g}, ${b}) is ${intColor}`)
alert(`Hex format of color rgb(${r}, ${g}, ${b}) is ${intColor.toString(16)}`)
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


[Top](#table-of-contents)

-----

## Constants

## Types of physical keys

| Value     |  Specification  |
| -------- | ----  |
| KEY_TYPE.HOME_BUTTON | Home Button |
| KEY_TYPE.VOLUME_DOWN_BUTTON | Volume – Button |
| KEY_TYPE.VOLUME_UP_BUTTON | Volume + Button |
| KEY_TYPE.POWER_BUTTON | Power Button |

[Top](#table-of-contents)

## Types of dialog controls

| Value     |  Specification  |
| -------- | ----  |
| CONTROLLER_TYPE.LABEL | Text label |
| CONTROLLER_TYPE.INPUT | Input box |
| CONTROLLER_TYPE.PICKER | Picker |
| CONTROLLER_TYPE.SWITCH | Switch |
| CONTROLLER_TYPE.BUTTON | Button |
| CONTROLLER_TYPE.REMEMBER | Switch for remember user inputs |

[Top](#table-of-contents)

## Types of screen orientations

| Value     |  Specification  |
| -------- | ----  |
| ORIENTATION_TYPE.UNKNOWN   | Unknown orientation. Practical value is 0. |
| ORIENTATION_TYPE.PORTRAIT | Portrait screen. Home button is at the bottom. Practical value is 1. |
| ORIENTATION_TYPE.PORTRAIT_UPSIDE_DOWN | Upside-down portrait screen. Home button on the top. Practical value is 2. |
| ORIENTATION_TYPE.LANDSCAPE_LEFT | Landscape left screen. Home Key is in the left. Practical value is 3. |
| ORIENTATION_TYPE.LANDSCAPE_RIGHT | Landscape right screen. Home key is in the right. Practical value is 4. |

[Top](#table-of-contents)
