import { useState, FC } from "react"

interface IProps{
    setCategories?: React.Dispatch<React.SetStateAction<string[]>>
    onNewCategory: (category: string) => void
}

export const AddCategory:FC<IProps> = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState<string>('')

    const onInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(target.value)
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        // setCategories( (categories) => [inputValue, ...categories] )
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type="text"
                placeholder="Find Gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
