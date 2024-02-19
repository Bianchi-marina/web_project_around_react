import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');

    useEffect(() => {
        setName(currentUser.name || '');
        setAbout(currentUser.about || '');
      }, [currentUser]);

    const handleChangeName = (event) => {
        setName(event.target.value);
      };
    
      const handleChangeAbout = (event) => {
        setAbout(event.target.value);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateUser({
          name,
          about: about
        });
      };

    return (
        <PopupWithForm isOpen={isOpen} title="Editar Perfil" name="popup" onClose={onClose} onSubmit={handleSubmit}>
        <>
            <label>
              <input
                id="name-input"
                value={name}
                onChange={handleChangeName}
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
                value={about}
                onChange={handleChangeAbout}
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
    );
  }
  
export default EditProfilePopup;