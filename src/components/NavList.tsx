import React, { FC } from 'react';
import styled from 'styled-components';
import { TypedIcon } from 'typed-design-system';
import { BsPencil, BsTrash3 } from 'react-icons/bs'
import useEditing from './hooks/useEditing';
import useDispatchResource from './hooks/useDispatchResource';

interface NavListProps {
  rsUrl: string;
  rsUrlId: number;
  imageName: string;
  image: string;
  onDelete: (id: number) => void;
  onUrlChange: (id: number, newName: string) => void;
}

const NavList: FC<NavListProps> = ({ rsUrl, rsUrlId, image, imageName, onDelete, onUrlChange }) => {
  const { isEditing, toggleEditing } = useEditing();
  const handleDispatchResource = useDispatchResource();

  const handleListClick = () => handleDispatchResource(rsUrlId, rsUrl, image, imageName);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUrlChange(rsUrlId, e.target.value);
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      toggleEditing();
    }
  }

  return (
    <>
      <List onClick={handleListClick}>
        <ListUrl>
          {
            isEditing ? (
              <input type='text' value={ rsUrl } onChange={handleUrlChange} onBlur={toggleEditing} onKeyPress={handleKeyPress} />
            ) : (
              rsUrl || imageName
            )
          }
        </ListUrl>
        <IconWrapper>
          <Button onClick={toggleEditing}>
            <TypedIcon icon='edit_19' style={{ fontSize: '19px' }} />
          </Button>
          <Button onClick={() => onDelete(rsUrlId)}>
            <TypedIcon icon='trash_19' style={{ fontSize: '19px' }} />
          </Button>
        </IconWrapper>
      </List>
    </>
  );
};

export default NavList;


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
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`