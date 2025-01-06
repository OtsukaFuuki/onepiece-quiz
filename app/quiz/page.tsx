"use client";

import React from "react";
import QuizApp from "../components/QuizApp";

const QuizPage: React.FC = () => {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full">
        <QuizApp />
      </div>
    </main>
  );
};

export default QuizPage;
