import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = key => {
    //grab state from local storage
    const [value, setValue] = useLocalStorage(key)

    // bool switch // on or off 
    const toggleMode = e => {
        e.preventDefault()
        setValue(!value)
    }

    var body = document.getElementsByTagName("BODY")[0]; 
    body.classList.toggle('dark-mode')

    return [value, toggleMode];
};
