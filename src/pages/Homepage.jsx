/* eslint-disable react/prop-types */
import SignIn from './SignIn'
import Products from '../Components/Products'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'


const Homepage = ({ addItem, setAddItem }) => {
    const isLoggedin = useSelector((state) => state.auth.isLoggedin)
    console.log(isLoggedin);

    return (
        <>
            {!isLoggedin && <SignIn />}
            {isLoggedin && <div>
                <Navbar addItem={addItem} setAddItem={setAddItem} />
                <Products addItem={addItem} setAddItem={setAddItem} />
            </div>}

        </>

    )
}

export default Homepage
