import useStore from "./Store"

const Counter = () => {
  const {counter, inCrease, deCrease} = useStore()
  return (
   <>
   <div>
    <div><p>Count is: {counter}</p></div>
   </div>
   </>
  )
}

export default Counter