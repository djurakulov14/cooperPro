import React from 'react'

function Header() {
  return (
    <header className=' w-4/5 flex justify-between absolute z-10 text-white '>
        <div className="left flex justify-between gap-20">
            <img src="/images/logo.png" alt="logo" className=' w-40 h-11'/>
            <nav className='magicGr flex justify-between gap-10 align-text-bottom'>
                <a href="#" className='magicGr text-white ' >Каталог</a>
                <a href="#" className='magicGr text-white ' >Новости</a>
                <a href="#" className='magicGr text-white ' >Доставка</a>
                <a href="#" className='magicGr text-white ' >О нас</a>
                <a href="#" className='magicGr text-white ' >Контакты</a>
            </nav>
        </div>
        <div className="right flex gap-5">
            <div className="others p-3 bg-white">
                <img src="/images/heart.svg" alt="heart" />
            </div>
            <div className="others p-3 bg-white">
                <img src="/images/user.svg" alt="user" />
            </div>
            <div className="others p-3 bg-white">
                <img src="/images/shopping-cart.svg" alt="shopping-cart" />
            </div>
        </div>
    </header>
  )
}

export default Header