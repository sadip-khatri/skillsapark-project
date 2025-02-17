import React from 'react'

const Navbar = () => {
  return (
    <header>
      <div class="nav-wrappers">
        <header>
            <nav>
                <div class="nav-logo">
                    <img src="./src/assets/nav-logo.png" alt="nav-logo"/>
                    {/* src\assets\nav-logo.png */}
                </div>
                <div class="nav-links">
                    <ul>
                        <li><a href="#" className='nav-li'>Home</a></li>
                        <li><a href="#" className='nav-li'>Home</a></li>
                        <li><a href="#" className='nav-li'>Home</a></li>
                        <li><a href="#" className='nav-li'>Home</a></li>
                        <li><a href="#" className='nav-li'>Home</a></li>
                    </ul>
                </div>
                <div class="social">
                    <div class="user">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div class="search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </nav>
        </header>
    </div>  
    </header>
  )
}

export default Navbar