import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { allUsers, deleteUser } from "./services/AuthServices";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    allUsers()
      .then((res) => {
        console.table(res?.data?.users);
        setUsers(res?.data?.users);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, []);

  const handleDeleteUser = (userID) => {
    deleteUser(userID);
  };
  return (
    <div className="dashboard">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item) => {
            return (
              <tr key={item?._id}>
                <td>{item?.firstName}</td>
                <td>{item?.email}</td>
                <td
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => handleDeleteUser(item?._id)}
                >
                  Delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
