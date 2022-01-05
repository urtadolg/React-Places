import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../shared/store/auth-context";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import styles from "./PlaceItem.module.scss";

const PlaceItem = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => setOpenModal(true);

  const closeModalHandler = () => setOpenModal(false);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const openDeleteModalHandler = () => setOpenDeleteModal(true);

  const closeDeleteModalHandler = () => setOpenDeleteModal(false);

  const confirmDeleteHandler = () => {
    console.log("Deleting...");
    closeDeleteModalHandler();
  };

  const navigate = useNavigate();

  const editPlaceHandler = () => navigate(`/places/${props.id}`);

  const authCtx = useContext(AuthContext);

  return (
    <>
      <Modal
        onClose={closeModalHandler}
        show={openModal}
        header={props.address}
        footer={
          <Button onClick={closeModalHandler} danger>
            CLOSE
          </Button>
        }
      >
        <div className={styles.map_container}>
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        onClose={closeDeleteModalHandler}
        show={openDeleteModal}
        header="Delete Place"
        footer={
          <>
            <Button onClick={closeDeleteModalHandler} inverted>
              CANCEL
            </Button>
            <Button onClick={confirmDeleteHandler} danger>
              DELETE
            </Button>
          </>
        }
      >
        <div className={styles.delete_warning_container}>
          <p>Would you like to permanently delete this place?</p>
        </div>
      </Modal>
      <li className={styles.container}>
        <div className={styles.image_container}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.description}>
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <Button inverted onClick={openModalHandler}>
            VIEW ON MAP
          </Button>
          {authCtx.isLoggedIn && (
            <>
              <Button onClick={editPlaceHandler}>EDIT</Button>
              <Button onClick={openDeleteModalHandler} danger>
                DELETE
              </Button>
            </>
          )}
        </div>
      </li>
    </>
  );
};

export default PlaceItem;
