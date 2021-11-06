import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5vbnltb3VzcjAwNyIsImEiOiJja3ZtNDB6MWkxY2Z1MnZ0a3JkczI5dXR3In0.1qvvu6IYdgQqCx5OZ0RYYw";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [77.1025, 28.7041],
      zoom: 10,
    });
  });

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
  flex-1
`;
