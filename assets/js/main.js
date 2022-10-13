/*==================== MENU SHOW E HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/

var accordionContent = document.getElementsByClassName('skills_header');

for(i = 0; i < accordionContent.length; i++){
    accordionContent[i].addEventListener('click', function() {
       accordionContent[i].classList.toggle("active");
        
    });
}


/*==================== QUALIFICATION TABS ====================*/


var qualificationExp = document.getElementById("work");
var qualificationEdu = document.getElementById("education");

var qualificationEduContent = document.getElementById("contentEdu");
var qualificationExpContent = document.getElementById("contentExp");

if(qualificationExpContent.style.display = "block"){
    qualificationExpContent.style.display = "none"
}

qualificationExp.addEventListener('click', function(){
    qualificationExpContent.style.display = "block"
    qualificationEduContent.style.display = "none"
    qualificationExp.classList.add("qualification_active")
    qualificationEdu.classList.remove("qualification_active")
})

qualificationEdu.addEventListener('click', function(){
    qualificationExpContent.style.display = "none"
    qualificationEduContent.style.display = "block"
    qualificationEdu.classList.add("qualification_active")
    qualificationExp.classList.remove("qualification_active")
})


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 