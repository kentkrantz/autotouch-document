# HTTP APIs

`Applicable to version 6.1.8 or higher`

------

# HTTP APIs
> There is a series of HTTP APIs for AutoTouch controlling in Local Area Netowork, they are the same APIs `Web Server` in AutoTouch Settings is using.

## Play a script
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

## Stop playing a script
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

## List files in a directory
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

## Create a new directory
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

## Create a new file
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

## Delete a file
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

## Rename a file or directory
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

[Top](#http-apis)