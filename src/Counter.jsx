import React,{useEffect} from 'react'
import useStore from './Store'

const Counter = () => {
    const {count, increaseCounter, decreaseCounter, todos, getTodos, cucomber, addCucomber} = useStore()

    // useEffect(()=> {
    //     getTodos();
    // }, []);
  return (
   <>
   <div className="w-full h-auto  ">
    <div className="bg-green-200 h-auto flex flex-col gap-2 items-center justify-center py-8">
    <p>Count is: {count}</p>
    <button onClick={increaseCounter} className="mt-2 p-2 rounded-md bg-green-300 text-white">Increase + 1</button>
    <button onClick={decreaseCounter} className="mt-2 p-2 rounded-md bg-green-300 text-white"> Increase - 1</button>
    </div>
    

    <div>
     <p>Cucomber: {cucomber}</p>
     <button onClick={addCucomber}>ADD</button>
    </div>

   </div>
   </>
  )
}

export default Counter