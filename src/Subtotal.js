import { SportsBasketball } from "@material-ui/icons";
import React from "react";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from './reducer'
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import {useHistory} from 'react-router-dom'


function Subtotal() {
  const history = useHistory()
    const[{basket}, dispatch] = useStateValue()

    function handleClick(e){
      history.push('/payment')
    }
  return (
    <div className="subtotal">
      {/* Code Snippet */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick = {handleClick}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
