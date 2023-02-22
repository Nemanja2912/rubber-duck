import SkillCircle from "../skillCircle/skillCircle";

import Image1 from "../../assets/image/html_5.png";
import Image2 from "../../assets/image/css_3.png";
import Image3 from "../../assets/image/js.png";
import Image4 from "../../assets/image/sass.png";
import Image5 from "../../assets/image/jquery.png";
import Image6 from "../../assets/image/php.png";
import Image7 from "../../assets/image/angular.png";
import Image8 from "../../assets/image/greensock.png";
import Image9 from "../../assets/image/bootstrap.png";
import Image10 from "../../assets/image/foundation.png";
import Image11 from "../../assets/image/ionic.png";
import Image12 from "../../assets/image/cordova.png";
import Image13 from "../../assets/image/phonegap.png";
import Image14 from "../../assets/image/wordpress.png";
import Image15 from "../../assets/image/laravel.png";
import Image16 from "../../assets/image/symfony.png";
import Image17 from "../../assets/image/drupal.png";
import Image18 from "../../assets/image/nodejs.png";

const skills = [
  {
    text: "HTML5",
    image: Image1,
  },
  {
    text: "CSS3",
    image: Image2,
  },
  {
    text: "JS",
    image: Image3,
  },
  {
    text: "SASS",
    image: Image4,
  },
  {
    text: "jQuery",
    image: Image5,
  },
  {
    text: "PHP",
    image: Image6,
  },
  {
    text: "AngularJS",
    image: Image7,
  },
  {
    text: "GreenSock",
    image: Image8,
  },
  {
    text: "Bootstrap",
    image: Image9,
  },
  {
    text: "Foundation",
    image: Image10,
  },
  {
    text: "Ionic",
    image: Image11,
  },
  {
    text: "Cordova",
    image: Image12,
  },
  {
    text: "PhoneGap",
    image: Image13,
  },
  {
    text: "Wordpress",
    image: Image14,
  },
  {
    text: "Laravel",
    image: Image15,
  },
  {
    text: "Symfony",
    image: Image16,
  },
  {
    text: "Drupal",
    image: Image17,
  },
  {
    text: "NodeJS",
    image: Image18,
  },
];

const ServiceSection = () => {
  return (
    <div id="service" className="max-w-6xl mx-auto mb-80 px-8">
      <h2 className="text-center text-5xl mb-12">What we do</h2>

      <div className="wrapper flex gap-10 flex-col md:flex-row">
        <div className="flex-1">
          <div className="subtitle text-2xl mb-7">Web & Mobile Development</div>
          Our developers have participated in a long list of international web
          projects some of which we consider cornerstone for the industry. We
          work with a vast array of technologies and a lot of dedication.
        </div>

        <div className="flex-1">
          <div className="subtitle text-2xl mb-7 ">
            Dedicated Teams and Project Management
          </div>
          We take pride in the qualities of our coders. When hiring we look for
          the right attitude first. Our belief is that the right mindset is as
          important as technical knowledge. We select and train great teams with
          varied capabilities and we are proud of their work after every single
          project.
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-12 justify-center md:justify-between">
        {skills.map((item, index) => (
          <SkillCircle key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
