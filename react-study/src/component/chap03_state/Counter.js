import React, {useState, useEffect} from 'react'; // 지역 변수 쓰지 말고 무조건 useState

const Counter = () => {

    const [number, setNumber] = useState(0); // number, SetNumber 이렇게 관례적으로 지음
    const [nick, setNick] = useState('익명');

    const increase = () => { setNumber(number + 1); };
    const decrease = () => { setNumber(number - 1); };

    const changeNick = () => {setNick('김철수'); };

    /*
        useEffect :
        - 화면이 처음 렌더링 될 때 자동 호출되는 함수이다.
        - 상태값이 변경 될 때마다 다시 호출
    */

    useEffect(() => {
        // 화면이 처음 렌더링 될 때 서버 api 호출하는 경우
        // 처음 1회 호출 후에 또 할 필요가 있을까?
        // 만약에 첫 렌더링 시에만 useEffect를 호출하고 싶다면 두번째 파라미터로 빈 배열(의존성 배열)을 넣으면 된다.
        // 의존성 배열에 상태변수를 넣으면 해당 상태변수가 업데이트 될 때마다 useEffect가 재 호출 됨.

        console.log('3. useEffect Call!');
        console.log(`4. nick : ${nick}, number: ${number}`); // 백틱 사용
    }, [nick]); //처음에만 fetch 로 요청하고 나머지는 요청하지 않겠다. 그래서 컴퓨터의 부하를 줄일 수 있음

    console.log('1. component function execute!');
    // 실행 순서 알 것 ~!
    return (
        <>
             { console.log('2. rendered html!') }
            <h1>닉네임: {nick}</h1>
            <h2>{number}</h2>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <button onClick={changeNick}>닉네임 변경</button>
        </>
    )
}

export default Counter;