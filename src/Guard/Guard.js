import { TOKEN } from "../utils/settings/config";

const { Route, Redirect } = require("react-router-dom");

const checkAuth = () => {
  // check nếu localstorage chưa có token, chưa login => vào
  // localstorage có token  => login => đẩy qua trang home
  if (!localStorage.getItem(TOKEN)) {
    return true;
  }
  return false;
};

export const AuthRoute = (props) => {
  const { path, component, redirectPath } = props;
  if (checkAuth()) {
    return <Route path={path} component={component} />;
  }
  return <Redirect to={redirectPath} />;
};

const checkLogin = () => {
  if (localStorage.getItem(TOKEN)) {
    return true;
  }
  return false;
};

export const PrivateRoute = (props) => {
  const { path, component, redirectPath } = props;
  if (checkLogin()) {
    return <Route path={path} component={component} />;
  }
  return <Redirect to={redirectPath} />;
};
