import React, { useEffect, useState } from 'react';

export const TotalBalance = (props) => {
	const { expenses } = props;
	const [sum, updateSum] = useState(0);

	useEffect(() => {
		if (expenses.length !== 0) {
			let amount = expenses.reduce((acc, item) => {
				return (acc = parseInt(item.price) + parseInt(acc));
			}, 0);
			updateSum(amount);
		}
	}, [expenses]);
	return (
		<>
			<h3 id="totalheader">Total Balance</h3>
			<h1 id="totalbalance">${sum}</h1>
		</>
	);
};
