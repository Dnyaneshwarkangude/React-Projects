import React, {useState} from 'react'
import BgChanger from './onePageProjects/bgChanger';
import Button from './Button'

function App() {   
  
  // let [color, setColor] = useState('white')
  // const changeColor = (e) =>{
  //   setColor(e)
  // }

  return (  
    // <h1>hello</h1>
    <BgChanger/>
    // <div className='h-screen w-full'
    // style={{backgroundColor:color}}>
    //   <div className='bg-gray-300 absolute rounded-full'>
    //     <Button button={'blue'} set={changeColor}/>
    //     <Button button={'red'} set={changeColor}/>
    //     <Button button={'green'} set={changeColor}/>
    //     <Button button={'yellow'} set={changeColor}/>
    //     <Button button={'orange'} set={changeColor}/>
    //     <Button button={'black'} set={changeColor}/>
    // </div>
    // </div>
    
  );
}

export default App;
