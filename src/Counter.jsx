import useStore from "./Store"

const Counter = () => {
  const {counter, inCrease, deCrease} = useStore()
  return (
   <>
   <div className="w-full h-auto flex flex-col  space-y-3 p-3 bg-gray-400">
    <div className="w-[150px] h-auto p-1 rounded-md bg-green-200 flex items-center justify-center"><p>Count is: {counter}</p></div>
    <div className="w-[100px] h-auto " >
    <button className="bg-purple-400 py-1 px-2 rounded-md text-zinc-800 hover:bg-blue-500 " onClick={inCrease}>Increase</button>
    <button className="bg-purple-400 py-1 px-2 rounded-md text-zinc-800 hover:bg-blue-500 mt-3" onClick={deCrease}>Decrease</button>
    </div>
     
   </div>
   </>
  )
}

export default Counter