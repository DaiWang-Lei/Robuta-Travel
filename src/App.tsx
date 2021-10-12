import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { HomePage, SignInPage, RegisterPage, DetailPage, NotFound } from "./pages";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      {/* BrowserRouter  路由导航与原生浏览器操作行为一致 */}
      <HashRouter>
        {/* Switch 路径的切换以页面为单位，不要页面堆叠 */}
        <Switch>
          {/* Route 路由的路径解析原理与原生浏览器一致，可以自动识别url路径 */}
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/detail/:touristRouteId" component={DetailPage} />

          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;