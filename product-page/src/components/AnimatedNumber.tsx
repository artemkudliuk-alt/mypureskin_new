import React, { useState, useEffect, useRef } from 'react';

interface AnimatedNumberProps {
  value: string; // e.g. "-43%", "+84%", "86%", "87.5%", "+35%"
  className?: string;
  style?: React.CSSProperties;
  duration?: number; // ms
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  className,
  style,
  duration = 1200
}) => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCount();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, [value, hasAnimated]);

  const animateCount = () => {
    // Parse sign, numeric value, and suffix/prefix
    const match = value.match(/^([+−-]?)([\d.]+)(%|₴|.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const sign = match[1];
    const targetNum = parseFloat(match[2]);
    const suffix = match[3];
    const isFloat = match[2].includes('.');

    const startTime = performance.now();

    const updateFrame = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Fast ease-out cubic curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = targetNum * easeOut;

      const formattedVal = isFloat
        ? currentVal.toFixed(1)
        : Math.round(currentVal).toString();

      setDisplayValue(`${sign}${formattedVal}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(updateFrame);
      } else {
        setDisplayValue(value); // Ensure exact final value
      }
    };

    requestAnimationFrame(updateFrame);
  };

  return (
    <div ref={elementRef} className={className} style={style}>
      {hasAnimated ? displayValue : '0'}
    </div>
  );
};
