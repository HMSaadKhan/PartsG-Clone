import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignIn/SignInPage";
import SignUpPage from "../pages/SignUp/SignUpPage";

const AppRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <SignInPage />,
  },
  {
    path: "/signin",
    element: <SignUpPage />,
  },
];

export default AppRoutes;
