function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  const colors = ["#ff69b4", "#ff6347", "#ffeb3b", "#87cefa", "#98fb98"];
  balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
  balloon.style.left = Math.random() * window.innerWidth + "px";
  balloon.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.body.appendChild(balloon);
  setTimeout(() => balloon.remove(), 9000);
}

setInterval(createBalloon, 500);

const btn = document.getElementById("btnWish");
const msg = document.getElementById("birthdayMessage");
const music = document.getElementById("music");

btn.addEventListener("click", () => {
  const messages = [
    "Semoga panjang umur dan sehat selalu! 🥳",
    "Jangan lupa untuk tumbuh menjadi pribadi yang baik dan ! 🍰",
    "Terima kasih karena sudah terlahir pada dunia ini ! 🍰",
    "Semoga di usia kamu yang sudah ke 18 ini kamu, setiap langkah yang kamu ambil kamu selalu di iringi oleh kebaikan dimanapun itu! 💫",
    "Semoga hari ini dan seterusnya bisa lebih bahagia dan bermakna💖",
    "Selamat bertambah usia, tetap ceria seperti balon ini! 🎈",
    "selamat ulang tahun kekasihku duniaku manisku cintaku duniaku sayangku pacarku dan apellll🍎"
    
  ];
  msg.textContent = messages[Math.floor(Math.random() * messages.length)];
  msg.classList.add("visible");

  music.play();
});
