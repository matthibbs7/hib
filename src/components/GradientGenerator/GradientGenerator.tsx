'use client'
import { Gradient } from './Gradient'
import { useEffect } from "react";

// Create your instance


export const GradientGenerator = () => {
// Call `initGradient` with the selector to your canvas
  useEffect(() => {
    const canvasElement = document.getElementById("gradient-canvas");
    const gradient: any = new Gradient();
    if (canvasElement) {
        gradient.initGradient("#gradient-canvas");
    } else {
        gradient.pause();
    }
  }, []);
  return (
    
        <canvas id="gradient-canvas" data-transition-in />
    
  );
}
