
document.addEventListener("DOMContentLoaded", () => {
    
    const adImages = document.querySelectorAll(".aside-b-img");
  
    adImages.forEach((img) => {
     // 마우스가 이미지 안으로 들어올 때
      img.addEventListener("mouseenter", () => {
        img.style.transition = "transform 0.3s ease"; // 부드럽게
        img.style.transform = "scale(1.1)"; // 이미지를 1.1배로 확대하기기
      });
  
      // 마우스가 이미지에서 나갔을 때
      img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)"; // 이미지를 크기로 원래대로 복원
      });
    });
  });
  