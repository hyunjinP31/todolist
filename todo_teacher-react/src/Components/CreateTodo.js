import React from 'react';

const CreateTodo = ({text, onChange, onCreate}) => {
    return (
        <div className='header'>
            <h2>to do List</h2>
            <div>
                <input type="text" name="newList" value={text} onChange={onChange}  onKeyPress={(e)=>e.key === 'Enter' ? onCreate() : ""} />
                <button onClick={onCreate} >+</button>
            </div>
        </div>
    );
};

export default CreateTodo;