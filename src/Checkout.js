import React from 'react'
import { useStateValue } from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct"
import "./Checkout.css"
import Subtotal from "./Subtotal"

function Checkout() {
    const [{ basket }] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad "
                    src="https://cdn0.desidime.com/merchants/176/original/Amazon-Summer-Sale--4th-to-7th-May_Festival_Banner__Desidime.png?1556276004"
                    alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shooping Basket is Empty</h2>
                        <p>You have no items in your basket .to buy one or more items,click "Add to basket" next to the item.</p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your Shooping Basket</h2>
                            {basket.map((item) => {
                                return <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            })}

                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
