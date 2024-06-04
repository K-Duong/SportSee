import UserContext from "./UserContext";
import ErrorContent from "../components/error/errorContent";
import LoadingContent from "../components/loading/loadingContent";
import { useState, useEffect } from "react";

////cette ligne vous permet d'utiliser le data mocké.
// import { getUserInfos, getUserActivity, getUserPerform, getUserAverageSession } from "../services/api_mock.js" 
import { getUserInfos, getUserActivity, getUserPerform, getUserAverageSession } from "../services/api";

function UserProvider({ children }) {
  //id for testing : 12 or 18
  const id = 18;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      setError(null);
      try {
        const mainData = await getUserInfos(id);
        const activities = await getUserActivity(id);
        const performanceInfos= await getUserPerform(id);
        const averageSession = await getUserAverageSession(id);
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
        setUser(null)
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
    // console.log("mounted")
    fetchApi();
  }, [setUser])


  return (
    <UserContext.Provider value={{ user }}>
      {loading && <LoadingContent />}
      {error && <ErrorContent error={error}/>}
      {user && children}
    </UserContext.Provider>
  );
}

export default UserProvider;
