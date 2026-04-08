// 站点所有数据集中管理
export const profileData = {
  homepage_name: "第47日份麦芽唐",
  alias: "麦芽唐",
  identity: "在校上学的学生w，努力积攒绘画经验的小画师",
  abstract:
    "大家好～这里是第47日份麦芽唐\n目前是在校上学的学生w，还是个努力积攒绘画经验的小画师，感谢各位老师／大人的信任，也承蒙各位大人赏眼赏单()～",
  notice: "未经允许，严禁抄袭、搬运、转载一切个人创作作品和二创同人作品。",
  main_products: ["盘泪", "稿件"],
  details:
    "约稿部分嘛，只接furry/兽兽的相关稿单。画风可以参考下有兽的画感哦,接单时间不固定（群内实时更新），接稿主要在QQ群，平台（id均为第47日份麦芽唐）偶尔会放橱窗，欢迎来戳和pp哦",
  platforms: [
    { name: "米画师", id: "第47日份麦芽唐" },
    { name: "画加", id: "第47日份麦芽唐" },
    { name: "QQ", id: "2543302038" },
    { name: "QQ群", id: "1051345965" },
    { name: "B站", id: "第47日份麦芽唐" },
    { name: "抖音", id: "第47日份麦芽唐" },
  ],
  community:
    "欢迎来戳和pp哦,群里偶尔还抽无偿小福利w,欢迎一起来围观一个画师的成长史，感兴趣的老师们欢迎进群一起聊天w",
};

// OC描述图标类型映射
export type OcDescIconName = "settings" | "story" | "coffee" | "diamond" | "smile" | "eye" | "zap";

// 爱好图标类型
export type HobbyIconName = "tv" | "book" | "plane" | "moon" | "snake" | "cat" | "sparkle";

// 爱好列表
export const hobbies: { iconName: HobbyIconName; label: string }[] = [
  { iconName: "tv", label: "追番" },
  { iconName: "book", label: "看漫画" },
  { iconName: "plane", label: "旅游" },
  { iconName: "moon", label: "睡觉" },
  { iconName: "snake", label: "撸蛇" },
  { iconName: "cat", label: "撸猫" },
  { iconName: "sparkle", label: "养OC" },
];

