// 🐢 黑童話海龜湯副線資料
const dreamData = {
  1: {
    title: "白雪公主的毒蘋果奶昔",
    content: "選擇性遺忘素。你忘了自己為什麼難過，也忘了為什麼想變好。你以為療癒，其實是冷凍處理。"
  },
  2: {
    title: "青蛙王子的巧克力吻",
    content: "你不是戀愛，是被語言程式感染。每一句情話都讓你對錯的人動真心。這不是命中注定，是投射病毒。"
  },
  3: {
    title: "穿紅鞋的少女塔塔酥",
    content: "不是喜歡跳舞，是害怕停止。你跳給社會看、給他人看、給焦慮看，直到你忘了你是誰。"
  },
  4: {
    title: "小紅帽的黑森林蛋糕",
    content: "你吃的不只是甜點，是選擇的負擔。你夢裡揮刀，但你永遠不記得你選擇了誰，留下了誰。"
  },
  5: {
    title: "長髮公主的蜂蜜茶",
    content: "你以為是被保護，其實是無法離開。那是一杯情感囚籠的安撫劑，喝完你會甘願困住自己。"
  },

// 開啟夢境卡片
function openCard(id) {
  const data = dreamData[id];
  if (!data) return;

  const overlay = document.getElementById("overlay");
  const dreamContent = document.getElementById("dream-content");
  dreamContent.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.content}</p>
  `;
  overlay.classList.remove("hidden");
}

// 關閉夢境卡片
document.getElementById("close-card").addEventListener("click", () => {
  document.getElementById("overlay").classList.add("hidden");
});

// 監聽 trigger word 點擊
document.querySelectorAll(".trigger-word").forEach(el => {
  el.addEventListener("click", () => {
    const id = el.dataset.id;
    openCard(id);
  });
});

// 自動產生副線圖鑑卡片
const dreamList = document.getElementById("dream-list");
Object.entries(dreamData).forEach(([id, { title, content }]) => {
  const card = document.createElement("div");
  card.className = "dream-card";
  card.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
  dreamList.appendChild(card);
});
