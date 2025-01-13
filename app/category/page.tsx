"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ConfirmationDialog from "../components/ConfirmationDialog";
import DropdownList from "../components/DropdownList";

const CategorySelection: React.FC = () => {
  const [selectedArc, setSelectedArc] = useState("");
  const [selectedQuestionCount, setSelectedQuestionCount] =
    useState<number>(10); // number型に変更
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const router = useRouter();

  const handleDifficultySelect = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
    setIsDialogOpen(true); // ダイアログを開く
  };

  const handleStartQuiz = () => {
    // クイズページに遷移
    router.push(
      `/quiz?arc=${selectedArc}&count=${selectedQuestionCount}&difficulty=${selectedDifficulty}`
    );
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const goToHome = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 cateBg12">
      {/* 2/4/6/12/13/14/15s*/}
      {/* <h1 className="text-2xl font-bold mb-2">カテゴリ選択</h1> */}
      {/* <p className="text-sm mb-4">※今は難易度しか選べません</p> */}

      <div className="w-full max-w-md space-y-4 mt-20">
        <div className="flex items-center justify-between gap-5">
          {/* カテゴリ選択 */}
          <div className="flex-1">
            <DropdownList
              // label="ワンピースの〜編"
              label=""
              options={["全て", "1", "2", "3", "4", "5"]}
              value={selectedArc}
              onChange={(value) => setSelectedArc(value as string)}
            />
          </div>
          <div className="flex-1">
            {/* 問題数選択 */}
            <DropdownList
              // label="問題数"
              label=""
              options={["全て", 10, 15, 20, 25, 30]}
              value={selectedQuestionCount.toString()} // 数値を文字列に変換
              onChange={(value) => setSelectedQuestionCount(Number(value))} // 値を数値に変換
            />
          </div>
        </div>

        {/* 難易度選択 */}
        <div className="space-y-2">
          <div className="flex flex-col justify-between space-y-2">
            <button
              onClick={() => handleDifficultySelect("easy")}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              初級
            </button>
            <button
              onClick={() => handleDifficultySelect("normal")}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              中級
            </button>
            <button
              onClick={() => handleDifficultySelect("hard")}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              上級
            </button>
          </div>
        </div>
      </div>

      {/* トップへ戻るボタン */}
      <div className="mt-4">
        <button
          onClick={goToHome}
          className="text-xs fixed bottom-4 right-4 w-12 h-12 gradientBackground1 text-white rounded-full hover:bg-yellow-600 flex items-center justify-center shadow-lg animate-bounce"
        >
          TOPへ
        </button>
      </div>

      {/* 確認ダイアログ */}
      {isDialogOpen && (
        <ConfirmationDialog
          selectedArc={selectedArc}
          selectedQuestionCount={selectedQuestionCount} // 数値として渡す
          selectedDifficulty={selectedDifficulty}
          onClose={handleCloseDialog}
          onStart={handleStartQuiz}
        />
      )}
    </div>
  );
};

export default CategorySelection;
