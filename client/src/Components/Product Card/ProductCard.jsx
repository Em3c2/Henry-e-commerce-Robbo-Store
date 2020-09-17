import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './ProductCard.css';
import {useSelector, useDispatch} from 'react-redux';
import {allActions} from '../../Redux/Actions/actions';
import axios from 'axios';
// =========== FIN DE IMPORTS ============

const urlBack = process.env.REACT_APP_API_URL;

export default function ProductCard({robot}) {
	// Redux
	const user = useSelector(state => state.user);
	const currentCart = useSelector(state => state.cart.currentCart);
	const dispatch = useDispatch();

	const {orderlines} = currentCart;

	// React hooks
	const currentRobot = orderlines && orderlines.find(item => item.productId === robot.id);

	const [carrito, setCarrito] = useState({quantity: currentRobot ? currentRobot.quantity : 0});
	const [loading, setLoading] = useState(false);

	useEffect(
		() => {
			setCarrito({...carrito, quantity: currentRobot ? currentRobot.quantity : 0});
		},
		[currentCart]
	);

	// ------------------- Funcionalidad ----------------

	const handleClickAdd = e => {
		e.preventDefault();
		e.persist();
		e.target.style.opacity = '0.1';

		if (robot.stock <= carrito.quantity || loading === true) return alert('Sin stock!');

		const productValues = {
			productId: robot.id,
			quantity: carrito.quantity + 1,
			price: (carrito.quantity + 1) * robot.price
		};

		setLoading(true);

		if (user.rol === 'Guest') {
			dispatch(
				allActions.cartActions.editGuestCart(
					productValues,
					orderlines,
					robot,
					productValues.quantity === 1 ? 'AddToProducts' : 'No changes'
				)
			);
			setLoading(false);
			e.target.style.opacity = '1';
			alert('Agregado');
		}
		else {
			axios
				.put(`${urlBack}/user/${user.id}/cart`, productValues)
				.then(() => {
					setLoading(false);
					e.target.style.opacity = '1';
					alert('Agregado');
					dispatch(allActions.cartActions.getUserCart(user.id));
				})
				.catch(error => {
					setLoading(false);
					alert(error.response.data);
					e.target.style.opacity = '1';
				});
		}
	};

	const handleClickRemove = e => {
		e.preventDefault();
		e.persist();
		e.target.style.opacity = '0.1';

		const changes = {
			productId: robot.id,
			quantity: carrito.quantity - 1,
			price: (carrito.quantity - 1) * robot.price
		};

		if (carrito.quantity > 0 && loading === false) {
			e.target.style.opacity = '0.1';
			setLoading(true);

			if (user.rol === 'Guest') {
				dispatch(
					allActions.cartActions.editGuestCart(
						changes,
						orderlines,
						robot,
						changes.quantity === 0 ? 'RemoveFromProducts' : 'No changes'
					)
				);
				setLoading(false);
				e.target.style.opacity = '1';
				alert('Quitado');
			}
			else {
				axios
					.put(`${urlBack}/user/${user.id}/cart`, changes)
					.then(() => {
						e.target.style.opacity = '1';
						setLoading(false);
						alert('Quitado');
						dispatch(allActions.cartActions.getUserCart(user.id));
					})
					.catch(error => {
						alert(error.response.data);
						setLoading(false);
						e.target.style.opacity = '1';
					});
			}
		}
	};

	return (
		<div className="cardContainer">
			<div className="imageContainer">
				<img className="image" src={robot.image} alt={robot.name} />
			</div>
			<div className="infoContainer">
				<Link to={`/producto/${robot.id}`}>
					<div className="title">
						<h3>{robot.name}</h3>
					</div>
				</Link>
				<div className="body">
					<div className="price">
						<b> Precio : </b> U$S {robot.price}
					</div>
					<div className="stock">
						<b> Stock : </b>
						{robot.stock <= 0 ? 'Out of stock!' : robot.stock}
					</div>
				</div>
			</div>
			<div className="control">
				<div className="carrito">
					En carrito: <br />
					<input type="text" className="cant" value={carrito.quantity} readOnly />
				</div>
				<div className="botones">
					<div className="butonContainer">
						<div className="boton add" onClick={handleClickAdd}>
							<div className="iconButtom">+</div>
						</div>
					</div>
					<div className="butonContainer">
						<div className="boton rest" onClick={handleClickRemove}>
							<div className="iconButtom">-</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
