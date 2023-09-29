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
## Issue

Typed design system의 컴포넌트를 프로젝트에서 사용하려고 할 때, Emotion 라이브러리와 관련하여 두 가지 주요 문제가 발생했습니다.

1. **Module-not-found Error**: Emotion이 프로젝트에 dependency로 설치되어 있지 않을 경우, Typed design-system의 컴포넌트를 참조할 때 이러한 에러가 발생합니다.
2. **Naming Mismatch Error**: Emotion 패키지를 최신 버전으로 설치하면, Emotion 11 버전부터 패키지의 이름이 `@emotion/core`에서 `@emotion/react`로 변경되어 naming mismatch 에러가 발생합니다.

### 해결 방법

Typed design system이 Emotion 10.x 버전에 의존하고 있기 때문에, 프로젝트에도 Emotion 10.x 버전을 설치하여 문제를 해결할 수 있었습니다.

```bash
npm install @emotion/core@10.x
```