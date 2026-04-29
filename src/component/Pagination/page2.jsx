import react from "react";
import { useState as reactUseState } from "react";
import Stack from "../sections/Stack";

const page2 = () => {
  return (

    <div id="page-2" className="grid grid-cols-1 gap-4">
      <h1 className="text-xl font-bold text-start md:text-2xl">Tecnologías que domino y sigo perfeccionando</h1>
      <p className="text-lg text-start f md:text-xl">Mi experiencia y enfoque trabajando con Front-end, Back-end, bases de datos, herramientas, prácticas de desarrollo y tecnologías que actualmente estoy aprendiendo.</p>
      
      <Stack/>

    </div>

  );
};

export default page2;

