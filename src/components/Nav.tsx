import { FC, useState, KeyboardEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import NavList from './NavList';
import UrlInput from './UrlInput';
import { TOAST_SETTINGS, MESSAGES } from './constants/constants';

interface ResourceList {
  id: number;
  url: string;
  image: string;
  imageName: string;
}

const Nav: FC = () => {
  const [resourceUrl, setResourceUrl] = useState<string>('');
  const [isUrlBtn, setIsUrlBtn] = useState<boolean>(false);
  const [resourceList, setResourceList] = useState<ResourceList[]>([
    { id: 0, url: "https://www.robinwieruch.de/react-libraries/", image: '', imageName: '' },
    { id: 1, url: "https://typed.do/blog-kr/how-to-make-good-usability-product/", image: '', imageName: '' }
  ]);
  const [urlId, setUrlId] = useState<number>(resourceList[1].id + 1);

  const Toast = Swal.mixin(TOAST_SETTINGS)

  const validateUrl = (url: string): boolean => url.startsWith('http://') || url.startsWith('https://');

  const isYoutubeUrl = (url: string): boolean => /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/.test(url);

  const getYoutubeEmbedUrl = (url: string): string => {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get('v');
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  }

  const handleResourceUpload = (e: KeyboardEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>) => {
    if ('key' in e) {
      if (e.key === 'Enter') {
        if (!validateUrl(resourceUrl)) {
          Toast.fire({ icon: 'error', title: MESSAGES.invalidUrl });
          return;
        }
        const finalUrl = isYoutubeUrl(resourceUrl) ? getYoutubeEmbedUrl(resourceUrl) : resourceUrl;
        const delay = Math.random() * 700 + 300;
  
        setTimeout(() => {
          if (Math.random() <= 0.8) {
            setResourceList((prevData) => [...prevData, { id: urlId, url: finalUrl, image: '', imageName: '' }]);
            setResourceUrl('');
            setIsUrlBtn(false);
            setUrlId((prevData) => prevData + 1);
      
            Toast.fire({
              icon: 'success',
              title: MESSAGES.successUrl
            })
          } else {
            // 20% 확률로 실패
            Toast.fire({
              icon: 'error',
              title: MESSAGES.failureUrl
            })
          }
        }, delay);
      }
    } else {
      const files = e.target.files;
      if (files) {
        Array.from(files).forEach((file) => {
          // 파일 유형 확인
          if (!['image/jpeg', 'image/png'].includes(file.type)) {
            Toast.fire({
              icon: 'error',
              title: file.name + MESSAGES.invalidImage,
            });
            return;
          }
          
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const delay = Math.random() * 700 + 300;
            setTimeout(() => {
              if (Math.random() <= 0.8) {
                setResourceList((prevData) => [...prevData, { id: urlId, url: '', image: reader.result as string, imageName: file.name }]);
                setUrlId((prevData) => prevData + 1);
        
                Toast.fire({
                  icon: 'success',
                  title: file.name + MESSAGES.successImage,
                });
              } else {
                Toast.fire({
                  icon: 'error',
                  title: file.name + MESSAGES.failureImage,
                });
              }
            }, delay);
          };
        });
      }
    }
  }

  const handleDelete = (id: number) => {
    if (id === 0 || id === 1) {
      Toast.fire({
        icon: 'error',
        title: '기본 URL은 삭제할 수 없습니다.'
      })
      return;
    }
    setResourceList(prev => prev.filter(item => item.id !== id));
  }

  const handleUrlChange = (id: number, newName: string) => {
    setResourceList(prevList => prevList.map(item => item.id === id ? { ...item, url: newName } : item));
  };
  

  return (
    <NavWrap>
      <NavHeader>
        <NavBtn className='url-btn' onClick={() => setIsUrlBtn(!isUrlBtn)}>URL 추가</NavBtn>
        <NavBtn>
          <label htmlFor='image-upload'>이미지 추가</label>
          <input type='file' id='image-upload' accept='image/jpeg, image/png' multiple hidden onChange={handleResourceUpload} />
        </NavBtn>
        {
          isUrlBtn && (
            <UrlInput
              value={resourceUrl} 
              onChange={(e) => setResourceUrl(e.target.value)} 
              onKeyPress={(e) => handleResourceUpload(e)}
            />
          )
        }
      </NavHeader>
      <NavBody>
        {
          resourceList.map((item) => {
            return (
              <NavList rsUrl={item.url} rsUrlId={item.id} image={item.image} imageName={item.imageName} onDelete={handleDelete} onUrlChange={handleUrlChange} key={item.id} />
            )
          })
        }
      </NavBody>
    </NavWrap>
  );
};

export default Nav;


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

  label {
    font-size: 12px;
    font-weight: 400;
    line-height: 14.06px;
    cursor: pointer;
  }
`;
