import { useState, useEffect } from "react";

export const useExperiment = (experimentId: string): string | null => {
  const [variant, setVariant] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      //@ts-ignore
      if (window.dataLayer) {
        //@ts-ignore
        await window.dataLayer.push({ event: "optimize.activate" });
      }
      const intervalId = setInterval(() => {
        //@ts-ignore
        if (window.google_optimize !== undefined) {
          //@ts-ignore
          setVariant(window.google_optimize.get(experimentId));
          clearInterval(intervalId);
        }
      }, 100);
    })();
  });

  return variant;
};
