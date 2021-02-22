// объявляем перменные
// окно попап для изменения профиля
const popupProfile = document.querySelector('.popup_edit_profile');
// находим кнопку редактирования профиля
const popupOpenButton = document.querySelector('.profile__edit-button');
// находим кнопку закрытия попап
const popupCloseButton = popupProfile.querySelector('.popup__close-icon');
// находим поля ввода попап
const popupInputName = popupProfile.querySelector('.popup__input_info_name');
const popupInputDescription = popupProfile.querySelector('.popup__input_info_description');
// находим содержимое профиля - имя и описание
const popupProfileName = document.querySelector('.profile__text-name');
const popupProfileDescription = document.querySelector('.profile__text-description');
// находим форму попап
const popupForm = popupProfile.querySelector('.popup__form');
// окно попап для добавления карточки места
const popupCard = document.querySelector('.popup_add_card');
// находим кнопку добавления карточки места
const popupCardAddButton = document.querySelector('.profile__add-button');
// находим кнопку закрытия попап
const popupCardCloseButton = popupCard.querySelector('.popup__close-icon');
// находим форму попап
const popupCardForm = popupCard.querySelector('.popup__form');
// находим блок с карточками
const travelCardsElements = document.querySelector('.travel-cards');
// находим темплейт элемент в html
const templateCard = document.querySelector('.template');
// находим кнопку добавления карточки после ввода данных в попап
const addCardButton = popupCard.querySelector('.popup__save-changes');
// находим поля ввода попап для добавления карточки
const popupCardTitle = popupCard.querySelector('.popup__input_title_card');
const popupCardLink = popupCard.querySelector('.popup__input_link_card');
// находим попап картинки карточки
const popupPic = document.querySelector('.popup-pic');
// находим кнопку закрытия попапа картинки карточки
const popupPicClose = popupPic.querySelector('.popup-pic__close-icon');
// находим фото попапа картинки карточки
const popupPicImage = popupPic.querySelector('.popup-pic__image');
// находим текст попапа картинки карточки
const popupPicText = popupPic.querySelector('.popup-pic__text');

// функция открытия попап, а также взятия уже имеющихся значений полей ввода попап из профиля страницы
function openPopup() {
  popupProfile.classList.add('popup_opened');
  popupInputName.value = popupProfileName.textContent;
  popupInputDescription.value = popupProfileDescription.textContent;
}
// функция закрытия попап
function closePopup() {
  popupProfile.classList.remove('popup_opened');
}
// функция записи значений полей ввода попап в соответствующие значения полей профиля страницы
function formProfileSubmit (evt) {
  evt.preventDefault();
  popupProfileName.textContent = popupInputName.value;
  popupProfileDescription.textContent = popupInputDescription.value;
  closePopup();
}
// обработчики по формам
popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formProfileSubmit);
// создаем массив
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
// преобразовываем массив и добавляем html код на страницу
function render() {
    const html = initialCards
        .map(getItem)
    travelCardsElements.append(...html);
}
// функция для лайка карточки
function likeCard(evt){
  const targetCard = evt.target;
  const targetLikeCard = targetCard.closest('.travel-card__like');
  targetLikeCard.classList.add('travel-card__like_active');
}
// функция удаления карточки
function deleteCard(evt){
  const targetCard = evt.target;
  const targetCardDelete = targetCard.closest('.travel-card');
  targetCardDelete.remove();
}
// html код трэвэл карточки с темплейт строками
function getItem(item) {
  const cardItem = templateCard.content.cloneNode(true);
  const cardName = cardItem.querySelector('.travel-card__text');
  cardName.textContent = item.name;
  const cardLink = cardItem.querySelector('.travel-card__image');
  cardLink.src = item.link;
  const likeButton = cardItem.querySelector('.travel-card__like');
  likeButton.addEventListener('click', likeCard);
  const deleteCardButton = cardItem.querySelector('.travel-card__delete');
  deleteCardButton.addEventListener('click', deleteCard);
  cardLink.addEventListener('click', function() {openPopupPicImage(item)});
  return cardItem;
}
//функция открытия попапа картинки карточки
function openPopupPicImage(item){
  popupPic.classList.add('popup-pic_opened');
  popupPicImage.src = item.link;
  popupPicText.textContent = item.name;
}
//функция добавления карточки
function addCard(evt) {
  evt.preventDefault();
  const mestoCardName = popupCardTitle.value;
  const mestoCardLink = popupCardLink.value;
  const cardItem = getItem({name: mestoCardName , link: mestoCardLink});
  travelCardsElements.prepend(cardItem);
  popupCardTitle.value = '';
  popupCardLink.value = '';
  closePopupCard();
}
// обработчик функции добавления карточки
popupCardForm.addEventListener('submit', addCard);

// функция открытия попап для добавления карточки
function openPopupCard() {
  popupCard.classList.add('popup_opened');
}
// функция закрытия попап для добавления карточки
function closePopupCard() {
  popupCard.classList.remove('popup_opened');
}
// функция закрытия попап картинки карточки
function closePopupPic() {
  popupPic.classList.remove('popup-pic_opened');
}
// открытие попапа добавления карточки
popupCardAddButton.addEventListener('click', openPopupCard);
// закрытие попапа добавления карточки
popupCardCloseButton.addEventListener('click', closePopupCard);
// закрытие попапа картинки карточки
popupPicClose.addEventListener('click', closePopupPic);

render();
