import React, { useState, useEffect } from "react";

export const SecondCounter = props => {
	const [counter, setCounter] = useState(0);
	const [idCounter, setIdCounter] = useState();

	useEffect(
		() => {
			if (idCounter != undefined && counter >= props.seconds) {
				return clearInterval(idCounter);
			}
		},
		[counter]
	);

	useEffect(() => {
		const time = setInterval(() => {
			if (props.seconds > counter) {
				setCounter(counter => counter + 1);
			}
		}, 1000);
		setIdCounter(time);
		return () => {
			clearInterval(time);
		};
	}, []);

	return (
		<div className="bigCounter">
			<div>{counter}</div>
		</div>
	);
};
