# Release Notes
-----

## v7.0.7
`2020-05-31`
> * **BREAKING CHANGES** Merged parameters `findingTimes`, `findingTimeLong`, `findingTillTime` of `findColors`, `findImage`, `findText` to one parameter `duration` which has three formats to present the three intentions: 
>   1. `duration: 10` means repeat finding 10 times, the value must be a number, can't be a string; 
>   2. `duration: '60s'` means keep finding for 60 seconds, the value must be seconds + a character 's'; 
>   3. `duration: '2020-05-30 12:00:00'` means keep finding till 2020-05-30 12:00:00. Default is `duration: 10` means repeat 10 times, the value must be a string.  
> * Fixed bug of freezing caused by some errors interrupt playing.

## v7.0.6
`2020-05-30`
> * New functions `recognizeText` and `findText`, `recognizeText` is a stable method for text recognition, `findText` is a method continually find specified text on the screen. Also they have a `debug` mode which could produce processing image to a `Debug` folder. Look into the `Examples` folder to learn usages. (Only available on iOS 13 and above) 
> * Make `findColors` and `findImages` both have THREE usages: 
>   1. execute finding a single time synchronously; 
>   2. execute finding a single time asynchronously; 
>   3. continually find specified colors/image on the screen same as `findText`.
> * **BREAKING CHANGES** Exsiting for a short time, `findColorsAsync` and `findImageAsync` are gone, they have been integrated into `findColors` and `findImages`  
> * Fixed bug of timer with license  
(New functions are JavaScript Only)

