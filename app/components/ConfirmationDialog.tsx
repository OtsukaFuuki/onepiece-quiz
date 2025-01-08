import React from "react";

interface ConfirmationDialogProps {
  selectedArc: string;
  selectedQuestionCount: number;
  selectedDifficulty: string;
  onClose: () => void;
  onStart: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  selectedArc,
  selectedQuestionCount,
  selectedDifficulty,
  onClose,
  onStart,
}) => {
  // 難易度のマッピング
  const difficultyMapping: { [key: string]: string } = {
    easy: "初級",
    normal: "中級",
    hard: "上級",
  };

  // マッピングされた値を取得
  const displayDifficulty = difficultyMapping[selectedDifficulty];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-80">
      <div className="bg-white p-6 rounded shadow-lg text-center space-y-4">
        <h3 className="text-xl font-bold">確認</h3>
        <p className="text-gray-700">以下の内容でクイズを開始しますか？</p>
        <ul className="text-left">
          <li>カテゴリ: {selectedArc || "未選択"}</li>
          <li>問題数: {selectedQuestionCount}問</li>
          <li>難易度: {displayDifficulty}</li>
        </ul>
        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            戻る
          </button>
          <button
            onClick={onStart}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            スタート
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
