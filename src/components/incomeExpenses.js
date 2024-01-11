
import '../components/incomeExpenses.css'

export const IncomeExpenses = ()=>{
    return(
        <div className='incomeExpenses'>
            <div className='income'>
                <p>INCOME</p>
                <p className="money plus">+$00.00</p>
            </div>
            <div className='expenses'>
                <p>EXPENSES</p>
                <p className="money minus">-$00.00</p>
            </div>
        </div>
    )
}