const Contact = () => {
  return (
    <div className="max-w-4xl flex flex-col items-center mx-auto mb-80 px-8">
      <h2 className="text-5xl mb-10 text-center">You can find us at</h2>
      <div className="wrapper text-xl text-center">
        <div className="mb-3">
          <a
            href="https://goo.gl/maps/P8x4eAS8ceSacxar8"
            target="_blank"
            rel="noreferrer"
          >
            <span className="opacity-60">Our main office -</span> ul. "Rikkardo
            Vakkarini" 4, 1404 Motopista, Sofia
          </a>
        </div>

        <div className="mb-3">
          <a
            href="https://goo.gl/maps/wsJAHANYWFfBzpba7"
            target="_blank"
            rel="noreferrer"
          >
            <span className="link-description opacity-60">
              Our secondary office -
            </span>{" "}
            bul. "6-ti septemvri" 264, Bart Business Center 4006, Plovdiv
          </a>
        </div>

        <div>
          <a className="link" href="mailto: quack@rubberduck.xyz">
            <span className="link-description opacity-60">Email -</span>{" "}
            quack@rubberduck.xyz
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
