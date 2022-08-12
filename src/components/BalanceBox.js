import React from 'react';

export const BalanceBox = (props) => {
	return (
		<div className="balance-box-div">
			<h2 id="incExp">{props.name}</h2>
			<div className="money-div">
				<h1 id="money-value">${props.box}</h1>
			</div>
		</div>
	);
};
