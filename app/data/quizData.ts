export type QuizQuestion = {
  id: number;
  question: string;
  image?: string;
  options: string[];
  correctAnswerIndex: number;
  category?: string; // ここを追加
  level: string;
};
export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "麦わらの一味の船長の名前は？",
    image: "/image/quiz/1.jpg",
    options: ["ルフィ", "ゾロ", "ナミ", "サンジ"],
    correctAnswerIndex: 0,
    category: "1", // カテゴリを追加
    level: "easy", // 追加
  },
  {
    id: 2,
    question: "ワンピースの作者は誰？",
    image: "/image/quiz/2.jpeg",
    options: ["尾田栄一郎", "鳥山明", "岸本斉史", "荒木飛呂彦"],
    correctAnswerIndex: 0,
    category: "1", // カテゴリを追加
    level: "normal", // 追加
  },
  {
    id: 3,
    question: "サウザンドサニー号を作った船大工は誰？",
    image: "/image/quiz/3.jpg",
    options: ["フランキー", "ウソップ", "チョッパー", "ロビン"],
    correctAnswerIndex: 0,
    category: "1", // カテゴリを追加
    level: "hard", // 追加
  },
  // {
  //   id: 4,
  //   question: "悪魔の実のうち、ルフィが食べた実の名前は？",
  //   image: "/image/quiz/4.jpeg",
  //   options: ["ゴムゴムの実", "メラメラの実", "ヒトヒトの実", "スナスナの実"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 13,
  //   question: "ゴーイングメリー号を修理してくれたのは誰？",
  //   image: "/image/quiz/5.jpg",
  //   options: [
  //     "ウソップの父ヤソップ",
  //     "ガレーラカンパニー",
  //     "フランキー一家",
  //     "白ひげ海賊団",
  //   ],
  //   correctAnswerIndex: 1,
  // },
  // {
  //   id: 14,
  //   question: "四皇の1人であり、赤髪海賊団の船長は誰？",
  //   image: "/image/quiz/6.jpg",
  //   options: ["シャンクス", "ビッグ・マム", "カイドウ", "黒ひげ"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 15,
  //   question: "麦わらの一味がアラバスタで戦ったクロコダイルの組織名は？",
  //   image: "/image/quiz/7.jpg",
  //   options: ["バロックワークス", "CP9", "ビッグ・マム海賊団", "百獣海賊団"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 16,
  //   question: "ロビンが幼少期にいた島の名前は？",
  //   image: "/image/quiz/8.jpg",
  //   options: ["オハラ", "バルティゴ", "アルバーナ", "ウォーターセブン"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 17,
  //   question: "シャンクスがルフィに渡した帽子は何と呼ばれる？",
  //   image: "/image/quiz/9.jpg",
  //   options: ["麦わら帽子", "あいみょん", " ﾎﾜｱｱｱｱ!ﾎｯﾎｩ〜ｯ！", "麦わら冒子"],
  //   correctAnswerIndex: 0,
  // },
  // // {
  // //   id: 18,
  // //   question: "悪魔の実の能力者が泳げなくなる理由は何？",
  // //   image: "/image/quiz/10.jpg",
  // //   options: ["海の力", "悪魔の呪い", "ダダンの呪い", "海王類の力"],
  // //   correctAnswerIndex: 0,
  // // },
  // {
  //   id: 20,
  //   question: "ラフテルを目指すために必要な4つの石の名前は？",
  //   image: "/image/quiz/11.webp",
  //   options: ["ロードポーネグリフ", "ポーネグリフ", "歴史の石碑", "海賊の石板"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 21,
  //   question: "世界政府直属の暗殺部隊の名称は？",
  //   image: "/image/quiz/12.jpg",
  //   options: ["CP9", "CP0", "CP8", "CP7"],
  //   correctAnswerIndex: 1,
  // },
  // {
  //   id: 22,
  //   question: "魚人島で登場した海王類を呼ぶ力を持つ人は誰？",
  //   image: "/image/quiz/13.jpg",
  //   options: ["しらほし", "コアラ", "アーロン", "ハチ"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 23,
  //   question: "黒ひげが奪った2つ目の能力は何？",
  //   image: "/image/quiz/14.jpg",
  //   options: ["グラグラの実", "ヤミヤミの実", "メラメラの実", "ヒエヒエの実"],
  //   correctAnswerIndex: 0,
  // },
  // // {
  // //   id: 24,
  // //   question: "Dの意志を持つ者が共通して持つ特徴は何？",
  // //   image: "/image/quiz/15.jpg",
  // //   options: ["名前にDが入る", "強い", "家族が海賊", "全員が能力者"],
  // //   correctAnswerIndex: 0,
  // // },
  // {
  //   id: 25,
  //   question: "古代兵器プルトンが眠っている場所は？",
  //   image: "/image/quiz/16.jpg",
  //   options: ["アラバスタ", "ウォーターセブン", "魚人島", "空島"],
  //   correctAnswerIndex: 0,
  // },
  // // {
  // //   id: 26,
  // //   question: "最初の懸賞金がかけられたのは誰？",
  // //   image: "/image/quiz/17.jpg",
  // //   options: ["ルフィ", "ゾロ", "サンジ", "バギー"],
  // //   correctAnswerIndex: 0,
  // // },
  // {
  //   id: 27,
  //   question: "ロジャー海賊団の船医の名前は？",
  //   image: "/image/quiz/18.jpg",
  //   options: ["クロッカス", "ドクタークレハ", "チョッパー", "ロー"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 28,
  //   question: "頂上戦争でエースが処刑される予定だった場所は？",
  //   image: "/image/quiz/19.webp",
  //   options: [
  //     "マリンフォード",
  //     "インペルダウン",
  //     "エニエスロビー",
  //     "アラバスタ",
  //   ],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 29,
  //   question: "カイドウが率いる海賊団の名前は？",
  //   image: "/image/quiz/20.jpg",
  //   options: ["百獣海賊団", "赤髪海賊団", "黒ひげ海賊団", "ビッグ・マム海賊団"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 30,
  //   question: "ルフィの身長は？",
  //   image: "/image/quiz/30.jpeg",
  //   options: ["172cm", "174cm", "170cm", "175cm"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 31,
  //   question: "ゾロの剣道場の師匠でくいなの父親の名前は？",
  //   image: "/image/quiz/31.jpg",
  //   options: ["コウシロウ", "コウジロウ", "タンジロウ", "タンジェロ"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 32,
  //   question: "ゾロの誕生日は？",
  //   image: "/image/quiz/32.jpg",
  //   options: ["11月11日)", "10月10日", "12月12日", "9月9日"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 33,
  //   question: "ナミの初登場から頂上戦争までの身長は？",
  //   image: "/image/quiz/33.jpg",
  //   options: ["169cm", "165cm", "170cm", "168cm"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 34,
  //   question: "ウソップの誕生日は？",
  //   image: "/image/quiz/34.jpg",
  //   options: ["4月1日", "5月5日", "6月6日", "7月7日"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 35,
  //   question: "モージのペットのライオンの名前は？一時船長にもなった。",
  //   image: "/image/quiz/35.jpg",
  //   options: ["リッチー", "シシマル", "レオ", "スカンク"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 36,
  //   question: "バギー海賊団の船の名前は？",
  //   image: "/image/quiz/36.png",
  //   options: [
  //     "ビッグトップ号",
  //     "ダイナミックサーカス号",
  //     "グレートバギー号",
  //     "サーカス号",
  //   ],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 37,
  //   question: "ルフィとバギーが初めて会って戦った場所は何の町か？",
  //   image: "/image/quiz/37.jpeg",
  //   options: ["オレンジの町", "バナナの町", "アップルの町", "グレープの町"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 38,
  //   question: "扉絵で登場したガイモンと仲良くしている樽入りの女性の名前は？",
  //   image: "/image/quiz/38.png",
  //   options: ["サーファンクル", "ミサリー", "キャスリーン", "エリー"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 39,
  //   question:
  //     "ルフィがクロコダイルに最後の一撃をする際に、アニメで流れたクラシック曲は？",
  //   image: "/image/quiz/39.jpg",
  //   options: [
  //     "ドヴォルザークの交響曲第9番『新世界より』",
  //     "ベートーヴェンの交響曲第5番『運命』",
  //     "モーツァルトの交響曲第41番『ジュピター』",
  //     "チャイコフスキーの『白鳥の湖』",
  //   ],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 40,
  //   question: "特産品として香水が有名である、アラバスタの港町といえば？",
  //   image: "/image/quiz/40.jpg",
  //   options: ["ナノハナ", "レインベース", "アリバーナ", "ユバ"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 41,
  //   question: "ウォーターセブンの海列車で行ける美食の町といえば？",
  //   image: "/image/quiz/41.webp",
  //   options: ["バルディゴ", "ニッチ", "プッチ", "パッチ"],
  //   correctAnswerIndex: 2,
  // },
  // {
  //   id: 42,
  //   question: "黄猿のモットーは「------の正義」？",
  //   image: "/image/quiz/42.jpg",
  //   options: ["どっちつかずの正義", "絶対的な正義", "平和の正義", "自由の正義"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 43,
  //   question: "ニセ麦わらの一味の偽ルフィの正体は何と呼ばれる海賊か？",
  //   image: "/image/quiz/43.jpg",
  //   options: [
  //     "ブラック・バート",
  //     "キャプテン・ジョン",
  //     "デマロ・ブラック",
  //     "モルガン",
  //   ],
  //   correctAnswerIndex: 2,
  // },
  // {
  //   id: 44,
  //   question: "元アーロン一味のカリブー海賊団の船を引いていた海牛は？",
  //   image: "/image/quiz/44.jpg",
  //   options: ["モーム", "ギン", "シシオ", "ウーパ"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 45,
  //   question: "ドン・チンジャオの全盛期の頃の懸賞金の額は？",
  //   image: "/image/quiz/45.jpg",
  //   options: ["5億4200万ベリー", "4億円", "3億2000万ベリー", "6億円"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 46,
  //   question: "ケリー・ファンクは何の実の能力者か？",
  //   image: "/image/quiz/46.webp",
  //   options: [
  //     "ホビホビの実",
  //     "ジャケジャケの実",
  //     "トントンの実",
  //     "ベタベタの実",
  //   ],
  //   correctAnswerIndex: 1,
  // },
  // {
  //   id: 47,
  //   question: "ビッグ・マムの年齢は？",
  //   image: "/image/quiz/47.jpg",
  //   options: ["68歳", "65歳", "58歳", "60歳"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 48,
  //   question: "プリンはシャーロット家何女か？",
  //   image: "/image/quiz/48.jpg",
  //   options: ["30女", "32女", "38女", "35女"],
  //   correctAnswerIndex: 3,
  // },
  // {
  //   id: 49,
  //   question: "レイジュは何の魚の毒で苦しんでいたルフィを救ったか？",
  //   image: "/image/quiz/49.webp",
  //   options: ["ヨロイオコゼ", "アンコウ", "フグ", "ヒラメ"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 50,
  //   question: "ビッグ・マムの息子と娘の総数は？",
  //   image: "/image/quiz/50.jpg",
  //   options: ["85人", "80人", "90人", "78人"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 51,
  //   question:
  //     "ルフィとキッドに倒された兎丼の囚人採掘場の副看守長の一人、カバのSMILEの能力者は？",
  //   image: "/image/quiz/51.png",
  //   options: ["ドボン", "ババン", "ジャボン", "モボン"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 52,
  //   question: "キングの異名は？",
  //   image: "/image/quiz/52.jpg",
  //   options: ["火災のキング", "嵐のキング", "地震のキング", "津波のキング"],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 53,
  //   question: "漫画1000話のタイトルといえば？",
  //   image: "/image/quiz/53.jpg",
  //   options: ["新たなる旅路", "冒険の始まり", "麦わらのルフィ", "新たな冒険"],
  //   correctAnswerIndex: 2,
  // },
  // {
  //   id: 54,
  //   question: "黒ひげ海賊団の本船の名前は？",
  //   image: "/image/quiz/54.jpg",
  //   options: [
  //     "サーベルオブジーベック号",
  //     "ダークネス号",
  //     "ブラックパール号",
  //     "ゼファー号",
  //   ],
  //   correctAnswerIndex: 0,
  // },
  // {
  //   id: 55,
  //   question:
  //     "ロジャーとガープが手を組みロックス海賊団を崩壊させた事件は何事件か？",
  //   image: "/image/quiz/55.webp",
  //   options: [
  //     "エデンの事件",
  //     "海賊島の決戦",
  //     "アルバーナの戦い",
  //     "ゴッドバレー事件",
  //   ],
  //   correctAnswerIndex: 3,
  // },
  // {
  //   id: 56,
  //   question: "ヤマトの武器である金棒の名前は？",
  //   image: "/image/quiz/56.png",
  //   options: ["雷（イカヅチ）", "建（タケル）", "棍棒（ヤマト）", "影（カゲ）"],
  //   correctAnswerIndex: 1,
  // },
];
