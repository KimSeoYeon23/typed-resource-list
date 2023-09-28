import { FC, useState, KeyboardEvent } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import NavList from './NavList';

const NavWrap = styled.nav`
  width: 280px;
  height: 100vh;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
`;

const NavHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const NavBody = styled.div`
  width: 280px;
  display: grid;
  grid-template-rows: 1fr;
  gap: 15px;
  margin-top: 15px;
  padding: 0 10px;
  box-sizing: border-box;
`;

const NavBtn = styled.button`
  width: 125px;
  height: 30px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background-color: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.06px;
  cursor: pointer;
`;

const UrlInput = styled.div`
  position: absolute;
  top: 45px;
  width: 260px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;

  input {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid #38A5E1;
    border-radius: 3px;
    
    &:focus {
      outline: none;
    }
  }
`;

interface UrlList {
  id: number;
  url: string;
}

const Nav: FC = () => {
  const [url, setUrl] = useState<string>('');
  const [isUrlBtn, setIsUrlBtn] = useState<boolean>(false);
  const [urlList, setUrlList] = useState<UrlList[]>([
    { id: 0, url: "https://www.robinwieruch.de/react-libraries/" },
    { id: 1, url: "https://typed.do/blog-kr/how-to-make-good-usability-product/" }
  ]);
  const [urlId, setUrlId] = useState<number>(urlList[1].id + 1);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if(!url.startsWith('http://') && !url.startsWith('https://')) {
        Toast.fire({
          icon: 'error',
          title: 'URL은 "https://" 또는 "http://"로 시작해야 합니다..'
        })
        return;
      }
      setUrlList((prevData) => [...prevData, { id: urlId, url: url}]);
      setUrl('');
      setIsUrlBtn(false);
      setUrlId((prevData) => prevData + 1);
    }
  }

  return (
    <NavWrap>
      <NavHeader>
        <NavBtn className='url-btn' onClick={() => setIsUrlBtn(!isUrlBtn)}>URL 추가</NavBtn>
        <NavBtn>이미지 추가</NavBtn>
        {
          isUrlBtn && (
            <UrlInput>
              <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} onKeyPress={handleKeyPress} placeholder='https://' />
            </UrlInput>
          )
        }
      </NavHeader>
      <NavBody>
        {
          urlList.map((item) => {
            return (
              <NavList urlItem={item.url} key={item.id} />
            )
          })
        }
      </NavBody>
    </NavWrap>
  );
};

export default Nav;

