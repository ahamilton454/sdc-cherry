import React, { useState, useEffect } from 'react';
import SelectSize from './SelectSize.jsx';
import SelectQty from './SelectQty.jsx';

function CartActions(props) {

  // receives:
  // style={this.props.style}
  // selectedStyleId={this.props.selectedStyleId}
  // addToCart={this.props.addToCart}

  const [inventory, setInventory] = useState(null);
  const [orderSku, setOrderSku] = useState(null);
  const [orderQty, setOrderQty] = useState(null);

  const saveOrderSku = (sku => {
    setOrderSku(sku);
  });

  const saveOrderQty = (qty => {
    setOrderQty(qty);
  });

  useEffect(() => {
    setInventory(props.style.skus);
  }, [props.style]); // Only re-run the effect if props.style changes

  const addToBag = () => {
    const order = {
      sku_id: orderSku,
      count: orderQty
    }
    console.log(props.addToCart(order));
  }

  if (!props || !inventory) {
    return null;
  } else {
    return (
      <section className="o-cart-actions">
        <section className="o-cart-lists">
          <SelectSize inventory={inventory} saveSku={saveOrderSku} />
          <SelectQty inventory={inventory} saveQty={saveOrderQty} selectedSku={orderSku} />
        </section>
        <section className="o-cart-buttons">
          <button className="o-add-to-bag" onClick={addToBag}>Add to bag<span className="o-add-to-bag-icon">+</span></button>
          <button className="o-add-to-outfit">&#9734;</button>
        </section>
      </section>
    );
  }
}

export default CartActions;
