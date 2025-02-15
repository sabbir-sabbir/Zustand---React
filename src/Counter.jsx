import useStore from "./Store";

const Counter = () => {
  const { counter, inCrease, deCrease, addByten, remByten, reSet  } = useStore();
  return (
    <>
      <div className="w-full h-auto bg-gray-500 p-6 ">
        <div>
          <img className="my-svg" src="/load.svg" alt="" />
        </div>
        <div className="bg-red-200 w-[300px] h-auto flex justify-center items-center p-2 text-2xl text-zinc-700">
          <p>Count is: {counter}</p>
        </div>
        <div className="w-[250px] h-auto p-2 flex flex-col justify-start items-start gap-2 ">
          <button className="extra-button" onClick={inCrease}>INCREASE</button>
          <button className="extra-button" onClick={deCrease}>DECREASE</button>
          <button className="extra-button" onClick={()=> addByten(10)}>PLUSE 10</button>
          <button className="extra-button" onClick={()=> remByten(10)}>MINUS 10</button>
          <button className="extra-button" onClick={reSet}>RESET 0</button>
        
        </div>
      </div>
    </>
  );
};

export default Counter;
