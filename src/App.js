import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import UserManagement from "./Pages/UserManagement/UserManagement";
import JobManagement from "./Pages/JobManagement/JobManagement";
import JobTypeManagement from "./Pages/JobTypeManagement/JobTypeManagement";
import ServiceManagement from "./Pages/ServiceManagement/ServiceManagement";
import EditUser from "./Pages/UserManagement/EditUser/EditUser";
import AddUser from "./Pages/UserManagement/AddUser/AddUser";
import AddJob from "./Pages/JobManagement/AddJob/AddJob";
import EditJob from "./Pages/JobManagement/EditJob/EditJob";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Loading /> */}
        <Switch>
          {/* Components */}
          <AdminTemplate path="/admin" exact Component={UserManagement} />

          <AdminTemplate path="/login" exact Component={Login} />

          <AdminTemplate path="/admin/listuser" exact Component={UserManagement} />
          <AdminTemplate path="/admin/listuser/add" exact Component={AddUser} />
          <AdminTemplate path="/admin/user/edit/:id" exact Component={EditUser} />

          <AdminTemplate path="/admin/listjob" exact Component={JobManagement} />
          <AdminTemplate path="/admin/listjob/add" exact Component={AddJob} />
          <AdminTemplate path="/admin/listjob/edit/:id" exact Component={EditJob} />

          <AdminTemplate path="/admin/listjobtype" exact Component={JobTypeManagement} />
          <AdminTemplate path="/admin/listservice" exact Component={ServiceManagement} />

          <AdminTemplate path="/" exact Component={UserManagement} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
