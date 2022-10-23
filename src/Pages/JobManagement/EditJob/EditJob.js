import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";

function EditJob() {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const history = useHistory();

  const jobId = match.params.id;
  console.log(jobId);

  return <div className="EditJob"></div>;
}

export default EditJob;
