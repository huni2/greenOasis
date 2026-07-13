---
description: 현재 구현이 설계 문서(design.md)에서 이탈했는지 감지하고 보고한다
---

# Design Ref: §2 Architecture — 단방향, CC Native Layer가 핵심 가드

현재 프로젝트의 구현이 설계 문서에서 이탈했는지 점검해줘.

## 점검 단계

### 1. 설계 문서 확인
이 프로젝트는 `docs/02-design/` 폴더 대신 **README.md**(아키텍처·기술스택·OpenSearch 적용 상세 섹션)와 **CLAUDE.md**(저장소 구조·규칙)가 설계 문서 역할을 한다.
README.md에 "아키텍처", "기술 스택 & 선택 이유", "OpenSearch 적용 상세" 섹션이 있는지 확인한다.
없으면: "설계 문서(README.md 아키텍처 섹션)가 없습니다. /activate-persona techlead로 먼저 설계를 완성하세요." 출력 후 중단.

### 2. 이탈 감지 항목

**구조적 이탈** — CLAUDE.md의 저장소 구조(코드는 `green-oasis/` 안에서만)에 없는 위치에 파일이 생긴 경우:
- CLAUDE.md "저장소 구조" 트리 vs 실제 파일 존재 여부
- 누락되거나 엉뚱한 위치의 파일 목록 출력

**기능적 이탈** — README.md "주요 기능"(1~10번)에 없는 기능이 추가되었거나, 명시된 기능이 누락된 경우:
- README.md 주요 기능 목록 vs 실제 구현
- README.md "OpenSearch 적용 상세" 표의 인덱스(products/recipes/posts/producers/user_events) vs 실제 코드의 인덱스·스키마

**역할 분리 이탈** — PostgreSQL과 OpenSearch의 역할 분리 원칙을 어긴 경우 (CLAUDE.md "중요 규칙" 참고):
- 검색·필터·추천 로직을 PostgreSQL 쿼리로 직접 구현했는지
- 주문·결제·포인트 같은 트랜잭션을 OpenSearch를 쓰기 기준으로 구현했는지

**방향 이탈** — README.md "기술 스택" 표에 없는 라이브러리·기술 스택 사용:
- 설계에서 결정된 기술 스택(Next.js, PostgreSQL, OpenSearch, S3, Redis) 외 추가 사용 여부

### 3. 심각도 분류

| 심각도 | 기준 | 액션 |
|--------|------|------|
| Critical | API 계약 변경, 데이터 모델 이탈 | 즉시 중단, TechLead 확인 |
| High | 누락된 기능, 잘못된 파일 구조 | TechLead 확인 후 계속 |
| Medium | 마이너 구현 차이 | 기록 후 계속 |
| Low | 스타일, 네이밍 차이 | 기록만 |

### 4. 보고 형식

```
🔍 Drift Detection Report
──────────────────────────────
설계 문서: README.md (아키텍처 / 기술 스택 / OpenSearch 적용 상세)
점검 시각: {timestamp}

[Critical] 없음 / 있음: {목록}
[High]     없음 / 있음: {목록}
[Medium]   없음 / 있음: {목록}

전체 일치율: {N}%

권고:
- Critical/High 항목이 있으면 구현 중단 후 TechLead와 확인
- Medium 이하는 계속 구현 가능
```

### 5. Critical 이탈 발견 시 메시지

"설계 이탈이 감지되었습니다.
이탈 항목: {항목}
설계 문서: README.md §{section}

TechLead(/activate-persona techlead)와 확인 후 계속 진행하세요."
