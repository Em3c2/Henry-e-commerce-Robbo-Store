import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {allActions} from '../../Redux/Actions/actions.js'
import {Link} from 'react-router-dom';
import './Carrito.css';
import ProductCard from '../Product Card/ProductCard.jsx';
import FormularioDatosEnvio from './formularioDatosEnvio/FormularioDatosEnvio.jsx'

export default function Carrito() {
    const productsInCart = useSelector(state => state.cart.currentCart.products);
    const cartId = useSelector(state => state.cart.currentCart.id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allActions.cartActions.getUserCart())
    }, [cartId])
    

    return(
        <div>
            <div  className="containerCarrito">
                <div className="header">
                    <h1>Carrito de compras</h1>
                </div>
                <ul className="list">
    				{productsInCart &&
    					productsInCart.map(bot => (
    						<li className="listItem" key={bot.id}>
    							<ProductCard robot={bot} />
    						</li>
    					))}
    			</ul>
                
            <div className="containerComprar">
                    <h3>Envio:</h3> 
                    <h1>Total:</h1>
                            </div>
                <button className="btnComprar">Comprar</button>
            </div>

            <div>
                <FormularioDatosEnvio />
            </div>
        </div>
    )
}