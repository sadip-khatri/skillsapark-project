import React from 'react'
const footer = () => {
  return (
    <>
    <div className="copyright">
      <div className="first">
          <p>Subscribe to Our News</p>
          <h1>Stay in Touch</h1>
      </div>
      <div className="second">
            <div className="buttons">
            <input type="text" placeholder='Your Email'/>
            <button>SUBSCRIBE NOW</button>
            </div>
            
      </div>
      <div className="third">
          
      </div>
    </div><hr />
    <div className="copyright2">
      <div className="first">
        <div className="image">
             <img src="./src/assets/footer-logo.png" alt="" />   
        </div>
       <div className="paragraph">
           <p>Whether you’re curling up with a good book or hosting <br /> a festive holiday gathering, a fireplace makes every <br /> moment feel special and warm.</p>
       </div>
      </div>
      <div className="second">
        <h3>Explore</h3>
        <div className="list-topics">
               <div className="list1">
               <li><a href="#">Articels</a></li>
              <li><a href="#">Articels</a></li>
              <li><a href="#">Articels</a></li>
              <li><a href="#">Articels</a></li>
               </div>

               <div className="list2">
               <li><a href="#">Articels</a></li>
              <li><a href="#">Articels</a></li>
              <li><a href="#">Articels</a></li>
              <li><a href="#">Articels</a></li>
               </div>
        </div>
      </div>
      <div className="third"> 
        <div className="address">
          <h3>Address:</h3>
          <p>13 Division st, New York, 16004</p>
        </div>
        <div className="phone">
          <h3>Phone:</h3>
          <p>0-900-856-05-39</p>
        </div>
        <div className="working-hour">
          <h3>Working Hours:</h3>
          <p>Mon-Fri: 8am – 4pm</p>
        </div>
      </div>
    </div><hr />
    <div className="copyright3">
      <p><span>Like-themes</span>© All Rights Reserved - 2024 -<span>Purchase</span></p>
    </div>
    </>
  )
}

export default footer