import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../type";

const baseURL = `${process.env.BASE_URL}/users`;

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(baseURL);
      return data;
    } catch (error) {
      return rejectWithValue("Error fetching users");
    }
  }
);

export const getUserById = createAsyncThunk(
  "user/getUserById",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await axios(`${baseURL}/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue("Error fetching user by ID");
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.delete(`${baseURL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue("Error deleting user");
    }
  }
);

export const createUser = createAsyncThunk(
  "user/createUser",
  async (user: User, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(baseURL, user);
      return data;
    } catch (error) {
      return rejectWithValue("Error creating user");
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user: User, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`${baseURL}/${user.id}`, user);
      return data;
    } catch (error) {
      return rejectWithValue("Error updating user");
    }
  }
);
