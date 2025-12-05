const texts = [
    "Welcome to Team Cryst...",
    "We Are The Future.",
    "Join The Movement.",
    "Stay Tuned..."
  ];
  
  let index = 0;
  let charIndex = 0;
  let currentText = "";
  const speed = 80; // typing speed
  
  function type() {
    currentText = texts[index];
    document.getElementById("typing-text").textContent =
      currentText.substring(0, charIndex + 1);
  
    charIndex++;
  
    if (charIndex < currentText.length) {
      setTimeout(type, speed);
    } else {
      setTimeout(erase, 1500); // wait before erase
    }
  }
  
  function erase() {
    document.getElementById("typing-text").textContent =
      currentText.substring(0, charIndex - 1);
  
    charIndex--;
  
    if (charIndex > 0) {
      setTimeout(erase, 40);
    } else {
      index = (index + 1) % texts.length;
      setTimeout(type, 500);
    }
  }
  
  type();

  function goToPage() {
    window.location.href = "other/latest-news.html";
  }
  