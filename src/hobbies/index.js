const scrollButton = document.querySelector("#gotoTop");
const triggerEle = document.querySelector(".h-btn-trigger");

console.log(scrollButton);
console.log(triggerEle);

scrollButton.addEventListener("click", (event) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
});

const gotoTopAppearOptions = {
  threshold: 0.2,
  rootMargin: "-30% 0px 100px 0px",
};

const gotoTopAppearOnScroll = new IntersectionObserver(function (
  entries,
  gotoTopAppearOnScroll
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      scrollButton.style.display = "none";
    } else {
      scrollButton.style.display = "block";
    }
  });
},
gotoTopAppearOptions);

gotoTopAppearOnScroll.observe(triggerEle);
