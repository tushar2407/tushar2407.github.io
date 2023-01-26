$("#tsparticles")
  .particles()
  .init(
    {
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              value_area: 1600
            }
          },
          color: {
            value: '#00ffb3'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 1,
              color: '#00ffb3'
            },
            polygon: {
              nb_sides: 6
            }
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.25,
              sync: true
            }
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 1.25,
              sync: true
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#00ffb3',
            opacity: 1,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: true,
            attract: {
              enable: true,
              rotateX: 2000,
              rotateY: 2000
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 3
              }
            },
            repulse: {
              distance: 250,
              duration: 2
            }
          }
        },
        retina_detect: true
     },
    function (container) {
      // container is the particles container where you can play/pause or stop/start.
      // the container is already started, you don't need to start it manually.
    }
  );
var typed = new Typed("#typed", {
    strings:[
        'I am a Computer Science undergrad.',
        // 'I <3 to code.',
        'Developing is my hobby.',
        'I am a part time reseacher too 😏',
    ],
    typeSpeed: 40,
    backSpeed: 40,
    // backDelay: 500,
    // startDelay: 1000,
    loop: true,
    cursorChar : "|"
});
