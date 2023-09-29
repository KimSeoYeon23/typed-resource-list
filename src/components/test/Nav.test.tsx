import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { store } from '../../redux/store';
import Nav from '../Nav';
import '@testing-library/jest-dom/extend-expect';

// Swal 모듈을 목킹합니다.
jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));

describe('Nav', () => {

  test('렌더링과 초기 상태 테스트', () => {
    render(
      <Provider store={store}>
        <Nav />
      </Provider>
    );

    // 초기 상태 테스트
    expect(screen.getByText('URL 추가')).toBeInTheDocument();
    expect(screen.getByText('이미지 추가')).toBeInTheDocument();
    expect(screen.queryByTestId('url-input')).not.toBeInTheDocument();
  });

  test('URL 추가 버튼 클릭 테스트', () => {
    render(
      <Provider store={store}>
        <Nav />
      </Provider>
    );

    fireEvent.click(screen.getByText('URL 추가'));

    // UrlInput이 렌더링되었는지 확인
    expect(screen.queryByTestId('url-input')).toBeInTheDocument();
  });

  
  test('유효하지 않은 URL 입력 테스트', async () => {
    jest.setTimeout(10000);

    // Swal.fire에 스파이를 심습니다.
    const spy = jest.spyOn(Swal, 'fire') as jest.SpyInstance<Promise<SweetAlertResult<any>>, [Swal.FireParams]>;
    
    render(
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  
    fireEvent.click(screen.getByText('URL 추가'));
  
    // 조건부 렌더링된 UrlInput을 찾음
    const urlInput = await screen.findByTestId('url-input');
  
    // 유효하지 않은 URL을 입력하고 Enter 키를 누름
    fireEvent.change(urlInput, { target: { value: 'invalidUrl' } });
    fireEvent.keyDown(urlInput, { key: 'Enter', code: 'Enter' });
  
    // Swal의 fire 함수가 호출되었는지 확인
    await waitFor(() => {
      console.log(spy.mock.calls)
      expect(spy).toHaveBeenCalledWith(expect.objectContaining({
          title: '유효하지 않은 URL입니다.',
          icon: 'error',
      }));
    });

    // 테스트가 끝난 후 스파이를 제거합니다.
    spy.mockRestore();
  })
})