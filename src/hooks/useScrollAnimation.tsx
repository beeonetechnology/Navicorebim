import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentElements = elementsRef.current;
    currentElements.forEach((element) => {
      if (element) {
        element.classList.add('scroll-animate');
        observer.observe(element);
      }
    });

    return () => {
      currentElements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return addToRefs;
};

export const useParallax = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth) - 0.5;
      const yPos = (clientY / innerHeight) - 0.5;
      
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        const x = xPos * speed;
        const y = yPos * speed;
        (element as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
};