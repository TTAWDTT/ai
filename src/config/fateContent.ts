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
  verdicts: string[];
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
    title: "表白",
    subtitle: "今日命运卡",
    allowedGender: "all",
    weight: 18,
    rarity: "rare",
    palette: "rose",
    symbol: "letter",
    description: "一封没寄出的信，今天终于知道该写给谁。",
    verdicts: [
      "勇敢一点，宇宙会为你鼓掌。",
      "你不是没有机会，只是少了一次开口。",
      "喜欢是一场小型起义，今晚适合举旗。",
    ],
  },
  {
    id: "takeoff",
    title: "起飞",
    subtitle: "限定命运卡",
    allowedGender: ["male"],
    weight: 5,
    rarity: "legendary",
    palette: "blue",
    symbol: "rocket",
    description: "今夜风向很好，适合大胆一点。",
    verdicts: [
      "别问，问就是起飞。",
      "宇宙给你开了一条缝，但你得自己发消息。",
      "今晚的心动不讲武德，只讲推力。",
    ],
  },
  {
    id: "blessing",
    title: "祝福",
    subtitle: "每一对情侣",
    allowedGender: "all",
    weight: 18,
    rarity: "normal",
    palette: "mint",
    symbol: "sparkles",
    description: "把祝福送出去，也把自由留给自己。",
    verdicts: [
      "你祝他们长久，也祝自己快乐。",
      "今日宜大度，忌刷朋友圈刷到破防。",
      "他们有他们的甜，你有你的风。",
    ],
  },
  {
    id: "food-same",
    title: "美食",
    subtitle: "同频胃口",
    allowedGender: "all",
    weight: 14,
    rarity: "normal",
    palette: "amber",
    symbol: "cake",
    description: "先喂饱自己，爱情才不敢饿着你。",
    verdicts: [
      "今晚适合吃点热的，别拿冷暴力当夜宵。",
      "你要等的人也许会迟到，但外卖不会。",
      "命运说，先点你最想吃的。",
    ],
  },
  {
    id: "food-different",
    title: "美食",
    subtitle: "异世界风味",
    allowedGender: "all",
    weight: 12,
    rarity: "normal",
    palette: "amber",
    symbol: "ramen",
    description: "尝点不熟悉的味道，也许会撞见新的自己。",
    verdicts: [
      "今天别只吃熟悉的苦，换一道菜。",
      "随机菜单比随机爱情靠谱一点点。",
      "胃口打开了，人生也会露出一条小路。",
    ],
  },
  {
    id: "dream",
    title: "美梦",
    subtitle: "月亮保管中",
    allowedGender: "all",
    weight: 10,
    rarity: "rare",
    palette: "blue",
    symbol: "moon",
    description: "睡前把遗憾折起来，交给月亮暂存。",
    verdicts: [
      "好好睡吧，梦里有你想要的答案。",
      "今晚月亮替你挡掉一点孤单。",
      "别熬太晚，命运也需要加载。",
    ],
  },
  {
    id: "study",
    title: "学习",
    subtitle: "上岸自救卡",
    allowedGender: "all",
    weight: 13,
    rarity: "normal",
    palette: "mint",
    symbol: "book",
    description: "知识不一定让人脱单，但会让你更难被糊弄。",
    verdicts: [
      "今天少想 TA，多背两个知识点。",
      "恋爱可以晚点，绩点和简历不会等你。",
      "你不是没人爱，你是在升级版本。",
    ],
  },
  {
    id: "sports",
    title: "运动",
    subtitle: "心跳校准",
    allowedGender: "all",
    weight: 11,
    rarity: "normal",
    palette: "mint",
    symbol: "dumbbell",
    description: "让心跳先为自己加速一次。",
    verdicts: [
      "跑起来，别让情绪追上你。",
      "出汗比内耗更有性价比。",
      "今天宜拉伸，忌反复点开聊天框。",
    ],
  },
  {
    id: "movie",
    title: "电影",
    subtitle: "单人放映厅",
    allowedGender: "all",
    weight: 10,
    rarity: "normal",
    palette: "violet",
    symbol: "film",
    description: "一个人坐在好位置，也算是浪漫。",
    verdicts: [
      "今晚你是主角，不是路过的观众。",
      "别急着等彩蛋，正片已经开始。",
      "让屏幕亮一会儿，也让心安静一会儿。",
    ],
  },
  {
    id: "makeup",
    title: "化妆",
    subtitle: "高光显灵",
    allowedGender: ["female"],
    weight: 7,
    rarity: "rare",
    palette: "rose",
    symbol: "wand",
    description: "今晚适合把自己打扮成命运也配不上的样子。",
    verdicts: [
      "你不是在化妆，你是在给世界上色。",
      "今日宜闪耀，忌内耗。",
      "镜子说：这个人值得被认真看见。",
    ],
  },
  {
    id: "game",
    title: "游戏",
    subtitle: "再开一局",
    allowedGender: "all",
    weight: 11,
    rarity: "normal",
    palette: "violet",
    symbol: "gamepad",
    description: "输了可以重开，人生偶尔也可以。",
    verdicts: [
      "别挂机，今天的你有隐藏任务。",
      "匹配失败不代表账号有问题。",
      "先赢一局游戏，再放过今晚的自己。",
    ],
  },
  {
    id: "wine",
    title: "酒",
    subtitle: "微醺判词",
    allowedGender: "all",
    weight: 9,
    rarity: "rare",
    palette: "amber",
    symbol: "wine",
    description: "别把心事全倒进杯子，给明天留一点清醒。",
    verdicts: [
      "可以微醺，不要借酒给过去续杯。",
      "今晚适合小酌，忌给前任发长文。",
      "把杯子举起来，也把自己放下来。",
    ],
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
