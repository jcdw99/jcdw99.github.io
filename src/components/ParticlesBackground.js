import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import useWindowDimensions from "./WindowDim"



export default function ParticlesBackground() {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const { height, width } = useWindowDimensions();
    return (

        <Particles
            id="tsparticles"
            init={particlesInit}
            opacity="0.1"
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1
                  },
                background: {
                    color: {
                        value: "#1f1f1f",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        push: {
                            quantity: 1,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: Math.round(Math.max(width, height) / 10),
                        enable: true,
                        opacity: 0.15,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.11,
                        straight: true,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: width,
                        },
                        value: Math.round(Math.max(width, height)/7),
                    },
                    opacity: {
                        value: 0.15,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                   
                        value: { min: 2, max: 5}
                    },
                },
                detectRetina: true,
            }}
        />
    );
};
