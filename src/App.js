import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from "./shared/store/auth-context";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainHeader from "./shared/components/Navigation/MainHeader";
import UserPlaces from "./places/pages/UserPlaces";
import EditPlace from "./places/pages/EditPlace";
import Auth from "./user/pages/Auth";

function App() {
  const authCtx = useContext(AuthContext);
  let routes;
  console.log(authCtx.isLoggedIn);
  if (authCtx.isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userID/Places" element={<UserPlaces />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places/:placeID" element={<EditPlace />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userID/Places" element={<UserPlaces />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    );
  }

  return (
    <>
      <MainHeader />
      {routes}
    </>
  );
}

export default App;
