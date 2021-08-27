const divOfInnerTest = document.querySelectorAll(".testimonial .inner-testimonies > div")
const homeSliderDiv = document.querySelectorAll(".home main article")
//608px
console.log(divOfInnerTest)
const testPrev = document.querySelector(".testimonial .slide .prev") 
const homePrev = document.querySelector(".home .home-slide .prev")
const homeNext = document.querySelector(".home .home-slide .next")
const testNext = document.querySelector(".testimonial .slide .next")
const bar = document.querySelector(".home header > div i")
const homeUl = document.querySelector(".home header ul")
console.log(testPrev,testNext)
const mainh1 = document.querySelectorAll(".home main h1")
const mainh4 = document.querySelectorAll(".home main h4")
const maina = document.querySelectorAll(".home main a")
const mainimg = document.querySelectorAll(".home main img")
const homeHeader = document.querySelector(".home header")
const homeHeaderh1 = document.querySelector(".home header h1")
bar.style.transition = "transform 0.3s linear";
const mediaQuery = window.matchMedia("(min-width: 830px)")
if(mediaQuery.matches)
{
    //means if width of an widnow greate than 830px than the color of h1 will be black
    homeHeaderh.style.color = "black"
}

function pageAnimation()
{
    mainh1.forEach((e)=>{
        e.classList.add("addTextAnimation")
        setTimeout(()=>{
            e.classList.remove("addTextAnimation")
        },2000)
    })
    mainh4.forEach((e)=>{
        e.classList.add("addTextAnimation")
        setTimeout(()=>{
            e.classList.remove("addTextAnimation")
        },2000)
    })
    maina.forEach((e)=>{
        e.classList.add("addTextAnimation")
        setTimeout(()=>{
            e.classList.remove("addTextAnimation")
        },2000)
    })
    mainimg.forEach((e)=>{
        e.classList.add("addImageAnimation")
        setTimeout(()=>{
            e.classList.remove("addImageAnimation")
        },2000)
    })
}


testNext.addEventListener("click",testSlideLeft)
testPrev.addEventListener("click",testSlideRight)
homeNext.addEventListener("click",homeSlideLeft)
homePrev.addEventListener("click",homeSlideRight)
bar.addEventListener("click",toggleLink)
document.addEventListener("DOMContentLoaded",()=>{
    pageAnimation();
})
document.addEventListener("scroll",(e)=>{
    console.log(window.pageYOffset)
    if(window.pageYOffset > 90)
    {
        homeHeader.style.backgroundColor = "white"
        homeHeaderh1.style.color = "black"

    }
    else
    {
        homeHeader.style.backgroundColor = "transparent"
        homeHeaderh1.style.color = "white"
    }
})
function testSlideLeft()
{   
    divOfInnerTest.forEach((e)=>{
    e.style.transform = "translateX(-608px)" 
    })
}
function testSlideRight()
{
    divOfInnerTest.forEach((e)=>{
    e.style.transform = "translateX(0)"
    })
}
function homeSlideLeft()
{
    homeSliderDiv.forEach((e)=>{
    e.style.transform = "translateX(-100%)"
    })
    
   
} 
function homeSlideRight()
{
    homeSliderDiv.forEach((e)=>{
    e.style.transform = "translateX(0px)"
    })
   
    
}
function toggleLink()
{
    homeUl.classList.toggle("showUl")
    bar.classList.toggle("rotateBar")
}

var no = -100;
setInterval(()=>{
    //logic for sliding of page 1 and page 2
    homeSliderDiv.forEach((e)=>{
        e.style.transform = `translateX(${no}%)`
        if(no == -100)
        {
            homeNext.style.backgroundColor = "black"
            homePrev.style.backgroundColor = "white"
            pageAnimation()
        }
        else
        {
            homeNext.style.backgroundColor = "white"
            homePrev.style.backgroundColor = "black"
            pageAnimation()
        }
        })
        if(no == -100)
        {
            no = 0;
        }
        else
        {
            no = -100
        }
},5000)



//divOfInnerTest.style.transform = "translateX(-608px)"
//transform: translateX(-1510px);

//134px
