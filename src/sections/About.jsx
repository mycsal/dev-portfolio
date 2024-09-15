import { useState, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const N = 20;
  const labelsData = [...Array(N).keys()].map(() => ({
    lat: 34.0549,
    lng: -118.243683,
    text: 'Los Angeles, CA',
    labelColor: 'white',
    labelSize: '100',
    labelResolution: 5,
    labelAltitude: 10,
    labelDotRadius: 100
  }));

  const handleCopy = () => {
    navigator.clipboard.writeText('mychal.salgado@icloud.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const globeEl = useRef();
    useEffect(() => {
      const globe = globeEl.current;
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 4;
    });

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid_1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Mychal J. Salgado</p>
              <p className="grid-subtext text-justify">
              A passionate Software Engineer dedicated to building responsive, user-centered applications. With a strong foundation in front-end development and software QA, I focus on delivering seamless digital experiences and driving innovation in cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid_2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext text-justify">
              Proficient in modern programming languages, frameworks, and tools, I develop scalable and high-performance applications tailored to meet user needs. My expertise spans front-end technologies, full-stack development, and software quality assurance.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                ref={globeEl}
                width={326}
                // arcsData={arcsData}
                // arcColor={'color'}
                // arcDashLength={() => Math.random()}
                // arcDashGap={() => Math.random()}
                // arcDashAnimateTime={() => Math.random() * 4000 + 500}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                autoRotate
                autoRotateSpeed={10}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={labelsData}
              />
            </div>
            <div>
              <p className="grid-headtext">Open to Global Networking and Collaboration</p>
              <p className="grid-subtext mb-20 text-justify">Based in Los Angeles, I’m actively seeking to collaborate and connect with professionals worldwide. Whether you're looking for a skilled front-end developer or software QA expert, I’m ready to bring innovative solutions to your projects.</p>
              <a href="#contact">
               <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Crafting Solutions Through Code</p>
              <p className="grid-subtext text-justify">
              Coding is more than a profession — it's a craft that allows me to transform ideas into impactful solutions. I thrive on the challenge of solving complex problems and creating seamless user experiences. My dedication to continuous learning drives me to explore emerging technologies and push the boundaries of what’s possible in the digital space. Every line of code is an opportunity to innovate, improve, and make a difference.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-7">
              <p className="grid-subtext text-center text-3xl">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">mychal.salgado@icloud.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
