document.addEventListener(`DOMContentLoaded`, function () {
  // 헤더 스크롤V

  window.addEventListener(`wheel`, (event) => {
    const headerArea = document.querySelector(`.header_area`);

    if (event.deltaY > 0) {
      // wheel down
      headerArea.classList.remove(`scroll`);
    } else {
      // wheel up
      headerArea.classList.add(`scroll`);
    }
  });
  // ------------------------------------------------------------

  // 탭 메뉴 연결V
  // 메뉴 누르면 색 바뀜V
  const mainmenuTab = document.querySelectorAll(`.mainmenu_tab li`);
  const submenuBox = document.querySelector(`.submenu_box`);
  let activeTab = null;

  for (const tab of mainmenuTab) {
    tab.addEventListener(`click`, function () {
      submenuBox.classList.add(`active`);

      const liTab = this.getAttribute(`data-tab`);
      const subMenu = document.querySelectorAll(`.sub_box`);

      for (const outSubMenu of subMenu) {
        outSubMenu.classList.remove(`active`);
      }

      const changeTab = document.querySelector(`#${liTab}`);
      changeTab.classList.add(`active`);

      if (activeTab) {
        activeTab.classList.remove("active");
      }

      // 현재 클릭된 탭에 활성화 클래스 추가
      this.classList.add("active");

      // 현재 활성화된 탭 업데이트
      activeTab = this;

      activeTab.addEventListener(`mouseleave`, function () {
        this.classList.remove(`active`);
      });
    });
  }

  // 서브메뉴 박스에 마우스 나가면 서브메뉴박스가 없어지게 설정V
  submenuBox.addEventListener(`mouseleave`, function () {
    this.classList.remove(`active`);
  });

  // swiper 열결V
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3500,
    },
    // slidesPerView: 4, // 한 번에 하나의 슬라이드 표시
    // spaceBetween: 20, // 슬라이드 간 간격 없음

    breakpoints: {
      375: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1590: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // ------------------------------------------------------------

  // 상단이동 버튼
  const topBtn = document.querySelector(`.top_btn`);

  topBtn.addEventListener(`click`, () => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`, // 자연스럽게 올라가는 모션
    });
  });
});
