import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import Swal from "sweetalert2";

const BASE_URL = "http://localhost:5050/api/colorshop"

const datacontext = createContext(null)

const DataContextProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [oneData, setOneData] = useState([])
    const getAllData = async () => {
        await axios.get(BASE_URL).then((res) => {
            setData(res.data.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    const getOneData = async (id) => {
        await axios.get(BASE_URL + `/${id}`).then((res) => {
            setOneData(res.data.data)
        })
    }

    const deleteData = async (id) => {
        await axios.delete(BASE_URL + `/${id}`).then((res) => {
            const deletedData = data.filter((x) => x._id !== id)
            setData(deletedData)
        })
    }
    const postData = async (payload) => {
        await axios.post(BASE_URL, payload).then((res) => {
            setData([...data, payload])
        })
    }

    useEffect(() => {
        getAllData()
    }, [])

    // Basket 

    const [basket, setBasket] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])

    const addToCart = (product) => {
        const findProduct = basket.find((x) => x._id == product._id)
        if (findProduct) {
            findProduct.count += 1
            findProduct.totaPrice = findProduct.count * product.price
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Basket Item Count ++",
                showConfirmButton: false,
                timer: 1500
            });
            localStorage.setItem("basket", JSON.stringify([...basket]))
        }
        else {
const newProduct = {
    _id:product.id,
    count:1,
    totaPrice:product.price,
    products:product
}
setBasket([...basket , newProduct])
Swal.fire({
    position: "top-end",
    icon: "success",
    title: "This Item Added Basket",
    showConfirmButton: false,
    timer: 1500
});

localStorage.setItem("basket", JSON.stringify([...basket, newItem]))
        }
    }

    const deleteCart = (product) => {
        const findProduct = basket.find((x) => x._id == product._id)
        basket.splice(basket.indexOf(findProduct) , 1)
        setBasket([...basket])
        localStorage.setItem("basket", JSON.stringify([...basket]))
    }
    const increase = (product) => {
        const findProduct = basket.find((x) => x._id == product._id)
       findProduct.count += 1
       item.totalPrice = item.count * item.product.price
        setBasket([...basket])
        localStorage.setItem("basket", JSON.stringify([...basket]))
    }
    const decrease = (product) => {
        const findProduct = basket.find((x) => x._id == product._id)
        if (!findProduct.count == 0) {
            findProduct.count -= 1
            findProduct.totalPrice = findProduct.count * findProduct.product.price
                localStorage.setItem("basket" , JSON.stringify([...basket]))
                setBasket([...basket])
        }
        if (findProduct.count == 0 ) {  
            deleteBasket(product)
        }
    }


    // Wishlist
    


    const value = {data,oneData, getOneData,deleteData,postData,addToCart,deleteCart,increase,decrease}
    return (
        <datacontext.Provider value={{ value }}>
            {children}
        </datacontext.Provider>
    )
}

export { DataContextProvider, datacontext }