import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";

interface ReserationCardTypes {
	name: string;
	index: number;
}

const ReservationCard = ({ name, index }: ReserationCardTypes) => {
	const dispatch = useDispatch();

	return (
		<div
			onClick={() => {
				dispatch(removeReservation(index));
			}}
			className="reservation-card-container"
		>
			{name}
		</div>
	);
};

export default ReservationCard;
