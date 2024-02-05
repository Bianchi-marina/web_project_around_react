function ImagePopup() {
    return(
      <>
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
      </>
    )
}

export default ImagePopup;