import type { Gender } from "../data/cards";

export type FateCardConfig = {
  id: string;
  title: string;
  subtitle: string;
  allowedGender: "all" | Gender[];
  weight: number;
  rarity: "normal" | "rare" | "legendary";
  palette: "rose" | "blue" | "amber" | "mint" | "violet";
  symbol: string;
  description: string;
  verdict: string;
};

export type LoveLetterConfig = {
  id: string;
  title: string;
  body: string[];
  signature: string;
  mood: "gentle" | "funny" | "sad" | "brave" | "absurd";
  preferredCards?: string[];
};

export const fateCards: FateCardConfig[] = [
  {
    id: "confession",
    title: "表白卡",
    subtitle: "今日命运卡",
    allowedGender: "all",
    weight: 20,
    rarity: "rare",
    palette: "rose",
    symbol: "letter",
    description: "拿下拿下！",
    verdict: "勇敢一点，宇宙会为你鼓掌。",
  },
  {
    id: "takeoff",
    title: "起飞卡",
    subtitle: "限定命运卡",
    allowedGender: ["male"],
    weight: 8,
    rarity: "legendary",
    palette: "blue",
    symbol: "rocket",
    description: "你抽中隐藏款了兄弟",
    verdict: "这张牌为你提供一个放纵一次的台阶。",
  },
  {
    id: "blessing",
    title: "祝福卡",
    subtitle: "每一对情侣",
    allowedGender: "all",
    weight: 10,
    rarity: "normal",
    palette: "mint",
    symbol: "sparkles",
    description: "今日宜大度，忌刷朋友圈刷到破防。",
    verdict: "（作者觉得这卡挺恶毒的）",
  },
  {
    id: "food-same",
    title: "美食卡",
    subtitle: "找同性吃饭卡",
    allowedGender: "all",
    weight: 5,
    rarity: "normal",
    palette: "amber",
    symbol: "cake",
    description: "先喂饱自己，爱情才不敢饿着你。",
    verdict: "命运说，先点你最想吃的。",
  },
  {
    id: "food-different",
    title: "美食卡",
    subtitle: "找异性吃饭卡",
    allowedGender: "all",
    weight: 10,
    rarity: "normal",
    palette: "amber",
    symbol: "ramen",
    description: "尝点不熟悉的味道，也许会撞见新的自己。",
    verdict: "你直接调个酒，蜜桃乌龙+西柚味真露1：1，成功率百分百（作者留言）",
  },
  {
    id: "dream",
    title: "美梦卡",
    subtitle: "月亮保管中",
    allowedGender: "all",
    weight: 5,
    rarity: "rare",
    palette: "blue",
    symbol: "moon",
    description: "睡前把遗憾折起来，交给月亮暂存。",
    verdict: "今晚月亮替你挡掉一点孤单。",
  },
  {
    id: "study",
    title: "学习卡",
    subtitle: "上岸自救卡",
    allowedGender: "all",
    weight: 13,
    rarity: "normal",
    palette: "mint",
    symbol: "book",
    description: "知识不一定让人脱单，但会让你更难被糊弄。",
    verdict: "恋爱可以晚点，绩点和简历不会等你。",
  },
  {
    id: "sports",
    title: "运动卡",
    subtitle: "心跳校准",
    allowedGender: "all",
    weight: 11,
    rarity: "normal",
    palette: "mint",
    symbol: "dumbbell",
    description: "让心跳先为自己加速一次。",
    verdict: "出汗比内耗更有性价比。",
  },
  {
    id: "movie",
    title: "电影卡",
    subtitle: "单人放映厅",
    allowedGender: "all",
    weight: 10,
    rarity: "normal",
    palette: "violet",
    symbol: "film",
    description: "这张卡理论上是用来约人的，但是AI疑似理解错了",
    verdict: "一个人的话，《百米。》很好看。（作者留言）",
  },
  {
    id: "makeup",
    title: "化妆卡",
    subtitle: "高光显灵",
    allowedGender: ["female"],
    weight: 7,
    rarity: "rare",
    palette: "rose",
    symbol: "wand",
    description: "今晚适合把自己打扮成命运也配不上的样子。",
    verdict: "今日宜闪耀，忌内耗。",
  },
  {
    id: "game",
    title: "游戏卡",
    subtitle: "再开一局",
    allowedGender: "all",
    weight: 11,
    rarity: "normal",
    palette: "violet",
    symbol: "gamepad",
    description: "输了可以重开，人生偶尔也可以。",
    verdict: "男生可以玩嘎啦game（作者留言）",
  },
  {
    id: "wine",
    title: "饮酒卡",
    subtitle: "微醺判词",
    allowedGender: "all",
    weight: 12,
    rarity: "rare",
    palette: "amber",
    symbol: "wine",
    description: "今晚适合小酌，忌给前任发长文。",
    verdict: "可以找我喝。（作者留言）",
  },
];

export const loveLetters: LoveLetterConfig[] = [
  {
    id: "gentle-01",
    title: "写给还没有被爱打败的你",
    body: [
      "你今天抽到的不是爱情，",
      "是一个可以慢慢靠近自己的夜晚。",
      "愿你在喜欢别人之前，",
      "也记得喜欢一下自己。",
    ],
    signature: "520 Fate Draw",
    mood: "gentle",
    preferredCards: ["dream", "confession", "blessing"],
  },
  {
    id: "brave-01",
    title: "写给差一点就开口的你",
    body: [
      "世界上有些答案，",
      "只会在你按下发送后出现。",
      "不要把喜欢养成一场悬案。",
      "今晚的风已经替你排练过一次勇敢。",
    ],
    signature: "一枚临时月亮",
    mood: "brave",
    preferredCards: ["confession", "takeoff"],
  },
  {
    id: "funny-01",
    title: "写给正在单人排位的你",
    body: [
      "你不是没人匹配，",
      "你是在等待更高质量的队友。",
      "先把今天这局打漂亮，",
      "明天也许就有人给你递来复活甲。",
    ],
    signature: "命运匹配系统",
    mood: "funny",
    preferredCards: ["game", "study", "sports"],
  },
  {
    id: "absurd-01",
    title: "写给朋友圈幸存者",
    body: [
      "如果今天到处都是情侣，",
      "那你就是这座城市珍贵的留白。",
      "祝他们甜，祝你自由，",
      "祝你明天醒来不会再看第二遍。",
    ],
    signature: "冷静围观协会",
    mood: "absurd",
    preferredCards: ["blessing", "food-same", "food-different"],
  },
  {
    id: "sad-01",
    title: "写给举杯又放下的你",
    body: [
      "你可以想念一个人，",
      "但不要把今晚全部交给过去。",
      "杯底没有答案，",
      "可你抬头的时候，灯还亮着。",
    ],
    signature: "晚风代笔",
    mood: "sad",
    preferredCards: ["wine", "movie"],
  },
  {
    id: "gentle-02",
    title: "写给正在变好看的你",
    body: [
      "你把自己整理好的那一刻，",
      "世界会悄悄让出一点光。",
      "不是为了被谁喜欢，",
      "是为了你走路时更像自己。",
    ],
    signature: "粉色高光",
    mood: "gentle",
    preferredCards: ["makeup", "sports"],
  },
  {
    id: "funny-02",
    title: "写给刚点完夜宵的你",
    body: [
      "有些心动靠缘分，",
      "有些快乐靠碳水。",
      "今晚别饿着自己的浪漫，",
      "热气腾起来的时候，孤单会变轻。",
    ],
    signature: "深夜食堂值班员",
    mood: "funny",
    preferredCards: ["food-same", "food-different"],
  },
];
