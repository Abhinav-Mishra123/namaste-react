import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react"
import Header from "./src/components/Header";
import RestaurentCard from "./src/components/RestaurentCard";
import Body from "./src/components/Body";
import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ErrorPage from "./src/components/ErrorPage";
import RestaurantsMenu from "./src/components/RestaurantsMenu";
import ThemeContext, { ThemeSwitcher } from "./src/utils/darkMode";
import { Provider } from "react-redux/dist/react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";


const AppLayOut = () => {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };
return (
  <>
  <Provider store={appStore}>
  <ThemeContext.Provider value={value}>
  <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
        <Header />
        <Outlet />
      </div>
    </ThemeContext.Provider>
    </Provider>
  </>
)
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut/>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu/>,
      },
    ],
    errorElement: <ErrorPage />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>)