import { NavLink } from "react-router-dom";
import Button from "../../../components/tailwind/Button";
import Header from "../../../components/layout/Header/Header";
import { PortfolioHome } from "../../../menu";
import useDarkMode from "../../../hooks/useDarkMode";
import Icon from "../../../components/icon/Icon";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { clsx } from "clsx";

const ProfileHeader = () => {
  const { setDarkModeStatus, darkModeStatus } = useDarkMode();
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <Header>
      <div className="flex flex-row items-center justify-between sm:justify-around w-full mx-2 relative">
        <div id="logo" className="Logo" rel="Logo">
          <NavLink id="Home" to="/" className="flex items-center">
            <Icon icon="logo" size="12" />
          </NavLink>
        </div>
        <div
          id="routes"
          className="hidden sm:flex justify-center gap-5"
          rel="Routes"
        >
          {Object.values(PortfolioHome).map((value) => (
            <Button
              key={value.text}
              tag="a"
              to={`${value.path}`}
              isLink
              color="secondary"
            >
              {value.text}
            </Button>
          ))}
        </div>
        <div
          id="dark-mode-button"
          className="hidden sm:flex space-x-2"
          rel="Dark mode"
        >
          <Button
            type="button"
            isLink
            color="secondary"
            icon={!darkModeStatus ? "Moon" : "Sun"}
            onClick={() => setDarkModeStatus((prev) => !prev)}
          />
        </div>
        <div id="mobile-menu" className="block sm:hidden" rel="Mobile menu">
          <Button
            type="button"
            isLink
            color="primal"
            icon={openSideMenu ? "Close" : "Menu"}
            onClick={() => setOpenSideMenu(!openSideMenu)}
          />
        </div>

        <Transition
          show={openSideMenu}
          enter="transition-transform duration-300 ease-in-out"
          enterFrom="-translate-x-full opacity-0"
          enterTo="translate-x-0 opacity-100"
        >
          <div
            className={clsx(
              darkModeStatus ? "bg-gray-800 text-white transition-colors duration-500 ease-in-out" : "bg-slate-50 text-black transition-colors duration-200 ease-in-out",
              "absolute top-full left-0 w-3/4 h-screen z-50 p-4",
              "data-[leave]:duration-300 data-[leave]:ease-in-out",
              "data-[leave]:data-[closed]:-translate-x-full data-[leave]:data-[closed]:rotate-[0deg]"
            )}
          >
            <div className="flex flex-col gap-4 items-start">
              {Object.values(PortfolioHome).map((value) => (
                <NavLink
                  key={value.text}
                  to={value.path}
                  className="block py-2 hover:bg-gray-700 px-2 rounded"
                  onClick={() => setOpenSideMenu(false)}
                >
                  {value.text}
                </NavLink>
              ))}
              <Button
                type="button"
                isLink
                color="secondary"
                icon={!darkModeStatus ? "Moon" : "Sun"}
                onClick={() => {
                  setDarkModeStatus((prev) => !prev);
                  // setOpenSideMenu(false);
                }}
              />
            </div>
          </div>
        </Transition>
      </div>
    </Header>
  );
};

export default ProfileHeader;
