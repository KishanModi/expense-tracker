import React from 'react';
import { TotalBalance } from './TotalBalance';
import { IncomeExpense } from './IncomeExpense';
import './Header.css';
export const Header = (props) => {
	return (
		<>
			<div className="Header-div">
				<div className="Heading-box">
					<h1>Expense Tracker</h1>
				</div>
				<div className="total-div">
					<TotalBalance expenses={props.expenses} />
				</div>
				<div className="balance-div">
					<IncomeExpense expenses={props.expenses} />
				</div>
			</div>
		</>
	);
};
