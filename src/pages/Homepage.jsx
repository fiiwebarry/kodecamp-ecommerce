/* eslint-disable react/prop-types */

import Products from '../Components/Products'
import Navbar from '../Components/Navbar'


const Homepage = ({ addItem, setAddItem }) => {
    return (
        <div>
            <Navbar addItem={addItem} setAddItem={setAddItem} />
            <Products addItem={addItem} setAddItem={setAddItem} />
        </div>
    )
}

export default Homepage
