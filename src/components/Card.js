import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card ({ cardData, onCardClick, onDelete }) {
    const currentUser = useContext(CurrentUserContext);
    const { link, name, _id, owner, likes } = cardData;

    const isOwn = owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
      `elements__button-trash ${isOwn ? 'elements__button-trash_visible' : 'elements__button-trash_hidden'}`
    ); 

    const isLiked = likes.some(like => like._id === currentUser._id);
    const cardLikeButtonClassName = (
      `elements__button-like ${isLiked ? 'elements__button-like_liked' : '' }`
    );

    const handleClick = () => {
      onCardClick(cardData);
    }

    return(
        <>
        <li className="elements__li">
            <button type="button"  className="elements__trash" onClick={() => onDelete(_id)}>
              <img
                 className={cardDeleteButtonClassName}
                src="./images/trash.png"
                alt="ícone de lixeira"
              />
            </button>
            <img  className="elements__card-img" src={link} alt={name} onClick={handleClick}/>
            <div  className="elements__card-text">
              <p  className="elements__card-name">{name}</p>
              <div  className="elements__like">
                <button type="button" name="like" id="likeButton"  className={cardLikeButtonClassName}></button>
                <span  className="elements__like-count"></span>
              </div>
            </div>
        </li>
        </>
    );
}

export default Card;