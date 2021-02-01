// объявляем перменные
// окно попап
let popup = document.querySelector('.popup');
// находим кнопку редактирования профиля
let popupOpenButton = document.querySelector('.profile__edit-button');
// находим кнопку закрытия попап
let popupCloseButton = popup.querySelector('.popup__close-icon');
// находим поля ввода попап
let popupInputName = popup.querySelector('.popup__input_info_name');
let popupInputDescription = popup.querySelector('.popup__input_info_description');
// находим содержимое профиля - имя и описание
let popupProfileName = document.querySelector('.profile__text-name');
let popupProfileDescription = document.querySelector('.profile__text-description');
// находим форму попап
let popupForm = popup.querySelector('.popup__form');
// функция открытия попап, а также взятия уже имеющихся значений полей ввода попап из профиля страницы
function openPopup() {
  popup.classList.add('popup_opened');
  popupInputName.value = popupProfileName.textContent;
  popupInputDescription.value = popupProfileDescription.textContent;
}
// функция закрытия попап
function closePopup() {
  popup.classList.remove('popup_opened');
}
// функция записи значений полей ввода попап в соответствующие значения полей профиля страницы
function formSubmitHandler (evt) {
  evt.preventDefault();
  popupProfileName.textContent = popupInputName.value;
  popupProfileDescription.textContent = popupInputDescription.value;
  closePopup();
}
// обработчики по формам
popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler);
