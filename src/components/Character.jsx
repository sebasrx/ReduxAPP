import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/Character.scss";
import SVGStar from "../assets/static/icons/star.svg";
import CharacterDetail from "./CharacterDetail";
import Modal from "./Modal";
import useModal from "../custom-hooks/useModal";

const Character = (props) => {
  const [favorite, setFavorite] = useState(false);
  const { modal, handleCloseModal, handleOpenModal } = useModal();
  //props
  const { data, favoriteCharacters } = props;
  const { id, image, name, status, species, gender } = data;

  const handleSetFavorite = () => {
    props.setFavorite({ data });
    setFavorite(true);
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
    setFavorite(false);
  };

  const isFavorite = () => {
    const result = favoriteCharacters.filter(
      (favoriteCharacters) => favoriteCharacters.data.id === id
    );
    if (result.length) {
      setFavorite(true);
    }
  };

  useEffect(() => {
    isFavorite();
  });

  return (
    <div className="character">
      <img className="character__img" src={image} alt="character" />
      <div className="character__details">
        <h2 className="character__details-name">{name}</h2>
        {favorite ? (
          <SVGStar onClick={() => handleDeleteFavorite(id)} width="50" />
        ) : (
          <SVGStar onClick={handleSetFavorite} width="100" />
        )}
        <p>
          <span>Status: </span> {status}
        </p>
        <p>
          <span>Spices:</span> {species}
        </p>
        <p>
          <span>Gender:</span> {gender}
        </p>
        <p onClick={handleOpenModal}>More details...</p>
      </div>
      <Modal isOpen={modal} onClose={handleCloseModal}>
        <CharacterDetail data={data} />
      </Modal>
    </div>
  );
};

// prototype: components documentation
Character.propTypes = {
  data: propTypes.object,
  /*     name: propTypes.string,
    whorever: propTypes.object() */
};

// Native function reactredux (HOC)
const mapStateToProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters,
  };
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
