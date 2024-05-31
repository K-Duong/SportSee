import UserContext from "./UserContext";

import ErrorContent from "../components/error/errorContent";
import LoadingContent from "../components/loading/loadingContent";
import { useState, useEffect } from "react";
import { getData } from "../services/api";

function UserProvider({ children }) {
  //id for testing : 12 or 18
  const id = 12;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    try {
      const mainData = await getData(`http://localhost:3000/user/${id}f`);
      const activities = await getData(
        `http://localhost:3000/user/${id}/activity`
      );
      const performanceInfos = await getData(
        `http://localhost:3000/user/${id}/performance`
      );
      const averageSession = await getData(
        `http://localhost:3000/user/${id}/average-sessions`
      );
      setUser((prev) => {
        return {
          ...prev,
          id: id,
          mainData,
          activities,
          performanceInfos,
          averageSession,
        };
      });
    } catch (err) {
      console.log(err);
      setError(() => {
        return {
          status: err.response.status,
          message: "Oops, une erreur est survenue 🫨. Réessayez plus tard !",
        };
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;
    setUser(null);

    if (!ignore) {
      fetchApi();
    }
    // clean up function
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <UserContext.Provider value={{ user }}>

      {loading && <LoadingContent />}
      {error && <ErrorContent error={error}/>}
      {user && children}
    </UserContext.Provider>
  );
}

export default UserProvider;
