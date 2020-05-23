JSBridge Document <!-- omit in toc -->
=====

`Applicable to version 7.0.4 or higher`

-----

## What is `JSBridge`?
> `JSBridge` is a mechanism implementated the ability to call `classes`, `methods`, `variables` of `Objective-C` from `JavaScript`.

## How to begin with `JSBridge`?
> * Learn `Objective-C` and `iOS` development for an hour before coding with `JSBridge`.
> * Whenever you want to make something, Google the `Objective-C` implementation first.
> * Use `use_jsbridge()` method to refer a `class` of `Objective-C` in `iOS`.
> * Use `.thisIsAMethod()` to call a method of `Objective-C`, e.g. `[alertView show]` => `alertView.show()`.
> * Use underline `_` to join method of `Objective-c` with multiple arguments, e.g. `[UIView animateWithDuration:duration animations:animations]` => `UIView.animateWithDuration_animations(duration, animations)`
> * Use `.setProperty(value)` instead of `.property = value` to set value to a property.
> * All stuff relative to `UI` much be put in the block `dispatch_async_main(function () {})` or it will crash.

## Usage and Examples

### How to make an `UIAlertView`?

`Original implementation with Objective-C`
```objc
UIAlertView *alertView = [[UIAlertView alloc] init];
alertView.title = @"What is this?"
alertView.message = @"This is UIAlertView of iOS which is called through JSBridge, you can use JSBridge to call any class/methods/variables of iOS, it makes anything possible!";
[alertView addButtonWithTitle:@"OK"];
[alertView show];
```

`Implement it with JSBridge`
```js
// Import required classes of iOS/Objective-C
const UIAlertView = use_jsbridge('UIAlertView')
// You can also use it directly like this: `use_jsbridge('UIAlertView').alloc().init()`

//-------------------------------------------------------------------------------
// !!!!!!!!ANYTHING relative to UI should be in dispatch_async_main block!!!!!!!!
//-------------------------------------------------------------------------------
dispatch_async_main(function () {
    // Show an alert view of iOS
    var alertView = use_jsbridge('UIAlertView').alloc().init();

    alertView.setTitle('What is this?');
    alertView.setMessage('This is UIAlertView of iOS which is called through JSBridge, you can use JSBridge to call any class/methods/variables of iOS, it makes anything possible!');
    alertView.addButtonWithTitle('OK');

    alertView.show();
})
```

-----

### How to make an `UIWindow`?

`Original implementation with Objective-C`
```objc
CGRect frame = CGRectMake(0, 0, 300, 300);
UIWindow *window = [[UIWindow alloc] initWithFrame:frame];
window.backgroundColor = [UICOlor redColor]; // this line equals to `[window setBackgroundColor:[UICOlor redColor]];` In Objective-c 
[window setWindowLevel:1000];
[window makeKeyAndVisible];
```

`Implement it with JSBridge`
```js
//-------------------------------------------------------------------------------
// !!!!!!!!ANYTHING relative to UI should be in dispatch_async_main block!!!!!!!!
//-------------------------------------------------------------------------------
dispatch_async_main(function () {
    const frame = { x: 0, y: 0, width: 300, height: 300 }
    const window = use_jsbridge('UIWindow').alloc().initWithFrame(frame)
    const color = use_jsbridge('UIColor').redColor()
    window.setBackgroundColor(color)
    window.setWindowLevel(1000)
    window.makeKeyAndVisible()
})
```

-----

### How to open an app or an URL?

`Original implementation with Objective-C`
```objc
NSString *urlString = @"https://autotouch.net";
// open Preferences: `NSString *urlString = @"prefs:root=General&path=About"`
// open Music App: `NSString *urlString = @"musics://"`
// open an item in App Store: `NSString *urlString = @"itms-apps://itunes.apple.com"`
// open telephone: `NSString *urlString = @"tel://+1123456"`
// open Preferences: `NSString *urlString = @"prefs:root=General&path=About"`
// open Preferences: `NSString *urlString = @"prefs:root=General&path=About"`

[[UIApplication sharedApplication] openURL:[NSURL URLWithString:urlString]];
```

