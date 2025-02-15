import {create} from 'zustand';

const initialState = {
    counter: 0
}

const useStore = create((set)=> ({
    ...initialState,
    inCrease: ()=> set((state)=> ({counter: state.counter + 1})),
    deCrease: ()=> set((state)=> ({counter: state.counter - 1})),
    addByten: (num)=> set((state)=> ({counter: state.counter + num})),
    remByten: (num)=> set((state)=> ({counter: state.counter - num})),
    reSet:    ()=> set(initialState)
}))


export default useStore;