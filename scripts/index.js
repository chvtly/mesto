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
const popupFormProfile = popupProfile.querySelector('.popup__form');
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

// функция открытия попап
function openPopup(item) {
  item.classList.add('popup_opened');
}

// функция закрытия попап
function closePopup(item) {
  item.classList.remove('popup_opened');
}

// функция открытия попап профиля, а также взятия уже имеющихся значений полей ввода попап из профиля страницы
function openPopupProfile() {
  openPopup(popupProfile);
  popupInputName.value = popupProfileName.textContent;
  popupInputDescription.value = popupProfileDescription.textContent;
}

// функция записи значений полей ввода попап в соответствующие значения полей профиля страницы
function submitFormProfile (evt) {
  evt.preventDefault();
  popupProfileName.textContent = popupInputName.value;
  popupProfileDescription.textContent = popupInputDescription.value;
  closePopup(popupProfile);
}

// функция для лайка карточки
function likeCard(evt){
  const targetCard = evt.target;
  const targetLikeCard = targetCard.closest('.travel-card__like');
  targetLikeCard.classList.toggle('travel-card__like_active');
}

// функция удаления карточки
function deleteCard(evt){
  const targetCard = evt.target;
  const targetCardDelete = targetCard.closest('.travel-card');
  targetCardDelete.remove();
}

//функция открытия попапа картинки карточки
function openPopupPic(item){
  openPopup(popupPic);
  popupPicImage.src = item.link;
  popupPicImage.alt = item.name;
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
  closePopup(popupCard);
}

// открытие попапа добавления карточки
popupCardAddButton.addEventListener('click', () => {openPopup(popupCard);});

// закрытие попапа добавления карточки
popupCardCloseButton.addEventListener('click', () => {closePopup(popupCard);});

// закрытие попапа картинки карточки
popupPicClose.addEventListener('click', () => {closePopup(popupPic);});

// открытиe попапа профиля
popupOpenButton.addEventListener('click', openPopupProfile);

// закрытия попапа профиля
popupCloseButton.addEventListener('click', () => {closePopup(popupProfile);});

// обработчик функции добавления данных профиля
popupFormProfile.addEventListener('submit', submitFormProfile);

// обработчик функции добавления карточки
popupCardForm.addEventListener('submit', addCard);

// преобразовываем массив и добавляем html код на страницу
function render() {
    const html = initialCards
        .map(getItem)
    travelCardsElements.append(...html);
}

// html код трэвэл карточки с темплейт строками
function getItem(item) {
  const cardItem = templateCard.content.cloneNode(true);
  const cardName = cardItem.querySelector('.travel-card__text');
  cardName.textContent = item.name;
  const cardLink = cardItem.querySelector('.travel-card__image');
  cardLink.src = item.link;
  cardLink.alt = item.name;
  const likeButton = cardItem.querySelector('.travel-card__like');
  likeButton.addEventListener('click', likeCard);
  const deleteCardButton = cardItem.querySelector('.travel-card__delete');
  deleteCardButton.addEventListener('click', deleteCard);
  cardLink.addEventListener('click', () => {openPopupPic(item)});
  return cardItem;
}

render();
