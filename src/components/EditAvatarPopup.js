import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatarRef = useRef("");
  
    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateAvatar({
          avatar: avatarRef.current.value
        });
      };

    return (
        <PopupWithForm isOpen={isOpen} title="Alterar a foto do perfil" name="popup_edit" onClose={onClose} onSubmit={handleSubmit}>
        <>
          <label>
            <input
            ref={avatarRef}
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
      );
    }
    
export default EditAvatarPopup;