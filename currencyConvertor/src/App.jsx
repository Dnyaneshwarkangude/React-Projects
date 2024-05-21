import { useState } from 'react' 
import Input from './components/input'
import useCurrencyInfo from './hooks/useCurrencyInfo' 

function App() { 

  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (

      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage :`url('./src/assets/currency.jpg')`}}>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <div className='w-full'>
             <Input 
                label = "From"
                amount = {amount}
                currencyOptions = {options}
                onCurrencyChange = {(currency)=> setFrom(currency)}
                selectCurrency = {from}
                onAmountChange={(amount) => setAmount(amount)} 
             />
          </div>

          <div className='mt-5'>
            <Input 
              label = "To"
              amount = {convertedAmount}
              currencyOptions = {options}
              onCurrencyChange = {(currency)=> setTo(currency)}
              selectCurrency = {to}
              amountDisabled 
            />
          </div>

          <button 
                className='bg-blue-700 hover:bg-blue-600 text-white h-[60px] rounded-lg mt-4 w-full text-[20px]'
                type='button'
                onClick={convert}
          >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>

          <button 
              className='bg-blue-600 hover:bg-blue-500 text-white text-[20px] rounded-lg absolute top-[130px] end-[185px] h-[42px] w-[80px] border-2'
              onClick={swap}
          >swap</button>

        </div>
         
      </div> 
  )
}

export default App
