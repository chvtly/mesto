let popup = document.querySelector('.popup');

let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close-icon');

let popupInputName = popup.querySelector('.popup__input_name');
let popupInputDescription = popup.querySelector('.popup__input_description');

let popupProfileName = document.querySelector('.profile__text-name');
let popupProfileDescription = document.querySelector('.profile__text-description');

let popupForm = popup.querySelector('.popup__save-changes');

function popupOpen() {
  popup.classList.add('popup_opened');
  popupInputName.value = popupProfileName.textContent;
  popupInputDescription.value = popupProfileDescription.textContent;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  popupProfileName.textContent = popupInputName.value;
  popupProfileDescription.textContent = popupInputDescription.value;
  popupClose();
}

popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
popupForm.addEventListener('click', formSubmitHandler);
