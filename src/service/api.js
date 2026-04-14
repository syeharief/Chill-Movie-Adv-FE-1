import axios from "axios";

const BASE_URL = "https://69dc713784f912a26403aee0.mockapi.io/movie";

export const getData = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const addData = async (data) => {
  const res = await axios.post(BASE_URL, data);
  return res.data;
};

export const updateData = async (id, data) => {
  const res = await axios.put(`${BASE_URL}/${id}`, data);
  return res.data;
};

export const deleteData = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};