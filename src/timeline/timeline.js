"use-strict";

const capsules = document.querySelectorAll(".time-capsule");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "-25% 0px -25% 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    console.log(entry.target);

    let thisRow = entry.target.parentNode.querySelectorAll(".box");
    thisRow.forEach((ele) => {
      console.log(ele);
    });

    if (entry.isIntersecting) {
      thisRow.forEach((ele) => {
        ele.classList.add("appear");
      });
    } else {
      thisRow.forEach((ele) => {
        ele.classList.remove("appear");
      });
    }
  });
},
appearOptions);

capsules.forEach((capsule) => {
  appearOnScroll.observe(capsule);
});
