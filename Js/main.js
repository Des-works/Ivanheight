
/**
* Template Name: Impact - v1.0.0
* Template URL: https://bootstrapmade.com/impact-bootstrap-business-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  
    /**
     * header
     */
    function myHeader(){
        let header = document.getElementById("header");
        let lol = document.getElementById("nav_linkx");
        window.addEventListener("scroll" , function(){
            if(window.scrollY > 0){
                header.classList.add("active");
                lol.classList.add("glow");
            }else{
                header.classList.remove("active");
                lol.classList.add("glow");
            }

        })
    }
    myHeader();

    function myBars(){
        let bars = document.querySelector("#bar");
        let nav = document.querySelector(".navigation");
        bars.onclick = function(){
            if(nav.style.right == "0%"){
                nav.style.right = "-50%";
                bars.src = "img/home-view/menu.png"
            }else{
                nav.style.right = "0%";
                bars.src = "img/home-view/x.png"
            }
            nav.classList.toggle("new")
        }


    }
    myBars();

    function myFun(){
        let plus = document.querySelector(".plus");
        let textBox = document.querySelector(".text-box ");
        plus.onclick = ()=>{
            textBox.classList.toggle("active");
            plus.classList.toggle("img_active")
        }
    }
    myFun()
    /**
     * video
     */
    function myVideo(){
        let links = document.querySelector(".link_a");
        let overs = document.querySelector(".bg-show .overlay");
        let exit = document.querySelector(".cancel");
        let player = document.querySelector(".player");
        let videos = document.getElementById("video");
        links.onclick = (ed)=>{
            ed.preventDefault();
            overs.style.display = "block"
        }
        exit.onclick = ()=>{
            overs.style.display = "none"
        }
        player.onclick = ()=>{
            if(videos.paused){
                videos.play();
                player.src = "img/home-view/pause.png"
            }else{
                videos.pause();
                player.src = "img/home-view/play.png"
            }
        }
    }
    myVideo();

    function toTop(){
        let top = document.querySelector(".top");
        window.onscroll = ()=>{
            if(window.scrollY > 100 || document.documentElement.scrollTop > 100){
                top.style.display = "block"
            }else{
                top.style.display = "none"
            }
        }

        top.onclick = ()=>{
            scrollTo(0,0)
        }

    }
    toTop();


    const nameEl = document.querySelector("#name");
    const emailEl = document.querySelector("#email");
    const companyNameEl = document.querySelector("#company_name");
    const messageEl = document.querySelector("#message");

    const form = document.querySelector("#submit-form");

    function checkValidations() {
         // listen to the form submission

         document.getElementById("submit-form")
         document.addEventListener("submit", function (event) {
           event.preventDefault();

           const serviceID = "service_x23sshh";
           const templateID = "template_deqvs6x";

           // send the email here
           emailjs.sendForm(serviceID, templateID, this).then(
             (response) => {
               console.log("SUCCESS!", response.status, response.text);
               alert("SUCCESS!");
             },
             (error) => {
               console.log("FAILED...", error);
               alert("FAILED...", error);
             }
           );
         })
    }

    function reset() {
      nameEl = "";
      emailEl = "";
      companyNameEl = "";
      messageEl = "";
      document.querySelector(".name-error").innerText = "";
    }


    
        /**
     * Animation on scroll function and init
     */
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', () => {
      aos_init();
    });
  
  });