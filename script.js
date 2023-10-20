
var page = document.querySelector(".page")
var one = document.querySelector(".one")
var two = document.querySelector(".two")
var h1 = document.querySelector("h1")


one.addEventListener("mouseenter",function(){
    two.setAttribute("src","https://www.india.com/wp-content/uploads/2021/12/pjimage-39-5.jpg")
    page.style.backgroundColor="orange"
    one.setAttribute("src","https://www.koimoi.com/wp-content/new-galleries/2020/10/taarak-mehta-ka-ooltah-chashmah-iyer-bhai-aka-tanuj-mahashabde-chanting-mantra-about-lord-shiva-is-the-mondaymotivation-we-need001.jpg")
    h1.innerHTML="GOOD MORNING JEHATHA LAL 😂😂"
})
one.addEventListener("mouseleave",function(){
    h1.innerHTML="GOOD MORNING IYER BHAI 😒😒"
    page.style.backgroundColor="red"

})

// checking update