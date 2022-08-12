import React, { useEffect, useState } from 'react';
import { BalanceBox } from './BalanceBox';
export const IncomeExpense = (props) => {
	const { expenses } = props;
	const [spent, updateSpent] = useState(0);
	const [earned, updateEarned] = useState(0);

	useEffect(() => {
		if (expenses.length !== 0) {
			const expInc = () => {
				let inc = expenses
					.filter((item) => item.price > 0)
					.reduce((acc, i) => parseInt(acc) + parseInt(i.price), 0);
				updateEarned(inc);
				let exp = expenses
					.filter((item) => item.price < 0)
					.reduce((acc, i) => parseInt(acc) + parseInt(i.price), 0);
				updateSpent(exp);
			};
			expInc();
		}
	}, [expenses]);
	return (
		<>
			<BalanceBox key="income" name="Income" box={spent} />
			<BalanceBox key="expense" name="Expense" box={earned} />
		</>
	);
};
