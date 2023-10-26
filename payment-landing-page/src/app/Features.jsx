import Button from "../components/Button";
import Hero from '../images/hero-image.svg';

const Features = () => {
  return (
    <div className="md:flex md:justify-between">
      <div className="md:w-1/3 md:mt-32 mt-20">
        <div className="md:flex-col space-y-4 md:text-left text-center">
          <div>
            <div className="text-white">START SAVING MONEY</div>
          </div>
          <div>
            <div className="text-white text-5xl">
              Smart Credit Card
              For Your Daily Life.
            </div>
          </div>
          <div>
            <Button text="Download" />
          </div>
        </div>
      </div>
      <div className="md:text-right text-center md:mt-0 mt-8">
        <img
          src={Hero}
        />
      </div>
    </div>
  );
};

export default Features;
