import { FC } from 'react';
import styled from 'styled-components';
import { TypedIcon } from 'typed-design-system';
import { BsPencil, BsTrash3 } from 'react-icons/bs'
import { jsx } from '@emotion/react';

const List = styled.div`
  width: 260px;
  height: 90px;
  border-radius: 10px;
  background-color: #fff;
  padding: 0px 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ListUrl = styled.div`
  width: 100%;
  height: 30px;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  .edit_small, .trash_small  {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;


const NavList: FC = () => {
  return (
    <List>
      <ListUrl>
        https://lallalalaallaaalala.com
      </ListUrl>
      <IconWrapper>
        <BsPencil className='edit_small' />
        <BsTrash3 className='trash_small' />
      </IconWrapper>
    </List>
  );
};

export default NavList;