import axiosInstance from "./services";

const addUser = (data) => {
  return axiosInstance.post("/register", data);
};

const loginUser = (data) => {
  return axiosInstance.post("/login", data);
};

const allUsers = () => {
  return axiosInstance.get("/allUsers");
};

// const deleteUser = (userID) => {
//   return axiosInstance.delete("/deleteUser", { params: { userID: userID } });
// };

const deleteUser = (userID) => {
  return axiosInstance.get("/deleteUser/" + userID);
};

export { addUser, loginUser, allUsers, deleteUser };
