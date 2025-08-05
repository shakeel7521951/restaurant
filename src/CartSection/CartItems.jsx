import React, { useState } from 'react'
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";
export default function CartItems() {
    const table = [
        {
            img: '/blogImage/six.jpg', title: "Vegetarian Home-Dish", FinalPrice: 300, inc: <CiCirclePlus />, dec: <CiCircleMinus />, remove: "Remove item"
        },
        {
            img: '/blogImage/six.jpg', title: "Vegetarian Home-Dish", FinalPrice: 300, inc: <CiCirclePlus />, dec: <CiCircleMinus />, remove: "Remove item"
        },
        {
            img: '/blogImage/six.jpg', title: "Vegetarian Home-Dish", FinalPrice: 300, inc: <CiCirclePlus />, dec: <CiCircleMinus />, remove: "Remove item"
        },
        {
            img: '/blogImage/six.jpg', title: "Vegetarian Home-Dish", FinalPrice: 300, inc: <CiCirclePlus />, dec: <CiCircleMinus />, remove: "Remove item"
        },
    ]
    const [value, Setvalue] = useState(1)
    const [price, IncPrice] = useState(table[0].FinalPrice)
    const dec = () => {
        if (value <= 1) {
            alert('Minimum quantity is 1')
        } else {
            Setvalue(value - 1)
            IncPrice(table[0].FinalPrice * (value - 1))
        }
    }
    const inc = () => {
        Setvalue(value + 1)
        IncPrice(table[0].FinalPrice * (value + 1))
    }
    const [hide, Sethide] = useState(false)

    const showCoupon = () => {
        Sethide(!hide)
    }
    return (
        <div className=' w-full sm:w-11/12 mx-auto py-5'>
            <div className=' flex flex-wrap justify-between'>
                <div className='sm:w-[70%] w-full'>
                    <div className='hidden sm:flex justify-between items-center p-3 bg-black text-white'>
                        <h1 className=' font-bold'>PRODUCT</h1>
                        <h1 className=' font-bold'>DETAILS</h1>
                        <h1 className=' font-bold'>TOTAL</h1>
                    </div>
                    <div className='grid grid-cols-1 w-full mb-2'>
                        {
                            table.map((data, index) => (
                                <div key={index} className=' w-full mb-4 mt-4 flex sm:flex-row flex-col  justify-around flex-wrap gap-4 items-center'>
                                    <img className=' h-20 w-20 rounded-md' src={data.img} alt={data.title} />
                                    <h1 className='text-md sm:text-lg'>{data.title}</h1>
                                    <h1 className='text-md sm:text-lg'>${data.FinalPrice}</h1>
                                    <div className=' flex gap-4 items-center'>
                                        <button onClick={dec} className=' font-bold  sm:text-xl'>{data.dec}</button>
                                        <span className=' font-bold  sm:text-xl'>{value}</span>
                                        <button onClick={inc} className=' font-bold  sm:text-xl'>{data.inc}</button>
                                    </div>
                                    <span className=' text-md sm:text-lg underline'>{data.remove}</span>
                                    <span className=' text-md sm:text-lg'>${price}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='w-full sm:w-[27%] p-3 sm:sticky sm:top-4 h-fit '>
                    <h1 className='font-bold text-lg sm:text-xl'>CART TOTALS</h1>
                    <div className='mt-2 relative sm:mt-4 mb-2 '>
                        <div className='flex justify-between items-center cursor-pointer' onClick={(showCoupon)}>
                            <span className=' sm:texl-lg'>Add coupons</span>
                            <RxCaretDown className=' sm:text-xl' />
                        </div>
                        <div className={`${hide ? 'flex' : 'hidden'} `}>
                            <div className='flex justify-between py-3'>
                                <input type="number" name="" id="" className='px-2 sm:w-[70%] border-1 outline-lime-950 border-red-500' placeholder='Enter code' />
                                <button className=' px-4 py-2 bg-red-700 rounded-md shadow-md shadow-gray-400'>Apply</button>
                            </div>
                        </div>
                        <div className='flex py-4 font-bold justify-between items-center'>
                            <span className=' sm:texl-lg'>Free shipping</span>
                            <span>FREE</span>
                        </div>
                        <div className='flex py-4 mb-2 font-bold justify-between items-center'>
                            <span className=' sm:texl-lg'>Estimated total</span>
                            <span>${price}</span>
                        </div>
                        <div className=' w-full py-4 bg-red-600 hover:bg-transparent hover:text-black transition-all ease-in-out delay-100 hover:border border-1 border-red-600 flex justify-center items-center font-bold text-white cursor-pointer'>
                            <span>Proceed to Checkout</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
