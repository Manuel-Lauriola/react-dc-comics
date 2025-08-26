import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div id='market' className="col-100">
        <div className="buy">
          <img src="./img/buy-comics-digital-comics.png" alt="digital comics" />
          <span>DIGITAL COMICS</span>
        </div>
        <div className="buy">
          <img src="./img/buy-comics-merchandise.png" alt="merchandise" />
          <span>merchandise</span>
        </div>
        <div className="buy">
          <img src="./img/buy-comics-shop-locator.png" alt="locator" />
          <span>comic shop locator</span>
        </div>
        <div className="buy">
          <img src="./img/buy-comics-subscriptions.png" alt="subscriptions" />
          <span>subscription</span>
        </div>
        <div className="buy">
          <img src="./img/buy-dc-power-visa.svg" alt="visa" />
          <span>dc power visa</span>
        </div>
      </div>
      <div id="top-footer"></div>
      <div id="bottom-footer"></div>
    </footer>
  )
}

export default Footer
