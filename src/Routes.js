import Home from "./Pages/Home";
import SignUpPage from "./Pages/SignUpPage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import ContactUs from "./Pages/ContactUs";
import VerifyCode from "./components/SignUpItems/SignUp(VerifyCode)/VerifyCode";
import SignUpPage2 from "./Pages/SignUpPage2";
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
    path: "/SignUpPage",
    element: <SignUpPage />,
  },
  {
    path: "/SignUpPage2",
    element: <SignUpPage2 />,
  },
];
export default routes;
