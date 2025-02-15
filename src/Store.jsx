import {create} from 'zustand';

const useStore = create((set)=> ({
    counter: 0,
    inCrease: ()=> set((state)=> ({counter: state.counter + 1})),
    deCrease: ()=> set((state)=> ({counter: state.counter - 1}))
}))


export default useStore;