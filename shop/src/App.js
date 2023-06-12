import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, Carousel, Table, Card, Button, Placeholder} from 'react-bootstrap';
import './App.css';
import {useState} from "react";
import data from './data';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import contact from './contact';
import Detail from './Detail';
import axios from "axios";


// import 해서 {}안에 여러개 쓰기 쌉가능
// import {a, b} from './data.js'; // 경로는 ./부터 시작함
// 보내는 쪽은 export {a, b}

// 이미지 inline 으로 바로 넣고 싶은 경우
// 1. style={{background : 'url('+bg+')'}
// 2. import bg from './img/Qr-crew.jpg';

//public 폴더도 이미지 넣기 쌉가능
//{process.env.PUBLIC_URL + '/'} 이렇게 넣으면 배포할때 문제 없음

//  react router dom 사용하면 편안하게 페이지 구분 활용할 수 있음 -> index에서 react router dom import

function App() {

    let [info, setInfo] = useState(data);
    // info는 data 배열에 들어가있는 object 3개가 나옴 , setInfo 는 info를 사용하는 함수임
    // let [contact, setContact] = useState(contact);
    let navigate = useNavigate();
    // 페이지 이동을 도와주는 함수 : onClick 에 navigate('경로') 함수 사용

    return (
        <div className="App">
            {/* 페이지 나누기는 react router dom, 안에 내가 보여주고싶은 컴포넌트만 담아도 됨 */}

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">⭐️ B I T N A R A</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* 페이지 이동버튼은 링크태그 사용 */}
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/detail">Features</Nav.Link>
                        <Nav.Link onClick={() => {
                            navigate('/contact')
                        }}>Contact</Nav.Link>
                        {/*    navigate(1) 앞으로 한 페이지 이동 navigate(-1) 뒤로 한 페이지 이동 : 뒤로가기 앞으로 가기랑 똑같이 작동 */}
                    </Nav>
                </Container>
            </Navbar>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/maingbg.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Do you want to be a cabin crew?</h3>
                        <p>Join Bitna's free Online Crew Course.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/travel.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Fly all over the place</h3>
                        <p>You can work, explore, and can reach your dream.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <Routes>
                <Route path="/" element={
                    <>
                        <div className="container">
                            <div className="row">
                                { // {}에 데이터 배열을 가지고 있는 state info 배열에 map 을 돌리기
                                    info.map((a, i) => {
                                            return ( // map 돌리때 항상 key={i} 넣어주기
                                                <div key={i} className="col-md-4">
                                                    <img className="secondImg" src={info[i].src} alt={info[i].alt}
                                                         width="80%"/>
                                                    <h3>{info[i].title}</h3>
                                                    <p>{info[i].content}</p>
                                                </div>
                                            )
                                        }
                                    )}
                            </div>
                        </div>
                    </>
                }/>

                {/* url 파라미터 문법 /:작명  */}
                <Route path="/detail/:id" element={<div><Detail  info={info} /></div>}/>
                <Route path="/contact" element={<div><Contact/></div>}/>
                <Route path="/about" element={<div><About/></div>}>

                    <Route path="member" element={<div>멤버입니다</div>}/>
                    <Route path="location" element={<div>위치정보입니다</div>}/>
                </Route>
                {/*nested route 언제 쓸까? 여러 유사한 페이지가 필요하고 박스 하나씩 살짝 살짝 바뀔때*/}
                {/* 위의 것(Nested Routes : 태그 안의 태그)과 아래 것 똑같은 경로임 */}
                {/*<Route path="/about/member" element={<div><About/></div>}/>*/}
                {/*<Route path="/about/location" element={<div><About/></div>}/>*/}
                <Route path="*" element={<div>없는 페이지 입니다.</div>}/>
                {/* * : 오타 포함 모든 것 */}
            </Routes>
            <button style={{background:'lightblue' ,borderRadius: '20px'}}
            onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result)=>{
                    console.log(result.data)
                //   info 에 가져온 데이터 추가 해주세요. 큰 array 안에 object가 들어가는 형태 .concat()쓰면 됨
                //     console.log(info)
                    // 불러온 정보 복사해서 뿌려주기~!!!!!
                    let copy = [...info, ...result.data]; // 대괄호를 벗긴 {} 들이 들어가게 됨
                    // console.log(copy);
                    setInfo(copy);
                })
                .catch(()=>{  // 예외처리 함
                    console.log('실패했습니다')
                })
                // axios GET 요청은 axios.get('url') : 새로고침 없이 깔끔하게 서버에서 데이터 들고옴
                // 서버 요청하는 방법 1. XMLHttpRequest 2. fetch() 3. axios
                // 버튼 누르면 데이터 가져와서 html로 보여주기

                // 서버로 데이터 전송하는 POST 요청 : 자료 전송
                // axios.post('/BitnaUrl', {name : 'kim'})

                // 동시에 AJAX 요청 여러개 날리기
                // Promise.all([ axios.get('/url1'), axios.get('/url12')])
                //     .then(()=>{
                //         // 위의 두 개를 성공했을때 then 안의 코드를 실행시켜줌
                //     })
                //    JSON은 문자 취급을 받을 수 있음 이 라이브러리가 object를 String 으로 변환을 해줌

                // fetch('')
                //     .then(결과 => 결과.json())
                //     .then(data => {})

            }}>더보기</button>
            {/* 버튼 2회 누를때 7,8,9번 상품 가져오려면? 버튼 누른 횟수 저장해놓기
                버튼 3회 눌렀을때는 상품 더 없다고 알려주기
                버튼 누르면 로딩중입니다 띄우기 */}
        </div>
    )
}

//  컴포넌트 요소들
function About() {
    return (
        <div>
            <h1>회사 정보입니다.</h1>
            <Outlet></Outlet>
        {/* <Outlet>은 nested routes안의 element들을 어디에 보여줄지 표기하는 곳
         유사한 서브페이지들이 많이 필요하다면 이렇게 라우터쓰면 뒤로가기 버튼을 이용가능하다*/}
        </div>
    )
}

function Contact() {

    let [contactInfo, setContactInfo] = useState(contact);
    // contact가 배열형태니까 contactNo에서 object 하나씩 꺼낸다.
    // 맵으로 반복문을 돌리고 i 번만큼 돌린다.
    return (
        contactInfo.map(function (a, i) {
            return (
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>⭐️</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Contact Info</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{i + 1}</td>
                        <td>{a.name}</td>
                        <td>{a.position}</td>
                        <td>{a.contact}</td>
                    </tr>
                    </tbody>
                </Table>
            );
        })
    );
}


export default App;
