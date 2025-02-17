import React from 'react'

const Message = () => {
  return (
    <>
    <div class="cards-one">
        <div class="left">
            <h2><span>Try my free</span><br/> Incoming training</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam aut repellat quis itaque placeat, inventore nesciunt facere nemo debitis id, dolorum, sapiente modi eius voluptas nihil quia harum! Non!</p>
            <li>list number one.</li>
            <li>list number one.</li>
            <li>list number one.</li>
            <li>list number one.</li>
        </div>
        <div class="mid">
            <div class="mid-content">
                <h2>Send a message</h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div class="mid-content-2">
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Phone"/>
                <input type="text" placeholder="Email"/>
                <button class="btn">SEND REQUEST</button>
            </div>
        </div>
        <div class="right">
            <img src="./src/assets/form_img.jpg" alt="image"/>
        </div>
    </div>
    </>
  )
}

export default Message