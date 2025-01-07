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
    setIsDialogOpen(false); // ダイアログを閉じる
  };

  const goToHome = () => {
    router.push("/"); // ホームページ ("/") に遷移
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">カテゴリ選択</h1>

      <div className="w-full max-w-md space-y-4">
        {/* カテゴリ選択 */}
        <DropdownList
          label="ワンピースの〜編"
          options={["全て", "1", "2", "3", "4", "5"]}
          value={selectedArc}
          onChange={(value) => setSelectedArc(value as string)}
        />

        {/* 問題数選択 */}
        <DropdownList
          label="問題数"
          options={["全て", 10, 15, 20, 25, 30]}
          value={selectedQuestionCount.toString()} // 数値を文字列に変換
          onChange={(value) => setSelectedQuestionCount(Number(value))} // 値を数値に変換
        />

        {/* 難易度選択 */}
        <div className="space-y-2">
          <h2 className="font-semibold">難易度</h2>
          <div className="flex justify-between">
            <button
              onClick={() => handleDifficultySelect("初級")}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              初級
            </button>
            <button
              onClick={() => handleDifficultySelect("中級")}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              中級
            </button>
            <button
              onClick={() => handleDifficultySelect("上級")}
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
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          トップへ戻る
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
