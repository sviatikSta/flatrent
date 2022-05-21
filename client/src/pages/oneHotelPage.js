import { useParams } from "react-router-dom";

export const OneHotelPage = () => {
  const hotelId = useParams().id;

  return <h1>Hotel id : {hotelId}</h1>;
};
