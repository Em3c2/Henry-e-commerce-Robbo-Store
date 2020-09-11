// import React, {useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// //import {useSelector, useDispatch} from 'react-redux';
// import './FormularioEnvio.css';
// import './FormularioEnvioUser.jsx'
// import axios from 'axios';

// const urlBack = process.env.REACT_APP_API_URL;

// export default function UserForm(props) {
	
// 	const {
// 		id,
// 		recipient_name,
// 		recipient_lastname,
// 		country,
// 		city,
// 		address,
// 		postal_code,
// 		phone_number,
// 		shipping_type,	
// 	}= props.info

// 	const [inputValues, setInputValues] = useState({
// 		id,
// 		recipient_name,
// 		recipient_lastname,
// 		country,
// 		city,
// 		address,
// 		postal_code,
// 		phone_number,
// 		shipping_type,
// 	});

// 	const [stateEdit, setStateEdit] = useState({
// 		edit: 'editOpen'
// 	});

// 	const handleInputChange = event => {
// 		setInputValues({...inputValues, [event.target.name]: event.target.value});
// 	};

// 	const clickHandle = event => {
// 		event.preventDefault();
// 		setStateEdit({
// 			...stateEdit,
// 			edit: stateEdit.edit === 'editClose' ? 'editOpen' : 'editClose'
// 		});
// 	};

// 	const handleEdit = event => {
// 		event.preventDefault();

// 		axios
// 			.put(`${urlBack}/orders/${id}`, inputValues)
// 			.then(() => alert('Se realizaron los cambios'))
// 			.catch(err => alert(err.message));

// 	}

// 	return (
// 		<div>
// 		{/* // 		<div className="product" id={recipient_name}>
// 		// 			{recipient_name}
// 		// 		</div>
// 		// 		<div className="product" id={recipient_lastname}>
// 		// 			{recipient_lastname}
// 		// 		</div>
// 		// 		<div className="product" id={country}>
// 		// 			{country}
// 		// 		</div>
// 		// 		<div className="product" id={city}>
// 		// 			{city}
// 		// 		</div>
// 		// 		<div className="product" id={address}>
// 		// 			{address}
// 		// 		</div>
// 		// 		<div className="product" id={postal_code}>
// 		// 			{postal_code}
// 		// 		</div>
// 		// 		<div className="product" id={phone_number}>
// 		// 			{phone_number}
// 		// 		</div>
// 		// 		<div className="product" id={shipping_type}>
// 		// 			{shipping_type}
// 		// 		</div> */}
				
// 				{/* <div calssName="formActionContainer">
// 					<button type="submit" className="editBtn" value="Edit" onClick={clickHandle}>
// 						<svg
// 							width="1em"
// 							height="1em"
// 							viewBox="0 0 16 16"
// 							class="bi bi-pencil-square"
// 							fill="currentColor"
// 							xmlns="http://www.w3.org/2000/svg"
// 						>
// 							<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
// 							<path
// 								fill-rule="evenodd"
// 								d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
// 							/>
// 						</svg>
// 					</button>
// 				</div> */}
			
// 			<form className="FormEnvio">
// 				<input
// 					className="product"
// 					type="text"
// 					name="recipient_name"
// 					value={inputValues.recipient_name}
// 					placeholder="Nombre"
// 					onChange={handleInputChange}
// 				/>
// 				<input
// 					className="product"
// 					type="text"
// 					name="recipient_lastname"
// 					value={inputValues.recipient_lastname}
// 					placeholder="Apellido"
// 					onChange={handleInputChange}
// 				/>
// 				<input
// 					className="product"
// 					type="text"
// 					name="country"
// 					value={inputValues.country}
// 					placeholder="Pais"
// 					onChange={handleInputChange}
// 				/>
// 				<input
// 					className="product"
// 					type="text"
// 					name="city"
// 					value={inputValues.city}
// 					placeholder="Ciudad"
// 					onChange={handleInputChange}
// 				/>
// 				<input
// 					className="product"
// 					type="text"
// 					name="address"
// 					value={inputValues.address}
// 					placeholder="Domicilio"
// 					onChange={handleInputChange}
// 				/>
// 				<input
// 					className="product"
// 					type="text"
// 					name="postal_code"
// 					value={inputValues.postal_code}
// 					placeholder="Código Postal"
// 					onChange={handleInputChange}
// 				/>
// 				<input
// 					className="product"
// 					type="text"
// 					name="phone_number"
// 					value={inputValues.phone_number}
// 					placeholder="Telefono"
// 					onChange={handleInputChange}
// 				/>
// 				<input
// 					className="product"
// 					type="text"
// 					name="shipping_type"
// 					placeholder="Tipo de Envio"
// 					value={inputValues.shipping_type}
// 					onChange={handleInputChange}
// 				/>
// 				<div className="formActionContainer">
// 					<button type="submit" className="editBtn" value="Edit" onClick={handleEdit}>
// 						Aceptar
// 					</button>
// 				</div>
// 			</form>
// 		</div>
// 	)
// }