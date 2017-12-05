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
### 第06节：插件配置：配置JS压缩
- 压缩JS代码：
    - 引入一个uglifyjs-webpack-plugin(JS压缩插件，简称uglify)。
    - 虽然uglifyjs是插件，但是webpack版本里默认已经集成，不需要再次安装。
### 第08节：图片迈坑：CSS中的图片处理
`npm install --save-dev file-loader url-loader`
- file-loader：解决引用路径的问题，拿background样式用url引入背景图来说，我们都知道，webpack最终会将各个模块打包成一个文件，因此我们样式中的url路径是相对入口html页面的，而不是相对于原始css文件所在的路径的。这就会导致图片引入失败。这个问题是用file-loader解决的，file-loader可以解析项目中的url引入（不仅限于css），根据我们的配置，将图片拷贝到相应的路径，再根据我们的配置，修改打包后文件引用路径，使之指向正确的文件。

- url-loader：如果图片较多，会发很多http请求，会降低页面性能。这个问题可以通过url-loader解决。url-loader会将引入的图片编码，生成dataURl。相当于把图片数据翻译成一串字符。再把这串字符打包到文件中，最终只需要引入这个文件就能访问图片了。当然，如果图片较大，编码会消耗性能。因此url-loader提供了一个limit参数，小于limit字节的文件会被转为DataURl，大于limit的还会使用file-loader进行copy。

- 配置url-loader
    - 我们安装好后，就可以使用这个loader了，记得在loader使用时不需要用require引入，在plugins才需要使用require引入。

### 第14节：CSS进阶：消除未使用的CSS
 - `npm i -D purifycss-webpack purify-css`
 - 这里的-D代表的是–save-dev ,只是一个简写。

