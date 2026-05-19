import { useMemo } from "react";

type SakuraFallProps = {
  intensity: "slow" | "normal" | "fast";
};

export function SakuraFall({ intensity }: SakuraFallProps) {
  const petals = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => {
        const duration = 7 + Math.random() * 9;

        return {
          id: index,
          left: `${Math.round(Math.random() * 100)}%`,
          delay: `${(Math.random() * -12).toFixed(2)}s`,
          duration: `${duration.toFixed(2)}s`,
          slowDuration: `${(duration * 1.45).toFixed(2)}s`,
          fastDuration: `${(duration * 0.52).toFixed(2)}s`,
          size: `${(6 + Math.random() * 10).toFixed(1)}px`,
          drift: `${(Math.random() * 120 - 60).toFixed(1)}px`,
          opacity: 0.42 + Math.random() * 0.42,
        };
      }),
    [],
  );

  return (
    <div className={`sakura-field sakura-field--${intensity}`} aria-hidden="true">
      {petals.map((petal) => (
        <span
          className="sakura-petal"
          key={petal.id}
          style={
            {
              "--left": petal.left,
              "--delay": petal.delay,
              "--duration": petal.duration,
              "--slow-duration": petal.slowDuration,
              "--fast-duration": petal.fastDuration,
              "--size": petal.size,
              "--drift": petal.drift,
              "--opacity": petal.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
