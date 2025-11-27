export const brandInfo = {
  name: "黑岩家壽喜燒",
  enName: "Nikuniku Sukiyaki",
  tagline: "極致關西風・職人手作・頂級和牛",
  description: "台南唯一正宗關西風壽喜燒，嚴選信州A5和牛與伊比利梅花豚，搭配獨家秘製醬汁與專人桌邊服務，為您呈現最道地的日式饗宴。",
  logo: "/logo.png", // Placeholder
  instagramToken: "", // Enter your Instagram Access Token here
};

export const locations = [
  {
    id: "minzu",
    name: "民族創始店",
    address: "700臺南市中西區民族路二段24號",
    phone: "06 223 6039",
    hours: "週一、六、日 11:30–00:00 | 週二至五 17:30–00:00",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.887654321!2d120.200000!3d22.990000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU5JzI0LjAiTiAxMjDCsDEyJzAwLjAiRQ!5e0!3m2!1sen!2stw!4v1600000000000!5m2!1sen!2stw", // Placeholder coordinates
    features: ["巷弄隱密氛圍", "經典日式包廂"],
  },
  {
    id: "humei",
    name: "湖美旗艦店",
    address: "704027臺南市北區中華北路一段100號",
    phone: "06 358 8194",
    hours: "週一至週日 11:30–14:30, 17:30–22:00", // Estimated, need verification if different
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.000000000!2d120.190000!3d23.010000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzM2LjAiTiAxMjDCsDExJzI0LjAiRQ!5e0!3m2!1sen!2stw!4v1600000000000!5m2!1sen!2stw", // Placeholder coordinates
    features: ["寬敞舒適空間", "親子友善", "專屬停車場"],
  },
];

export const menuHighlights = [
  {
    name: "信州A5和牛",
    description: "日本直送頂級和牛，油花分佈如大理石般細緻，入口即化，肉汁鮮甜。",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "伊比利梅花豚",
    description: "西班牙國寶級豬肉，帶有獨特橡果香氣，肉質軟嫩不乾柴。",
    image: "https://images.unsplash.com/photo-1624379435766-b25866650e4c?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "京風牛筋柔煮",
    description: "長時間慢火燉煮，牛筋軟嫩入味，膠質豐富，搭配特製醬汁更是絕配。",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "海之寶石盛山藥",
    description: "新鮮山藥搭配特選海鮮，口感清脆滑順，清爽解膩。",
    image: "https://images.unsplash.com/photo-1606850780554-b55ea2ce98e7?q=80&w=800&auto=format&fit=crop",
  },
];

export const mediaCoverage = [
  {
    id: 1,
    title: "食尚玩家 熱血48小時 推薦",
    summary: "台南必吃！正宗關西壽喜燒，限量和牛銷魂美味，主持人朵拉強力推薦。",
    source: "食尚玩家",
    link: "https://supertaste.tvbs.com.tw/review/357268", // Search result link as placeholder
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "網友熱議：台南宵夜首選",
    summary: "Dcard、PTT 網友一致好評，濃濃日式風情，深夜食堂的最佳選擇。",
    source: "Dcard / PTT",
    link: "https://www.dcard.tw/f/food?tab=latest", // Placeholder
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "暖冬商機！引進日本和牛",
    summary: "新聞報導：黑岩家壽喜燒搶攻暖冬市場，引進頂級日本和牛與生猛海鮮。",
    source: "新聞媒體",
    link: "#",
    image: "https://images.unsplash.com/photo-1542528180-a1208c5169a5?q=80&w=800&auto=format&fit=crop",
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

export const socialLinks = {
  facebook: "https://www.facebook.com/p/Nikuniku%E9%BB%91%E5%B2%A9%E5%AE%B6%E5%A3%BD%E5%96%9C%E7%87%92%E5%B0%88%E9%96%80%E5%BA%97-61575832411076/",
  instagram: "https://www.instagram.com/nikuniku_sukiyaki/",
  booking: "https://inline.app/booking/-OVf4vKMlCQnf7l0SCSM:inline-live-3/-OVf4vRgAJxEBs5YWb_1", // Placeholder
};
