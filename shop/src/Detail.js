import {Button, Card, Nav} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";


// props에 info (data 배열)객체 전달 받음. 여기서 뿌려줘야함.
function Detail(props) {

    let [count, setCount] = useState(0);
    let [alert1, setAlert1] = useState(true);
    // <Route path="/detail/:id" 에서 썻던 id를 useParams()를 통해 가져오기 가능
    let {id} = useParams();
    // console.log(id)

    let 찾은상품 = props.info.filter(function (x) {
        return x.id === +id
        // 정확한 검사를 하지 않으려면 == 그러나 정확하게 하려면 === 해서 id 앞에 +를 붙여준다.
    })[0];
    // filter, map은 배열을 리턴한다.
    // console.log(찾은상품)

    // Detail 페이지 방문 후 2초 지나면 <div> 숨기기
    // Lifecycle hook : mount 장착되고, update 업데이트 되고 unmount 제거되고
    // 1000 은 1초

    // 0 , 1 , 2와 세가지 옵션이라 숫자로 표현
    useEffect(() => {
        // mount, update시 코드 실행해주는 useEffect
        // useEffect안에 있는 코드는 html 재랜더링 후에 로드 & 업데이트 마다 실행 됨
        // 어려운 연산이나 서버에서 데이터 가져오는 작업, 타이머 장착하는 것 이곳 안에
        let a = setTimeout(() => {
            setAlert1(false)
        }, 2000)
        console.log(2)
        //2초후에 setAlert를 false로 해주세요.
        return () => {
            // useEffect 동작 전에 실행되는 코드 : clean up function 이라고 함
            // 기존타이머는 제거해주세요~
            // 서버로 데이터 요청할때 기존 데이터 요청은 제거해주세요. (버그 없애 줌)
            console.log(1)
            clearTimeout(a) // a 타이머가 깔끔하게 제거 됨
        }
    })


    // useEffect 실행조건 넣을 수 있는 곳은 ,[] : 컴포넌트 마운트 1회 시키고 싶을 때는 [] 하나만 넣기
    // useEffect(()=>{}) 1. 재렌더링마다 코드 실행
    // useEffect(()=>{}, []) 2. mount시 1회 코드 실행 4. [state변수]하면 특정 state 변수 시에만 실행
    // useEffect(()=>{
    //  return () => {
    //  } 3. useEffect 동작 전에 실행되는 return() => {}
    // })

    let [입력값, 입력값변경] = useState('');

    useEffect(() => {
        // 값이 숫자라면 isNaN() 함수는 false를 반환, 숫자가 아니라면 true를 반환
        if (isNaN(입력값) == true) {
            alert('그러지마세요')
        }
    }, [입력값])
    // 입력값이 변경 될때 실행 됨, [] 비어있으면 1회만 실행

    let [tab, setTab] = useState(0);
    return (
        // 상품의 영구번호가 0인 상품의 제목을 여기 보여주세요~
        <>
            {
                alert1 === true ?
                    <div className="alter alert-warning"
                         style={{background: 'yellow', marginBottom: '10px', color: 'red'}}>
                        5초 이내 구매시 할인!
                    </div>
                    : null
            }
            <div className="d-flex justify-content-around">
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={찾은상품.src}/>
                    <Card.Body>
                        <Card.Title>{찾은상품.title}</Card.Title>
                        <Card.Text>
                            {찾은상품.content}
                        </Card.Text>
                        <Card.Text>
                            {찾은상품.price} 원
                        </Card.Text>
                        <Button variant="primary" style={{background: 'orange'}}
                                onClick={() => {
                                    setCount(count + 1)
                                }}>커리큘럼 확인하기 {count} </Button>

                        <input type="text" className="userInput mt-2" onChange={(e) => {
                            입력값변경(e.target.value)
                        }}/>

                        {/*
                    1. userInput에 타이핑을 한다. //onChange e.target.value
                    2. 글이면 false를 줘서 숫자만 입력을 띄워준다.
                    3. 숫자이면 true 여서 아무런 행동을 취하지 않는다.
                    */}

                    </Card.Body>
                </Card>
            </div>
            {/*defaultActiveKey : 처음 눌렀을때 나오는 페이지 */}
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(0)
                        }}
                        eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(1)
                        }}
                        eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(2)
                        }}
                        eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent info={props.info} tab={tab}/>
        </>
    );
}

// if 가정문 쓰고 싶으면 컴포넌트안에 작성하고 꼭 리턴문 쓸것~!
// props 쓰기 싫으면 바로 가지고와서 {안에 쓸것}

function TabContent({tab, info}) {
    // 탭 state가 변할 때 end 부착
    let [fade, setFade] = useState('')

    useEffect(() => {
           let a =  setTimeout(()=>{ setFade('end')}, 100)
            // 2. 0.1초 후에 end 효과 적용 : 미세한 시간차를 두기
            return () => {
               clearTimeout(a)
                setFade('')
            //      1. 먼저 작동
            }
        }, [tab])

    // 탭을 누르거나 변환이 왔을때 setFade라는 함수가 작용하면서 fade 부분이 end로 바뀌면서 클래스명이 부여된다!

    // 탭이라는게 변경될때마다 안의 코드 실행해줌
    //  문자 중간에 변수 넣는 법 : 백틱 사용하고 ${}
    //  start뒤에 꼭 한 칸 띄워 줄것
    return (<div className={'start ' + fade}>
        {[<div>{info[0].title}</div>,
            <div>{info[1].title}</div>,
            <div>{info[2].title}</div>][tab]}
    </div>)
}


export default Detail;
// Props 사용시 컴포넌트를 계속 전달 받아야함
// 1. Context API(리액트 기본문법)사용 => 성능 이유 때문에 잘 안쓰는 편임 
// 2. Redux와 같은 외부라이브러리 사용