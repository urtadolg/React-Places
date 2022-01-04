import React, { useRef, useEffect } from "react";

import styles from "./Map.module.scss";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div ref={mapRef} className={`${styles.map} ${props.className}`}></div>
  );
};

export default Map;
