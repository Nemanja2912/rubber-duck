import { Link } from "react-router-dom";

const NavigationMenu = ({ list, open, setOpen, handleScroll }) => {
  return (
    <div
      className="navigation-menu bg-black ml-auto duration-300 absolute z-10 cursor-pointer right-0 top-0 flex flex-col items-end"
      style={{
        transform: `translate(${open ? 0 : 10}vw, 40px)`,
        opacity: open ? 1 : 0,
      }}
    >
      {list.map((item, index) => {
        if (item.page) {
          return (
            <Link
              to={item.page}
              className="text-white w-max py-2 px-5 flex items-center gap-1"
              key={index}
              onClick={() => setOpen(false)}
            >
              {item.text}

              <div className="blink bg-white"></div>
            </Link>
          );
        }

        return (
          <p
            onClick={() => handleScroll(item.link)}
            className="text-white w-max py-2 px-5 flex items-center gap-1"
            key={index}
          >
            {item.text}

            <div className="blink bg-white"></div>
          </p>
        );
      })}
    </div>
  );
};

export default NavigationMenu;
