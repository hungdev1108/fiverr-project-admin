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
import AddJobType from "./Pages/JobTypeManagement/AddJobType/AddJobType";
import EditJobType from "./Pages/JobTypeManagement/EditJobType/EditJobType";
import JobTypeDetail from "./Pages/JobTypeDetail/JobTypeDetail";
import AddJobTypeDetail from "./Pages/JobTypeDetail/AddJobTypeDetail/AddJobTypeDetail";
import EditJobTypeDetail from "./Pages/JobTypeDetail/EditJobTypeDetail/EditJobTypeDetail";
import { AuthRoute } from "./Guard/Guard";

function App() {
  return (
    <div className="App">
      <Router>
        <Loading />
        <Switch>
          {/* Components */}
          <AuthRoute path="/admin/signin" exact component={SignIn} />

          <AdminTemplate path="/admin" exact Component={UserManagement} />

          <AdminTemplate path="/admin/listuser" exact Component={UserManagement} />
          <AdminTemplate path="/admin/listuser/add" exact Component={AddUser} />
          <AdminTemplate path="/admin/user/edit/:id" exact Component={EditUser} />

          <AdminTemplate path="/admin/listjob" exact Component={JobManagement} />
          <AdminTemplate path="/admin/listjob/add" exact Component={AddJob} />
          <AdminTemplate path="/admin/listjob/edit/:id" exact Component={EditJob} />

          <AdminTemplate path="/admin/listjobtype" exact Component={JobTypeManagement} />
          <AdminTemplate path="/admin/listjobtype/add" exact Component={AddJobType} />
          <AdminTemplate path="/admin/listjobtype/edit/:id" exact Component={EditJobType} />

          <AdminTemplate path="/admin/listjobtypedetail" exact Component={JobTypeDetail} />
          <AdminTemplate path="/admin/listjobtypedetail/add" exact Component={AddJobTypeDetail} />
          <AdminTemplate path="/admin/listjobtypedetail/edit/:id" exact Component={EditJobTypeDetail} />

          <AdminTemplate path="/admin/listservice" exact Component={ServiceManagement} />

          <AuthRoute path="/" exact component={SignIn} />

          {/* <AdminTemplate path="/" exact Component={UserManagement} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