![`findText`](https://i.imgur.com/dq6luoT.png)
![`findText`](https://i.imgur.com/0Hr5j97.png)

## v7.0.5
`2020-05-26`
> * Fixed bug of `keyDown`, `keyUp` lost in recording.

## v7.0.4
`2020-05-23`
> *  **BREAKING CHANGE**: use `use_jsbridge()` instead of `use()` in `JSBridge` to import an object.
> *  Preset most popular HTTP library `axios` and JavaScript utility library `lodash` into AutoTouch.
> *  Support require a module from remote url, e.g. `const lodash = require('https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js')`

## v7.0.3
`2020-05-20`
> *  New module `fs` provided a batch of extended functions for file/directory operations, pls look at the `test_file_operations.js` in `Examples` to learn the usage.

## v7.0.2
`2020-05-19`
> * New extended JavaScript function: `exec()` which is used to execute shell command.

## v7.0.1
`2020-05-17`
> *  Bug fixes

## v7.0.0
`2020-05-15`
> *  Added JavaScript support
> *  Added `JSBridge` support with which you're able to call `classes/methods/variables` of `Objective-C` from `JavaScript`
> *  Bug fixes

## v6.0.0
`2019-12-11`
> *  Supports iOS 13 (install from repo: https://apt.autotouch.net)

## v5.1.5
`2019-07-07`
> *  `tesseract ocr` is supported, pls look a the [doc](https://docs.autotouch.net/#ocrregion-languages-threshold-whitelist-blacklist-timeout-tessdataparentdir-debug)

## v5.1.2-7
`2019-06-14`
> *  `dialog` is improved, more buttons definition is supported, and it will return flag of the tapped button.
> *  Old `dialog` has been totally redesigned, but the new `dialog` can cover the old code.
> *  `dialog` has a new parameter `orientations` to control the orientatios.

## v5.1.2-5
`2019-06-14`
> *  Added log view, image view, txt file edit supporting to web dashboard.

## v5.1.2-3
`2019-06-13`
> *  New function for exiting current script execution: `exit()`.
> *  New function for getting current script path: `currentPath()`.
> *  Bug fix of `findImage`.

## v5.1.2-1
`2019-06-08`
> *  Provides a way to fix the conflict with third party Apps like SnapChat, just turn on "Fix App Conflict" in Settings>Options.
> *  Improved findImage and findImage method 2 (Look at last parameter of findImage function).

## v5.1.1-1
`2019-05-27`
> *  Hold volume up button to stop all running scripts.
> *  Added extension functions: setAutoLaunch, listAutoLaunch.
> *  Bug fixes of screenshot/getColors/findColors/findImage, dialog.

## v5.1.0
`2019-05-03`  
> * Compatible to A12 (iPhone Xs, Xs Max, Xr) with Chimera/Sileo.
> * Bug fixes of findImage.
> * Bug fixes of touching on home screen.
> * Some refactoring.

## v5.0.6
`2019-04-06`  
> * New powerful and stable `findImage` function comletely replaces the old one. [Learn more](https://docs.autotouch.net/#findimagetargetimagepath-count-threshold-region-debug)

## v5.0.5
`2019-04-04`  
> * Integrated some powerful [Lua extension libraries](https://docs.autotouch.net/#extension-libraries): `LuacURL`, `LuaSocket`, `LuaSec`, `LuaSqlite3`, `LuaFileSystem`
> * Supports adding Lua extension libraries by userself, [how?](https://docs.autotouch.net/#extension-libraries)
> * Bug fixes

## v5.0.4
`2019-03-30`  
> * New function [`openURL(urlString)`](https://docs.autotouch.net/#openurlurlstring)
> * Bug fixes

## v5.0.0
`2019-03-07`  
> * Supports iOS 12 with un0ver jailbreak.

## v4.3.0
`2018-09-01`  
> * Upgraded Lua from 5.2 to 5.3.
> * **MOST IMPORTANT:** **Coordinate system** of AutoTouch has totally changed. The old coordinate system was irrespective to orientation, (0,0) was always at the left-top of the device relative to the home button, so much convertion was needed in the scripts. Now the new coordinate system is respective to orientation, (0,0) is always at the left-top of the interface of the active app front most. With this feature, no convertion is needed, left-top of the interface is the left-top, AutoTouch will adjust it automatically for you. For example, a script for clash of clans , should just consider landscape, because no portrait for this game. MEANWHILE, the landscape right and left are the same, so just consider the landscape. So, in this new version, you have no need to consider orientation and covertion any more.
> * Brought a new feature called "Package" with which you'are able to put serval scripts into one project, it needs a main.lua file as the executing entrance, your can require other modules in main.lua. Package can be encryped and compressed the same as single lua file.
> * New function `appActivate` which run a specified app and wait until that app comes to the font most.
> * New Play button on the scripts list view. If you provide `appActivate()` function in the scripts(just as the recorded scripts do), when you click on the Play button, it will automatically switch to the target app.
> * New function `toast`, use it like `toast("message", delaySeconds)` to show message with out UI block.

## v4.2.2
`2018-08-05`  
> * Brought Touch Indicator feature to show where it's touched.
> * Use toast instead of alert view to hint status.
> * New modern control panel UI.
> * Huge refactoring.
> * Bug fixes.


## v4.1.0-5
`2018-07-07`  
> * Supports to iOS 11.3.1.
> * Replace volume decrease button click with long press.
> * Disable iOS smart converting of dashes and quotes.
> * Fixed bug of "Play Later".
> * Fixed bug of Lua io.popen.

## v4.1.0
`2018-06-26`  
> * Bug fixes.

## v4.0.3
>
> * Supports iOS 11.

## v3.6.1
> 
> * Control with HTTP API and web.

## v3.6.0
> 
> * Fit for iOS 9.3.2 ~ 9.3.3.

## v3.5.4-2
> 
> * All Activator actions are back.
> * New clearDialogValues function.
> * Some other things are improved.

## v3.5.4
> 
> * Refactored image/color finding for better performance.
> * Fixed/redesign Activator settings.
> * Added time scheduler.

## v3.5.3
> 
> * Integrates "AutoTouch for iOS 8" and "AutoTouch for iOS 9" to one "AutoTouch".
> * Provides dialog function to show a customized dialog.
> * Provides `getOrientation` function.

## v3.5.2
> 
> * The coordinate/size system has been changed from iOS point measurement to exact screen pixel measurement(For example: the size of iPhone 6 Plus is used to be 414x736, now it's 1242x2208. The old scripts will be adapted automatically while old SCREEN_RESOLUTION is defined at the top of the scripts. This change influences `touchDown/touchMove/touchUp/getColor/findColor/findColors/findImage/screenshot` and all related).
> * Functions `getColor/findColor/findColors/findImage/screenshot` has been refactored to be more accurate and stable.
> * All images produced or used by `screenshot/findImage/getColor/findColor/findColors` are restricted to BMP file only, the screenshot taked by function screenshot will be saved as BMP file at rootDir of AutoTouch. All screenshots/images used inside AutoTouch should be take with function screenshot only

## v3.5.1-3
> 
> * Fixed the bug causing location faking failed.
> * Fixed the bug causing inputText repeat.
> * Improved the license view.

## v3.5.1
> 
> * Fixed the bug causing crash after reboot/respring.

## v3.5.0
> 
> * New fakeLocation function for faking your geographic position.
> * Fixed playAudio function bug and added times parameter support.
> * New functions about audio: pauseAudio, resumeAudio, stopAudio.
> * Fixed some other bugs.

## v3.1.1
> 
> * New extensions:`findColors, findColorsTap, findImageTap, keep, keepFindingColor, keepFindingColors, keepFindingImage, keepFindingColorTap, keepFindingColorsTap, keepFindingImageTap, clipText, inputText, keyDown, keyUp, appState`.
> * Added region support for `findColor`, `findImage`.
> * Merged screenshot and screenshotRegion to screenshot with region argument.
> * Added color picker, coordinate picker, app identifier picker, key picker as function inserting helper in script editor.
> * Added Web Server and WebDAV Server for editing scripts at PC.
> * New layout of UI.
> * Added io.popen support.