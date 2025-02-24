/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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

  const [filteredQuestions, setFilteredQuestions] = useState<QuizQuestion[]>(
    []
  ); // フィルタリングされた質問リスト

  const router = useRouter();

  const currentQuestion: QuizQuestion = filteredQuestions[currentQuestionIndex];

  useEffect(() => {
    // クエリパラメータから難易度を取得
    const searchParams = new URLSearchParams(window.location.search);
    const selectedLevel = searchParams.get("difficulty") || "easy";
    const filtered = quizData.filter(
      (question) => question.level === selectedLevel
    );
    setFilteredQuestions(filtered);
  }, []);

  useEffect(() => {
    if (filteredQuestions.length > 0) {
      const options = shuffleArray([...currentQuestion.options]);
      setShuffledOptions(options);
    }
  }, [currentQuestionIndex, filteredQuestions]);

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

      if (currentQuestionIndex + 1 < filteredQuestions.length) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        setIsQuizComplete(true);
      }
    }, 1000);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex + 1 < filteredQuestions.length) {
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
    router.push("/category");
  };

  return (
    <div className="max-w-md mx-auto relative bg-white text-black px-4 py-2">
      <div className="flex items-start justify-between">
        <Image
          src={"/image/noimage/hat01.png"}
          alt="麦わら帽子"
          width={20}
          height={20}
        />
        <h2 className="text-sm font-semibold text-black  mb-4">
          問題 {currentQuestionIndex + 1} / {filteredQuestions.length}
        </h2>
      </div>
      {filteredQuestions.length === 0 ? (
        <p className="mt-9 flex items-center justify-center text-black">
          指定された難易度の問題がありません。
        </p>
      ) : isQuizComplete ? (
        <div className="text-center mt-24">
          <h2 className="text-2xl font-semibold text-black mb-4">
            クイズ終了!!
          </h2>
          <p className="mb-4 text-black">
            スコア: {score} / {filteredQuestions.length}
          </p>
          <button
            onClick={goToHome}
            className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600"
          >
            トップへ戻る
          </button>
        </div>
      ) : (
        <div className="">
          <p className="mb-4 h-[60px] text-black text-base overflow-y-auto">
            {currentQuestion.question}
          </p>
          {currentQuestion.image && (
            <div className="mb-4 w-full h-[270px] overflow-hidden bg-sand border rounded-lg ">
              <Image
                src={currentQuestion.image}
                alt="Question Image"
                width={800}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <div className="space-y-2">
            {shuffledOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={isButtonDisabled}
                className={`w-full py-2 px-4 border rounded text-sm ${
                  isButtonDisabled
                    ? option ===
                      currentQuestion.options[
                        currentQuestion.correctAnswerIndex
                      ]
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-white text-black xl:hover:bg-gray-100"
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
              className="flex-1 py-2 rounded text-black disabled:opacity-50"
            >
              ＜ 前へ
            </button>
            <button onClick={goToHome} className="px-4 py-2 text-black rounded">
              トップへ戻る
            </button>
            <button
              onClick={goToNextQuestion}
              className="flex-1 py-2 rounded text-black"
            >
              次へ ＞
            </button>
          </div>
        </div>
      )}
      {showFeedback && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`text-6xl font-bold ${
              isCorrect ? "text-green-400" : "text-red-400"
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
