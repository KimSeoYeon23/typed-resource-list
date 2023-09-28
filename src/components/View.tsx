import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

const ViewWrap = styled.div`
  width: 100%;
  background-color: #fff;
`;

const Viewer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 17px;
  box-sizing: border-box;

  .view-close {
    width: 19px;
    height: 19px;
    cursor: pointer;
  }
`;

const View = () => {
  return (
    <ViewWrap>
      <Viewer>
        test
        <AiOutlineClose className='view-close' />
      </Viewer>
    </ViewWrap>
  );
};

export default View;