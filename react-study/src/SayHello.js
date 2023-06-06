import React from "react";

// 컴포넌트
function SayHello(props) {
    return (
        <div>
            <p>안녕</p>
            {props.children}
            <span>메롱</span>
        </div>
    );
}

export default SayHello;