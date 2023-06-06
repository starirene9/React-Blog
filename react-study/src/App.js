import './App.css'
import {useState} from "react";
/*eslint-disable*/

// warning message off 기능임

function App() {

    let workOut = '비트나 센터';
    // 중괄호 {변수명} 입력하면 값 전달됨
    // class 대신 className
    // 인라인 스타일 style={{객체 스타일로 쓸 것}}

    let [글기본값, 글기본값변경] = useState(['운동하세요', '닭찌찌먹었나요?', '명상하셨나요', '폴가셨나유~?']);
    let [좋아요, 좋아요증가] = useState([0, 0, 0, 0]);
    // state는 언제 쓸까?
    // 변동시 자동으로 html에 반영되게 만들고 싶을 때 씀, 고정 값 사이트 로고 제목은 안 씀(하드코딩)
    // state는 무조건 변경함수 set함수() 사용
    // 글기본값의 copy본을 사용해서 그걸 글기본값변경 함수에 넣어준다.
    // state가 array 자료일 경우 복사부터 하고 수정한다. let copy = [...따봉];

    let copy = [...글기본값];
    let [modal, setModal] = useState(false);
    // false & true 혹은 0, 1 등 상태의 기본값 정해주기 : 모달 띄울때 바꿔주기

    const toggleModal = () => {
        setModal(prevModal => !prevModal);
    };

    let [sticker, setSticker] = useState(false);
    let [title, setTitle] = useState(0); // 안에다가 넣어버리면 props로 안 받아와도 됨 ㅎ
    // onClick 안에 함수 꼭 넣기 () => {} 즉시실행함수 사용 가능

    // 동적인 UI 만드는 step
    // 1. html css로 미리 디자인 완성
    // 2. UI 현재 상태를 state로 저장
    // 3. state에 따라 UI가 어떻게 보일지 작성

    let [입력값, 입력값변경] = useState('');

    return (
        <div className="App">
            <div className="black-nav">
                <h1>빛나의 추천 운동 일지</h1>
            </div>
            <h2 style={{color: 'gray', fontSize: '25px'}}>{workOut}</h2>
            <button onClick={() => { // array/object 다룰때 원본은 보존하는게 좋아서 복사본 사용 바람
                let copy = [...글기본값];
                copy[0] = '공부했는디유';
                글기본값변경(copy);
            }}>눌러보쇼
            </button>
            &nbsp;&nbsp;
            <button onClick={() => { // 가나다순 정렬 함수 // 항상 카피본을 이용한다.
                const 가나다정렬됨 = [...글기본값].sort(function (a, b) {
                    return a.localeCompare(b);
                });
                // 그리고 state 함수에 담아주지
                글기본값변경(가나다정렬됨);
            }}>가나다순 정렬
            </button>
            &nbsp;&nbsp;

            {/* EventHandler: onChange onMouseover onScroll*/}
            {/*이벤트 버블링을 막고 싶다면 e => e.stopPropagation*/}
            {/*select textarea 같은 것도 쓸수 있음*/}
            <input type="text" onChange={(e) => { // e를 꼭 전달해줘야함 //e.target.value 암기할 것~!
                입력값변경(e.target.value); //console.log(입력값) => 입력값이라는 state에 보관됨
            }}/>
            <button onClick={() => {
                //     1. 글기본값배열 복사본에 하나 추가해준다.pets.unshift('짝짝이'); 2. 글기본값변경(카피본)에 전달한다 3. map에서 자동으로 찍어낸다.
                copy.unshift(입력값);
                글기본값변경(copy)
            }}>글발행 </button>


            {/*<div className="list">*/}
            {/*    <h3>{글기본값[0]} <span onClick={() => {*/}
            {/*        좋아요증가(좋아요 + 1)*/}
            {/*    }}>👍🏻</span> {좋아요} </h3>*/}
            {/*    <p>6월 4일 발행</p>*/}
            {/*</div>*/}

            {/*// Map : 반복문 쓰기 쉬워짐*/}
            {/*// 1. array 자료 개수만큼 함수안의 코드 실행해줌*/}
            {/*// 2. 함수의 파라미터는 array 안에 있던 자료임*/}
            {/*// 3. return 에 뭐 적으면 array 로 담아줌*/}
            {/*// [].map(function(){return(//여기안에 반복 구간 넣음됨)})*/}

            { // 글기본값이 배열형태임 : 배열안의 모든것을 하나씩 꺼내주는 함수 map
                글기본값.map(function (a, i) {
                    return (  // a는 array(글기본값)의 데이터 하나씩 꺼내주고, i는 1씩 증가하는 파라미터
                        <div className="list" key={i}>
                            <h3 onClick={() => {
                                toggleModal();
                                setTitle(i);
                            }}>{글기본값[i]}
                                <span onClick={() => {
                                    // e.stopPropagation();
                                    let copy = [...좋아요];
                                    copy[i] = copy[i] + 1;
                                    좋아요증가(copy)
                                }}>👍🏻</span>{좋아요[i]}
                            </h3>
                            <p>6월 4일 발행</p>
                            <button onClick={()=>{
                                // 삭제 버튼을 누르면 글기본값 배열에서 해당 i번이 사라져야 한다. splice(i,1)활용하면 됨
                                copy.splice(i,1);
                                글기본값변경(copy)
                            }}>삭제</button>
                        </div>
                    )
                })
            }

            {/*<div className="list">*/}
            {/*    <h3>{글기본값[2]}</h3>*/}
            {/*    <p>6월 4일 발행</p>*/}
            {/*</div>*/}

            <div className="list">
                {/*onClick 안에는 useState의 함수로 조정한다*/}
                <h3 onClick={toggleModal}>모달확인하세유</h3>
                <p>6월 4일 발행</p>
                <p onClick={() => {
                    setSticker(true)
                }}>스티커 받기</p>
            </div>
            { // 조건문 쓰고 싶을때 삼항연산자 사용
                // 조건식? 참일때 실행할 코드 : 거짓일때 실행할 코드 ('' or null)
                // state가 false면 <Modal> 안보이고 true이면 <Modal> 보이게

                modal == true ? < Modal color={'pink'}
                                        글기본값={글기본값}
                                        글기본값변경={글기본값변경}
                                        title={title}
                /> : ''
            }

            {
                sticker == true ? <Sticker/> : null
            }

        </div>
    );
}

