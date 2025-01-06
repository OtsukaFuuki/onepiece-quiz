export type QuizQuestion = {
  id: number;
  question: string;
  image?: string;
  options: string[];
  correctAnswerIndex: number;
  category?: string; // ここを追加
};
export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "麦わらの一味の船長の名前は？",
    image: "/image/quiz/1.jpg",
    options: ["ルフィ", "ゾロ", "ナミ", "サンジ"],
    correctAnswerIndex: 0,
  },
  {
    id: 2,
    question: "ワンピースの作者は誰？",
    image: "/image/quiz/2.jpeg",
    options: ["尾田栄一郎", "鳥山明", "岸本斉史", "荒木飛呂彦"],
    correctAnswerIndex: 0,
  },
  {
    id: 3,
    question: "サウザンドサニー号を作った船大工は誰？",
    image: "/image/quiz/3.jpg",
    options: ["フランキー", "ウソップ", "チョッパー", "ロビン"],
    correctAnswerIndex: 0,
  },
  {
    id: 4,
    question: "悪魔の実のうち、ルフィが食べた実の名前は？",
    image: "/image/quiz/4.jpeg",
    options: ["ゴムゴムの実", "メラメラの実", "ヒトヒトの実", "スナスナの実"],
    correctAnswerIndex: 0,
  },
  {
    id: 13,
    question: "ゴーイングメリー号を修理してくれたのは誰？",
    image: "/image/quiz/5.jpg",
    options: [
      "ウソップの父ヤソップ",
      "ガレーラカンパニー",
      "フランキー一家",
      "白ひげ海賊団",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 14,
    question: "四皇の1人であり、赤髪海賊団の船長は誰？",
    image: "/image/quiz/6.jpg",
    options: ["シャンクス", "ビッグ・マム", "カイドウ", "黒ひげ"],
    correctAnswerIndex: 0,
  },
  {
    id: 15,
    question: "麦わらの一味がアラバスタで戦ったクロコダイルの組織名は？",
    image: "/image/quiz/7.jpg",
    options: ["バロックワークス", "CP9", "ビッグ・マム海賊団", "百獣海賊団"],
    correctAnswerIndex: 0,
  },
  {
    id: 16,
    question: "ロビンが幼少期にいた島の名前は？",
    image: "/image/quiz/8.jpg",
    options: ["オハラ", "バルティゴ", "アルバーナ", "ウォーターセブン"],
    correctAnswerIndex: 0,
  },
  {
    id: 17,
    question: "シャンクスがルフィに渡した帽子は何と呼ばれる？",
    image: "/image/quiz/9.jpg",
    options: ["麦わら帽子", "海賊帽", " ﾎﾜｱｱｱｱ!ﾎｯﾎｩ〜ｯ！", "伝説の帽子"],
    correctAnswerIndex: 0,
  },
  {
    id: 18,
    question: "悪魔の実の能力者が泳げなくなる理由は何？",
    image: "/image/quiz/10.jpg",
    options: ["海の力", "悪魔の呪い", "ダダンの呪い", "海王類の力"],
    correctAnswerIndex: 0,
  },
  {
    id: 20,
    question: "ラフテルを目指すために必要な4つの石の名前は？",
    image: "/image/quiz/11.webp",
    options: ["ロードポーネグリフ", "ポーネグリフ", "歴史の石碑", "海賊の石板"],
    correctAnswerIndex: 0,
  },
  {
    id: 21,
    question: "世界政府直属の暗殺部隊の名称は？",
    image: "/image/quiz/12.jpg",
    options: ["CP9", "CP0", "CP8", "CP7"],
    correctAnswerIndex: 1,
  },
  {
    id: 22,
    question: "魚人島で登場した海王類を呼ぶ力を持つ人は誰？",
    image: "/image/quiz/13.jpg",
    options: ["しらほし", "コアラ", "アーロン", "ハチ"],
    correctAnswerIndex: 0,
  },
  {
    id: 23,
    question: "黒ひげが奪った2つ目の能力は何？",
    image: "/image/quiz/14.jpg",
    options: ["グラグラの実", "ヤミヤミの実", "メラメラの実", "ヒエヒエの実"],
    correctAnswerIndex: 0,
  },
  {
    id: 24,
    question: "Dの意志を持つ者が共通して持つ特徴は何？",
    image: "/image/quiz/15.jpg",
    options: ["名前にDが入る", "強い", "家族が海賊", "全員が能力者"],
    correctAnswerIndex: 0,
  },
  {
    id: 25,
    question: "古代兵器プルトンが眠っている場所は？",
    image: "/image/quiz/16.jpg",
    options: ["アラバスタ", "ウォーターセブン", "魚人島", "空島"],
    correctAnswerIndex: 0,
  },
  {
    id: 26,
    question: "最初の懸賞金がかけられたのは誰？",
    image: "/image/quiz/17.jpg",
    options: ["ルフィ", "ゾロ", "サンジ", "バギー"],
    correctAnswerIndex: 0,
  },
  {
    id: 27,
    question: "ロジャー海賊団の船医の名前は？",
    image: "/image/quiz/18.jpg",
    options: ["クロッカス", "ドクタークレハ", "チョッパー", "ロー"],
    correctAnswerIndex: 0,
  },
  {
    id: 28,
    question: "頂上戦争でエースが処刑される予定だった場所は？",
    image: "/image/quiz/19.webp",
    options: [
      "マリンフォード",
      "インペルダウン",
      "エニエスロビー",
      "アラバスタ",
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 29,
    question: "カイドウが率いる海賊団の名前は？",
    image: "/image/quiz/20.jpg",
    options: ["百獣海賊団", "赤髪海賊団", "黒ひげ海賊団", "ビッグ・マム海賊団"],
    correctAnswerIndex: 0,
  },
];
