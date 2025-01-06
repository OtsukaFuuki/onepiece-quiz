"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const router = useRouter();

  const handleStartQuiz = () => {
    // カテゴリ選択なしでクイズに進む
    router.push("/quiz");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen top-bg1">
      <div className="w-full max-w-md p-4">
        <button
          onClick={handleStartQuiz}
          className="w-full px-4 py-2 bg-none text-white rounded h-[500px]"
        ></button>
      </div>
    </main>
  );
};

export default Home;