// 부모에 있는 state -> 자식에게 전송하는 법 : Props 사용(부모에게 자식으로만 가능!)
//1. <자식컴포넌트 작명={useState작명}> // 보통 오른쪽 값 이름에 맞춰줌
//2. 자식컴포넌트에 props 전달 후 사용시 props.작명 하여 사용

// props로 함수 전달 가능 글기본값변경={글기본값변경} : 위에서는 괄호 없고
// 아래에서 호출할때 소괄호 넣음 props.글제목변경()

function Modal(props) {
    return (
        <>
            <div className="modal" style={{background: props.color}}>
                <h4>{props.글기본값[props.title]}</h4>
                <p>날짜</p>
                <p>상세내용</p>
                {/*<button onClick={()=>{ props.글기본값변경(['잠잘잤니?','긍정적인생각은?','열심히살고있니?']) }}>글 수정</button>*/}
            </div>
        </>
    )
}

function Sticker() {

    return (
        <div className="sticker">
            <button>꾸욱~</button>
            <p>⭐️</p>
        </div>
    )
}

// 컴포넌트 언제 쓸까? <Modal/> 혹은 <Modal></Modal>
// 1. 반복하는 html 축약할때 사용 2. 큰 페이지들 전환할때 사용 3. 자주 변경되는 것들
// 컴포넌트의 문제점 : state 가져다 쓸때 변수의 범위 때문에 쓸때 문제가 생김 => props 사용함
// 컴포넌트 만드는 법?
// 1. function 만들고 : 영어 대문자로 사용함
// 2. return()안에 html 담기 : 리턴 안에는 하나의 태그로 시작해서 하나의 태그로 끝난다.
// 3. {}안에 <함수명></함수명>쓰기

//const 쓰면 에러 띄어 줌
//const Modal = () => { // 이렇게 변수처럼 만들어도 됨
// return(
//      )
// }

export default App;
