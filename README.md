# W&A project-W&A服装品牌网站设计
#### 项目使用Vue.js框架+Bootstrap-vue完成，管理端则使用Vue.js+elementUI开发，同时适配了移动端

> 不断完善中……

## 项目简介 
随着互联网产业的发展，线上购物逐渐成为人们消费的主要方式，传统的服装线下宣传模式收益日渐衰微，迫切需要从传统模式转化为新电商模式以解决品牌服装的宣传，销售难题
由此，W&A 服装商城应运而生，它为品牌服装门店提供了一条新的线上销售渠道以及广阔便捷的宣传平台，能够帮助服装品牌迅速实现转型或扩大销售布局，实现品牌发展

## 技术选型

客户端：Vue + Bootstrap-vue 

服务端：JAVA + MySql 

管理端：Vue + Element UI 
> 小程序端

![](https://s1.ax1x.com/2020/05/30/tKDCPx.jpg) 
> 管理端 
#### 登录/注册
![](https://s1.ax1x.com/2020/05/30/tKDVqH.jpg) 
#### 首页 
![](https://s1.ax1x.com/2020/05/30/tKDcw9.jpg) 
#### 添加/编辑 
![](https://s1.ax1x.com/2020/05/30/tKDfW6.jpg) 
#### 更新：用户管理以及新界面UI设计

用户管理首页
![](https://s1.ax1x.com/2020/06/17/NViaBn.jpg) 

用户修改
![](https://s1.ax1x.com/2020/06/17/NVid7q.jpg) 

![](https://s1.ax1x.com/2020/06/17/NVi0A0.jpg) 

## 项目结构

```
WA-Admin
├─ src
│  ├─ api        //接口文件  
│  ├─ icons      //svg图标
│  ├─ main.js    //路由守卫
│  ├─ router     //路由管理
│  ├─ store      //Vuex与缓存设置
│  ├─ styles     //sass公用样式
│  ├─ utils      //js封装
│  └─ views      //所有页面
│     ├─ About.vue
│     ├─ Home.vue
│     ├─ Info
│     │  ├─ category.vue
│     │  ├─ dialog         //弹框组件封装
│     │  │  └─ info.vue 
│     │  └─ index.vue
│     ├─ Layout
│     │  ├─ Components     //导航顶栏，导航侧栏以及主体
│     │  │  ├─ Header.vue
│     │  │  ├─ Main.vue
│     │  │  └─ Nav.vue
│     │  └─ index.vue
│     ├─ Login             //登录注册
│     │  ├─ index.vue
│     │  ├─ index2.vue
│     │  └─ index3.vue
│     └─ User
│        └─ index.vue
└─ vue.config.js
```

## 安装运行

* #### 第一步
    * 克隆项目到本地`git clone https://github.com/Tezectli/WA-Admin.git`
* #### 第二步
    * `npm install`安装依赖
* #### 第三步
    * 构建小程序运行服务`npm run dev:mp-weixin`
    * 构建管理端 `npm run serve`
* #### 第四部
    * 在微信小程序开发工具中预览
