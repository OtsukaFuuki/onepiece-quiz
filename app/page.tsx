"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const router = useRouter();

  const handleStartQuiz = () => {
    // クイズに遷移
    router.push("/category");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen top-bg1">
      <div className="w-full max-w-md p-4 animate-bounce">
        <button
          onClick={handleStartQuiz}
          className="w-full mt-8 px-4 py-2 h-[700px] text-xl font-bold text-white"
        >
          タップでスタート!!!
        </button>
      </div>
    </main>
  );
};

export default Home;
