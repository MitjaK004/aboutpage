import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import particlesConf from '../particles/particlesConf'

const ParticlesOzadje = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return(
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={particlesConf}
/>
  );
}

export default ParticlesOzadje;