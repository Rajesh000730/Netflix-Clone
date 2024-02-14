import AuthProvider from "./components/Authprovider";
import Routes from "./components/Routes";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
const queryclient = new QueryClient()
//update
function App() {
  return (
    
    <AuthProvider>
      <QueryClientProvider  client={queryclient}>
        <Routes />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;

