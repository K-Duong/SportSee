
import UserContext from "./UserContext";

function UserProvider({children}) {
  return (
    <UserContext.Provider>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;