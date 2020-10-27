styled-components 和 react-modal 和 electron

參考: https://www.npmjs.com/package/react-modal
參考: http://reactcommunity.org/react-modal/
參考: hhttps://styled-components.com/

This project was bootstrapped with [electron](https://www.npmjs.com/package/electron).

參考: https://blog.csdn.net/css_aaa/article/details/101944177

## Available Scripts

安裝React：yarn create react-app my-app建立React模組

### `npm start`

### `npm install -save electron`

配置 main.js
配置 package.json

### `npm run electron-start`

啟動 Electron

打包 React 項目

修改 main.js,因為現在你要將react項目打包在 build 文件夾下面，所以加載應用處改成如下。

### `npm run-script build`

### `npm install electron-packager --save-dev`

打包 Electron

### `npm install electron-packager -g`

electron-packager 命令：
"package": "electron-packager ./build knownsec-fed --platform=win32 --arch=x64 --win --out ./out --electron-version 6.0.10"

非常重要！！！打包前將 main.js 和 package.json 複製到 build 文件夾下，同時修改 build 文件夾下的 main.js

### `npm run-script package`

開始包 會生成 out 資料夾唷
