import {create } from 'zustand'
import axios from 'axios';
import {persist} from 'zustand/middleware'


const initialState = {
    count: 0,
    todos: [],
    cucomber: 0
}

const useStore = create(persist((set, get)=> ({
    ...initialState,
    increaseCounter: ()=> {
        const count = get().count + 1;
        set(()=> ({count}))
    },

    decreaseCounter: ()=> {
        const count = get().count - 1;
        set(()=> ({count}))
    },
    addCucomber: ()=> {
        const cucomber = get().cucomber + 1;
        set(()=> ({cucomber}))
    },

    

    // getTodos: async () => {
    //  const  {data} = await axios.get("https://jsonplaceholder.typicode.com/todos");
    //  set(()=> ({todos: data}));
    // }
})), {name: 'counter-app', getStorage: () => sessionStorage})

export default useStore;