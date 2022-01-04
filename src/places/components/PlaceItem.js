import React, { useState } from "react";

import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import styles from "./PlaceItem.module.scss";

const PlaceItem = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => setOpenModal(true);

  const closeModalHandler = () => setOpenModal(false);

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
          <Button>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </li>
    </>
  );
};

export default PlaceItem;
