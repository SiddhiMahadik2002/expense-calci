import '../components/transaction.css'

export const TransactionList=()=>{
    return(
        <div className='transactionHistory'>
            <p>History</p>
            <div className='horizontal-line'></div>
            <ul className='history'>
                <li>
                    Cash <span>$400.00</span><button>x</button>
                </li>
            </ul>
        </div>
    )
}