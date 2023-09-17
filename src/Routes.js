import Home from "./Pages/Home";
import SignUpPage from "./Pages/SignUpPage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import ContactUs from "./Pages/ContactUs";
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
];
export default routes;
