import axios from "axios";

const URL = "http://localhost:7777";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error while calling add User Api", error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log("Error while calling getUsers Api", error);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling getUSer Api", error);
  }
};

export const editUser = async (user, id) => {
  //put or post
  try {
    return await axios.put(`${URL}/${id}`, user);
  } catch (error) {
    console.log("Error while calling editUser api", error);
  }
};

export const deleteUser = async (id) => {
  try {
    return axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling deleteUSe api");
  }
};
