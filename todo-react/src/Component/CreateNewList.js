import React from 'react';

const CreateNewList = ({listInput, onCreate, onChange}) => {
    return (
        <div>
            <h1>to do List</h1>
            <input type="text" name="listInput" placeholder='해야할 일을 작성하세요' onChange={onChange} value={listInput} />
            <button onClick={onCreate}>+</button>
        </div>
    );
};

export default CreateNewList;