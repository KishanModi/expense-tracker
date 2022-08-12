import React, { useState } from 'react';
import { InputField } from './InputField';

export const InputBoxes = (props) => {
	const [price, updatePrice] = useState(0);
	const [itemName, updateName] = useState('');
	const nameRef = React.createRef();
	const priceRef = React.createRef();
	return (
		<div className="input-div">
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}>
				<InputField
					key="item"
					name="Enter Item Name"
					updateItem={itemName}
					updateValue={updateName}
					itemRef={nameRef}
				/>
				<InputField
					key="price"
					name="Enter Price"
					updateItem={price}
					updateValue={updatePrice}
					itemRef={priceRef}
				/>
				<button
					onClick={() => {
						props.setExpenses((state) => [
							...state,
							{
								key: props.id,
								item: nameRef.current.value,
								price: priceRef.current.value
							}
						]);
						props.setId(props.id + 1);
					}}>
					Add
				</button>
			</form>
		</div>
	);
};
