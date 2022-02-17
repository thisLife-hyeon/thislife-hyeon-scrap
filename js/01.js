const thanks = [
  "idoe",
  "idoe",
  "idoe",
  "Ryu엘",
  "예림2",
  "별콩",
  "해피",
  "손빠는언니",
  "리치베리",
  "아이스바녹구있5",
  "아이스바녹구있5",
  "시아",
  "라리나",
  "오카시",
  "카소",
  "선",
  "unique",
  "캐럿",
  "포로리에여",
  "둥둥이맘",
  "꽃퓨봄",
  "매실매실하다",
  "메르엘",
  "Dear Moment",
  "호회",
  "blooming day",
  "흥언니",
  "흥언니",
  "흥언니",
  "주파수B",
  "green",
  "무한자유",
  "Sweet Day",
  "카르멘",
  "하리",
  "신밍밍",
  "쓰다미",
  "또로록",
  "Anyeon",
  "딸맛생",
  "쇼너",
  "MYONG",
  "웰시코기",
  "||레몬샤베트||",
  " 에루",
  "꼬망",
  "슈우웅쾅",
  "bloooomba",
  "카소",
  "다리리링",
  "이웃집totoro",
  "민툐툐",
  "카소",
  "oil해",
  "sallang",
  "라리나",
  "chaMung",
  "아테",
  "한설하",
  "하라파",
  "레굴루스",
  "곰토깽",
  "카소",
  "쩡스",
  "해피",
  "따비",
  "Love뚱빠",
  "라리나",
  "라리나",
  "해피",
  "라리나",
  "호제",
  "Ryu엘",
  "프록시마",
  "서달",
  "해피",
  "카소",
  "Reset",
  "윰뜩",
  "윰뜩",
];
//4차 예판 스크랩

const view1 = document.querySelector(".view1");
const btn1 = view1.querySelector("#btn1");
const btn2 = view1.querySelector("#btn2");
const result = view1.querySelector(".result");
const result2 = view1.querySelector(".result2");

function onBtnClick(btn1) {
  const choosen = thanks[Math.floor(Math.random() * thanks.length)];
  result.innerText = `당첨자: ${choosen} 님♥`;
}
function onBtnClick2(btn2) {
  const choosen2 = thanks[Math.floor(Math.random() * thanks.length)];
  result2.innerText = `당첨자: ${choosen2} 님♥`;
}

btn1.addEventListener("click", onBtnClick);
btn2.addEventListener("click", onBtnClick2);
