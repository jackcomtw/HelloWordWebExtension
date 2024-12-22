# Project
	- [helloWord] (file:\\/home/jackchen/WebExtensionWorkspace/HelloWord)
# VSC
	- 安裝VSCode Chrome Extension Developer Tools
		- Commands
			-Chrome Extension: Create New
				Description: Creates a new Chrome extension (opens a webview for parameters).
				ID: chrome-extension-developer-tools.create
			-Chrome Extension: Watch Files
				Description: Uses webpack to watch extension files.
				ID: chrome-extension-developer-tools.watch
			-Chrome Extension: Build Files
				Description: Uses webpack to package Chrome extension for publishing.
				ID: chrome-extension-developer-tools.build		
# npm
	- 建立 package.json
		```
			{
				"name": "HelloWorld",
				"version": "0.1.0",
				"description": "My Chrome Extension",
				"private": true,
				"scripts": {
					"watch": "webpack --mode=development --watch --config config/webpack.config.js",
					"build": "webpack --mode=production --config config/webpack.config.js"
				},
				"devDependencies": {
					"webpack": "^5.97.1",
					"webpack-cli": "^6.0.1",
					"babel-loader": "^8.2.3",
					"@babel/core": "^7.14.6",
					"@babel/preset-env": "^7.14.7"
				}
			}
		```

	- 安裝 Webpack 和 Webpack CLI，這會在 node_modules 目錄中安裝 Webpack 和 Webpack CLI，並生成 ./node_modules/webpack/bin/webpack.js 文件。
		- `npm install --save-dev webpack webpack-cli`
	- 創建 Webpack 配置文件
		```
		mkdir -p config
		touch config/webpack.config.js

		```
	- 編輯 Webpack 配置文件

		``` 
			const path = require('path');

			module.exports = {
			entry: './src/index.js', // 入口文件
			output: {
				filename: 'bundle.js', // 輸出文件名
				path: path.resolve(__dirname, '../dist') // 輸出目錄
			},
			mode: 'development', // 默認模式
			module: {
				rules: [
				{
					test: /\.js$/, // 處理所有 .js 文件
					exclude: /node_modules/, // 排除 node_modules 目錄
					use: {
					loader: 'babel-loader', // 使用 Babel 轉譯
					options: {
						presets: ['@babel/preset-env'] // 使用 @babel/preset-env 預設
					}
					}
				}
				]
			},
			resolve: {
				extensions: ['.js']
			},
			watchOptions: {
				ignored: /node_modules/
			}
			};		
		```
# Web Extension
	- 編輯 src/manifest.json 文件
		```
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
				"16": "images/icon-16.png",
				"48": "images/icon-48.png",
				"128": "images/icon-128.png"
				}
			},
			"permissions": [
				"storage"
			]
			}
		```
	- 編輯 src/background.js 文件
		```
		chrome.runtime.onInstalled.addListener(() => {
			console.log('HelloWorld Extension Installed');
		});
		```
	- 編輯 src/index.html 文件
		```
			<!DOCTYPE html>
			<html lang="en">
			<head>
			<meta charset="UTF-8">
			<title>HelloWorld Extension</title>
			</head>
			<body>
			<h1>Hello, Chrome Extension!</h1>
			<script src="index.js"></script>
			</body>
			</html>
		```
# 目錄結構
```
/home/jackchen/WebExtensionWorkspace/HelloWord/
├── config/
│   └── webpack.config.js
├── src/
│   ├── index.js
│   ├── background.js
│   └── manifest.json
├── dist/
├── package.json

```		

