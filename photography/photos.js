var app = new Vue({
  el: "#app",
  data: {
    images: [],
    includeBirds: true,
    includeHouses: true,
    includeFlowers: true,
    includeNaure: true,
    modalImageSrc: "",
    modalImageDescr: "",
  },
  created() {
    fetch("./images.json")
      .then((response) => response.json())
      .then((data) => {
        this.images = data.images;
      });
  },
  computed: {
    filteredImages: function () {
      let newList = this.images.filter(function (img) {
        return (
          (this.includeBirds && img.type == "Bird") ||
          (this.includeHouses && img.type == "House") ||
          (this.includeFlowers && img.type === "Flower") ||
          (this.includeNaure && img.type === "Nature")
        );
      }, this);

      console.log("Size :" + newList.length);
      return newList;
    },
  },
  methods: {
    imageClicked: function (_file, _desc) {
      console.log("I got file:" + _file + ", desc:[" + _desc + "]");
      this.modalImageSrc = _file;
      this.modalImageDescr = _desc;
      modal.style.display = "block";
    },

    closeModal: function () {
      console.log("Closing Modal");
      modal.style.display = "none";
    },

    addTodo: function () {
      console.log("Adding " + this.newTodo);
      this.todos.push({ text: this.newTodo });
      this.newTodo = "";
    },
  },
});

// Get the modal
const modal = document.querySelector("#modalImage");

// Get the <span> element that closes the modal
// const spanx = document.querySelector("span.close");

// // Get the button that opens the modal
// const button = document.querySelector("#myBtn");

// // When the user clicks on the button, open the modal
// button.addEventListener('click', event => {
//   modal.style.display = "block";
// });

// spanx.addEventListener("click", (event) => {
//   // When the user clicks on <span> (x), close the modal
//   modal.style.display = "none";
// });

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// ------------------------------------------------------------------

/*
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  console.log("Got Click!");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
*/
