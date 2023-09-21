import Home from "./Pages/Home";
import SignUpPage from "./Pages/SignUpPage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import ContactUs from "./Pages/ContactUs";
import VerifyCode from "./components/SignUpItems/SignUp(VerifyCode)/VerifyCode";
import SignUpPage2 from "./Pages/SignUpPage2";
import SignUpPage3 from "./Pages/SignUpPage3";
import SignUpPage4 from "./Pages/SignUpPage4";
import SignUpPage5 from "./Pages/SignUpPage5";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/About", element: <AboutPage /> },
  {
    path: "/SignupPage",
    element: <SignUpPage />,
  },
  {
    path: "/ServicesPage",
    element: <ServicesPage />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },

  {
    path: "/SignUpPage2",
    element: <SignUpPage2 />,
  },
  {
    path: "/SignUpPage3",
    element: <SignUpPage3 />,
  },
  {
    path: "/SignUpPage4",
    element: <SignUpPage4 />,
  },
  {
    path: "/SignUpPage5",
    element: <SignUpPage5 />,
  },
];
export default routes;
