import { useEffect, useState } from 'react'

const TextInput = ({ model, id, description, validation }) => {


    const [value, setValue] = useState((model && id)?model[id]:"")
    useEffect(() => {
        if (model && id)
            setValue(model[id]);
    }, [model, id]);

    const handleChange = (e) => {
        setValue(e.target.value);
        model[id] = e.target.value;
    }

    if (!model || model[id] === null) {
        return (<>
            <label htmlFor={id}><b>{description}:</b></label>
            <input className="form-control" type="text" value={value}/>
        </>)
    }

    return (<>
        <label htmlFor={id}><b>{description}:</b></label>
        <input className="form-control"  {...validation} id={id} value={value} type="text" onChange={handleChange} />
    </>)
}

export default TextInput;