/* eslint-disable react/prop-types */
import cart from "/src/assets/Images/cart-image.jpg";
import { AiFillCloseSquare } from "react-icons/ai";


// eslint-disable-next-line react/prop-types, no-unused-vars

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


    let grandTotal = 0;


    return (
        <div className="sm:w-[190%]">
            <div className="absolute top-20  bg-white right-0 h-screen sm:w-[190%] md:w-1/3 z-50  rounded border shadow-lg P-3">
                <div className="flex justify-end p-4">
                    <AiFillCloseSquare onClick={() => setIsOpen(false)} className="text-[30px] " />
                </div>

                {addItem.length < 1 ? (<div className=""> <h1 className="flex justify-center text-[40px] text-[orange]">Cart is Empty</h1><img src={cart} />
                </div>) : (<div className="rounded border bg-white shadow-lg p-7">
                    {addItem.map((prod) => {

                        const { id, image, title, quantity, price } = prod;
                        const totalAmount = Math.round(quantity * price);

                        grandTotal += totalAmount;
                        return (
                            <div key={id} className="grid grid-cols-3 mb-7 gap-2">

                                <img className="w-[170px]" src={image} />
                                <div>
                                    <p className="mt-8 ">{title.slice(0, 178)}</p>
                                    <p>Price: ${Math.round(price)}</p>
                                </div>



                                <div className="mt-7 ">
                                    <button className="rounded bg-[blue] w-[40px] text-[#ffff] mr-1" onClick={() => incrementHandler(id)}>+</button>
                                    <span className="text-[20px] mr-1">{quantity}</span>
                                    <button className="rounded bg-[blue] w-[40px] text-[#ffff]" onClick={() => decrementHandler(id)}>-</button>
                                    <div className="flex ">
                                        <button className="mt-5 rounded bg-[brown] w-[399px] h-8 text-[#ffff]" onClick={() => removeBtn(id)}>Remove</button>
                                    </div>


                                </div>

                                <h2>Item Amount :${totalAmount} </h2>


                            </div>

                        )



                    })}
                </div>)}
                <hr className="bg-[brown]" />
                <h1 className="text-[brown] text-[30px] p-4"> Grand Total : ${grandTotal}</h1>
                <hr className="bg-[brown]" />
            </div>





        </div>
    )
}
export default Cart;