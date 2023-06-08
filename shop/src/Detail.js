import {Button, Card} from "react-bootstrap";
import {useParams} from "react-router-dom";


// props에 info (data 배열)객체 전달 받음. 여기서 뿌려줘야함.
function Detail(props) {

    let {id} = useParams();
    // <Route path="/detail/:id" 에서 썻던 id를 useParams()를 통해 가져오기 가능

    return (
        // 상품의 영구번호가 0인 상품의 제목을 여기 보여주세요~
        <div className="d-flex justify-content-around">
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={props.info[id].src}/>
                <Card.Body>
                    <Card.Title>{props.info[id].title}</Card.Title>
                    <Card.Text>
                        {props.info[id].content}
                    </Card.Text>
                    <Card.Text>
                        {props.info[id].price} 원
                    </Card.Text>
                    <Button variant="primary" style={{background: 'orange'}}>커리큘럼 확인하기</Button>
                </Card.Body>
            </Card>
        </div>
    );

}



export default Detail;