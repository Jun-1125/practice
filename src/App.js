import React,{Component} from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

export default class App extends Component{
    render(){
        return(
            <BrowserRouter>
                 <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/" component={Admin}></Route>
                 </Switch>
            </BrowserRouter>
        )
    }
}
/* 1. 项目开发准备
    1). 描述项目
    2). 技术选型 
    3). API接口/接口文档/测试接口
    
 2. 启动项目开发
    1). 使用react脚手架创建项目
    2). 开发环境运行: npm start
    3). 生产环境打包运行: npm run build  serve build
     */