import React from "react";
import { Routes, Route } from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainHeader from "./shared/components/Navigation/MainHeader";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userID/Places" element={<UserPlaces />} />
        <Route path="/places/new" element={<NewPlace />} />
      </Routes>
    </>
  );
}

export default App;
