/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Router をインポート
import { quizData, QuizQuestion } from "../data/quizData";
import { shuffleArray } from "../utils/arrayUtils";

const QuizApp: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const router = useRouter(); // useRouter フックを初期化

  const currentQuestion: QuizQuestion = quizData[currentQuestionIndex];

  useEffect(() => {
    const options = shuffleArray([...currentQuestion.options]);
    setShuffledOptions(options);
  }, [currentQuestionIndex]);

  const handleAnswer = (selectedOption: string) => {
    setIsButtonDisabled(true);
    setShowFeedback(true);

    const isAnswerCorrect =
      currentQuestion.options[currentQuestion.correctAnswerIndex] ===
      selectedOption;
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      setShowFeedback(false);
      setIsButtonDisabled(false);

      if (currentQuestionIndex + 1 < quizData.length) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        setIsQuizComplete(true);
      }
    }, 1000);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToHome = () => {
    router.push("/"); // ホームページ ("/") に遷移
  };

  return (
    <div className="p-4 max-w-md mx-auto relative">
      <div className="absolute top-4 right-4">
        <button
          onClick={goToHome} // goToHome を呼び出し
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          トップへ戻る
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4">ワンピクイズ</h1>
      {isQuizComplete ? (
        <div className="text-center mt-24">
          <h2 className="text-xl font-semibold mb-4">クイズ終了!!</h2>
          <p className="mb-4">
            スコア: {score} / {quizData.length}
          </p>
          <button
            onClick={goToHome} // クイズ終了時もトップに戻る
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            トップへ戻る
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold mb-2">
            問題 {currentQuestionIndex + 1} / {quizData.length}
          </h2>
          <p className="mb-4 min-h-[70px]">{currentQuestion.question}</p>
          {currentQuestion.image && (
            <div className="mb-4 w-[343px] h-[250px] overflow-hidden">
              <Image
                src={currentQuestion.image}
                alt="Question Image"
                width={800}
                height={800}
                className="object-cover"
              />
            </div>
          )}
          <div className="space-y-2">
            {shuffledOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={isButtonDisabled}
                className={`w-full py-2 px-4 border rounded ${
                  isButtonDisabled
                    ? option ===
                      currentQuestion.options[
                        currentQuestion.correctAnswerIndex
                      ]
                      ? "bg-green-200"
                      : "bg-red-200"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex mt-4 text-sm justify-between">
            <button
              onClick={goToPreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="flex-1 py-2 rounded  disabled:opacity-50"
            >
              ＜ 前へ
            </button>
            <button onClick={goToNextQuestion} className="flex-1 py-2 rounded ">
              次へ ＞
            </button>
          </div>
        </div>
      )}

      {showFeedback && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`text-6xl font-bold ${
              isCorrect ? "text-green-500" : "text-red-500"
            }`}
          >
            {isCorrect ? "〇" : "×"}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
