const noticeItems = document.querySelectorAll('.notice-item a');
let currentIndex = 0; // 현재 시작 인덱스 설정정
const visibleCount = 3; // 표시되는는 공지사항 개수

function slideNotice() {
    noticeItems.forEach((item, index) => {
        // 현재 인덱스 범위 내에 있는 요소는 보여주고 나머지는 숨김
        if (index >= currentIndex && index < currentIndex + visibleCount) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    // 인덱스 업데이트: 최대 길이를 넘어가면 순환하도록 설정
    currentIndex = (currentIndex + 1) % noticeItems.length;

    // 인덱스가 남은 요소보다 많아질 경우 순환형으로 유지
    if (currentIndex + visibleCount > noticeItems.length) {
        currentIndex = 0; // 다시 처음부터
    }
}

// 3초 간격으로 슬라이드 실행
setInterval(slideNotice, 3000);

// 초기 호출로 첫 화면 세팅
slideNotice();
