const NavigationMenu = ({ list, open }) => {
  return (
    <div
      className="navigation-menu bg-black ml-auto duration-300 absolute z-10 cursor-pointer right-0 top-0 flex flex-col items-end"
      style={{
        transform: `translate(${open ? 0 : 10}vw, 40px)`,
        opacity: open ? 1 : 0,
      }}
    >
      {list.map((item, index) => (
        <p
          className="text-white w-max py-2 px-5 flex items-center gap-1"
          key={index}
        >
          {item.text}

          <div className="blink bg-white"></div>
        </p>
      ))}
    </div>
  );
};

export default NavigationMenu;
