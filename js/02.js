const thanks2 = [
  "idoe",
  "idoe",
  "시아",
  "재희",
  "해피",
  "라리나",
  "헬로",
  "unique",
  "웰시코기",
  "Ryu엘",
  "프록시마",
  "포로리에여",
  "뽀짝",
  "Sweet Day",
  "bloomng day",
  "아름천사",
  "달빛 구미호",
  "쥠승홀릭",
  "리치베릴",
  "둥둥이맘",
  "green",
  "다리리링",
  "신밍밍",
  "오카시",
  "딸맛생",
  "해피",
  "선",
  "손빠는언니",
  "웰시코기",
  "이웃집totoro",
  "무한자유",
  "찌니양",
  "따비",
  "해피",
  "슈우웅쾅",
  "웰시코기",
  "달의향기",
  "웰시코기",
  "또잉XD",
  "쩡스",
  "곰토깽",
  "풀잎송",
  "웰시코기",
  "Dear Moment",
  "다리리링",
  "예림2",
  "Nine",
  "배코밍",
  "Sallang",
  "래니",
  "캐럿",
  "아가물개",
  "또붕",
  "idoe",
  "Ryu엘",
  "호회",
  "밀크티",
  "꽃님이",
  "라리나",
  "오카시",
  "쩡스",
  "블랙레빗",
  "라리나",
  "신밍밍",
  "쩡스",
  "라리나",
  "Love뚱빠",
  "해피",
  "따비",
  "딸맛생",
  "라리나",
  "Anyeon",
  "oil해",
  "밀크티",
  "윰뜩",
];
//특판 스크랩

const view2 = document.querySelector(".view2");
const btn3 = view2.querySelector("#btn3");
const btn4 = view2.querySelector("#btn4");
const result3 = view2.querySelector(".result3");
const result4 = view2.querySelector(".result4");

function onBtnClick() {
  const choosen = thanks2[Math.floor(Math.random() * thanks2.length)];
  result3.innerText = `당첨자: ${choosen} 님♥`;
}
function onBtnClick2() {
  const choosen2 = thanks2[Math.floor(Math.random() * thanks2.length)];
  result4.innerText = `당첨자: ${choosen2} 님♥`;
}

btn3.addEventListener("click", onBtnClick);
btn4.addEventListener("click", onBtnClick2);
