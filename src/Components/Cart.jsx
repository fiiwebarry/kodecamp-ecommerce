/* eslint-disable react/prop-types */
import cart from "/src/assets/Images/cart-image.jpg";


// eslint-disable-next-line react/prop-types, no-unused-vars
import { AiFillCloseSquare } from "react-icons/Ai"
const Cart = ({ addItem, setAddItem, setIsOpen }) => {


    const incrementHandler = (id) => {

        let newItems = addItem.map((item) => {
            if (item.id === id) {
                return (
                    { ...item, quantity: item.quantity + 1 }
                )

            }
            else {
                return item;
            }
        })
        setAddItem(newItems)

    }

    const decrementHandler = (id) => {
        let newItems = addItem.map((item) => {
            if (item.id === id) {
                return (
                    { ...item, quantity: item.quantity >= 1 ? item.quantity - 1 : item.quantity }
                )

            }
            else {
                return item;
            }
        })
        setAddItem(newItems)

    }
    const removeBtn = (id) => {
        setAddItem(addItem.filter((item) => (item.id !== id)))
    }





    return (
        <div className="">
            <div className="absolute top-20  bg-white right-0 h-screen w-1/3 z-50  rounded border shadow-lg P-3">
                <div className="flex justify-end p-4">
                    <AiFillCloseSquare onClick={() => setIsOpen(false)} className="text-[30px] " />
                </div>

                {addItem.length < 1 ? (<div className=""> <h1 className="flex justify-center text-[40px] text-[orange]">Cart is Empty</h1><img src={cart} />
                </div>) : (<div className="rounded border bg-white shadow-lg p-7">
                    {addItem.map((prod) => {

                        const { id, image, title, quantity } = prod;
                        return (
                            <div key={id} className="grid grid-cols-3 mb-7">

                                <img className="w-[70px]" src={image} />
                                <p className="mr-7">{title}</p>





                                <div>
                                    <button className="rounded bg-[blue]" onClick={() => incrementHandler(id)}>+</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => decrementHandler(id)}>-</button>
                                    <div>
                                        <button onClick={() => removeBtn(id)}>Remove</button>
                                    </div>
                                </div>



                            </div>
                        )



                    })}
                </div>)}


            </div>





        </div>
    )
}
export default Cart;