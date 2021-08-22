import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage } from './pages'
import styles from './App.module.css';



function App() {
  return (
    <div className={styles.App}>
      {/* BrowserRouter  路由导航与原生浏览器操作行为一致 */}
      <BrowserRouter>
        {/* Switch 路径的切换以页面为单位，不要页面堆叠 */}
        <Switch>
          {/* Route 路由的路径解析原理与原生浏览器一致，可以自动识别url路径 */}
          <Route exact path="/" component={HomePage} />
          <Route path="/singIn" render={() => (<> <h1>登录页面</h1> </>)} />
          <Route render={() => (<>404 您访问的资源去流浪了！</>)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
