import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./Components/Blog";
import Course from "./Components/Course";
import Details from "./Components/Details";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
import Root from "./Root";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "home",
          element: <Home></Home>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "register",
          element: <Register></Register>,
        },
        {
          path: "profile",
          element: <Profile></Profile>,
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
        {
          path: "course",
          loader: () => fetch("https://biplob-it-course-amibiplob.vercel.app/"),
          element: <Course></Course>,
        },
        {
          path: "details/:id",
          loader: ({ params }) =>
            fetch(`https://biplob-it-course-amibiplob.vercel.app/${params.id}`),
          element: <Details></Details>,
        },
      ],
    },
  ]);
  return (
    <div className="bg-slate-200">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
