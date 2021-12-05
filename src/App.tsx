import React, { useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import {
  HomePage,
  SignInPage,
  RegisterPage,
  DetailPage,
  NotFound,
  ShoppingCart,
} from "./pages";
import { Redirect } from "react-router-dom";
import styles from "./App.module.css";
import { useSelector } from "./redux/hooks";
import { getShoppingCart } from "./redux/shoppingCart/slice";
import { useDispatch } from "react-redux";

const PrivateRoute = ({
  component,
  isAuthenticated,
  ...rest
}: {
  component: any;
  isAuthenticated: boolean;
  path?: any;
}) => {
  const routeComponent = (props: any) => {
    return isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/signIn" }} />
    );
  };
  return <Route render={routeComponent} {...rest} />;
};

function App() {
  const jwt = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  useEffect(() => {
    jwt && dispatch(getShoppingCart(jwt));
  }, [jwt]);
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
          <Route path="/detail/:touristRouteId" component={DetailPage} />
          <PrivateRoute
            isAuthenticated={jwt !== null}
            path="/shoppingCart"
            component={ShoppingCart}
          />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
