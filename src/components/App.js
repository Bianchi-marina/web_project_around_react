import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import { useState } from "react";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen,  setAddPlacePopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
  }

  return (
    <section className="page">
      <Header />
      <Main 
      onEditAvatarClick={handleEditAvatarClick}
      onEditProfileClick={handleEditProfileClick}
      onAddPlaceClick={handleAddPlaceClick} 
      />
      <PopupWithForm isOpen={isEditProfilePopupOpen} title="Editar Perfil" name="popup" onClose={closeAllPopups}>
      <>
          <label>
            <input
      id="name-input"
              className="popup__form-input popup__form-input_name"
              placeholder="Nome"
              type="text"
              name="name"
              minLength={2}
              maxLength={40}
              required=""
      />
            <span className="name-input-error" />
          </label>
          <label>
            <input
      id="about-input"
              className="popup__form-input popup__form-input_about"
              placeholder="Sobre"
              type="text"
              name="about"
              minLength={2}
              maxLength={200}
              required=""
      />
            <span className="about-input-error" />
          </label>
      </>
      </PopupWithForm>
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
      <ImagePopup />
      <Footer />
    </section>
  );
}

export default App;
