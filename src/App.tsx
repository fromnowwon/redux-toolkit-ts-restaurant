import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";
import CustomerCard from "./components/CustomerCard";

function App() {
	const [reservationNameInput, setReservationNameInput] = useState("");

	const reservations = useSelector(
		(state: RootState) => state.reservations.value
	);

	const customers = useSelector((state: RootState) => state.customers.value);

	const dispatch = useDispatch();

	const handleAddReservations = () => {
		if (!reservationNameInput) return;
		dispatch(addReservation(reservationNameInput));
	};

	return (
		<div className="App">
			<div className="container">
				<div className="reservation-container">
					<div>
						<h5 className="reservation-header">Reservations</h5>
						<div className="reservation-cards-container">
							{reservations.map((name, index) => {
								return (
									<ReservationCard key={index} name={name} index={index} />
								);
							})}
						</div>
					</div>
					<div className="reservation-input-container">
						<input
							value={reservationNameInput}
							onChange={(e) => setReservationNameInput(e.target.value)}
						/>
						<button onClick={handleAddReservations}>Add</button>
					</div>
				</div>
				<div className="customer-food-container">
					{customers.map((customer) => {
						return (
							<CustomerCard
								id={customer.id}
								name={customer.name}
								food={customer.food}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
