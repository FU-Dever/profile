// change slide on click
let position = 0;

document.querySelector(".home-content").style.display = "flex"


document.getElementById("nav1").addEventListener(
    'click',
    function click1(){
        position = 0;
        document.getElementById("label-nav1").style.width = "100%"
        document.getElementById("label-nav2").style.width = '0%';
        document.getElementById("label-nav3").style.width = '0%';
        document.getElementById("label-nav4").style.width = '0%';
        document.getElementById("label-nav5").style.width = '0%';

        document.querySelector(".home-content").style.display = "flex"
        document.querySelector(".about-content").style.display = "none"
        document.querySelector(".skills-content").style.display = "none"
        document.querySelector(".project-content").style.display = "none"
        document.querySelector(".contact-content").style.display = "none"

    }
)

document.getElementById("nav2").addEventListener(
    'click',
    function click2(){

        position = 1;
        document.getElementById("label-nav2").style.width = '100%';
        document.getElementById("label-nav1").style.width = '0%';
        document.getElementById("label-nav3").style.width = '0%';
        document.getElementById("label-nav4").style.width = '0%';
        document.getElementById("label-nav5").style.width = '0%';

        document.querySelector(".home-content").style.display = "none"
        document.querySelector(".about-content").style.display = "flex"
        document.querySelector(".skills-content").style.display = "none"
        document.querySelector(".project-content").style.display = "none"
        document.querySelector(".contact-content").style.display = "none"

    }
)

document.getElementById("nav3").addEventListener(
    'click',
    function click3(){

        position = 2;
        document.getElementById("label-nav3").style.width = '100%';
        document.getElementById("label-nav2").style.width = '0%';
        document.getElementById("label-nav1").style.width = '0%';
        document.getElementById("label-nav4").style.width = '0%';
        document.getElementById("label-nav5").style.width = '0%';

        document.querySelector(".home-content").style.display = "none"
        document.querySelector(".about-content").style.display = "none"
        document.querySelector(".skills-content").style.display = "flex"
        document.querySelector(".project-content").style.display = "none"
        document.querySelector(".contact-content").style.display = "none"

    }
)

document.getElementById("nav4").addEventListener(
    'click',
    function click1(){

        position = 3;
        document.getElementById("label-nav4").style.width = '100%';
        document.getElementById("label-nav2").style.width = '0%';
        document.getElementById("label-nav3").style.width = '0%';
        document.getElementById("label-nav1").style.width = '0%';
        document.getElementById("label-nav5").style.width = '0%';

        document.querySelector(".home-content").style.display = "none"
        document.querySelector(".about-content").style.display = "none"
        document.querySelector(".skills-content").style.display = "none"
        document.querySelector(".project-content").style.display = "flex"
        document.querySelector(".contact-content").style.display = "none"
    }
)

document.getElementById("nav5").addEventListener(
    'click',
    function click1(){

        position = 4;
        document.getElementById("label-nav5").style.width = '100%';
        document.getElementById("label-nav2").style.width = '0%';
        document.getElementById("label-nav3").style.width = '0%';
        document.getElementById("label-nav4").style.width = '0%';
        document.getElementById("label-nav1").style.width = '0%';

        document.querySelector(".home-content").style.display = "none"
        document.querySelector(".about-content").style.display = "none"
        document.querySelector(".skills-content").style.display = "none"
        document.querySelector(".project-content").style.display = "none"
        document.querySelector(".contact-content").style.display = "flex"

    }
)


// change slide animation


setInterval(
    function changeSlide(){
        let currentPos = position % 5;
        if(currentPos === 0){
            document.getElementById("label-nav1").style.width = "100%"
            document.getElementById("label-nav2").style.width = '0%';
            document.getElementById("label-nav3").style.width = '0%';
            document.getElementById("label-nav4").style.width = '0%';
            document.getElementById("label-nav5").style.width = '0%';
    
            document.querySelector(".home-content").style.display = "flex"
            document.querySelector(".about-content").style.display = "none"
            document.querySelector(".skills-content").style.display = "none"
            document.querySelector(".project-content").style.display = "none"
            document.querySelector(".contact-content").style.display = "none"

        }
        else if(currentPos === 1){
            document.getElementById("label-nav2").style.width = '100%';
            document.getElementById("label-nav1").style.width = '0%';
            document.getElementById("label-nav3").style.width = '0%';
            document.getElementById("label-nav4").style.width = '0%';
            document.getElementById("label-nav5").style.width = '0%';
    
            document.querySelector(".home-content").style.display = "none"
            document.querySelector(".about-content").style.display = "flex"
            document.querySelector(".skills-content").style.display = "none"
            document.querySelector(".project-content").style.display = "none"
            document.querySelector(".contact-content").style.display = "none" 

        }
        else if(currentPos === 2){
            document.getElementById("label-nav3").style.width = '100%';
            document.getElementById("label-nav2").style.width = '0%';
            document.getElementById("label-nav1").style.width = '0%';
            document.getElementById("label-nav4").style.width = '0%';
            document.getElementById("label-nav5").style.width = '0%';
    
            document.querySelector(".home-content").style.display = "none"
            document.querySelector(".about-content").style.display = "none"
            document.querySelector(".skills-content").style.display = "flex"
            document.querySelector(".project-content").style.display = "none"
            document.querySelector(".contact-content").style.display = "none"

        }
        else if(currentPos === 3){
            document.getElementById("label-nav4").style.width = '100%';
            document.getElementById("label-nav2").style.width = '0%';
            document.getElementById("label-nav3").style.width = '0%';
            document.getElementById("label-nav1").style.width = '0%';
            document.getElementById("label-nav5").style.width = '0%';
    
            document.querySelector(".home-content").style.display = "none"
            document.querySelector(".about-content").style.display = "none"
            document.querySelector(".skills-content").style.display = "none"
            document.querySelector(".project-content").style.display = "flex"
            document.querySelector(".contact-content").style.display = "none"

        }
        else{
            document.getElementById("label-nav5").style.width = '100%';
            document.getElementById("label-nav2").style.width = '0%';
            document.getElementById("label-nav3").style.width = '0%';
            document.getElementById("label-nav4").style.width = '0%';
            document.getElementById("label-nav1").style.width = '0%';
    
            document.querySelector(".home-content").style.display = "none"
            document.querySelector(".about-content").style.display = "none"
            document.querySelector(".skills-content").style.display = "none"
            document.querySelector(".project-content").style.display = "none"
            document.querySelector(".contact-content").style.display = "flex"

        }
        position ++;
    },
    4000
)