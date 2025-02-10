"use client";

import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextTransition, { presets } from "react-text-transition";

const texts = [
  "Hi, I'm Matias Delgado",
  "Hola, soy Matias Delgado",
  "Front-end developer",
  "Desarrollador front-end",
];

const TypographicEffect = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Typography variant="h4" component="h1" align="center">
      <TextTransition springConfig={presets.wobbly}>{texts[index]}</TextTransition>
    </Typography>
  );
};

export default TypographicEffect;
