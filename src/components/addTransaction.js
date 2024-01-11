import { useState } from 'react'
import '../components/addTransaction.css'
export const AddTransaction = () => {
   
    const[text,setText]=useState('')
    const[amount,setAmount]=useState('')

    console.log(text)

    return (
        <div className='addTransaction'>

            <p>Add new transaction</p>
            <div className='horizontal-line'></div>
            <form action="">
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <br />
                    <input value={text} onChange={(e)=>{setText(e.target.value)}} type="text" placeholder="Enter text" />
                    
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount
                        <br />
                        (negative-expense ,positive-income)
                  <br />
                    </label>
                    <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter amount.." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}