# About AutoTouch

`Applicable to version 7.0.4 or higher`

::: tip What is AutoTouch?
- AutoTouch is a "Macro" tool used to record and playback human touching and pressing on the mobile device.
- It simulates touching and keys pressing.
- It runs Lua scripts.
- It provides several extended functions to achieve automation.
- It needs Jailbreak environment.
- It provides a Script Store to sell and buy scripts.
:::

-----

## How to install?
- You can search and install AutoTouch in Cydia diredctly, it is released in BigBoss.
- You can also add the official repo: [https://apt.autotouch.net](https://apt.autotouch.net) to Cydia and install AutoTouch there.
- There is also a beta repo: [https://beta.autotouch.net](https://beta.autotouch.net) which contains more fresh but not so stable packages.

## How to use Activator?
- By default AutoTouch uses volume decrease button holding or pressing to control everything, untill you install Activator by hand.
- Add official repo: http://rpetri.ch/repo/ to Cydia.
- Install Activator form that repo.
- AutoTouch will automatically detect Activator and use it as the default control method.
- Customize the actions you want to use to control AutoTouch by Activator.

## How to record?
- At the interface where you want to start recording , hold volume decrease button (or other main control action set with Activator by youself, this point will not be repeated below) to call out the control panel.
> ![Control Panel](https://i.imgur.com/ELcGi3A.png)
- Press the "Record" button on the control panel to start recording.
- It will record all your touching and key pressing to a script until you stop it.
- Hold on volume decrease button (or other Activator action) again to stop the recording.
- Then, there will be a Lua script named with create time in the script list. You can edit, rename or playback it.

## How to play script?
- Hold on volume decrease button to call out the control panel.
- Click the script you want to run.
- There is a play options button on the control panel, it will ask for options if you turn on it.
- There is a H button means hold mode, it will enter hold mode if you turn on it. In hold mode, every time your tap the volume down button(or action you set in Activator) it will start playing.
- Hold volume decrease button to forcedly stop the playing, or quit the `Hold mode` status.
- Long pressing volume down button will stop the playing forcely.

## How to take screenshot?
- Press "Snap" button on the control panel to take screenshot, or just use iOS's screenshot method with which you are able to edit it directly.
- The screenshot will be saved as PNG image into "AutoTouch" album of iOS Photo Library, then it might be used to speficy parameters of getColors, findColors or findImage.

## How to write a script?
- Press "+" button on top right of the local script list, choose “Create a script” to open the script editor.
- Write the code there.
- Press "save" button to save the script.

## How to use the "Function Helper" while script coding?
- There are "Extensions", "Indent" and "Statements" buttons on top of the keyboard in the script editor. You can conveniently insert extended functions, indent or common statement of Lua Language.
- Press the "Extension" button to present the extended functions list, click a function to insert into the script diretly.
- Press the "HELPER" button on the function list, it will help you to determine the coordinates, colors or key flags for the functions.
> 
>   ![Function Helper](https://i.imgur.com/ng2QWrz.png)

## How to write and manage scripts on the computer?
- Turn on  Web Server at AutoTouch setting and visit the told URL from browser on computer. Manage scripts there.
- You can also turn on WebDAV Server and connect the told address with  WebDAV client on computer. 

## How to use Package to orgainize the script project?
- You can create a Package as script project to contain different scripts, files and images etc. Package must have a `index.js` or `main.lua` file as the entrance of the execution. A Package in fact is a directory named with .at extension such as xxx.at.
- Package can be encrypted to xxx.ate which is also execuate-able and can be released to Script Store.

## How to encrypt the scripts?
- Tap accessory button of a package or script in the local script list, choose "Encrypt".
- Input the encryption password. Or leave it blank if you don't want one.
- Press "Confirm" to complete the encryption. A encrypted file with the same name but ended with .lua.e or .ate will be generated in the script list then.
- You can play the encrypted scripts, or release them to Script Store.

## How to sell your script in Script Store?
- Visit https://m.autotouch.net from browser on computer.
- Complete the details required to create a new script. 
- Do provide a detailed and beautify html page for that script as the details page, a YouTube video will be much better.
- Upload a encrypted script or package as a new version to this script.
- Wait for the approvement.
- You should setup the Digital Rights Management in the script by yourself, AutoTouch Script Store can not help you by now.

## How to download and buy scripts from Script Store?
- You can directly download all scripts from the store.
- You need to contact the author to buy the decription password. Do be careful not to be cheated, AutoTouch can do nothing to protect your money provenly.

## How to buy AutoTouch license?
- Tap License on AutoTouch settings to enter the license management view.
- Read the Instructions and do be aware that AutoTouch license has ONE YEAR validity period!
- It will automatically activate current device after the payment if you use PayPal (If failed just follow the next step).
- You can query bought licenses with your PayPal ID email, or any activated device SN.
- You can activate another device with a license after you query it out.
- You can also "Activate Current Device" diretly with a license key bought from other devices.
- You should make sure it shows "License Downloaded" at top-right of the License view after it's activated.
- It allows only one time activation a day, you may do it again after 24 hours if you need.