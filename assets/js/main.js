// 모바일 메뉴 열고 닫기
function toggleMobileMenu() {
  const panel = document.getElementById("mobilePanel");
  if (!panel) return;
  panel.classList.toggle("open");
}

// 현재 페이지 메뉴 active 표시
(function setActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll("[data-nav]");
  links.forEach((a) => {
    const target = a.getAttribute("href").split("/").pop();
    if (target === path) a.classList.add("active");
  });
})();
