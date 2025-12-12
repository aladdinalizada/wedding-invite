document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("bg-music");
  const toggleBtn = document.getElementById("music-toggle");

  // İlk olaraq muted autoplay
  audio.play().catch(() => {});

  // İlk klik/touch → səsi açır
  function enableAudio() {
    audio.muted = false;
    audio.volume = 1;
    audio.play().catch(() => {});
    toggleBtn.textContent = "🔊 Səsi bağla";
    document.removeEventListener("click", enableAudio);
    document.removeEventListener("touchstart", enableAudio);
  }

  document.addEventListener("click", enableAudio);
  document.addEventListener("touchstart", enableAudio);

  // Toggle düyməsi
  toggleBtn.addEventListener("click", function () {
    if (audio.muted) {
      audio.muted = false;
      audio.volume = 1;
      toggleBtn.textContent = "🔊 Səsi bağla";
      audio.play().catch(() => {});
    } else {
      audio.muted = true;
      toggleBtn.textContent = "🔇 Səsi aç";
    }
  });
});
