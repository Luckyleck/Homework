document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  const form = document.querySelector(".list-container form");
  const input = document.querySelector(".favorite-input");
  const ul = document.querySelector("#sf-places");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value;
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
    form.reset();
  })

  // --- your code here!



  // adding new photos
  const photoFormContainer = document.querySelector(".photo-form-container");
  const photoUrlInput = document.querySelector(".photo-url-input");
  const photoUrlSubmit = document.querySelector(".photo-url-submit");
  const dogPhotosList = document.querySelector(".dog-photos");
  const togglePhotoFormButton = document.querySelector(".photo-show-button");
  // --- your code here!

  togglePhotoFormButton.addEventListener("click", () => {
    photoFormContainer.classList.toggle("hidden");
  });

  photoUrlSubmit.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the form from submitting normally
    const photoUrl = photoUrlInput.value;
    const newPhotoListItem = document.createElement("li");
    const newPhoto = document.createElement("img");
    newPhoto.src = photoUrl;
    newPhoto.alt = "A cute puppy";
    newPhotoListItem.appendChild(newPhoto);
    dogPhotosList.appendChild(newPhotoListItem);
    photoFormContainer.classList.add("hidden");
    photoUrlInput.value = ""; // Clear the input field
  });



});
