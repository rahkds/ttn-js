import React, {FC, useState} from 'react';

interface addUserProps {
    addUserFn: () => void,
    onChangeInput : Function,
    inputValue : string
}


const AddUser : FC<addUserProps> = ({addUserFn, onChangeInput, inputValue}) :  React.JSX.Element => {
    return (
        <>
            <div className='user-input'>
            <input placeholder='enter username' onChange={(e) => {onChangeInput(e)}} value={inputValue}/>
            <button onClick={addUserFn}>Add</button>
            </div>
        </>
    )

}

export default AddUser;
