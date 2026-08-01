/* =========================
   MOBILE NAVIGATION
========================= */


const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");


if(menu){

    menu.addEventListener("click",()=>{

        navLinks.classList.toggle("show");

    });

}




// Close mobile menu after clicking link

document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{

        navLinks.classList.remove("show");

    });


});








/* =========================
   CONFERENCE COUNTDOWN

   5th August 2026
   Budapest, Hungary
========================= */


const conferenceDate = new Date(
"August 5, 2026 09:00:00"
).getTime();





function countdown(){


    const now =
    new Date().getTime();


    const distance =
    conferenceDate - now;



    if(distance <= 0){


        document.querySelector(".countdown").innerHTML = `

        <h2>
        Conference Has Started
        </h2>

        `;


        return;

    }





    const days =
    Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );



    const hours =
    Math.floor(

        (distance %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)

    );



    const minutes =
    Math.floor(

        (distance %
        (1000 * 60 * 60))
        /
        (1000 * 60)

    );



    const seconds =
    Math.floor(

        (distance %
        (1000 * 60))
        /
        1000

    );





    document.getElementById("days").innerHTML =
    days;



    document.getElementById("hours").innerHTML =
    hours;



    document.getElementById("minutes").innerHTML =
    minutes;



    document.getElementById("seconds").innerHTML =
    seconds;



}



setInterval(countdown,1000);

countdown();








/* =========================
   SCROLL REVEAL ANIMATION
========================= */


const animatedItems =
document.querySelectorAll(
".section, .speaker-card, .schedule-card"
);





animatedItems.forEach(item=>{


    item.style.opacity="0";

    item.style.transform=
    "translateY(40px)";

    item.style.transition=
    "all .8s ease";


});





window.addEventListener("scroll",()=>{


animatedItems.forEach(item=>{


const position =
item.getBoundingClientRect().top;



const screen =
window.innerHeight - 100;




if(position < screen){


item.style.opacity="1";


item.style.transform=
"translateY(0)";


}



});


});









/* =========================
   FORM VALIDATION
========================= */


const form =
document.querySelector("form");



if(form){


form.addEventListener("submit",(e)=>{


const name =
document.querySelector(
'input[name="name"]'
).value.trim();



const email =
document.querySelector(
'input[name="email"]'
).value.trim();



const country =
document.querySelector(
'input[name="country"]'
).value.trim();






if(name.length < 3){


alert(
"Please enter your full name"
);


e.preventDefault();

return;


}





if(!email.includes("@")){


alert(
"Please enter a valid email address"
);


e.preventDefault();

return;


}





if(country.length < 2){


alert(
"Please enter your country"
);


e.preventDefault();

return;


}



});


}









/* =========================
   ACTIVE MENU LINK
========================= */


const sections =
document.querySelectorAll("section");

const links =
document.querySelectorAll(".nav-links a");





window.addEventListener("scroll",()=>{


let current="";



sections.forEach(section=>{


let sectionTop =
section.offsetTop - 150;



if(window.scrollY >= sectionTop){


current =
section.getAttribute("id");


}



});





links.forEach(link=>{


link.style.color="white";



if(
link.getAttribute("href")
===
"#"+current
){


link.style.color="#f5b700";


}



});


});