"use client";

import React from "react";

const GlassModal = () => {
  return (
    <div className="bg-opacity-25 fixed inset-0 flex items-center justify-center bg-black">
      <div className="rounded-lg bg-white/30 p-6 shadow-lg backdrop-blur-md">
        <h2 className="text-xl font-semibold text-white">Titre de la modale</h2>
        <p className="mt-2 text-white">
          Contenu de la modale avec effet glassmorphism.
        </p>
      </div>
    </div>
  );
};

export default GlassModal;
