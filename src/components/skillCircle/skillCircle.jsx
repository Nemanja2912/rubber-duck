const SkillCircle = ({ item }) => {
  return (
    <div className="content border-black w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-black">
      <div className="relative card w-full h-full duration-500">
        <div className="bg-white front-card absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center rounded-full">
          <img src={item.image} alt="" />
        </div>
        <div className="absolute text-white back-card top-0 left-0 right-0 bottom-0 flex items-center justify-center rounded-full">
          {item.text}
        </div>
      </div>
    </div>
  );
};

export default SkillCircle;
