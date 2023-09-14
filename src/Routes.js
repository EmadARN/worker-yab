import Home from "./Pages/Home";
import SignUpPage from "./Pages/SignUpPage";
import AboutPage from "./Pages/AboutPage";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/About", element: <AboutPage /> },
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
