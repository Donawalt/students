import React, { useState }  from 'react'

const Student = (props) => {
    const [check, setCheck] = useState(false);
    const [name, setName] = useState(props.name);

    return (
         <li style={ props.index%2 ? { backgroundColor:"pink"} : null}>
             { check ? <input type="text" value={name} onChange={e => setName(e.target.value)}/> : <span>{name}</span>}
             <input onChange={e => setCheck(e.target.checked)} type="checkbox" />
        </li>
    )
}
export default Student

export const StudentC = (props) => {
    const [check, setCheck] = useState(false);

    return (
         <li style={ props.index%2 ? { backgroundColor:"pink"} : null}>
             <span contentEditable =  { check ? true : false}>{props.name}</span>
              <input onChange={e => setCheck(e.target.checked)} type="checkbox" />
        </li>
    )
}
