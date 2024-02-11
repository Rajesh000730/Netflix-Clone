import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import { useAuth } from "./Authprovider.jsx";
import { ProtectedRoute } from "./ProtectedRoute";
import TVshows, {loader as TVshowLoader} from "./TVshows";
import Movies,  {loader as MovieLoader} from "./Movies";
import Mylist from "./Mylist";
import Original_audio from "./Original_audio";
import Home ,{loader as Homeloader} from "./Home";
import Latest from "./Latest";
import Login from './Login'

import LoginDescription from "./LoginDescription.jsx";
import LoginBox from "./LoginBox.jsx";
import SignUpBox from "./SignUpBox.jsx";
const Routes = () => {
  const { token, setToken } = useAuth();

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
          loader: (Homeloader)
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
      path: "/",
      element: <Login/>,
      children:[
        {path: '/',
        element: <LoginDescription/>
        },
        {
          path: '/login',
          element: <LoginBox/>,
          action: async ({request})=>{
            let formdata =  await request.formData();
            // console.log(formdata)
            localStorage.setItem("token", "token")
            setToken("token")
            return redirect('/')
            
          }
          
        },
        {
          path: '/signup',
          element: <SignUpBox/>,
          action: async ({request})=>{
            let formdata =  await request.formData();
            // console.log(formdata)
            let email = formdata.get("email")
            let password = formdata.get("password")
            let confirmpassword = formdata.get("confirmpassword")
            console.log(password, confirmpassword)
            if(password!=confirmpassword){
              return {error:"password does not match"}
            }
            return redirect("/login")
          }
        }
      ]
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