export const ocList = [
  {
    name: "瑭珥 - Jasper·Aureole",
    image: "/images/oc-JasperAureole.jpg",
    descriptions: [
      {
        iconName: "settings" as OcDescIconName,
        title: "设定",
        text: "角是吸铁石的那种，触碰会被吸走魔力。没有牙齿，舌头吸食进食，可以吃抽象的欲望，也可以吃具体的食物，但不会获得能量，尝个味道。",
      },
      {
        iconName: "story" as OcDescIconName,
        title: "背景",
        text: "瑭珥是在魔界出生的一只罕见白化魔羊，在黑压压昏暗的魔界可谓是独树一帜，雪白的身体，喜欢亮晶晶的金银财宝，跟其他魔简直是格格不入。特殊的外表非但没有遭到其他魔的排斥，反倒惹魔注视，到哪里都是被人好奇的对象。（ps：瑭瑭不喜欢这种感觉，出门的时候会穿戴披风斗篷，包裹住自己，但是通常一点用都没有hhhhhh，折腾多了之后，对披风也是情有独钟了，收集了很多亮晶晶好看的披风，听其他魔说是一天一件（假的）",
      },
      {
        iconName: "coffee" as OcDescIconName,
        title: "习惯",
        text: "作为一只恶魔，喜欢囤积还是很正常的吧，但是瑭瑭的囤积癖已经是病入膏肓的地步了。在自己的领地更是专门打造了仓库进行储存，对除了自己之外，其他人不可靠近，包括家人。自己的东西占有欲也是非常强哈。痴迷程度大概是经常要在里面才能安心睡着吧。趁瑭瑭不在，我们来看看瑭瑭的宝藏们～是披风n件、金银珠宝n件、假牙n个…",
      },
      {
        iconName: "diamond" as OcDescIconName,
        title: "彩蛋",
        text: "现在暂定是两个条件进入恶魔岛，一个是恶魔的许可（亲友恶魔和恶魔的君王），一个是特定的物品（这个看开店的恶魔喜好）。",
      },
    ],
  },
  {
    name: "黔曜曜 - InkyShimmer",
    image: "/images/oc-InkyShimmer.jpg",
    descriptions: [
      {
        iconName: "smile" as OcDescIconName,
        title: "性格",
        text: "小傲娇，能动手就不动手，绝对忠诚，干事很利索。似猫似兔，能歌善武，十分好斗。平时话少，不善交际，很靠谱，但也会有孩子气的一面。在四耳族里，武力至上。",
      },
      {
        iconName: "eye" as OcDescIconName,
        title: "外观",
        text: "尾巴火焰可变化，耳朵尖尖和背部银灰色的物件都是金属，银灰色的物件可画可不画。",
      },
      {
        iconName: "zap" as OcDescIconName,
        title: "元素",
        text: "星星、火焰、盔甲、武器（短刀、飞镖、苦无）。",
      },
      {
        iconName: "story" as OcDescIconName,
        title: "背景",
        text: "四耳作为战斗天赋极高的一族，一生追求武力至上，且只效忠一人，唯一的弱点是如果不在成年之前找到自己的目标，会导致内心混沌，失去平衡，直到被心魔吞噬，变成没有思想的行尸走肉。但其实四耳最开始不是四耳，是因为一次世界的重大灾难导致一部分兽族受到诅咒和改变，四耳其实是一种异变。强大的实力，缺陷也很明显，如果不能找到认定的那个人的话，变成行尸走肉难免会对其他种族造成麻烦，但是他们忠诚的属性又颇有口碑。直到现在都在寻找解除诅咒的方法。",
      },
    ],
  },
  {
    name: "眠栖 - Reveri·Nesty",
    image: "/images/oc-ReveriNesty.png",
    descriptions: [
      {
        iconName: "smile" as OcDescIconName,
        title: "性格",
        text: "小宅女一枚，性格慵懒的，诞生的大部分时间都在休眠睡觉，常与社会脱节，跟不上时代，被人打趣是老古董会生气，平时看着温温和和不计较，一被说老古董就会暴走。",
      },
      {
        iconName: "eye" as OcDescIconName,
        title: "外观",
        text: "银杏小龙，平时盘着一坨睡久了，会形成龙屿（龙的岛屿），原身体型与岛屿不相上下，身上会长出银杏树，树上结的果子使生物延寿千年，还可疗伤。不睡在海里，就在天上一坨飘啊飘。外号叫飘飘眠",
      },
      {
        iconName: "zap" as OcDescIconName,
        title: "元素",
        text: "生命力与治愈力量、银杏、巨大、自然",
      },
    ],
  },
];

export type PricingItem = {
  id: string;
  order: string;
  title: string;
  price: string;
  priceDetail?: string;
  description: string[];
  extras?: string[];
  extrasTitle?: string;
  images: { src: string; alt: string }[];
};

export type PricingGuideQuestion = {
  question: string;
  example: string;
};

export type PricingColumnLayout = {
  left: PricingItem["id"][];
  right: PricingItem["id"][];
};

