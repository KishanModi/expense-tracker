import React, { useEffect } from 'react';
import './History.css';
export const History = (props) => {
	const { expenses, setExpenses } = props;
	const deletelist = (key) => {
		console.log(key);
		setExpenses((olditems) => {
			return olditems.filter((elem) => {
				return elem.key !== key;
			});
		});
	};
	useEffect(() => {}, [expenses]);

	return (
		<ul className="history">
			{expenses.length !== 0 ? (
				expenses.map((item) => {
					return (
						<li key={item.key} className="listItems">
							<button onClick={() => deletelist(item.key)}>x</button>
							<h3>{item.item}</h3>
							<h3>${item.price}</h3>
						</li>
					);
				})
			) : (
				<h1 className="empty">Empty</h1>
			)}
		</ul>
	);
};
