import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +123 345 789 101</label>
            <i className='fa fa-envelope'></i>
            <label> support@example.com</label>
          </div>
          <div className='right row RText'>
            <label>FAQ"s</label>
            <label>Need Help?</label>
            <span>🏳️‍⚧️</span>
            <label>EN</label>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
