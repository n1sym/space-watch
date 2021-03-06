
setInterval(() => {
  // 現在時間の取得
  const now = new Date();
  const s = now.getSeconds() + now.getMilliseconds()/1000;
  const m = now.getMinutes() + s/60;
  const h = now.getHours();

  // 時、分、秒を元に角度を計算
  const degH = h * (360 / 12) + m * (360 / 12 / 60);
  const degM = m * (360 / 60);
  const degS = s * (360 / 60);

  // 各要素を取得
  const elementH = <HTMLElement>document.querySelector(".c-clock__hour");
  const elementM = <HTMLElement>document.querySelector(".c-clock__min");
  const elementS = <HTMLElement>document.querySelector(".c-clock__sec");

  // styleを追加
  elementH.style.transform = `rotate(${degH}deg)`;
  elementM.style.transform = `rotate(${degM}deg)`;
  elementS.style.transform = `rotate(${degS}deg)`;
}, 10);