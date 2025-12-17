import { ASSETS } from "./assets";

export const brandInfo = {
  name: "黒岩家", // "Nikuniku" in simpler Japanese or Kanji if preferred, using the provided name
  fullName: "Nikuniku 黒岩家壽喜燒專門店",
  tagline: "正宗關西壽喜燒・職人手作・頂級和牛",
  description: "嚴選信州A5和牛與伊比利梅花豚，搭配獨家秘製醬汁與專人桌邊服務，為您呈現最道地的日式饗宴。",
  bookingUrl: "https://inline.app/booking/-OVf4vKMlCQnf7l0SCSM:inline-live-3",
  social: {
    facebook: "https://www.facebook.com/p/Nikuniku%E9%BB%91%E5%B2%A9%E5%AE%B6%E5%A3%BD%E5%96%9C%E7%87%92%E5%B0%88%E9%96%80%E5%BA%97-61575832411076/",
    instagram: "https://www.instagram.com/nikuniku_sukiyaki/",
  },
};

export const locations = [
  {
    id: "minzu",
    name: "台南創始店",
    address: "台南市中西區民族路二段24號",
    note: "（安全帽店的巷子進來）",
    phone: "06-2236039",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.887654321!2d120.200000!3d22.990000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU5JzI0LjAiTiAxMjDCsDEyJzAwLjAiRQ!5e0!3m2!1sen!2stw!4v1600000000000",
    image: ASSETS.food.atmosphere,
  },
  {
    id: "humei",
    name: "台南旗艦店",
    address: "台南市北區中華北路一段100號",
    note: "",
    phone: "06-3588194",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.000000000!2d120.190000!3d23.010000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzM2LjAiTiAxMjDCsDExJzI0LjAiRQ!5e0!3m2!1sen!2stw!4v1600000000000",
    image: ASSETS.food.tableSetup,
  },
  {
    id: "chiayi",
    name: "嘉義垂楊店",
    address: "嘉義市垂楊路557巷1號",
    note: "",
    phone: "05-2861107",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58288.75017192801!2d120.430000!3d23.475000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e9431ecbc5b8b%3A0x0!2zMjPCsDI4JzMwLjAiTiAxMjDCsDI1JzQ4LjAiRQ!5e0!3m2!1sen!2stw!4v1600000000000",
    image: ASSETS.food.grill, 
  },
];

export const menuHighlights = [
  {
    name: "信州A5和牛",
    description: "日本直送頂級和牛，油花分佈如大理石般細緻，入口即化。",
    image: ASSETS.food.meatPlatter,
  },
  {
    name: "伊比利梅花豚",
    description: "西班牙國寶級豬肉，帶有獨特橡果香氣，肉質軟嫩。",
    image: ASSETS.food.rawMeat,
  },
  {
    name: "海之寶石盛山藥",
    description: "新鮮山藥搭配特選海鮮，口感清脆滑順。",
    image: ASSETS.food.vegetables, 
  },
  {
    name: "京風牛筋柔煮",
    description: "慢火燉煮牛筋，膠質豐富，搭配特製醬汁。",
    image: ASSETS.food.dessert, // Updated to use the 'bowl' looking image as requested
  },
];

export const mediaCoverage = [
  {
    id: 1,
    title: "食尚玩家 熱血48小時 推薦",
    summary: "台南必吃！正宗關西壽喜燒，限量和牛銷魂美味，主持人朵拉強力推薦。",
    source: "食尚玩家",
    link: "https://supertaste.tvbs.com.tw/review/357268", 
    image: ASSETS.food.hero, 
  },
  {
    id: 2,
    title: "網友熱議：台南宵夜首選",
    summary: "Dcard、PTT 網友一致好評，濃濃日式風情，深夜食堂的最佳選擇。",
    source: "Dcard / PTT",
    link: "#",
    image: ASSETS.food.atmosphere,
  },
  {
    id: 3,
    title: "暖冬商機！引進日本和牛",
    summary: "新聞報導：黑岩家壽喜燒搶攻暖冬市場，引進頂級日本和牛與生猛海鮮。",
    source: "新聞媒體",
    link: "#",
    image: ASSETS.food.meatPlatter, 
  },
];

export const reviews = [
  {
    id: 1,
    user: "陳小姐",
    rating: 5,
    comment: "第一次吃到這麼道地的關西壽喜燒，店員會先用牛油熱鍋，再炒香洋蔥和肉片，香味四溢！",
    platform: "Google Reviews",
  },
  {
    id: 2,
    user: "Jason Lin",
    rating: 5,
    comment: "A5和牛真的太好吃了，入口即化。環境很有氣氛，適合約會。",
    platform: "Google Reviews",
  },
  {
    id: 3,
    user: "愛吃鬼小美",
    rating: 4.8,
    comment: "服務非常周到，全程桌邊服務，不用自己動手就能吃到最完美的熟度。甜點抹茶最中冰寶也很驚艷！",
    platform: "Instagram",
  },
];

export const instagramPosts = [
  ASSETS.food.closeUpMeat,
  ASSETS.food.grill,
  ASSETS.food.vegetables,
  ASSETS.food.setMeal,
  ASSETS.food.drink,
  ASSETS.food.tableSetup
];
