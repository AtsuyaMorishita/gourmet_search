export const REVALIDATE_TIME = 60 * 15;

export const PLACE = [
  { KEY: "all", URL: "/", NAME: "山口県全域", POSITION: "&service_area=SA75" },
  {
    KEY: "yudaonsen",
    URL: "/area/yudaonsen",
    NAME: "湯田温泉",
    POSITION: "&lat=34.16497682781039&lng=131.4571897371615",
  },
  {
    KEY: "hofu",
    URL: "/area/hofu",
    NAME: "防府市",
    POSITION: "&lat=34.054470150656854&lng=131.56869995888923",
  },
  {
    KEY: "iwakuni",
    URL: "/area/iwakuni",
    NAME: "岩国市",
    POSITION: "&lat=34.17057635622233&lng=132.220462531636",
  },
  {
    KEY: "shimonoseki",
    URL: "/area/shimonoseki",
    NAME: "下関市",
    POSITION: "&lat=33.96576082350943&lng=130.94190157495564",
  },
  {
    KEY: "ube",
    URL: "/area/ube",
    NAME: "宇部市",
    POSITION: "&lat=33.956951414684696&lng=131.24490100176504",
  },
  {
    KEY: "nagato",
    URL: "/area/nagato",
    NAME: "長門市",
    POSITION: "&lat=34.374987347107165&lng=131.18097959512923",
  },
  {
    KEY: "hagi",
    URL: "/area/hagi",
    NAME: "萩市",
    POSITION: "&lat=34.416051855007936&lng=131.39850401740074",
  },
];

export const GENRES = [
  { KEY: "izakaya", NAME: "居酒屋", NUM: "G001" },
  { KEY: "dining-bar", NAME: "ダイニングバー・バル", NUM: "G002" },
  { KEY: "creative-cuisine", NAME: "創作料理", NUM: "G003" },
  { KEY: "japanese-meal", NAME: "和食", NUM: "G004" },
  { KEY: "western-food", NAME: "洋食", NUM: "G005" },
  { KEY: "italian-french", NAME: "イタリアン・フレンチ", NUM: "G006" },
  { KEY: "cinese-food", NAME: "中華", NUM: "G007" },
  { KEY: "yakiniku", NAME: "焼肉・ホルモン", NUM: "G008" },
  { KEY: "korean-cuisine", NAME: "韓国料理", NUM: "G017" },
  { KEY: "asian-ethnic-cuisine", NAME: "アジア・エスニック料理", NUM: "G009" },
  { KEY: "international-cuisine", NAME: "各国料理", NUM: "G010" },
  { KEY: "karaoke-party", NAME: "カラオケ・パーティ", NUM: "G011" },
  { KEY: "bar-cocktail", NAME: "バー・カクテル", NUM: "G012" },
  { KEY: "ramen", NAME: "ラーメン", NUM: "G013" },
  { KEY: "okonomiyaki-monja", NAME: "お好み焼き・もんじゃ", NUM: "G016" },
  { KEY: "cafe-sweets", NAME: "カフェ・スイーツ", NUM: "G014" },
  { KEY: "other-gourmet", NAME: "その他グルメ", NUM: "G015" },
];
