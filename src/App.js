import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import Admin from "./Pages/Admin/Admin";
import UserManagement from "./Pages/UserManagement/UserManagement";
import JobManagement from "./Pages/JobManagement/JobManagement";
import JobTypeManagement from "./Pages/JobTypeManagement/JobTypeManagement";
import ServiceManagement from "./Pages/ServiceManagement/ServiceManagement";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Loading /> */}
        <Switch>
          {/* Components */}
          <AdminTemplate path="/admin" exact Component={Admin} />

          <AdminTemplate path="/admin/adduser" exact Component={UserManagement} />
          <AdminTemplate path="/admin/listjob" exact Component={JobManagement} />
          <AdminTemplate path="/admin/listjobtype" exact Component={JobTypeManagement} />
          <AdminTemplate path="/admin/listservice" exact Component={ServiceManagement} />

          <AdminTemplate path="/" exact Component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
