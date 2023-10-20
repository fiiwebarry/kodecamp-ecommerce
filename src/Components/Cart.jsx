/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types, no-unused-vars
const Cart = ({ addItem, setAddItem }) => {


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
        <div className="bg-[url('./assets/cart.jpg')] bg-no-repeat bg-contain h-[595px]  w-[900px]">

            {addItem.length < 1 ? (<div><h1>Cart is Empty</h1></div>) : (<div>
                {addItem.map((prod) => {

                    const { id, description, quantity } = prod;
                    return (
                        <div key={id}>
                            <p>{description}</p>


                            <button onClick={() => incrementHandler(id)}>+</button>
                            <span>{quantity}</span>
                            <button onClick={() => decrementHandler(id)}>-</button>

                            <button onClick={() => removeBtn(id)}>Remove</button>
                        </div>
                    )



                })}
            </div>)}





        </div>
    )
}
export default Cart;