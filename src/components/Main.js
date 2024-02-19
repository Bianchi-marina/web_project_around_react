import { useState, useEffect, useContext } from "react";
import { api } from "../utils/api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main( {
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) {
    // const [userName, setUserName] = useState('');
    // const [userDescription, setUserDescription] = useState('');
    // const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);
    const currentUser = useContext(CurrentUserContext);

    // const handleDeleteProduct = (cardId) => {
    //   api.deleteCard(cardId)
    //   .then(() => setCards(cards.filter((card) => card._id !== cardId)));
    // }
  
    useEffect(() => {
      // api.getUserInfo()
      //   .then(userInfo => {
      //     setUserName(userInfo.name);
      //     setUserDescription(userInfo.about);
      //     setUserAvatar(userInfo.avatar);
      //   })
      //   .catch(error => {
      //     console.error('Erro ao buscar dados do usuário:', error);
      //   });

      api.getInitialCards()
        .then(initialCards => {
          setCards(initialCards);
        })
        .catch(error => {
          console.error('Erro ao buscar dados dos cartões:', error);
        });
    }, []);

    function handleCardLike(card) {
      // Verifique mais uma vez se esse cartão já foi curtido
      const isLiked = card.likes.some(i => i._id === currentUser._id);
      
      // Envie uma solicitação para a API e obtenha os dados do cartão atualizados
      api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
    }

    function handleCardDelete(cardId) {
      api.deleteCard(cardId)
        .then(() => {
          setCards((state) => state.filter((card) => card._id !== cardId));
        })
        .catch((error) => {
          console.log(error);
        });
    } 

    return(
        <>
        <section className="profile">
            <div className="profile__view">
              <button onClick={onEditAvatarClick} type="button" className="profile__edit-avatar">
                <img className="profile__img" src={currentUser.avatar} alt="Foto de perfil do usuário" />
              </button>
              <div className="profile__description">
                <h2 className="profile__name">{currentUser.name}</h2>
                <h2 className="profile__job">{currentUser.about}</h2>
                <button onClick={onEditProfileClick} type="button" className="profile__edit-button">
                  <img
                    className="profile__edit-button-img"
                    src="./images/edit-button.png"
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
          <ul className="elements__card elements">
          {cards.map((card) => (
          <Card cardData={card} key={card._id} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/> 
          ))}
          </ul>
          <template id="template-card" />
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
        </>
    )
}

export default Main;