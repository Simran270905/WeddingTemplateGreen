import { useEffect, useRef, useState } from "react";

const revealSectionConfig = {
  defaultThreshold: 0.25, // 25% of section in viewport
};

const RevealSection = ({ 
  className = "", 
  animationClass, 
  children, 
  id,
  threshold = revealSectionConfig.defaultThreshold 
}) => {
  const ref = useRef(null);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasShown(true);       // lock to true once visible
          observer.disconnect();    // stop observing so it never re-triggers
        }
      },
      { threshold } // Configurable threshold
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <section
      id={id}
      ref={ref}
      className={`${className} ${hasShown ? animationClass : "opacity-0 translate-y-6"}`}
    >
      {children}
    </section>
  );
};

export default RevealSection;
