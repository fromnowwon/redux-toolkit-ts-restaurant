import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";
import { v4 as uuid } from "uuid";

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
				dispatch(
					addCustomer({
						id: uuid(),
						name,
						food: [],
					})
				);
			}}
			className="reservation-card-container"
		>
			{name}
		</div>
	);
};

export default ReservationCard;
