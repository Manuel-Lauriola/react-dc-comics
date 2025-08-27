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
      <div id="top-footer">
        <div className="container">
          <div className="row">
            <div className="col-50 d-flex">
              <div className="col-20">
                <ul>
                  <li className='bold'>DC COMICS</li>
                  <li>characters</li>
                  <li>comics</li>
                  <li>movies</li>
                  <li>tv</li>
                  <li>games</li>
                  <li>video</li>
                  <li>news</li>
                </ul>
                <ul>
                  <li className='bold'>SHOP</li>
                  <li>shop DC</li>
                  <li>shop DC collectibles</li>
                </ul>
              </div>
              <div className="col-20">
                <ul>
                  <li className='bold'>DC</li>
                  <li>terms of use</li>
                  <li>privacy policy (new)</li>
                  <li>ad choices</li>
                  <li>advertises</li>
                  <li>job</li>
                  <li>subscription</li>
                  <li>talent workshop</li>
                  <li>cpsc certificates</li>
                  <li>ratings</li>
                  <li>shop help</li>
                  <li>contact us</li>
                </ul>
              </div>
              <div className="col-20">
                <li className='bold'>SITES</li>
                <li>DC</li>
                <li>mad magazine</li>
                <li>DC kids</li>
                <li>DC universe</li>
                <li>DC power visa</li>
              </div>
            </div>
            <div className="col-50 logo-bg">
            </div>
          </div>
        </div>
      </div>
      <div id="bottom-footer"></div>
    </footer>
  )
}

export default Footer