`Implement it with JSBridge`
```js
// Open Map app with `JSBridge`
const url = use_jsbridge('NSURL').URLWithString('maps://');
use_jsbridge('UIApplication').sharedApplication().openURL(url);
```

-----

### How to show an image?

`Original implementation with Objective-C`
```objc
CGRect frame = CGRectMake(0, 0, 300, 300);
UIWindow *window = [[UIWindow alloc] initWithFrame:frame];
window.backgroundColor = [UICOlor redColor]; // this line equals to `[window setBackgroundColor:[UICOlor redColor]];` In Objective-c 
[window setWindowLevel:1000];
[window makeKeyAndVisible];
```

`Implement it with JSBridge`
```js
const UIWindow = use_jsbridge('UIWindow')
const UIImageView = use_jsbridge('UIImageView')
const UIImage = use_jsbridge('UIImage')
//-------------------------------------------------------------------------------
// !!!!!!!!ANYTHING relative to UI should be in dispatch_async_main block!!!!!!!!
//-------------------------------------------------------------------------------
dispatch_async_main(function () {
    // You need an UIWindow first
    const frame = { x: 0, y: 0, width: 300, height: 300 }
    const window = use_jsbridge('UIWindow').alloc().initWithFrame(frame)
    const color = UIColor.redColor()
    window.setBackgroundColor(color)
    window.setWindowLevel(1000)

    // Construct an UIImageView
    const imageViewFrame = { x: 30, y: 50, width: 200, height: 200 }
    const imageView = UIImageView.alloc().initWithFrame(imageViewFrame)
    const image = UIImage.imageNamed('/var/mobile/Library/AutoTouch/Scripts/Examples/images/cat.png')
    imageView.setImage(image)

    // Put the UIImageView on the window
    window.addSubview(imageView)

    // Show the window
    window.makeKeyAndVisible()

    // use window.setHidden(true) to dismiss the window
})
```

-----

### How to define a class for Objective-C?
> Use `defineClass(classDeclaration, [properties,] instanceMethods, classMethods)`

@param `classDeclaration`: class name, super classname and protocols  
@param `properties`: new propertie names, a string array  
@param `instanceMethods`: instance methods you want to override or add  
@param `classMethods`: class methods you want to override or add  

```objc
// Objective-C
@implementation MyTestObject
+ (void)shareInstance
{
}
@end
```

```js
// JavaScript
defineClass("MyTableViewController", [
    // new properties
], {
  // instance methods
}, {
  // Class static methods
  shareInstance: function() {
    ...
  },
})
```

-----

#### Override existing instance methods

> Use single underline `_` to join multiple param names of the original method:

```objc
// Objective-C
@implementation MyTableViewController
- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
}
@end
```
```js
// JavaScript
defineClass("MyTableViewController", [], {
  tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
    ...
  },
})
```

> Use double underlines `__` to replace single underline `_` in the original method name of Objective-C:

```objc
// Objective-C
@implementation MyTableViewController
- (NSArray *) _dataSource {
}
@end
```

```js
// JavaScript
defineClass("MyTableViewController", [], {
  __dataSource: function() {
  },
})
```

> Call original method by adding prefix `ORIG` to the method name.

```objc
// Objective-C
@implementation MyTableViewController
- (void) viewDidLoad {
}
@end
```

```js
// JavaScript
defineClass("MyTableViewController", [], {
  viewDidLoad: function() {
     self.ORIGviewDidLoad();
  },
})
```

-----

#### Override existing class static methods
> Same rules as instance methods

```objc
// Objective-C
@implementation MyTestObject
+ (void)shareInstance
{
}
@end
```

```js
// JavaScript
defineClass("MyTableViewController", [
    // new properties
], {
  // instance methods
}, {
  // Class static methods
  shareInstance: function() {
    ...
  },
})
```

-----

#### Override `Category` methods
> Same rules as overriding instand methods and class methods

```objc
// OBJC
@implementation UIView (custom)
- (void)methodA {
}
+ (void)clsMethodB {
}
@end
```
```js
// JavaScript
defineClass('UIView', {
  methodA: function() {
  }
}, {
  clsMethodB: function() {
  }
});
```

