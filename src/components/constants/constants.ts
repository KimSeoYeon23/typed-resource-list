import { SweetAlertPosition } from "sweetalert2";

export const TOAST_SETTINGS = {
  toast: true,
  position: 'top-end' as SweetAlertPosition,
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
};

export const MESSAGES = {
  invalidUrl: 'URL은 "https://" 또는 "http://"로 시작해야 합니다.',
  deleteError: '기본 URL은 삭제할 수 없습니다.',
  successUrl: 'URL이 추가되었습니다.',
  failureUrl: 'URL 추가에 실패하였습니다. 다시 시도해주세요.',
  successImage: '이미지가 추가되었습니다.',
  failureImage: '이미지 추가에 실패하였습니다. 다시 시도해주세요.',
  invalidImage: '은/는 유효한 이미지 형식이 아닙니다. .jpg 또는 .png 파일만 업로드해주세요.',
};
