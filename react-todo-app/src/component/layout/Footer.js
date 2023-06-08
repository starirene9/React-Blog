import React from 'react';

const Footer = () => {
    return (
        <footer style={{ // 캐멀케이스로 작성해야함, 컴마 : 자바스크립트 객체 형태로
            width: '100%',
            padding: '50px 30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            background: '#38d9a9',
            color: '#fff',
            marginTop : '50px'
        }}>copyright. 2023 happy new year~~!!</footer>
    );
};

export default Footer;