-----

#### Use `super()`
> `self.super()` is `super` method of `Objective-C`, use it to call parent class's methods/properties

```js
// JavaScript
defineClass("MyTableViewController", {
  viewDidLoad: function() {
     self.super().viewDidLoad();
  }
})
```

-----

#### get/set properties

> Use `get` and `set` to get / set existing property

```objc
// Objective-C
@interface MyTableViewController
@property (nonatomic) NSArray *data;
@property (nonatomic) NSString *shareURL;
@property (nonatomic) NSString *shareTitle;
@end
@implementation MyTableViewController
@end
```
```js
// JavaScript
defineClass("MyTableViewController", {
  viewDidLoad: function() {
     var data = self.data();     //get property value
     self.setData(data.toJS().push("Something"));     //set property value
     var sel = self;
     self.bridge().registerHandler_handler('h5ToNativeShareDialog', block('NSDictionary *',function(data,responseCallback) {         
         sel.setShareURL(data.objectForKey('url'));
         sel.setShareTitle(data.objectForKey('title'));
     }));
})
```

> Use `getProp()` and `setProp_forKey()` to get / set new property

```objc
// Objective-C
@interface MyTableViewController
@end
@implementation MyTableViewController
@end
```
```js
// JavaScript
defineClass("MyTableViewController", {
  init: function() {
     self = self.super().init()
     self.setProp_forKey("Something", "data")     //add new property (id data)
     return self;
  }
  viewDidLoad: function() {
     var data = self.getProp("data")     //get the new property value
  },
})
```

> Put new property names at the second parameter of `defineClass()`

```js
// JavaScript
defineClass("MyTableViewController", ['data', 'totalCount'], {
  init: function() {
     self = self.super().init()
     self.setData(["a", "b"])     // new property (id data)
     self.setTotalCount(2)
     return self
  },
  viewDidLoad: function() {
     var data = self.data()     // get property
     var totalCount = self.totalCount()
  },
})
```

> Use `valueForKey()` and `setValue_forKey()` to get / set private variables

```objc
// Objective-C
@implementation MyTableViewController {
     NSArray *_data;
}
@end
```
```js
// JavaScript
defineClass("MyTableViewController", {
  viewDidLoad: function() {
     var data = self.valueForKey("_data")     //get member variables
     self.setValue_forKey(["Something"], "_data")     //set member variables
  },
})
```

-----

#### Add new methods
> You can add new methods to the existing Class, if you want to call the new method in Objective-C, all the params type is `id` type of Objective-c.

```objc
// Objective-C
@implementation MyTableViewController
- (void)viewDidLoad
{
     NSString* data = [self dataAtIndex:@(1)];
     NSLog(@"%@", data);      //output: Patch
}
@end
```
```js
// JavaScript
var data = ["JS", "Patch"]
defineClass("MyTableViewController", {
  dataAtIndex: function(idx) {
     return idx < data.length ? data[idx]: ""
  }
})
```

> You can make class conforms to protocols:

```js
// JavaScript
defineClass("MyViewController: UIViewController<UIScrollViewDelegate, UITextViewDelegate>", {
  
})
```

> If you want to add method that defined in protocol and params or return types is not `id`, you must conforms to the protocol.

```objc
// Objective-C
@protocol UIAlertViewDelegate <NSObject>
...
- (void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex;
...
@end
```

```js
// JavaScript
defineClass("MyViewController: UIViewController <UIAlertViewDelegate>", {
  viewDidAppear: function(animated) {
    var alertView = use_jsbridge('UIAlertView')
      .alloc()
      .initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles(
        "Alert",
        self.dataSource().objectAtIndex(indexPath.row()), 
        self, 
        "OK", 
        null
      )
     alertView.show()
  }
  alertView_clickedButtonAtIndex: function(alertView, buttonIndex) {
    console.log('clicked index ' + buttonIndex)
  }
})
```

-----

### How to use `struct` of Objctive-C?

