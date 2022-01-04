import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const DUMMY_DATA = [
    {
      id: "u1",
      name: "Leandro Guedes",
      image: "https://www.w3schools.com/howto/img_avatar.png",
      places: 3,
    },
    {
      id: "u2",
      name: "Carol B",
      image: "https://www.w3schools.com/howto/img_avatar.png",
      places: 10,
    },
  ];

  return <UsersList items={DUMMY_DATA} />;
};

export default Users;
