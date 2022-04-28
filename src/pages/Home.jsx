import React from 'react';
import {CartGreen, CartCyan, CartLime, CartTeal, CartYellow, CartOrange, CartPink, CartFuchsia, CartPurple, CartViolet, CartIndigo} from '../components/Cart';
function Home() {
  console.log('home')
  return (
    <div className="w-full h-auto p-4 pb-20 flex gap-4 flex-wrap">
        <CartGreen title="Today Sale" value='150000' icon={<i className="fa-solid fa-cart-shopping"></i>} />
        <CartTeal title="This Month Sale" value='150' icon={<i className="fa-solid fa-cart-shopping"></i>} />
        <CartCyan title="Last Month Sale" value='150' icon={<i className="fa-solid fa-cart-shopping"></i>} />
        <CartLime title="This Year Sale" value='150' icon={<i className="fa-solid fa-cart-shopping"></i>} />
        <CartYellow title="Today Profit" value='150' icon={<i className="fa-solid fa-sack-dollar"></i>} />
        <CartOrange title="This Month Profit" value='150' icon={<i className="fa-solid fa-sack-dollar"></i>} />
        <CartPink title="Last Month Profit" value='150' icon={<i className="fa-solid fa-sack-dollar"></i>} />
        <CartFuchsia title="This Year Profit" value='150' icon={<i className="fa-solid fa-sack-dollar"></i>} />
        <CartPurple title="Today Due" value='150' icon={<i className="fa-solid fa-hand-holding-dollar"></i>} />
        <CartViolet title="This Month Due" value='150' icon={<i className="fa-solid fa-hand-holding-dollar"></i>} />
        <CartIndigo title="Last Month Due" value='150' icon={<i className="fa-solid fa-hand-holding-dollar"></i>} />
        <CartOrange title="This Year Due" value='150' icon={<i className="fa-solid fa-hand-holding-dollar"></i>} />
        <CartGreen title="Today Expense" value='150' icon={<i className="fa-solid fa-building-columns"></i>} />
        <CartTeal title="This Month Expense" value='150' icon={<i className="fa-solid fa-building-columns"></i>} />
        <CartCyan title="Last Month Expense" value='150' icon={<i className="fa-solid fa-building-columns"></i>} />
        <CartLime title="This Year Expense" value='150' icon={<i className="fa-solid fa-building-columns"></i>} />

    </div>
  )
}

export default Home;