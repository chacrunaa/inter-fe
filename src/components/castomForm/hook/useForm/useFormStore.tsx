import { createContext } from "react";

const formContext = createContext({
    formName:'',
    setInitialState: ()=>{}
});


export const useFormStore = () => {
    return formContext
}