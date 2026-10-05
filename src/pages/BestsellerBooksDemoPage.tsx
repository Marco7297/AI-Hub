import React from 'react';
import { BestsellerBooks } from '../shaders/bestseller-books/BestsellerBooks';

export const BestsellerBooksDemoPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#0b0f19] flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4 py-10 sm:py-14">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Bestseller Books (ThreeUI)
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            CSS 3D + cover video component from ThreeUI.
          </p>
        </div>
        <div className="shader-frame w-full h-[70vh] rounded-2xl overflow-hidden border border-slate-800/60 shadow-2xl">
          <BestsellerBooks />
        </div>
      </div>
    </div>
  );
};

export default BestsellerBooksDemoPage;
