
import React, { useState } from 'react'

function ProductCard({item}) {

    const [like, setLike] = useState(false)

  return (
    <div className=''>
        <div className={item.img === 'first' ? 'firstProd' : 'secondProd'}>
            <div></div>
            <div className="like bg-white p-[10px] w-[50px] h-[50px] cursor-pointer" onClick={() => setLike(!like)}>
                <img src={like ? '/images/heartFilled.svg' : '/images/heart.svg'} alt="like" />
            </div>
        </div>
        <div className="bot flex justify-between items-center">
            <h2 className=' w-[250px] text-left text-xl'>
                {item.title}
            </h2>
            <span className=' text-3xl font-bold'>
                {item.price} грн
            </span>
        </div>
    </div>
  )
}

export default ProductCard