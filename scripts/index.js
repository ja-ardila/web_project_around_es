import { setEventListeners, resetValidation } from "./validate.js";

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const container = document.querySelector(".content");

// Template y contenedor principal de las tarjetas.
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardContainer = container.querySelector(".cards__list");

// Elementos del perfil.
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// Modal de edición del perfil.
const editPopup = document.querySelector("#edit-popup");
const editButton = document.querySelector(".profile__edit-button");
const editPopupCloseButton = editPopup.querySelector(".popup__close");

const editForm = editPopup.querySelector(".popup__form");
const editNameInput = editForm.querySelector(".popup__input_type_name");
const editDescriptionInput = editForm.querySelector(
  ".popup__input_type_description",
);

// Modal para agregar nuevas tarjetas.
const newCardPopup = document.querySelector("#new-card-popup");
const addButton = document.querySelector(".profile__add-button");
const newCardPopupCloseButton = newCardPopup.querySelector(".popup__close");

const addForm = newCardPopup.querySelector(".popup__form");
const addNameInput = addForm.querySelector(".popup__input_type_card-name");
const addLinkInput = addForm.querySelector(".popup__input_type_url");

// Modal de vista ampliada de imagen.
const imagePopup = document.querySelector("#image-popup");
const imagePopupCloseButton = imagePopup.querySelector(".popup__close");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

// Todos los modales
const popups = document.querySelectorAll(".popup");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inputErrorClass: "popup__input_type_error",
  inactiveButtonClass: "popup__button_disabled",
};

function openModal(modal) {
  modal.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscClose);
}

function resetPopupValidation(modal) {
  const formElement = modal.querySelector(".popup__form");

  if (formElement) {
    resetValidation(formElement, validationConfig);
  }
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscClose);
  resetPopupValidation(modal);
}

function handleOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
}

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");

    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}

setEventListeners(validationConfig);

editButton.addEventListener("click", () => {
  handleOpenEditModal(editPopup);
});

editPopupCloseButton.addEventListener("click", () => {
  closeModal(editPopup);
});

function fillProfileForm() {
  editNameInput.value = profileTitle.textContent;
  editDescriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal(modal) {
  fillProfileForm();
  resetValidation(editForm, validationConfig);
  openModal(modal);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = editNameInput.value;
  profileDescription.textContent = editDescriptionInput.value;

  closeModal(editPopup);
}

editForm.addEventListener("submit", handleProfileFormSubmit);

addButton.addEventListener("click", () => {
  addForm.reset();
  resetValidation(addForm, validationConfig);
  openModal(newCardPopup);
});

newCardPopupCloseButton.addEventListener("click", () => {
  closeModal(newCardPopup);
});

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const cardTitle = addNameInput.value.trim();
  const cardLink = addLinkInput.value.trim();

  renderCard(cardTitle, cardLink, cardContainer);

  closeModal(newCardPopup);
  addForm.reset();
}

addForm.addEventListener("submit", handleCardFormSubmit);

function renderCard(title, image, container) {
  const cardEl = getCardElement(image, title);
  container.prepend(cardEl);
}

function getCardElement(
  image = "./images/placeholder.jpg",
  title = "Sin título",
) {
  const cardElement = cardTemplate.cloneNode(true);

  const imageElement = cardElement.querySelector(".card__image");
  imageElement.setAttribute("src", image);
  imageElement.setAttribute("alt", title);

  const titleElement = cardElement.querySelector(".card__title");
  titleElement.textContent = title;

  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  cardLikeBtn.addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__like-button_is-active");
  });

  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  cardDeleteBtn.addEventListener("click", (evt) => {
    evt.target.closest(".card").remove();
  });

  imageElement.addEventListener("click", () => {
    popupImage.setAttribute("src", image);
    popupImage.setAttribute("alt", title);
    popupCaption.textContent = title;
    openModal(imagePopup);
  });

  return cardElement;
}

imagePopupCloseButton.addEventListener("click", () => {
  closeModal(imagePopup);
});

popups.forEach((popup) => {
  popup.addEventListener("mousedown", handleOverlayClick);
});

initialCards.forEach(function (card) {
  renderCard(card.name, card.link, cardContainer);
});
