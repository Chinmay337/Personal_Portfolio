console.log("hi");

const faders = document.querySelectorAll(".content");

const hats = document.querySelectorAll(".hat");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

function startFadingHats() {
  setTimeout(function () {
    hats.forEach((hat) => {
      hat.style.height = "30vh";
    }, 500);
  });
}

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    console.log("Element", entry);
    if (!entry.isIntersecting) {
      return;
    }

    if (entry.target == hats[0]) {
      startFadingHats();
    }

    entry.target.classList.add("appear");
    appearOnScroll.unobserve(entry.target);
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

appearOnScroll.observe(hats[0]);

let header = document.querySelector(".head-text");

window.onload = () => {
  setTimeout(() => {
    console.log("helo");

    header.classList.add("head-text-end");
  }, 1000);
};

const scrollButton = document.querySelector("#gotoTop");
const triggerEle = document.querySelector(".spacer");

scrollButton.addEventListener("click", (event) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
});

const gotoTopAppearOptions = {
  threshold: 0.2,
  rootMargin: "-50% 0px 100px 0px",
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
