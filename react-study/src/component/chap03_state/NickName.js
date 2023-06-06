import React, { useState } from 'react' // useState는 util과 같은 거임

const NickName = props => {
    // useState훅은 배열을 리턴하는데 0번에는 상태변수값, 1번에는 상태변수값을 변경하는 setter함수가 들어있음
    // const statement = useState('김철수'); // 초기값을 넣어 주는 것임
    const [nickName, setNickName] = useState('김철수');  // 디스트럭쳐링
    // console.log('statement:', statement);
    // const nickName = statement[0];
    // const setNickName = statement[1];

    // let nickName = '김철수';

    const changeNickName = e => {
        console.log('changeNickName!! call!');

        // nickName = '척척박사';
        setNickName('척척박사');
        console.log('nickName:' , nickName);
    };

    return (
        <>
            <h1>Hello~~ {nickName}</h1>
            <button className='btn' onClick={changeNickName}>척척박사</button>
            <button className='btn' onClick={() => setNickName('척척석사')}>척척석사</button>
        </>
    )
}

NickName.prototype = {}
export default NickName