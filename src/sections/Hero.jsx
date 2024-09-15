import Button from '../components/Button.jsx';

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-8 c-space">
        <p className="hero_tag text-gray_gradient">Building Efficient Systems, Delivering Seamless Solutions</p>
        <p className="sm:text-4xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I'm Mychal <span className="waving-hand">👋</span>
        </p>
        <p className="sm:text-xl text-l font-mono text-white text-center">
          An Innovative Software Engineer Specializing in Front-End Development and Quality Assurance, Enhancing Performance and Advancing Wireless Technologies.
        </p>
        <div className="w-full flex justify-center">
          <img src="assets/landing.png" width="650" height="488" alt="grid-2" className=" mx-auto max-w-full object-contain" />
        </div>
        <div className="flex justify-center mt-8">
          <a href="#about"  className="w-fit">
            <Button name="Learn More About Me" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
