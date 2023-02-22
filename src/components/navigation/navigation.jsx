import { useEffect, useState } from "react";
import NavigationMenu from "../../navigationMenu/navigationMenu";

const menu = [
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
  },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [breakIndex, setBreakIndex] = useState(menu.length);

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

  return (
    <div>
      <ul className="flex justify-end m-10 mb-0 gap-10 text-lg font-[500] ">
        {menu.slice(0, breakIndex).map((item, index) => {
          if (index === menu.slice(0, breakIndex).length - 1) {
            return (
              <div className="relative">
                <li
                  key={index}
                  className="cursor-pointer flex gap-1 items-center duration-300 "
                  onClick={handleOpen}
                >
                  More <OpenButton open={open} />
                </li>
                <NavigationMenu list={menu.slice(breakIndex - 1)} open={open} />
              </div>
            );
          }

          return (
            <a href={`#${item.link}`}>
              <li
                key={index}
                className="cursor-pointer flex gap-1 items-center duration-300"
              >
                {item.text} <div className="blink bg-black"></div>
              </li>
            </a>
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
            ? "rotate(45deg) translateX(10px) translateY(-10px)"
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
