"use client";

import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const latitude = 43.6532;
const longitude = -79.3832;
const Map = () => {
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude], // Set the longitude and latitude of the center point
      zoom: 12 // Adjust the zoom level as needed
    });

    // Add any additional map customization or markers as desired

    return () => map.remove(); // Cleanup the map when the component is unmounted
  }, []);

  return (
    <div
      id="map-container"
      className="w-full h-40 md:h-60 lg:h-80"
    ></div>
  );
};

export default Map;
