import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function Main( {
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick
  // onCardClick
}) {
    return(
        <>
        <section className="profile">
            <div className="profile__view">
              <button onClick={onEditAvatarClick} type="button" className="profile__edit-avatar">
                <img className="profile__img" src="#" alt="Foto de perfil do usuário" />
              </button>
              <div className="profile__description">
                <h2 className="profile__name" />
                <h2 className="profile__job" />
                <button onClick={onEditProfileClick} type="button" className="profile__edit-button">
                  <img
                    className="profile__edit-button-img"
                    src="../images/edit-button.png"
                    alt="Botão de editar o texto do perfil do usuário"
                  />
                </button>
              </div>
            </div>
            <button onClick={onAddPlaceClick} type="button" className="profile__add-button">
              <img
                className="profile__add-img"
                src="./images/add-button.png"
                alt="Botão para adicionar conteúdo a página"
              />
            </button>
        </section>
        <section className="elements">
            <ul className="elements__card elements" />
            <template id="template-card" />
        </section>
        <PopupWithForm title="Editar Perfil" name="popup">
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
        <PopupWithForm title="Novo Local" name="popup-add">
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
        <PopupWithForm title="Alterar a foto do perfil" name="popup_edit">
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

        <section className="popup popup_delete">
          <div className="popup__container popup__container_delete">
            <button type="button" className="popup__close-icon">
              <img
                className="popup__close-icon-img"
                src="./images/close-icon.png"
                alt="ìcone para fechar o pop-up"
              />
            </button>
            <h2 className="popup__title">Tem certeza?</h2>
            <button type="button" className="popup__button-submit">
              Sim
            </button>
          </div>
        </section>
        </>
    )
}

export default Main;