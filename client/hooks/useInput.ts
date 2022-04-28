import React, {useState} from "react";

export const useInput = (initialValue = '') => {
    const [value, setValue] = useState<any>(initialValue)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange
    }
}