# Typed Resource List Solution Description

## Tech

### Core Technologies

- **`React`**
  - 버전: 18.2
- **`TypeScript`**
  - 버전: 4.9.5

### Styling

- **`Styled Components`**
  - 버전: 6.0.8

### Global State Management

- **`Redux`**
  - 버전: 4.2.1
  - `React Redux`: 버전: 8.1.2

### Additional Libraries

- **`Typed Design System`**
- **`SweetAlert2`**
  - 버전: 11.7.31
  - Toast 사용

---

## Solution

### Resource Data

- `Resource` 데이터는 배열 형태로 Redux 상태에 저장됩니다.
- 각 `Resource`는 `id`, `url`, `image`, `imageName` 필드를 가지고 있습니다.
- `SET_RESOURCE_ID`, `SET_URL`, `SET_IMAGE`, `SET_IMAGE_NAME` 액션 타입을 사용하여 리소스 정보를 상태에 저장합니다.

### Validation

- URL은 "https://" 또는 "http://"로 시작해야 유효하며, 이미지는 .jpg 또는 .png 파일만 유효합니다.
- 기본 URL은 삭제할 수 없습니다.
- 리소스 추가 및 삭제에 대한 성공 및 실패 메시지는 SweetAlert2를 통해 사용자에게 알림됩니다.

### 기타 로직

- 사용자는 리소스 목록에서 각 항목을 선택하여 편집하거나 삭제할 수 있습니다.
- 선택된 리소스는 뷰어 컴포넌트에서 상세하게 볼 수 있으며, 리소스 정보는 Redux store에서 가져옵니다.
- `useDispatchResource` 훅을 통해 리소스 정보를 디스패치 할 수 있습니다.
- `useEditing` 훅은 편집 상태를 관리하며, 사용자가 항목을 편집할 수 있도록 합니다.

---
## Issue

Typed design system의 컴포넌트를 프로젝트에서 사용하려고 할 때, Emotion 라이브러리와 관련하여 두 가지 주요 문제가 발생했습니다.

1. **Module-not-found Error**: Emotion이 프로젝트에 dependency로 설치되어 있지 않을 경우, Typed design-system의 컴포넌트를 참조할 때 이러한 에러가 발생합니다.
2. **Naming Mismatch Error**: Emotion 패키지를 최신 버전으로 설치하면, Emotion 11 버전부터 패키지의 이름이 `@emotion/core`에서 `@emotion/react`로 변경되어 naming mismatch 에러가 발생합니다.

### 해결 방법

Typed design system이 Emotion 10.x 버전에 의존하고 있기 때문에, 프로젝트에도 Emotion 10.x 버전을 설치하여 문제를 해결할 수 있었습니다.

```bash
npm install @emotion/core@10.x
```