import React, { useEffect } from 'react';
import gsap from 'gsap';
import "./OrderButton.css"

const TruckButtonAnimation: React.FC = () => {
  useEffect(() => {
    const truckButton = document.querySelector('.truck-button') as HTMLButtonElement | null;

    if (truckButton) {
      truckButton.addEventListener('click', (e) => {
        e.preventDefault();

        let button = e.target as HTMLElement | null;
        if (button && !button.classList.contains('truck-button')) {
          button = button.closest('.truck-button');
        }

        if (button && !button.classList.contains('done')) {
          if (!button.classList.contains('animation')) {
            button.classList.add('animation');

            gsap.to(button, {
              '--box-s': 1,
              '--box-o': 1,
              duration: 0.3,
              delay: 0.5,
            });

            const truckElement = button.querySelector('.truck') ?? document.createElement('div');
            const boxElement = button.querySelector('.box') ?? document.createElement('div');

            gsap.to(truckElement, {
              x: 0,
              duration: 0.4,
              delay: 0.7,
            });

            gsap.to(button, {
              '--hx': -5,
              '--bx': 50,
              duration: 0.18,
              delay: 0.92,
            });

            gsap.to(boxElement, {
              y: 0,
              duration: 0.1,
              delay: 1.15,
            });

            gsap.set(button, {
              '--truck-y': 0,
              '--truck-y-n': -26,
            });

            gsap.to(button, {
              '--truck-y': 1,
              '--truck-y-n': -25,
              duration: 0.2,
              delay: 1.25,
              onComplete() {
                gsap.timeline({
                  onComplete() {
                    if (button) {
                      button.classList.add('done');
                    }
                  },
                })
                  .to(truckElement, {
                    x: 0,
                    duration: 0.4,
                  })
                  .to(truckElement, {
                    x: 40,
                    duration: 1,
                  })
                  .to(truckElement, {
                    x: 20,
                    duration: 0.6,
                  })
                  .to(truckElement, {
                    x: 96,
                    duration: 0.4,
                  });

                gsap.to(button, {
                  '--progress': 1,
                  duration: 2.4,
                  ease: 'power2.in',
                });
              },
            });
          }
        } else {
          if (button) {
            button.classList.remove('animation', 'done');
          }
          const truckElement = button?.querySelector('.truck') as HTMLElement;
          const boxElement = button?.querySelector('.box') as HTMLElement;

          gsap.set(truckElement, {
            x: 4,
          });
          gsap.set(button, {
            '--progress': 0,
            '--hx': 0,
            '--bx': 0,
            '--box-s': 0.5,
            '--box-o': 0,
            '--truck-y': 0,
            '--truck-y-n': -26,
          });
          gsap.set(boxElement, {
            x: -24,
            y: -6,
          });
        }
      });
    }
  }, []);

  return (
    <button className="truck-button">
      <span className="default">Đặt lịch ngay!</span>
      <span className="success">
        Đặt lịch thành công!
        <svg viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg>
      </span>
      <div className="truck">
        <div className="wheel"></div>
        <div className="back"></div>
        <div className="front"></div>
        <div className="box"></div>
      </div>
    </button>
  );
};

export default TruckButtonAnimation;
