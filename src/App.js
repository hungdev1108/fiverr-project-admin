import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import UserManagement from "./Pages/UserManagement/UserManagement";
import JobManagement from "./Pages/JobManagement/JobManagement";
import JobTypeManagement from "./Pages/JobTypeManagement/JobTypeManagement";
import ServiceManagement from "./Pages/ServiceManagement/ServiceManagement";
import EditUser from "./Pages/UserManagement/EditUser/EditUser";
import AddUser from "./Pages/UserManagement/AddUser/AddUser";
import AddJob from "./Pages/JobManagement/AddJob/AddJob";
import EditJob from "./Pages/JobManagement/EditJob/EditJob";
import Loading from "./components/Loading/Loading";
import SignIn from "./Pages/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Loading />
        <Switch>
          {/* Components */}
          <Route path="/admin/signin" exact component={SignIn} />

          <AdminTemplate path="/admin" exact Component={UserManagement} />

          <AdminTemplate path="/admin/listuser" exact Component={UserManagement} />
          <AdminTemplate path="/admin/listuser/add" exact Component={AddUser} />
          <AdminTemplate path="/admin/user/edit/:id" exact Component={EditUser} />

          <AdminTemplate path="/admin/listjob" exact Component={JobManagement} />
          <AdminTemplate path="/admin/listjob/add" exact Component={AddJob} />
          <AdminTemplate path="/admin/listjob/edit/:id" exact Component={EditJob} />

          <AdminTemplate path="/admin/listjobtype" exact Component={JobTypeManagement} />
          <AdminTemplate path="/admin/listservice" exact Component={ServiceManagement} />

          <Route path="/" exact component={SignIn} />

          {/* <AdminTemplate path="/" exact Component={UserManagement} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
