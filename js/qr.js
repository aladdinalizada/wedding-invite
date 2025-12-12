document.addEventListener("DOMContentLoaded", function () {
  const qrContainer = document.getElementById("qr");
  const mapLink = document.getElementById("map-link").href;
  new QRCode(qrContainer, {
    text: mapLink,
    width: 160,
    height: 160,
    colorDark: "#b38962",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
});
