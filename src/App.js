import React, { useState } from 'react';
import { Header } from './components/Header';
import { History } from './components/History';
import { InputBoxes } from './components/InputBoxes';
import './App.css';

const App = () => {
	const [expenses, setExpenses] = useState([]);
	const [id, setId] = useState(0);
	return (
		<>
			<div className="container">
				<Header expenses={expenses} setExpenses={setExpenses} />
				<History
					expenses={expenses}
					setExpenses={setExpenses}
					id={id}
					setId={setId}
				/>
				<InputBoxes
					expenses={expenses}
					setExpenses={setExpenses}
					id={id}
					setId={setId}
				/>
			</div>
		</>
	);
};

export default App;
