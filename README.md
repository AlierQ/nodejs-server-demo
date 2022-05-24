# nodejs-test

## 启动应用
`node server.js 8888`

或者

`node server 8888`

## 添加路由
1. 编辑server.js文件，添加相应else if
2. 重新运行上方的命令

## 后台启动应用
### 创建记录文件
`touch log` 
### 运行服务
`node server.js 8888 >log log 2>&1 &` 

会返回一个进程号

### 关闭服务
`kill -9 进程号`

### 关闭node所有进程

`killall node`
