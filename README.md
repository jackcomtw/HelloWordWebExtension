# HelloWorld Chrome Extension

## 專案名稱
HelloWorld Chrome Wenb Extension

## 如何從零開始建立專案

1. 建立專案資料夾：
    ```bash
    mkdir HelloWord
    cd HelloWord
    ```

2. 初始化專案：
    ```bash
    npm init -y
    ```

3. 建立必要的檔案和資料夾：
    ```bash
    mkdir src
    touch src/manifest.json src/background.js src/index.html src/index.js
    mkdir -p src/images/icons
    ```

4. 編輯 `manifest.json` 文件，內容如下：
    ```json
    {
      "manifest_version": 3,
      "name": "HelloWorld",
      "version": "0.1.0",
      "description": "My Chrome Extension",
      "background": {
        "service_worker": "background.js"
      },
      "action": {
        "default_popup": "index.html",
        "default_icon": {
          "16": "images/icons/icon-16.png",
          "32": "images/icons/icon-32.png",
          "64": "images/icons/icon-64.png",
          "128": "images/icons/icon-128.png"
        }
      },
      "permissions": [
        "storage"
      ]
    }
    ```

5. 編輯 `background.js` 文件，內容如下：
    ```javascript
    console.log('Background script running');
    ```

6. 編輯 `index.html` 文件，內容如下：
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>HelloWorld Popup</title>
    </head>
    <body>
        <h1>Hello, World!</h1>
    </body>
    </html>
    ```
7. 編輯 `index.js` 文件，內容如下：
    ```javascript
    console.log('Hello, Chrome Extension!');
    ```

## 專案裡每個檔案的解釋

- `manifest.json`: Chrome 擴充功能的配置文件，定義了擴充功能的基本信息和權限。
- `background.js`: 背景腳本，負責處理擴充功能的後台邏輯。
- `index.html`: 擴充功能的彈出頁面，當用戶點擊擴充功能圖標時顯示。
- `images/icons/`: 存放擴充功能的圖標文件。
- `index.js`: 彈出頁面的 JavaScript 文件。

## 如何開發專案
- 在專案根目錄下執行以下命令：
    ```bash
    npm run watch
    ```
- 在 Chrome 瀏覽器中打開 `chrome://extensions/`，啟用開發者模式，然後點擊「加載已解壓的擴充功能」，選擇專案根目錄，即可加載擴充功能。


## 如何打包專案

- 在專案根目錄下執行以下命令：
    ```bash
    npm run build
    ```
