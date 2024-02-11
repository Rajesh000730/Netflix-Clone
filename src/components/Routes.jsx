import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./Authprovider.js";
import { ProtectedRoute } from "./ProtectedRoute";
import TVshows, {loader as TVshowLoader} from "./TVshows";
import Movies,  {loader as MovieLoader} from "./Movies";
import Mylist from "./Mylist";
import Original_audio from "./Original_audio";
import Home from "./Home";
import Latest from "./Latest";
import Login from './Login'
import getPhones from "../utils/getPhones.js";
const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },

  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: <Home />,
          loader: async()=>{
            const js = getPhones(2);
            return js;
          }
        },
        {
          path:"/shows",
          element: <TVshows/>,
          loader: (TVshowLoader)
        },
        {
            path:"/browse",
          element: <Movies/>,
          loader: (MovieLoader)
                
        
            // return searchTerm!=null?searchTerm:""

        },
        {
            path:"/latest",
            element:<Latest/>,

        },
        {
            path:"/my-list",
            element:<Mylist/>,

        },
        {
            path:"/original-audio",
            element:<Original_audio/>,

        }
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/login",
      element: <Login/>,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
