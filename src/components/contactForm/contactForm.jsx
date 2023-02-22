import { useEffect, useRef, useState } from "react";

import Send from "../../assets/image/elem_less.png";

const ContactForm = () => {
  const [step, setStep] = useState(0);
  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Please fill the field before continuing"
  );

  const [end, setEnd] = useState(false);

  const [formContent, setFormContent] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputRef = useRef(null);

  const handleSend = () => {
    if (step === 0) {
      if (inputRef.current.value.length === 0) {
        setError(true);
      } else {
        setFormContent((prev) => {
          return { ...prev, name: inputRef.current.value };
        });

        inputRef.current.value = "";
        setError(false);
        setStep(1);
      }
    } else if (step === 1) {
      if (inputRef.current.value.length === 0) {
        setError(true);

        setErrorMessage("Please fill the field before continuing");
      } else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          inputRef.current.value
        )
      ) {
        setError(true);

        setErrorMessage("Please fill a valid email address");
      } else {
        setFormContent((prev) => {
          return { ...prev, email: inputRef.current.value };
        });

        inputRef.current.value = "";
        setError(false);
        setStep(2);
      }
    } else if (step === 2) {
      if (inputRef.current.value.length === 0) {
        setError(true);

        setErrorMessage("Please fill the field before continuing");
      } else {
        setFormContent((prev) => {
          return { ...prev, email: inputRef.current.value };
        });

        setError(false);
        setStep(3);

        setTimeout(() => {
          setEnd(true);
        }, 500);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div id="contact" className="max-w-4xl relative mx-auto mb-80 px-8">
      <div
        style={{ opacity: end ? 0 : 1 }}
        className="duration-500 z-10 relative"
      >
        <div className="overflow-hidden relative h-10 md:h-16">
          <div
            className="text-3xl md:text-5xl duration-500"
            style={{
              transform: step > 0 ? "translateY(-120%)" : "translateY(0)",
            }}
          >
            What's your name?
          </div>
          <div
            className="text-3xl md:text-5xl duration-500 absolute top-0 left-0"
            style={{
              transform:
                step === 1
                  ? "translateY(0%)"
                  : step > 1
                  ? "translateY(-120%)"
                  : "translateY(120%)",
            }}
          >
            What's your email?
          </div>
          <div
            className="text-3xl md:text-5xl duration-500 absolute top-0 left-0"
            style={{
              transform:
                step >= 2
                  ? "translateY(0%)"
                  : step > 2
                  ? "translateY(-120%)"
                  : "translateY(120%)",
            }}
          >
            How we can help you?
          </div>
        </div>

        <div className="mt-2">
          <div className="relative">
            {step > 1 ? (
              <textarea
                className="px-5 py-3 text-3xl w-full font-medium"
                rows={10}
                ref={inputRef}
                onKeyDown={handleKeyPress}
              />
            ) : (
              <input
                type="text"
                className="px-5 text-3xl h-20 md:h-24 w-full font-medium"
                ref={inputRef}
                onKeyDown={handleKeyPress}
                onFocus={() => {
                  setSend(true);
                }}
              />
            )}

            <div className="duration-300" style={{ opacity: send ? 1 : 0 }}>
              <img
                src={Send}
                className={`rotate-180 h-4 opacity-50 absolute right-5 ${
                  step < 2 ? "top-0 bottom-0" : "bottom-7"
                }  my-auto hover:opacity-100 cursor-pointer duration-300`}
                alt=""
                onClick={handleSend}
              />
            </div>
          </div>
          <div className="bar w-full h-2">
            <div
              className="duration-500 h-full"
              style={{
                width: `${(100 / 3) * step}%`,
                marginTop: step > 1 ? -6 : 0,
              }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between mt-3">
          <p className="italic duration-300" style={{ opacity: error ? 1 : 0 }}>
            {errorMessage}
          </p>
          <div className="flex gap-2">
            <p className="font-bold">{step > 2 ? 3 : step + 1}</p>{" "}
            <p className="font-bold opacity-50">/</p>
            <p className="font-bold">3</p>
          </div>
        </div>
      </div>

      <div
        style={{ opacity: end ? 1 : 0 }}
        className="duration-500 absolute left-0 right-0 top-0 bottom-0 h-max text-3xl w-max m-auto"
      >
        Thank you! We'll be in touch.
      </div>
    </div>
  );
};

export default ContactForm;
