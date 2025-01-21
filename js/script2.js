// 로그인 버튼 클릭 시 로그인, 로그아웃 토글
let loginFormFlag = false;
const loginForm = () => {
    if(!loginFormFlag){
        if(loginCheckFlag){
            document.getElementById("btLogin").innerText = "로그인";
            document.getElementById("btLoginLeft").innerText = "zod에 로그인";
            loginCheckFlag = false;
        }else{
            document.getElementsByClassName("login-form")[0].style.display = "block";
            loginFormFlag = true;
        }
    }else{
        document.getElementsByClassName("login-form")[0].style.display = "none";
        loginFormFlag = false;
    }
}
let loginCheckFlag = false;
const loginCheck = () => {
    document.getElementById("btLogin").innerText = "로그아웃";
    document.getElementById("btLoginLeft").innerText = "로그아웃";
    loginCheckFlag = true;
    loginForm();

}

document.getElementById("btLogin").onclick = loginForm;
document.getElementById("btLoginLeft").onclick = loginForm;
document.getElementById("btLogin-form").onclick = loginCheck;


// 다크모드 버튼 클릭 시 다크, 화이트 토글
let darkModeFlag = false;

const darkMode = () => {
    if(darkModeFlag) {
        document.querySelector(".header").classList.remove("dark2");
        document.querySelector(".page").classList.remove("dark1");
        document.querySelector(".aside-a-item").classList.remove("dark2");

        let headerA = document.querySelectorAll(".header-a");
        for(let i = 0; i < headerA.length; i++) {
            headerA[i].classList.remove("dark2");
        }
        let asideA = document.querySelectorAll(".aside-a-item-a");
        for(let i = 0; i < asideA.length; i++) {
            asideA[i].classList.remove("dark2");
        }

        let mainItemA = document.querySelectorAll(".main-item a");
        for(let i = 0; i < mainItemA.length; i++) {
            mainItemA[i].classList.remove("dark2");
        }

        let mainItem = document.querySelectorAll(".main-item");
        for(let i = 0; i < mainItem.length; i++) {
            mainItem[i].classList.remove("dark2");
        }

        let mainContentItemA = document.querySelectorAll(".main-content-item a");
        for(let i = 0; i < mainContentItemA.length; i++) {
            mainContentItemA[i].classList.remove("dark2");
        }

        let mainContentItem = document.querySelectorAll(".main-content-item");
        for(let i = 0; i < mainContentItem.length; i++) {
            mainContentItem[i].classList.remove("dark2");
        }

        let asideB = document.querySelectorAll(".notice-title, .notice-item a");
        for (let i = 0; i < asideB.length; i++) {
            asideB[i].classList.remove("dark2");
        }

        darkModeFlag = false;
    }else{
        document.querySelector(".header").classList.add("dark2");
        document.querySelector(".page").classList.add("dark1");
        document.querySelector(".aside-a-item").classList.add("dark2");

        let headerA = document.querySelectorAll(".header-a");
        for(let i = 0; i < headerA.length; i++) {
            headerA[i].classList.add("dark2");
        }
        let asideA = document.querySelectorAll(".aside-a-item-a");
        for(let i = 0; i < asideA.length; i++) {
            asideA[i].classList.add("dark2");
        }

        let mainItemA = document.querySelectorAll(".main-item a");
        for(let i = 0; i < mainItemA.length; i++) {
            mainItemA[i].classList.add("dark2");
        }

        let mainItem = document.querySelectorAll(".main-item");
        for(let i = 0; i < mainItem.length; i++) {
            mainItem[i].classList.add("dark2");
        }

        let mainContentItemA = document.querySelectorAll(".main-content-item a");
        for(let i = 0; i < mainContentItemA.length; i++) {
            mainContentItemA[i].classList.add("dark2");
        }

        let mainContentItem = document.querySelectorAll(".main-content-item");
        for(let i = 0; i < mainContentItem.length; i++) {
            mainContentItem[i].classList.add("dark2");
        }

        let asideB = document.querySelectorAll(".notice-title, .notice-item a");
        for (let i = 0; i < asideB.length; i++) {
            asideB[i].classList.add("dark2");
        }

        darkModeFlag = true;
    }
}



document.getElementById("darkMode").onclick = darkMode;

// 검색창 버튼 클릭 시 input창 토글
let searchFlag = false;

const search = () => {
    if(searchFlag) {
        document.getElementById("header-input").style.opacity = 0;
        searchFlag = false;
    }else{
        document.getElementById("header-input").style.opacity = 1;
        searchFlag = true;
    }
}

document.getElementById("search").onclick = search;