# KBO Stove League

KBO 스토브리그(FA / 트레이드 / 연봉 & 샐러리캡 / 2차 드래프트 등)의 흐름을
한눈에 볼 수 있도록 **Vue 3 기반으로 화면(UI)을 설계 및 구현**한 프로젝트입니다.

> 목표: 스토브리그 시즌 동안 팀·선수 이슈를 대시보드 형태로 정리하고  
> 각 항목을 상세 페이지로 탐색할 수 있는 UI 구성  
> 현재 단계: 프로젝트 세팅 및 화면 골격(UI 설계) 구축

## Features (개발중)

### Dashboard
- FA 계약 현황 요약
- 트레이드 루머 요약
- 팀별 샐러리캡 사용 현황

### Free Agency (FA)
- 팀 / 포지션 / 계약 상태 필터
- 선수 리스트 및 상세 페이지 연결

### Trade Rumor
- 트레이드 루머 카드 / 타임라인
- 연관 선수 및 팀 이동 흐름

### Salary Cap
- 팀별 총 연봉 / 상한 / 여유 금액
- 선수·포지션별 연봉 분포

### 2nd Draft
- 라운드별 지명 결과
- 보호선수 규칙 UI 표현

### Team / Player Detail
- 팀 요약 (로스터, 연봉 총액, 캡 현황)
- 선수 상세 (계약 상태, FA 이력, 연봉)

---

## Project Structure

```
src/
 ├─ pages/                
 ├─ components/
 │   └─ layout/            
 ├─ router/                 
 ├─ stores/                
 ├─ App.vue
 └─ main.js
```

---

## Roadmap
- [x] Vue 3 + Vite 프로젝트 생성
- [x] Router / Layout 구조 설계
- [x] 스토브리그 화면 단위(View) 분리
- [ ] Dummy 데이터 기반 UI 구체화
- [ ] 상태 관리 구조 정리
- [ ] 실제 데이터 업로드
- [ ] 배포 및 데모 스크린샷 추가

---

## Getting Started

### 1. Install
```bash
npm install
```

### 2. Run (Development)
```bash
npm run dev
```

### 3. Build
```bash
npm run build
```

---

## Data Policy
본 프로젝트는 UI/UX 설계 및 포트폴리오 목적의 개인 프로젝트입니다.

- 커뮤니티/소셜미디어 게시글은 직접 저장하거나 재배포하지 않습니다.
- 모든 외부 정보는 요약 형태로 표현되며, 원문은 링크로만 제공합니다.
