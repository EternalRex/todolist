import React from "react";
import { PrimaryNavBar } from "./components/navbar/PrimaryNavBar";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import HomePage from "./pages/homepage/screens/Home";

function App() {
  const applocations = useLocation();

  const navBarOptions = [
    {
      id: 1,
      label: "Home",
      route: "/",
    },
    {
      id: 2,
      label: "About",
      route: "aboutpage",
    },
    {
      id: 3,
      label: "Guide",
      route: "guidepage",
    },
  ];

  return (
    <main className="flex flex-col h-screen w-screen">
      <PrimaryNavBar>
        <span className="flex">
          <h5 className="font-appfontsPoppins content-center text-appLightBlue">
            Task
          </h5>
          <h5 className="font-appfontsPoppins content-center text-appDarkOrange">
            Master
          </h5>
        </span>

        {navBarOptions.map((options) => (
          <NavLink
            to={options.route}
            key={options.id}
            className="text-white font-appfontsPoppins content-center"
          >
            {options.label}
          </NavLink>
        ))}
      </PrimaryNavBar>
      {applocations.pathname !== "/" ? (
        <div className="flex-1 py-4">
          <Outlet></Outlet>
        </div>
      ) : (
        <div className="flex-1 py-4">
          <HomePage></HomePage>
        </div>
      )}
    </main>
  );
}

export default App;

/*
Apps deployment domain link:
https://black-sky-046107e00.5.azurestaticapps.net/
 */