> AutoTouch has preset for structs of Obejctive-C: `CGRect`, `CGPoint`, `CGSize`, `NSRange `, you can use them directly.

```objc
// Objective-C
UIView *view = [[UIView alloc] initWithFrame:CGRectMake(20, 20, 100, 100)];
[view setCenter:CGPointMake(10,10)];
[view sizeThatFits:CGSizeMake(100, 100)];
CGFloat x = view.frame.origin.x;

NSRange range = NSMakeRange(0, 1);
```
```js
// JavaScript
const view = UIView.alloc().initWithFrame({x:20, y:20, width:100, height:100})
view.setCenter({x: 10, y: 10})
view.sizeThatFits({width: 100, height:100})

const x = view.frame().x
const range = {location: 0, length: 1}
```

>  You can use `defineStruct` to define other structs beside the four

```js
// JavaScript
defineStruct({
  name: 'StructName',
  types: 'SFF', // look below
  keys: ['propertyName1', 'propertyName1', 'propertyName3']
})
```

```js
// type values:
'c': char 
'C': unsigned char 
's': short 
'S': unsigned short 
'i': int 
'I': unsigned int 
'l': long 
'L': unsigned long 
'q': long long 
'Q': unsigned long long 
'f': float 
'F': CGFloat 
'N': NSInteger 
'U': NSUInteger 
'd': double 
'B': BOOL 
```

`For example`
```objc
// Objective-C
struct DemoStruct {
  CGFloat a;
  long b;
  double c;
  BOOL d;
}

@implementation DemoClass
+ (void)passStruct:(DemoStruct)s;
+ (DemoStruct)returnStruct;
@end
```

```js
// JavaScript
defineStruct({
  name: 'DemoStruct',
  types: 'FldB',
  keys: ['a', 'b', 'c', 'd']
})

const DemoClass = use_jsbridge('DemoClass')
DemoClass.passStruct({a:1, b:2, c:4.2, d:1})
const s = DemoClass.returnStruct()
```

-----

### How to use `selector` of Objective-C?

```objc
// Objective-C
[self performSelector:@selector(viewWillAppear:) withObject:@(YES)];
```

```js
// JavaScript
self.performSelector_withObject("viewWillAppear:", 1)
```

### How to use `nil` of Objective-C?
> `null`, `undefined` of `JavaScript` equal `nil`, `NULL` of `Objective-C`<br/>
> `nsnull` of `JavaScript` equals `NSNull`of `Objective-C`

```objc
// Objective-C
@implementation TestObject
+ (BOOL)testNull(NSNull *null) {
    return [null isKindOfClass:[NSNull class]]
}
@end
```
```js
// JavaScript
use_jsbridge('TestObject').testNull(nsnull) //return 1
use_jsbridge('TestObject').testNull(null) //return 0
```

```js
var url = "";
var rawData = NSData.dataWithContentsOfURL(NSURL.URLWithString(url));
if (rawData != null) {} //Don't use this to check null
if (!rawData){} // Use this to check null
```

-----

### Use `NSArray`, `NSString`, `NSDictionary` of Objective-C
> You should use `NSArray`, `NSString`, `NSDictionary` of Objective-C as a common `NSObject`

```objc
// Objective-C
@implementation DemoObject
+ (NSArray *)data
{
  return @[[NSMutableString stringWithString:@"JS"]]
}
+ (NSMutableDictionary *)dict
{
    return [[NSMutableDictionary alloc] init];
}
@end
```

```js
// JavaScript
const DemoObject = use_jsbridge('DemoObject')
const ocStr = DemoObject.data().objectAtIndex(0)
ocStr.appendString("Something")

const dict = DemoObject.dict()
dict.setObject_forKey(ocStr, 'name')
console.log(dict.objectForKey('name'))
```

> You can also use `.toJS()` to covert `NSArray`, `NSString`, `NSDictionary` to array, string, dict of `JavaScript`

```js
// JavaScript
var data = use_jsbridge('DemoObject').data().toJS()
// data instanceof Array === true
data.push("Ok")

const dict = DemoObject.dict()
dict.setObject_forKey(data.join(''), 'name')
dict = dict.toJS()
console.log(dict['name'])
```

