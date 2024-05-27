import UserContext from "./UserContext";
import { useState, useEffect } from "react";
import { getData } from "../services/api";
import loadingIcon from "../assets/Spinne.gif";

import "./style.scss";

function UserProvider({ children }) {
  //id for testing : 12 or 18
  const id = 12;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    try {
      const mainData = await getData(`http://localhost:3000/user/${id}`);
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

  function ErrorContent() {
    return (
      <div className="error-content">
        <h1 className="error-status">
          <span>{error.status}</span>{" "}
        </h1>
        <h2 className="error-message">
          <span>{error.message}</span>
        </h2>
      </div>
    );
  }
  function LoadingContent() {
    return (
      <div className="loading-content">
        <img src={loadingIcon} />
        <span>is loading...</span> 
        </div>
    );
  }
  // console.log("UserProvider:", user);
  // console.log("loading:", loading);
  // console.log("error:", error);
  return (
    <UserContext.Provider value={{ user }}>
      {loading && <LoadingContent />}
      {error && <ErrorContent />}
      {user && children}
    </UserContext.Provider>
  );
}

export default UserProvider;
