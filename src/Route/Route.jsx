import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home";
import { Login } from "../Components/Login/Login";
import { Register } from "../Components/Register/Register";
import { AllTouristsSport } from "../Pages/AllTouristsSport/AllTouristsSport";
import { AddTouristsSport } from "../Pages/AddTouristsSport/AddTouristsSport";
import { MyList } from "../Pages/MyList/MyList";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    //   errorElement: <ErrorPage />,
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
          path: "/myList",
          element: <MyList></MyList>,
        },
      ],
    },
  ]);
