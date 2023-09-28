import { FC, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { TypedIcon } from 'typed-design-system';
import { BsPencil, BsTrash3 } from 'react-icons/bs'
import { SET_URL_ID, SET_URL } from '../redux/ActionTypes';

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
  cursor: pointer;
`;

const ListUrl = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  display: -webkit-box;
  align-items: center;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2; // 표시할 최대 라인 수
  -webkit-box-orient: vertical;

  input {
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    border: 1px solid #38A5E1;
    border-radius: 3px;
    outline: none;

    &:focus {
      outline: none;
    }
  }
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

interface NavListProps {
  rsUrl: string;
  rsUrlId: number;
}

const NavList: FC<NavListProps> = ({ rsUrl, rsUrlId }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleListClick = () => {
    dispatch({ type: SET_URL_ID, payload: rsUrlId });
    dispatch({ type: SET_URL, payload: rsUrl });
  }

  return (
    <>
      <List onClick={handleListClick}>
        <ListUrl>
          {
            isEditing ? (
              <input type='text' value={ rsUrl } />
            ) : (
              rsUrl
            )
          }
        </ListUrl>
        <IconWrapper>
          <BsPencil className='edit_small' onClick={() => setIsEditing(!isEditing)} />
          <BsTrash3 className='trash_small' />
        </IconWrapper>
      </List>
    </>
  );
};

export default NavList;