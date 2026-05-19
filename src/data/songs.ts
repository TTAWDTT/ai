export type Song = {
  id: string;
  title: string;
  artist: string;
  src: string;
};

export const songs: Song[] = [
  {
    id: "summer-night",
    title: "Summer Night",
    artist: "土岐麻子",
    src: "assets/audio/S.S.S. - 佐藤千亜妃.mp3",
  },
  {
    id: "good-day",
    title: "Good Day",
    artist: "赵乃吉",
    src: "assets/audio/手写的从前 - 赵乃吉.mp3",
  },
  {
    id: "daisy",
    title: "Daisy",
    artist: "Aimer",
    src: "assets/audio/Aimer (エメ) - Daisy_L.mp3",
  },
  {
    id: "boat",
    title: "Oira No Fune",
    artist: "Humbert Humbert",
    src: "assets/audio/おいらの船 - ハンバート ハンバート.mp3",
  },
  {
    id: "hawthorn",
    title: "山楂树之恋",
    artist: "程佳佳",
    src: "assets/audio/山楂树之恋 - 程佳佳.mp3",
  },
];
