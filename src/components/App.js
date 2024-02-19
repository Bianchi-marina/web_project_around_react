import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import { useEffect, useState } from "react";
import { api } from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen,  setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setselectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    api.getUserInfo()
    .then((userInfo) => setCurrentUser(userInfo))
    .catch((error) => console.log(error));
  }, []);

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setselectedCard(card);
  }

  const handleUpdateUser = (userData) => {
    api.editProfile(userData)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((error) => console.log(error));
  };

  const closeAllPopups = () => {
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setselectedCard(null);
  }

  return (
    <section className="page">
      <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main 
      onEditAvatarClick={handleEditAvatarClick}
      onEditProfileClick={handleEditProfileClick}
      onAddPlaceClick={handleAddPlaceClick}
      onCardClick={handleCardClick}
      />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <PopupWithForm isOpen={isAddPlacePopupOpen} title="Novo Local" name="popup-add" onClose={closeAllPopups}>
      <>
          <label>
            <input
              id="title-input"
              placeholder="Título"
              type="text"
              className="popup__form-input popup__form-input_title"
              name="name"
              minLength={2}
              maxLength={30}
              required=""
      />
            <span className="title-input-error" />
          </label>
          <label>
            <input
      id="url-input"
              placeholder="Link da Imagem"
              type="url"
              className="popup__form-input popup__form-input_link"
              name="image"
      />
            <span className="url-input-error" />
          </label>
      </>
      </PopupWithForm>
      <PopupWithForm isOpen={isEditAvatarPopupOpen} title="Alterar a foto do perfil" name="popup_edit" onClose={closeAllPopups}>
      <>
          <label>
            <input
              id="avatar-input"
              placeholder="Link da Imagem"
              type="url"
              className="popup__form-input popup__form-input_avatar"
              name="image"
              required=""
      />
            <span className="avatar-input-error" />
          </label>
      </>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <Footer />
      </CurrentUserContext.Provider>
    </section>
  );
}

export default App;
