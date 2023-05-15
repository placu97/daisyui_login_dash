import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center space-y-4">
      <h1 className="font-kd text-white_A700 font-bold text-4xl">Errore 404 pagina non trovata</h1>
      <div className="flex space-x-4">
        <img src="svg/tool.svg" className="w-10 h-10" alt="eye"/>
        <img src="svg/globe.svg" className="w-10 h-10" alt="eye"/>
        <img src="svg/x-octagon.svg" className="w-10 h-10" alt="eye"/>
      </div>
      <img src="/images/Logo.png" alt="title" className="w-1/4 h-1/8" />
    </div>
  );
};

export default NotFound;