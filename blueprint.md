# 꿈해몽 AI 로또 추천 (Dream AI Lotto) - Blueprint

## 서비스 개요
- **서비스 명:** 꿈해몽 AI 로또 추천
- **컨셉:** 사용자의 꿈 내용을 AI가 분석하여 행운의 로또 번호를 추출해주는 감성적이고 신비로운 앱.
- **슬로건:** "당신의 무의식이 보내는 행운의 신호, AI가 해석해 드립니다."

## 마케팅 & 감성 포인트
1.  **신비로운 분위기:** 몽환적인 그라데이션, 글래스모피즘(Glassmorphism), 부드러운 애니메이션을 통한 사용자 경험 극대화.
2.  **개인화된 해석:** 단순히 번호를 생성하는 것이 아니라, 사용자가 입력한 꿈의 핵심 키워드를 기반으로 해석 메시지를 제공.
3.  **신뢰도 있는 디자인:** 깔끔하고 세련된 UI를 통해 'AI 분석'이라는 기술적 신뢰도와 '꿈해몽'이라는 감성적 요소를 결합.

## 주요 기능
- **꿈 일기 (Dream Input):** 사용자가 자신의 꿈을 자유롭게 서술할 수 있는 입력 창.
- **AI 꿈 분석 시뮬레이션:** 입력된 텍스트에서 키워드를 추출(시뮬레이션)하고, 그에 맞는 행운 메시지 출력.
- **커스텀 번호 조합:** 꿈에서 본 숫자 포함하기, 피하고 싶은 숫자 제외하기 기능.
- **결과 공유:** 생성된 번호를 이미지나 텍스트로 저장/공유 (향후 확장).

## 기술적 구조 (Modern Web Standards)
- **HTML5:** 시맨틱 태그 및 Web Components 활용.
- **CSS3 (Baseline):**
    - `@container` queries for component responsiveness.
    - `:has()` selector for state-based styling.
    - `oklch` color space for vibrant gradients.
    - CSS Variables for easy theming.
- **JavaScript (ES Modules):** 로직 분리 및 유지보수 용이성 확보.
- **Deployment:** Cloudflare Pages (Static Site Hosting).

## 개발 로드맵
1.  **[Current] 프로젝트 구조 재편성:** `public/` 디렉토리로 소스 이동 및 분리 (`index.html`, `style.css`, `main.js`).
2.  **UI/UX 고도화:** 감성적인 디자인 시스템 적용 및 애니메이션 추가.
3.  **로직 구현:** 꿈 키워드 분석 시뮬레이션 및 로또 번호 생성 알고리즘 고도화.
4.  **배포:** GitHub 연동 및 Cloudflare Pages 배포.
