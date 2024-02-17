// components/UserComponent.js

import React from "react";
import "./users.css";
const Users = ({ users, selectedUser, onSelect }) => {
  const filteredUsers = users.filter((user) => user.id > 10);
  return (
    <div className="mainUserCont">
      <div className="user-list">
        <>
          {filteredUsers.map((user) => (
            <div
              key={user.profile.username}
              onClick={() => onSelect(user)}
              className={`usersContainer 
              `}
            >
              <div className="avatarCont">
                <img className="avatar" src={user?.avatar} alt="No avatar " />
              </div>
              <div className="divider" />
              <div className="userDetailCont">
                <div className="fullname">
                  <p className="firstName">{user?.profile?.firstName} </p>
                  <p className="lastName">{user?.profile?.lastName} </p>
                </div>
                <div
                  className={` ${
                    selectedUser &&
                    selectedUser.profile.username === user.profile.username
                      ? "active"
                      : "userSubDetail"
                  }`}
                >
                  <div className="userName">
                    <span className="subHead">username:</span>
                    <div className="data">
                      {selectedUser?.profile?.username}
                    </div>
                  </div>
                  <div className="userEmail">
                    <span className="subHead">email:</span>
                    <div className="data"> {selectedUser?.profile?.email}</div>
                  </div>
                  <div className="bio">
                    <span className="subHead">Bio:</span>
                    <div className="data">{selectedUser?.Bio}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default Users;
