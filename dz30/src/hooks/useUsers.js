import { useCallback, useEffect, useState } from "react";
import {
  createUser,
  getUsersList,
  deleteUser,
  updateUser,
} from "../services/usersService";
import { useBooleanFlag } from "./common";

export default function useUsers() {
  const [users, setUsers] = useState([]);

  const [isLoading, toggleIsLoading] = useBooleanFlag(false);

  const refresh = useCallback(() => {
    toggleIsLoading(true);
    getUsersList().then((data) => {
      setUsers(data);
      toggleIsLoading(false);
    });
  }, [toggleIsLoading]);

  const save = useCallback(
    (data) => {
      toggleIsLoading(true);
      if (data.id) {
        updateUser(data).then((data) => {
          setUsers((users) =>
            users.map((el) => (el.id === data.id ? data : el))
          );
          toggleIsLoading(false);
        });
      } else {
        createUser(data).then((data) => {
          setUsers((users) => [...users, data]);
          toggleIsLoading(false);
        });
      }
    },
    [toggleIsLoading]
  );

  const remove = useCallback(
    (id) => {
      toggleIsLoading(true);
      deleteUser(id).then(() => {
        setUsers((users) => users.filter((el) => el.id !== id));
        toggleIsLoading(false);
      });
    },
    [toggleIsLoading]
  );

  useEffect(refresh, [refresh]);

  return {
    users,
    isLoading,
    refresh,
    save,
    remove,
  };
}
