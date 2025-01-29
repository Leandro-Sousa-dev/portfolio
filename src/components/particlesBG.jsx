import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";

export const ParticlesBGComponent = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadStarsPreset(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            preset: "stars",
            background: {
                size: "cover",
                "image": "url('/images/background.jpg')"
            },
            fpsLimit: 120,
            particles: {
                color: {
                    value: "#ffffff",
                }
            },
            detectRetina: true,
            fullScreen: {
                zIndex: -1,
            },
            pauseOnBlur: true,
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
};