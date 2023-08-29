//Target the classes
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".show-modal");


//Function to open the modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//Function to close the modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//Modal open event
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

//Modal close event
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//Modal close using esc key
document.addEventListener("keydown",function(event){
  if(event.key === "Escape" && !modal.classList.contains("hidden")){
    closeModal();
  }

});