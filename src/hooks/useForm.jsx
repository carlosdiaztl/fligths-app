import  { useState } from 'react'

const useForm = (initialState = {}) => {

    const [dataForm, setDataForm] = useState(initialState);

    const handleChangeInput = ({target}) => {
        setDataForm({
            ...dataForm,
            [target.name]: target.value
        })
    }


  return [dataForm, handleChangeInput,]
}

export default useForm