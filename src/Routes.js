import Home from "./Pages/Home";
import SignUpPage from "./Pages/SignUpPage";

const routes = [
  { path: "/", element: <Home /> },
  // { path: "/About", element: <About /> },
  {
    path: "/SignupPage",
    element: <SignUpPage />,
  },
  // {
  //   path: "/ContactUs",
  //   element: <ContactUs />,
  // },
];
export default routes;
