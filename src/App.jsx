import { useContext, useState } from 'react'
import './App.css'
import { CountContext } from './Context';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from './store/atoms/count';

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </div>
  )
}

function Count({setCount}){
  return <div>
    <CountRenderer/>
    <Buttons/>
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}


function Buttons(){
  const [count,setCount] = useRecoilState(countAtom);

  return <div>
    <button onClick={()=>{
      setCount(count+1);
    }}> Increase </button>
    
    <button onClick={()=>{
      setCount(count-1);
    }}> Decrease </button>
  </div>
}

export default App
