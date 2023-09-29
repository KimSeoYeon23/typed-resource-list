import { FC, KeyboardEventHandler, ChangeEventHandler } from 'react';
import styled from 'styled-components';

const StyledUrlInput = styled.div`
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

interface UrlInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyPress: KeyboardEventHandler<HTMLInputElement>;
}

const UrlInput: FC<UrlInputProps> = ({ value, onChange, onKeyPress }) => (
  <StyledUrlInput>
    <input
      data-testid="url-input"
      type="text" 
      value={value} 
      onChange={onChange} 
      onKeyPress={onKeyPress} 
      placeholder='https://'
    />
  </StyledUrlInput>
);

export default UrlInput;
