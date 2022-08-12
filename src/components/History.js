import React, { useEffect } from 'react';
import './History.css';
export const History = (props) => {
	const { expenses, setExpenses } = props;
	const deletelist = (key) => {
		setExpenses((olditems) => {
			return olditems.filter((elem, index) => {
				return index !== key;
			});
		});
	};
	useEffect(() => {
		console.log(expenses.length);

		return () => {};
	}, [expenses]);

	return (
		<ul className="history">
			{expenses.length !== 0
				? expenses.map((item) => {
						return (
							<li key={item.key} className="listItems">
								<button onClick={() => deletelist(item.key)}>x</button>
								<h3>{item.item}</h3>
								<h3>${item.price}</h3>
							</li>
						);
				  })
				: null}
		</ul>
	);
};
