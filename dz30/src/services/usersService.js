import api from "../api/api";
import { USERS_URI } from "../constants";

export function getUsersList() {
  return api.get(USERS_URI).then((resp) => resp.data);
}

export function getUser(id) {
  return api.get(USERS_URI + "/" + id).then((resp) => resp.data);
}

export function createUser(user) {
  return api.post(USERS_URI, user).then((resp) => resp.data);
}

export function updateUser(user) {
  return api.put(USERS_URI + "/" + user.id).then((resp) => resp.data);
}

export function deleteUser(id) {
  return api.delete(USERS_URI + "/" + id).then((resp) => resp.data);
}
