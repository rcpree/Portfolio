import { FaDownload, FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Footer = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "";
        alink.click();
      });
    });
  };
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center justify-between">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className="flex flex-col lg:flex-row justify-between lg:w-1/2">
          <a href="mailto:dev.mohit.chauhan@gmail.com" className="mb-4 md:mb-0">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <div id="resume">
            <MagicButton
              handleClick={onButtonClick}
              title="Download Resume"
              icon={<FaDownload />}
              position="right"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
