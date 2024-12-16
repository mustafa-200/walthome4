
'use strict';
// اختر زر القائمة وعنصر التنقل

const $navbar = document.querySelector("[data-navbar]");
const $navtoggler= document.querySelector("[data-nav-toggler]");
// إضافة/إزالة الفئة "active" عند النقر على الزر
$navtoggler.addEventListener("click", () => $navbar.classList.toggle("active"));













/**
 * Header
 */

const $header= document.querySelector("[data-header]");
window.addEventListener("scroll", e =>{
$header.classList[window.scrollY > 50 ? "add" : "remove"]("active") 
});


/** 
* add to favorite buttom
*/
const $toggleBtns = document.querySelectorAll("[data-toggle-btn]");
$toggleBtns.forEach($toggleBtn=> {
$toggleBtn.addEventListener("click",()=>{
    $toggleBtn.classList.toggle("active");
})
})