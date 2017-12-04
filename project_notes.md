# webpack项目笔记
### 第01节：认识WebPack的作用

- 更新webpack版本需要重新拉取node_modules

### 第02节：让你快速上手一个Demo
- Webpack其实是可以在终端（命令行）中使用的，基本使用方法如下：

 -  ```js
     webpack {entry file} {destination for bundled file}
    ```
    + {entry file}:入口文件的路径，本文中就是src/entery.js的路径；
    + {destination for bundled file}:填写打包后存放的路径。
    + 注意：在命令行中是不需要写{ }的。

    + 比如: `webpack src/entry.js dist/bundle.js`

### 第03节：配置文件：入口和出口
-