import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { SET_RESOURCE_ID, SET_URL, SET_IMAGE, SET_IMAGE_NAME } from '../redux/ActionTypes';

const View = () => {
  const dispatch = useDispatch();
  const resourceUrl = useSelector((state: any) => state.resource);
  const [isClose, setIsClose] = useState<boolean>(false);

  const handleClose = () => {
    setIsClose(!isClose);
    dispatch({ type: SET_RESOURCE_ID, payload: '' });
    dispatch({ type: SET_URL, payload: '' });
    dispatch({ type: SET_IMAGE, payload: '' });
    dispatch({ type: SET_IMAGE_NAME, payload: '' })
  }

  // isClose가 true이거나 resourceUrl.url과 resourceUrl.image 둘 다 없으면 아무것도 렌더링하지 않음
  if (isClose || (!resourceUrl.url && !resourceUrl.image)) return null;

  return (
    <>
      {
        resourceUrl.url !== '' ? (
          <ViewWrap data-testid="view-component">
            <ViewHeader>
              {resourceUrl.url}
              <AiOutlineClose data-testid="close-button" className='view-close' onClick={handleClose} />
            </ViewHeader>
            <Viewer src={resourceUrl.url}>
            </Viewer> 
          </ViewWrap>
        ) : (
          <ViewWrap data-testid="view-component">
            <ViewHeader>
              {resourceUrl.imageName}
              <AiOutlineClose data-testid="close-button" className='view-close' onClick={handleClose} />
            </ViewHeader>
            <ViewerImage src={resourceUrl.image} />
          </ViewWrap>
        )
      }
    </>
  );
};

export default View;

const ViewWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
`;

const ViewHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 17px;
  box-sizing: border-box;
  position: relative;
  z-index: 10;

  .view-close {
    width: 19px;
    height: 19px;
    cursor: pointer;
  }
`;

const Viewer = styled.iframe`
  width: 100%;
  height: calc(100vh - 50px);
  border: none;
  box-sizing: border-box;
`;

const ViewerImage = styled.img`
  width: 50%;
  height: calc(100vh - 50px);
  object-fit: contain;
`;