function watch() {
  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let secend = document.getElementById("secend");
  let ampm = document.getElementById("ampm");
  let am = "AM";

  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  if (h > 12) {
    h = h - 12;
    am = "PM";
  }

  h = h > 9 ? h : "0" + h;
  m = m > 9 ? m : "0" + m;
  s = s > 9 ? s : "0" + s;

  hour.innerHTML = h;
  minute.innerHTML = m;
  secend.innerHTML = s;
  ampm.innerHTML = am;
}

setInterval(() => {
  watch();
}, 1000);
