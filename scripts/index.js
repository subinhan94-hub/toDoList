const popup = document.querySelector('.write_popup');
const popup_bg = document.querySelector('.popup_bg');
console.log(popup);
console.log(popup_bg);
popup.style.display= 'none';
popup_bg.style.display= 'none';
function popupShow(){
    // 보이는 작업 처리 시 원래 객체가 가지던 CSS display 속성으로 되돌린다.
    // 후보군 : flex, block, inline, inline-block
    popup.style.display= 'block';
    popup_bg.style.display= 'block';
}
function popupHide(){
    popup.style.display= 'none';
    popup_bg.style.display= 'none';
}