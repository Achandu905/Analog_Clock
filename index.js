setInterval(() => {
  d = new Date();
  hours = d.getHours();
  minutes = d.getMinutes();
  seconds = d.getSeconds();
  console.log(hours, minutes, seconds);

  let hrotation = 30 * hours + minutes / 2;
  let mrotation = minutes * 6;
  let srotation = seconds * 6;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
