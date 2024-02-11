import React from "react";

interface ReserationCardTypes {
	name: string;
}

const ReservationCard = ({ name }: ReserationCardTypes) => {
	return <div className="reservation-card-container">{name}</div>;
};

export default ReservationCard;
