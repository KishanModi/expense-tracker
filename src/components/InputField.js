import React from 'react';

export const InputField = (props) => {
	const { name, updateItem, updateValue, itemRef } = props;
	return (
		<div className="input-field">
			<h2>{name}</h2>
			<input
				type="text"
				placeholder={name}
				onChange={(e) => {
					updateValue(e.target.value);
				}}
				value={updateItem}
				ref={itemRef}
			/>
		</div>
	);
};
