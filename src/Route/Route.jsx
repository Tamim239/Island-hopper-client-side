import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home";
import { Login } from "../Components/Login/Login";
import { Register } from "../Components/Register/Register";
import { AllTouristsSport } from "../Pages/AllTouristsSport/AllTouristsSport";
import { AddTouristsSport } from "../Pages/AddTouristsSport/AddTouristsSport";
import { MyList } from "../Pages/MyList/MyList";
import { UpdateTourists } from "../Components/UpdateTourists/UpdateTourists";
import { ViewDetails } from "../Components/ViewDetails";
import { ErrorPage } from "../Shared/ErrorPage";
import { PrivateRoute } from "../Provider/PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/allTourists",
          element: <AllTouristsSport></AllTouristsSport>,
        },
        {
          path: "/addTourists",
          element: <AddTouristsSport></AddTouristsSport>,
        },
        {
          path: "/viewDetails/:id",
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/images/${params.id}`)
        },
        {
          path: "/myList",
          element: <PrivateRoute><MyList></MyList></PrivateRoute>,
        },
        {
          path: "/updateTourists/:id",
          element: <PrivateRoute><UpdateTourists></UpdateTourists></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5173/myList/${params.id}`),
        }
      ],
    },
  ]);
