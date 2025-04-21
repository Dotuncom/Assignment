import React from 'react'

const FoodCard = ({name,img,mealType}) => {
  return (
    <div  className="w-full">
        <div className='flex flex-col justify-center items-center w-full shadow-lg bg-white mt-4 rounded-xl p-4 transition-transform duration-300 md:hover:scale-105 '>
            <h1 className='text-base  sm:text-xl font-bold md:text-2xl'>{name} </h1>
            <img
                alt={img.alt}
                src={img.src}
                className='w-60  h-80 object-cover rounded-b-md'
            />
            <p> {mealType} </p>
        </div>
    </div>
  )
}

export default FoodCard