export const pricingItems: PricingItem[] = [
  {
    id: "headshot",
    order: "01",
    title: "大头",
    price: "底价 69r",
    priceDetail: "浮动 0 ~ 20r ｜ 自带简易背景",
    description: [
      "包含一枚脑袋和两只爪子。",
      "可以指定动作 ^w^",
    ],
    images: [{ src: "/images/pricing/headshot.jpg", alt: "大头例图" }],
  },
  {
    id: "animal-fullbody",
    order: "02",
    title: "小动物全身",
    price: "底价 110r",
    priceDetail: "浮动 0 ~ 40r ｜ 自带简易背景",
    description: [
      "包含一整只小动物。",
      "画手喜欢大尾巴，所以小尾巴会放大一点。",
      "可以指定动作 ^w^",
    ],
    extrasTitle: "示例组合",
    extras: ["双兽＋元素背景", "单兽＋元素背景", "单兽＋简易背景"],
    images: [
      { src: "/images/pricing/animal-fullbody.jpg", alt: "小动物全身例图" },
    ],
  },
  {
    id: "mini-q",
    order: "03",
    title: "小Q",
    price: "底价 69r",
    priceDetail: "浮动 0 ~ 30r ｜ 自带简易背景",
    description: [
      "包含一整只小动物。",
      "画手喜欢大尾巴，所以小尾巴会放大一点。",
      "可以指定动作 ^w^",
    ],
    images: [{ src: "/images/pricing/mini-q.jpg", alt: "小Q例图" }],
  },
  {
    id: "animal-halfbody",
    order: "04",
    title: "小动物半身",
    price: "底价 79r",
    priceDetail: "浮动 0 ~ 30r ｜ 自带简易背景",
    description: [
      "包含一个上半身（到腰部）和尾巴。",
      "可以指定动作 ^w^",
    ],
    images: [],
  },
  {
    id: "tiny-nosega",
    order: "05",
    title: "毛绒小鼻嘎",
    price: "底价 30r",
    priceDetail: "浮动 0 ~ 10r",
    description: [
      "包含很小鼻嘎的小动物。",
      "可以指定动作 ^w^",
    ],
    images: [
      { src: "/images/pricing/tiny-nosega-1.jpg", alt: "毛绒小鼻嘎例图 1" },
      { src: "/images/pricing/tiny-nosega-2.jpg", alt: "毛绒小鼻嘎例图 2" },
      { src: "/images/pricing/tiny-nosega-3.jpg", alt: "毛绒小鼻嘎例图 3" },
    ],
  },
  {
    id: "design-refresh",
    order: "06",
    title: "设定图",
    price: "底价 300r",
    priceDetail: "浮动 0 ~ 200r ｜ 自带简易背景",
    description: [
      "包含底色版和简单二分版两种版本。",
      "包含正比正面和背面、小鼻嘎正面和背面，以及设定分解。",
      "设定分解可按需求指定分解的部分，例如饰品、衣物、花纹等。",
      "不接纯文字设和重新设计，仅接受旧设定图或详细图片设定作为翻新基础。",
      "若需添加或更改小部分设定，需要提供详细参考图和他卡。",
    ],
    images: [
      { src: "/images/pricing/design-sheet-1.jpg", alt: "设定图例图 1" },
      { src: "/images/pricing/design-sheet-2.png", alt: "设定图例图 2" },
    ],
  },
  {
    id: "business-card",
    order: "07",
    title: "来一张名片",
    price: "底价 220r",
    priceDetail: "浮动 0 ~ 180r",
    description: [
      "包含一张正面（半身为主）和一张背面（两枚小鼻嘎）。",
      "请提供 2 ~ 3 个元素。",
      "可以指定动作 ^w^",
    ],
    images: [
      { src: "/images/pricing/business-card-1.jpg", alt: "名片例图 1" },
      { src: "/images/pricing/business-card-2.jpg", alt: "名片例图 2" },
    ],
  },
];

export const pricingColumnLayout: PricingColumnLayout = {
  left: ["headshot", "mini-q", "tiny-nosega"],
  right: ["animal-fullbody", "animal-halfbody", "design-refresh", "business-card"],
};

export const pricingGuideQuestions: PricingGuideQuestion[] = [
  {
    question: "Q1：大人想要什么样的业务呢？",
    example: "例：生贺（一个小动物半身，一个小鼻嘎）／大场景（两个小动物全身）",
  },
  {
    question: "Q2：动作有没有要求呢？",
    example: "例：需要互动、抱抱、贴贴，或者想要能露出肉垫的动作。",
  },
  {
    question: "Q3：可能还要提供一些元素嗷。",
    example: "例：跟孩子相关的元素／喜欢的东西，比如蓝莓、甜品、水等。",
  },
  {
    question: "Q4：画布尺寸有没有要求呢？",
    example: "例：如果稿件要用作电脑壁纸，可以提前说明尺寸需求。",
  },
];

export const pricingGuideNote =
  "以上这些问题可以先提前想想哦，等画到的时候会私信小窗沟通，再根据你的要求进行最终定价 ^w^";

export const galleryImages = [
  { src: "/images/work-1.jpg", alt: "作品 1" },
  { src: "/images/work-2.jpg", alt: "作品 2" },
  { src: "/images/work-3.jpg", alt: "作品 3" },
  { src: "/images/work-4.jpg", alt: "作品 4" },
  { src: "/images/work-5.jpg", alt: "作品 5" },
  { src: "/images/work-6.jpg", alt: "作品 6" },
];
