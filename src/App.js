function App() {
  return (
    <section className="page">
      <header className="header">
        <img
          className="header__logo"
          src="./images/logo-vector.png"
          alt="Logo da página Around us"
        />
      </header>
      <section className="profile">
        <div className="profile__view">
          <button type="button" className="profile__edit-avatar">
            <img className="profile__img" src="#" alt="Foto de perfil do usuário" />
          </button>
          <div className="profile__description">
            <h2 className="profile__name" />
            <h2 className="profile__job" />
            <button type="button" className="profile__edit-button">
              <img
                className="profile__edit-button-img"
                src="./images/edit-button.png"
                alt="Botão de editar o texto do perfil do usuário"
              />
            </button>
          </div>
        </div>
        <button type="button" className="profile__add-button">
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
      <section className="popup">
        <div className="popup__container">
          <button type="button" className="popup__close-icon">
            <img
              className="popup__close-icon-img"
              src="./images/close-icon.png"
              alt="ìcone para fechar o pop-up"
            />
          </button>
          <form className="popup__form" noValidate="">
            <fieldset className="popup__set">
              <h2 className="popup__title">Editar perfil</h2>
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
              <button type="submit" className="popup__button-submit">
                Salvar
              </button>
            </fieldset>
          </form>
        </div>
      </section>
      <section className="popup popup-add">
        <div className="popup__container" id="cards-form">
          <button type="button" className="popup__close-icon">
            <img
              className="popup__close-icon-img popup__close"
              src="./images/close-icon.png"
              alt="ìcone para fechar o pop-up"
            />
          </button>
          <form className="popup__form popup__form_add" noValidate="">
            <fieldset className="popup__set">
              <h2 className="popup__title">Novo Local</h2>
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
              <button type="submit" className="popup__button-submit">
                Criar
              </button>
            </fieldset>
          </form>
        </div>
      </section>
      <section className="popup popup_image">
        <div className="popup__container-img">
          <button type="button" className="popup__close-icon">
            <img
              className="popup__close-icon-img popup__close-zoom"
              src="./images/close-icon.png"
              alt="ìcone para fechar o pop-up"
            />
          </button>
          <img className="popup__img-zoom" src="#" alt="" />
          <p className="popup__description" />
        </div>
      </section>
      <section className="popup popup-edit">
        <div className="popup__container" id="editAvatarPopup">
          <button type="button" className="popup__close-icon">
            <img
              className="popup__close-icon-img popup__close"
              src="./images/close-icon.png"
              alt="ìcone para fechar o pop-up"
            />
          </button>
          <form className="popup__form popup__form_edit" noValidate="">
            <fieldset className="popup__set">
              <h2 className="popup__title">Alterar a foto do perfil</h2>
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
              <button type="submit" className="popup__button-submit">
                Salvar
              </button>
            </fieldset>
          </form>
        </div>
      </section>
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
      <footer className="footer">
        <h2 className="footer__copyright">© 2023 Around The U.S.</h2>
      </footer>
    </section>
  );
}

export default App;
