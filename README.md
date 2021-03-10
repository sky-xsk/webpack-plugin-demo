# webpack-plugin-demo

### webpack插件开发和相关记录

### npm install

## npx webpack  构建编译

#### 将 src/index.js 作为入口起点,生成 dist/main.js 输出

## npx webpack --config webpack.config.js

####  --config 选项表明，可以传递任何名称的配置文件

### npm run build

### npm run watch 

####  "watch" 依赖图中所有文件的更改。如果其中一个文件被更新，代码将被重新编译，所以不必再去手动运行整个构建。


### npm run start 

####  资源作为 server 的可访问文件 相当于本地服务


### npm run server 
####  启动服务 express框架


#### tip: webpack-dev-middleware 是一个封装器(wrapper)，它可以把 webpack 处理过的文件发送到一个 server。 webpack-dev-server 在内部使用了它，然而它也可以作为一个单独的 package 来使用，以便根据需求进行更多自定义设置。下面是一个 webpack-dev-middleware 配合 express server 的示例。