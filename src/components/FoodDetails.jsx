import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState({});
  const [msg, setMsg] = useState("")

  const api = import.meta.env.VITE_BASE_URL;

  const getFoodDetails = async () => {
    try {
      const url = api.slice(0, 40);
      const res = await axios.get(`${url}lookup.php?i=${id}`);
      if (res?.data?.meals != null) {
        setFood(res?.data?.meals[0]);
      } else {
        setFood(null)
        setMsg("Data not found...")
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (id !== "") getFoodDetails();
  }, []);


  if (food !== null) {
    return (
      <div className='mt-20 px-4 '>
        <div className='max-w-5xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row'>
          {/* Image */}
          <div className='w-full md:w-1/2 h-[400px]'>
            <img
              src={food.strMealThumb}
              alt={food.strMeal}
              className='w-full h-full object-cover'
            />
          </div>

          {/* Details */}
          <div className='w-full md:w-1/2 p-6 space-y-4'>
            <h2 className='text-2xl font-bold text-orange-600'>{food.strMeal}</h2>
            <p><span className='font-semibold'>Category:</span> {food.strCategory}</p>

            <span className='font-semibold'>Instructions:</span>
            <div className='max-h-[150px] overflow-y-auto text-sm text-gray-700'>
              <p>{food.strInstructions}</p>
            </div>

            {food.strYoutube && (
              <p>
                <span className='font-semibold'>YouTube:</span>{' '}
                <a
                  href={food.strYoutube}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 underline'
                >
                  Watch Tutorial
                </a>
              </p>
            )}

            {food.strSource && (
              <p>
                <span className='font-semibold'>Source:</span>{' '}
                <a
                  href={food.strSource}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 underline'
                >
                  View Source
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>
      {msg && <p className='text-red-500 text-2xl text-center'>{msg}</p>}
    </div>;
  }
};

export default FoodDetails;
