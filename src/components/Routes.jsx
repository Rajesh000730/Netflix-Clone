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
import { instance2 } from "../utils/axiosConf.js";
import LoginDescription from "./LoginDescription.jsx";
import LoginBox from "./LoginBox.jsx";
import SignUpBox from "./SignUpBox.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
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
          loader:((token)=>Homeloader)
          ,
          lazy:()=>{
            return {Component : Home}
            
          },
          errorElement: <ErrorBoundary/>,
        },
        {
          path:"/shows",
          loader: ((token)=>TVshowLoader),
          lazy: ()=>{
            return {Component:TVshows}
          },
          errorElement: <ErrorBoundary/>,
        },
        {
            path:"/browse",
          loader: ((token)=>MovieLoader),
          lazy : ()=>{
            return {Component:Movies}
          },
          errorElement: <ErrorBoundary/>,
    

        },
        {
            path:"/latest",
            element:<Latest/>,
            errorElement: <ErrorBoundary/>,

        },
        {
            path:"/my-list",
            element:<Mylist/>,
            errorElement: <ErrorBoundary/>,

        },
        {
            path:"/original-audio",
            element:<Original_audio/>,
            errorElement: <ErrorBoundary/>,

        },
        {
          path:"/logout",
          loader: ()=>{
            localStorage.removeItem("token")
            setToken("")
            return redirect("/")
            
          }

          }
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      lazy: ()=>{
        return {Component: Login}
      },
      children:[
        {path: '/',
        element: <LoginDescription/>
        },
        {
          path: '/login',
          action: async ({request})=>{
            let formdata =  await request.formData();
            const email = formdata.get("email")
            const password = formdata.get("password")
            try{
              const data = await instance2.post('/api/v1/auth/authenticate', JSON.stringify({email:email, password:password}),{
                headers:{
                  'Content-Type':'application/json'
                }
              })
              if(data.data.token){
                localStorage.setItem("token", data.data.token)
                setToken(data.data.token)
                return redirect('/')
              }
              else{
                throw new Error(data.data.error)
              }
            }
            catch(e){
              return e.message
            }
            
            
          },
          lazy: ()=>{
            return {Component:LoginBox}
          },
          errorElement: <ErrorBoundary/>,
          
        },
        {
          path: '/signup',
          element: <SignUpBox/>,
          action: async ({request})=>{
            let formdata =  await request.formData();
            // console.log(formdata)
            let password = formdata.get("password")
            let confirmpassword = formdata.get("confirmpassword")
            const body  =  {
              email : formdata.get("email"),
              password: formdata.get("password")
            }
            console.log(password, confirmpassword)
            if(password!=confirmpassword){
              return "password does not match"
            }
            try{
              const resp = await instance2.post('/api/v1/auth/createuser',JSON.stringify(body),{
                headers:{
                  "Content-Type":"application/json"
                }
              })
              if(resp.data.message){
                return redirect('/login')
              }
              else{
                throw new Error(resp.data.error)
              }
            }
            catch(e){
                return e.message
            }

          },
          errorElement: <ErrorBoundary/>,
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
