import UserProvider from "./context/UserProvider";
import Container from "./layouts/container/Container";
import Dashboard from "./layouts/pages/dashboard/Dashboard";

function App() {
  return (
    <Container>
      <UserProvider>
        <Dashboard/>
      </UserProvider>
    </Container>
  );
}
export default App;