-----

### How to use `block` of Objective-C?

```objc
// Objective-C
@implementation DemoObject
+ (void)request:(void(^)(NSString *content, BOOL success))callback
{
  callback(@"I'm content", YES);
}
@end
```

```js
// JavaScript
use_jsbridge('DemoObject').request(block("NSString *, BOOL", function(ctn, succ) {
  if (succ) log(ctn)
}))
```

```objc
// Objective-C
@implementation DemoObject
typedef void (^JSBlock)(NSDictionary *dict);
+ (JSBlock)genBlock
{
  NSString *ctn = @"Submit";
  JSBlock block = ^(NSDictionary *dict) {
    NSLog(@"I'm %@, version: %@", ctn, dict[@"v"])
  };
  return block;
}
+ (void)execBlock:(JSBlock)blk
{
}
@end
```

```js
// JavaScript
const blk = use_jsbridge('DemoObject').genBlock();
blk({v: "0.0.1"});

//-------------------
var blk = use_jsbridge('DemoObject').genBlock();
blk({v: "0.0.1"});
use_jsbridge('DemoObject').execBlock(block("id", blk));
```

```objc
// Objective-C
+ (void)requestUrl:(NSString *)url withCallback:(void(^)(id data))callback;
```

```js
// JavaScript
defineClass('TestObject', {
  requestUrl_withCallback: function(url, callback) {
    self.handleCallback(block('id', callback));
  }
});
```

> How to use `self` in a `block`?
```js
// JavaScript
defineClass("MyViewController", {
  viewDidLoad: function() {
    var slf = self;
    use_jsbridge("TestObject").callBlock(block(function(){
      //`self` is not available here, use `slf` instead.
      slf.doSomething();
    });
  }
}
```

### `__weak`, `__strong`

```objc
// Objective-C
- (void)test {
    __weak id weakSelf = self;
    [self setCompleteBlock:^(){
        [weakSelf blabla];
    }]
}
```

```js
// JavaScript
var weakSelf = __weak(self)
self.setCompleteBlock(block(function(){
    weakSelf.blabla();
}))

// How to convert it to `__strong`
var weakSelf = __weak(self)
self.setCompleteBlock(block(function(){
    var strongSelf = __strong(weakSelf)
    strongSelf.blabla();
}))
```

### `GCD`

```objc
// Objective-C
dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(1.0 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
  // do something
});

dispatch_async(dispatch_get_main_queue(), ^{
  // do something
});
```

```js
// JavaScript
dispatch_after(1.0, function(){
  // do something
})
dispatch_async_main(function(){
  // do something
})
dispatch_sync_main(function(){
  // do something
})
dispatch_async_global_queue(function(){
  // do something
})
```

### Constants, enum, macro, global variables

> You can't use Contants and enums of Objective-C directly in JavaScript

```objc
// Objective-C
[btn addTarget:self action:@selector(handleBtn) forControlEvents:UIControlEventTouchUpInside];
```

```js
// JavaScript
// value of UIControlEventTouchUpInside is 1<<6 from Apple's document
btn.addTarget_action_forControlEvents(self, "handleBtn", 1<<6);

// OR redefine the constants in js
//js
const UIControlEventTouchUpInside  = 1 << 6;
btn.addTarget_action_forControlEvents(self, "handleBtn", UIControlEventTouchUpInside);
```

> Macro of Objective-C

```objc
// Objective-C
#define TABBAR_HEIGHT 40
#define SCREEN_WIDTH [[UIScreen mainScreen] bounds].size.height
[view setWidth:SCREEN_WIDTH height:TABBAR_HEIGHT];
```

```js
// JavaScript
view.setWidth_height(UIScreen.mainScreen().bounds().height, 40);
```

> Get global variable defined in an Objective-C class

```objc
// Objective-C
static NSString *name;
@implementation TestObject
+ (NSString *)name {
  return name;
}
@end
```

```js
// JavaScript
const name = use_jsbridge('TestObject').name()
```