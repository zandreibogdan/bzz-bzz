import React from "react";
import BeeButton from "../bee-button/BeeButton";

const Hero: React.FC<Slide> = ({ title, subtitle, sliderImage, id }) => {
  return (
    <div
      className={`relative bg-cover bg-center h-screen ${sliderImage}`}
      style={{ backgroundImage: `` }}
    >
      <div className="absolute inset-0 bg-black dark:bg-opacity-50 bg-opacity-20"></div>
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center">
        <main className=" lg:ml-10 md:mx-auto sm:mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl">
              <span className="block ">Bine ați venit la</span>{" "}
              <span className="block text-accent">Albinuța Svăpăiată</span>
            </h1>
            <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Găsește cea mai bună gamă de produse obținute direct de la
              albinuțele noastre Svăpăiate.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <BeeButton>Cumpără</BeeButton>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <BeeButton variant="secondary">Descoperă</BeeButton>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
