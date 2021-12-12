"use-strict";

const scrollButton = document.querySelector("#gotoTop");
const triggerEle = document.querySelector(".header-important");

scrollButton.addEventListener("click", (event) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; 
});

const appearOptions = {
    threshold: 0.2,
    rootMargin: "10px 0px 0px 0px",
  };
  
  const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach((entry) => {
      console.log(entry.target);
    
      if (entry.isIntersecting) {   
      scrollButton.style.display = "none";
      }
      else {
        scrollButton.style.display = "block";
      }
    });
  });
  
  appearOnScroll.observe (triggerEle );
