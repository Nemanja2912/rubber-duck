import { useEffect, useState } from "react";
import NavigationMenu from "../../navigationMenu/navigationMenu";
import { useLocation } from "react-router-dom";

let menu = [
  {
    text: "About",
    link: "about",
  },
  {
    text: "What we do",
    link: "service",
  },
  {
    text: "Contact",
    link: "contact",
  },
  {
    text: "News",
    page: "news",
  },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [breakIndex, setBreakIndex] = useState(menu.length);

  const [menuItems, setMenuItems] = useState([...menu]);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      console.log(location.pathname);
      setMenuItems([
        {
          text: "Back",
          page: "/",
        },
      ]);
    } else {
      setMenuItems([...menu]);
    }
  }, [location]);

  const setItems = (width) => {
    if (width < 500) {
      setBreakIndex(1);
    } else {
      setBreakIndex(menu.length);
    }
  };

  useEffect(() => {
    setItems(window.innerWidth);
  }, []);

  useEffect(() => {
    const changeWidth = (event) => {
      setItems(event.target.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => window.removeEventListener("resize", changeWidth);
  }, []);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <ul className="flex justify-end m-10 mb-0 gap-10 text-lg font-[500] ">
        {menuItems.slice(0, breakIndex).map((item, index) => {
          if (index === menuItems.slice(0, breakIndex).length - 1) {
            return (
              <div key={index} className="relative">
                <li
                  className="cursor-pointer flex gap-1 items-center duration-300 "
                  onClick={handleOpen}
                >
                  {location.pathname !== "/" ? "Close" : "More"}{" "}
                  <OpenButton open={open} />
                </li>
                <NavigationMenu
                  handleScroll={handleScroll}
                  list={menuItems.slice(
                    location.pathname !== "/" ? -1 : breakIndex - 1
                  )}
                  open={open}
                  setOpen={setOpen}
                />
              </div>
            );
          }

          return (
            <li
              onClick={() => handleScroll(item.link)}
              key={index}
              className="cursor-pointer flex gap-1 items-center duration-300"
            >
              {item.text} <div className="blink bg-black"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;

const OpenButton = ({ open }) => {
  return (
    <div className="open-button flex items-center gap-1">
      <div
        className="line duration-300 "
        style={{
          transform: open
            ? "rotate(45deg) translateX(9.5px) translateY(-9.5px)"
            : "rotate(0deg) translateX(0px) translateY(0px)",
        }}
      ></div>
      <div
        className="line duration-300"
        style={{
          transform: open
            ? "rotate(-45deg) translateX(5px) translateY(5px)"
            : "rotate(0deg) translateX(0px) translateY(0px)",
        }}
      ></div>
      <div
        className="line duration-300 blink"
        style={{ transform: open ? "translateX(-500%)" : "translateX(0px)" }}
      ></div>
    </div>
  );
};
