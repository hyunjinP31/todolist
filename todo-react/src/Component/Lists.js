import React from 'react';

const Lists = ({list, onDelete}) => {
    return (
            <ul>
                <li>
                    <input type="checkbox" />
                    <span>{list.listInput}</span>
                    <span onClick={()=>{
                        onDelete(list.id)
                    }}>X</span>
                </li>
            </ul>
    );
};

// 함수의 실행문이 한 줄일 땐 중괄호 쓰면 안 받아줌
const listPorps = ({lists, onDelete})=>{
    return (
        <div>
            { lists.map( list => (<Lists list={list} key={list.id} onDelete={onDelete} />)) }
        </div>
    )
}
export default listPorps;