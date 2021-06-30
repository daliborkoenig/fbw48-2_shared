import React from 'react';

function CreditCard(props) {
  return <div className="CreditCard">
    <div class="backgound">
      <div class="left"></div>
      <div class="right">
        <div class="strip-bottom"></div>
        <div class="strip-top"></div>
      </div>
    </div>
    <div class="center">
      <div class="card">
        <div class="flip">
          <div class="front">
            <div class="strip-bottom"></div>
            <div class="strip-top"></div>
            <svg className="logo" width="40" height="40" viewBox="0 0 61.475 69.385">
              <path d="M 33.3 57.9 L 10.8 34 L 10.8 61.3 A 70 70 0 0 1 10.369 61.406 Q 9.773 61.551 8.969 61.738 A 223.383 223.383 0 0 1 8.7 61.8 Q 7.4 62.1 5.8 62.1 Q 2.7 62.1 1.35 60.95 Q 0.316 60.069 0.074 58.279 A 8.817 8.817 0 0 1 0 57.1 L 0 0.7 Q 0.613 0.547 1.547 0.365 A 63.981 63.981 0 0 1 2.15 0.25 A 15.184 15.184 0 0 1 4.351 0.012 A 17.426 17.426 0 0 1 5 0 Q 7.9 0 9.35 1.1 A 3.252 3.252 0 0 1 10.391 2.505 Q 10.621 3.072 10.722 3.79 A 8.737 8.737 0 0 1 10.8 5 L 10.8 27.6 L 36.5 0.2 A 15.214 15.214 0 0 1 38.471 0.371 Q 40.778 0.736 42 1.85 A 5.532 5.532 0 0 1 43.116 3.228 A 4.57 4.57 0 0 1 43.7 5.5 Q 43.7 7.2 42.8 8.65 A 13.069 13.069 0 0 1 42.013 9.773 Q 41.544 10.376 40.953 11.017 A 26.621 26.621 0 0 1 40.2 11.8 L 21.2 30.6 A 2301.963 2301.963 0 0 1 28.07 37.664 Q 31.193 40.89 33.952 43.769 A 1277.266 1277.266 0 0 1 35.75 45.65 Q 42 52.2 46.5 56.3 A 8.327 8.327 0 0 1 46.169 58.151 Q 45.707 59.657 44.65 60.65 Q 43 62.2 40.7 62.2 Q 38.3 62.2 36.65 60.9 A 35.401 35.401 0 0 1 34.568 59.119 A 43.341 43.341 0 0 1 33.3 57.9 Z" fill="white"></path>
            </svg>
            <div class="chip">
              <div class="chip-line"></div>
              <div class="chip-line"></div>
              <div class="chip-line"></div>
              <div class="chip-line"></div>
              <div class="chip-main"></div>
            </div><svg class="wave" viewBox="0 3.71 26.959 38.787" width="26.959" height="38.787" fill="white">
              <path d="M19.709 3.719c.266.043.5.187.656.406 4.125 5.207 6.594 11.781 6.594 18.938 0 7.156-2.469 13.73-6.594 18.937-.195.336-.57.531-.957.492a.9946.9946 0 0 1-.851-.66c-.129-.367-.035-.777.246-1.051 3.855-4.867 6.156-11.023 6.156-17.718 0-6.696-2.301-12.852-6.156-17.719-.262-.317-.301-.762-.102-1.121.204-.36.602-.559 1.008-.504z"></path>
              <path d="M13.74 7.563c.231.039.442.164.594.343 3.508 4.059 5.625 9.371 5.625 15.157 0 5.785-2.113 11.097-5.625 15.156-.363.422-1 .472-1.422.109-.422-.363-.472-1-.109-1.422 3.211-3.711 5.156-8.551 5.156-13.843 0-5.293-1.949-10.133-5.156-13.844-.27-.309-.324-.75-.141-1.114.188-.367.578-.582.985-.542h.093z"></path>
              <path d="M7.584 11.438c.227.031.438.144.594.312 2.953 2.863 4.781 6.875 4.781 11.313 0 4.433-1.828 8.449-4.781 11.312-.398.387-1.035.383-1.422-.016-.387-.398-.383-1.035.016-1.421 2.582-2.504 4.187-5.993 4.187-9.875 0-3.883-1.605-7.372-4.187-9.875-.321-.282-.426-.739-.266-1.133.164-.395.559-.641.984-.617h.094zM1.178 15.531c.121.02.238.063.344.125 2.633 1.414 4.437 4.215 4.437 7.407 0 3.195-1.797 5.996-4.437 7.406-.492.258-1.102.07-1.36-.422-.257-.492-.07-1.102.422-1.359 2.012-1.075 3.375-3.176 3.375-5.625 0-2.446-1.371-4.551-3.375-5.625-.441-.204-.676-.692-.551-1.165.122-.468.567-.785 1.051-.742h.094z"></path>
            </svg>
            <div class="card-number">
              <div class="section">{props.ccNum}</div>
            </div>
            <div class="end"><span class="end-text">exp. end:</span><span class="end-date"> {props.ccExp}</span></div>
            <div class="card-holder">{props.sex} {props.firstName} {props.lastName}</div>
            <div class="master">
              <div class="circle master-red"></div>
              <div class="circle master-yellow"></div>
            </div>
          </div>
          <div class="back">
            <div class="strip-black"></div>
            <div class="ccv"><label>ccv</label>
              <div><span className="signature">{props.firstName} {props.lastName}</span>  {props.ccv}</div>
            </div>
            <div class="terms">
              <p>This card is property of {props.bankName}, {props.bankLoc}. Misuse is criminal offence. If found, please return to Monzo Bank or to the nearest bank with MasterCard logo.</p>
              <p>Use of this card is subject to the credit card agreement.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CLOSING TAG */}
  </div>
}



export default CreditCard