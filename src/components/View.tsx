import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

const ViewWrap = styled.div`
  width: 100%;
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

const View = () => {
  const dispatch = useDispatch();
  const resourceUrl = useSelector((state: any) => state.resource.url);
  const [isClose, setIsClose] = useState<boolean>(false);

  const handleClose = () => {
    setIsClose(!isClose);
    dispatch({ type: 'SET_URL', payload: '' })
  }

  return (
    <>
      {
        resourceUrl !== '' && (
          <ViewWrap>
            <>
              <ViewHeader>
                {resourceUrl}
                <AiOutlineClose className='view-close' onClick={handleClose} />
              </ViewHeader>
              <Viewer src={resourceUrl}>
              </Viewer> 
            </>
          </ViewWrap>
        )
      }
    </>
  );
};

export default View;