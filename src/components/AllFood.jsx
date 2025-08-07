import React, { useEffect, useState } from 'react'
import axios, { all } from 'axios'
import allCategories from '../data/data';
import { useNavigate } from 'react-router';

const AllFood = () => {
    const [allfoods, setAllfoods] = useState([]);
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const api = import.meta.env.VITE_BASE_URL;


    const getAllFood = async (s) => {
        try {

            if (!s) {
                const response = await axios.get(api);
                setAllfoods(response?.data?.categories)
            } else {
                const url = api.slice(0, 40);
                const res = await axios.get(`${url}search.php?s=${search}`);
                // const data=await res.json();
                setAllfoods(res?.data?.meals)
            }
        } catch (error) {
            console.log("error", error)
        }
    }
    console.log(allfoods)

    const handleSearch = () => {
        getAllFood(search)
        setSearch("")
    }

    useEffect(() => {
        getAllFood()
    }, [])
    return (
        <div className='max-w-7xl mx-auto shadow-2xl mb-10 p-5'>
            <div className='flex justify-center'>
                <div className='w-[60%]  flex justify-between gap-1 mt-10'>
                    <input
                        type="text"
                        value={search}
                        placeholder='search the item ...'
                        className='p-2 w-full rounded-xl outline-none border-2 border-gray-500 border-solid'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        className='p-3 bg-orange-600 rounded-xl cursor-pointer'
                        onClick={handleSearch}
                    >Search</button>
                </div>
            </div>

            <div className='flex flex-wrap  justify-center gap-15 mt-20 text-center'>
                {allfoods && allfoods?.slice().reverse().map((ele, i) => (
                    <div
                        className='p-4 h-[400px] w-[300px] shadow-2xl border border-gray-200 rounded-xl overflow-hidden flex flex-col hover:scale-105 transition-all duration-700'
                        key={i}
                        onClick={() => navigate(`/fooddetail/${ele.idMeal || ele.idCategory}`)}
                    >
                        <img src={ele.strCategoryThumb || ele.strMealThumb} alt={ele.strCategory} className=' w-[280px] h-[180px] object-cover rounded-[50%] mx-auto mb-4' />
                        <p className='font-semibold'>Catagory : <b></b>{ele.strCategory}</p>
                        <p className='text-sm text-gray-700 mt-2 line-clamp-5 font-semibold'>description : <b className='text-sm mt-2 line-clamp-5'></b>{ele.strCategoryDescription || ele.strInstructions}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AllFood
