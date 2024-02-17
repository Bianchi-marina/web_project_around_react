import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

function Card ({ cardData, onCardClick, onDelete }) {
    const { link, name, _id } = cardData;

    const handleClick = () => {
      onCardClick(cardData);
    }

    return(
        <>
        <li className="elements__li">
            <button type="button"  className="elements__trash" onClick={() => onDelete(_id)}>
              <img
                 className="elements__button-trash"
                src="./images/trash.png"
                alt="ícone de lixeira"
              />
            </button>
            <img  className="elements__card-img" src={link} alt={name} onClick={handleClick}/>
            <div  className="elements__card-text">
              <p  className="elements__card-name">{name}</p>
              <div  className="elements__like">
                <button type="button" name="like" id="likeButton"  className="elements__button-like"></button>
                <span  className="elements__like-count"></span>
              </div>
            </div>
        </li>
        </>
    );
}

export default Card;