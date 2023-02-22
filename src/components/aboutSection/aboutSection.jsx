const AboutSection = () => {
  return (
    <div id="about" className="max-w-6xl mx-auto mb-72 mt-56 px-8">
      <h2 className="text-center text-5xl mb-7">About</h2>
      <div className="subtitle text-center text-xl mb-7">
        Rubber Duck is a company we built out of passion.
      </div>

      <div className="wrapper flex gap-5 md:gap-10 flex-col md:flex-row">
        <div className="flex-1">
          We wanted to create an environment which lacks the drawbacks we
          witnessed as employees. A place where people approach work with
          pleasure, code is written with enthusiasm and the conscious knowledge
          that we are what we do each moment. We do not like autopilots. We aim
          to have a personal friendship with each one of our clients and break
          the work-life balance into - "we just do the things we love". Be it
          kite-surf or code - we aim to do both coming from the same mental
          space. That’s how great code gets written.
        </div>

        <div className="flex-1">
          We focus on assisting digital and advertising agencies as well as the
          end-customers to improve their development process by undertaking the
          thorough or partial technical production of their projects. We also
          dedicate specialists and teams on a project base for varying lengths
          of time. Rubber Duck is a good friend to the start-up scene - we have
          witnessed dozens of projects come to life and could be relied upon for
          user experience, creativity, code, analytics, and strategy. Quack.
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
