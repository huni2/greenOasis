# AI Dev Team Framework
이 프로젝트는 ai-dev-team 프레임워크를 사용합니다.
`.aidev.json`을 읽어 팀 페르소나와 워크플로우 규칙을 적용합니다.
현재 단계: design (아키텍처·기술스택 확정, 구현 시작 전)
규칙: 설계 없는 구현 금지 / 역할 이탈 시 담당 페르소나에게 위임
커맨드: `/activate-persona [role]` | `/team-status` | `/drift-detect` | `/generate-config`

> 이 프로젝트는 `docs/01-plan/`, `docs/02-design/` 폴더 대신 **README.md**(기능 명세 = plan, 아키텍처/기술스택/OpenSearch 적용 상세 = design)가 설계 문서 역할을 한다. `/drift-detect`, `/team-status`는 이를 기준으로 점검한다.

---

# Green Oasis

유기농 제품 소비자 커뮤니티 플랫폼. 트랜잭션(주문·포인트·인증)은 PostgreSQL이, 검색·추천(게시판·레시피·제품·생산자)은 OpenSearch가 담당하는 구조로 설계한다. 전체 기능 명세와 아키텍처 다이어그램은 [README.md](README.md) 참고.

## 저장소 구조

코드와 기획 산출물을 분리한 모노레포 형태다. GitHub: `huni2/greenOasis`.

```
greOa/                          # 저장소 루트
├── README.md                   # 프로젝트 개요 · 문제/선택/결과 · 아키텍처 · 기능 명세 (GitHub 홈에 표시)
├── CLAUDE.md                   # 이 파일 — 저장소 구조 및 개발 규칙
├── green-oasis/                # 애플리케이션 코드 (Next.js)
│   ├── README.md               # 루트 README.md와 동일 내용 (동기화 필요, "주의사항" 참고)
│   ├── package.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── eslint.config.mjs
│   ├── public/                 # 정적 자산 (fonts, images)
│   └── src/                    # 애플리케이션 소스 — 현재 비어있음 (실제 구현 시작 전)
├── 산출물/                      # 기획·설계 문서 (바이너리 위주, git diff로 내용 확인 불가)
│   ├── Green-Oasis_250818_ver0.1.pptx   # 기획 발표자료
│   ├── usecase/
│   │   ├── greOausecase.uml             # 유스케이스 다이어그램 소스
│   │   └── usecasegreOa.jpg             # 유스케이스 다이어그램 이미지 (README에 임베드됨)
│   └── 테이블정의서/
│       └── greOa-20250811논리.damx      # 논리 ERD
└── .github/
    ├── ISSUE_TEMPLATE/feature_request.md
    └── PULL_REQUEST_TEMPLATE.md
```

**핵심 규칙**: 애플리케이션 코드는 `green-oasis/` 안에서만 작성한다. 저장소 루트에는 기획 문서(`산출물/`)와 리포지토리 메타 문서(`README.md`, `.github/`)만 둔다.

## 기술 스택

| 레이어 | 기술 | 역할 |
|---|---|---|
| 프론트엔드 | Next.js (App Router) + React | SSR 페이지(게시판·레시피·제품) + 클라이언트 인터랙션(장바구니·추천 위젯) |
| 백엔드 API | Next.js Route Handlers | 인증·주문·포인트 등 트랜잭션 처리 |
| 주 데이터베이스 | PostgreSQL | 사용자·주문·포인트·인증정보의 source of truth |
| 검색·추천 엔진 | **OpenSearch** | 게시판/레시피/제품/생산자 통합 검색, 다차원 필터, 취향·행동 이력 기반 추천 |
| 미디어 저장소 | S3 호환 오브젝트 스토리지 | 생산자 영상·제품 이미지 |
| 캐시 | Redis (선택) | 챌린지 랭킹, 그린 포인트 집계 |
| 행동 이벤트 수집 | `navigator.sendBeacon` → API Route → OpenSearch | 조회·클릭·검색·장바구니 이벤트를 `user_events` 인덱스에 적재, 추천 쿼리 시드로 사용 |

기술 선택 이유, 전체 아키텍처 다이어그램(mermaid), `user_events` 이벤트 스키마, 기능별 OpenSearch 쿼리 활용 방식은 [README.md](README.md)의 해당 섹션에 상세히 기술돼 있다 — 여기서는 중복 서술하지 않는다.

## 개발 명령어

```bash
cd green-oasis
npm install
npm run dev      # localhost:3000, --turbopack
npm run build
npm run lint
```

## Git 브랜치 전략

지금까지는 브랜치 전략 없이 `main`에 직접 커밋해왔다(`git log` 기준 `main` 단일 브랜치). 코드 구현을 시작하는 시점부터는 아래 전략을 적용한다 — timeslot·congkong-brand-website 등 다른 프로젝트에서 쓰는 패턴과 동일하게 맞춘다.

| 브랜치 | 용도 |
|---|---|
| `main` | 프로덕션 브랜치. 직접 push 금지, PR 필수 |
| `develop` | 개발 통합 브랜치 |
| `feature/*` | 기능 개발 (`develop`에서 분기 → `develop`으로 PR 병합) |
| `fix/*` | 버그 수정 |
| `hotfix/*` | 긴급 수정 (`main`에서 분기 → `main` + `develop` 양쪽에 병합) |
| `refactor/*` | 코드 리팩토링 |
| `chore/*` | 빌드·설정·의존성 등 |
| `docs/*` | 문서 수정 (README, `산출물/` 등) |

- 병합 흐름: `feature/* → develop → main`
- 브랜치명은 소문자 + 케밥케이스 (예: `feature/product-search`, `fix/cart-quantity-bug`)
- `main`은 PR을 통해서만 병합 — 직접 push 금지
- PR은 `.github/PULL_REQUEST_TEMPLATE.md` 사용, 관련 이슈 연결

## 이슈 · 커밋 컨벤션 (기존 커밋 로그 기준)

- 커밋 메시지에 관련 이슈 번호를 붙인다: `테이블 정의서 추가 #1`, `doc: #2 이슈 템플릿 추가`
- 기능 요청은 `.github/ISSUE_TEMPLATE/feature_request.md` 템플릿 사용 (ISSUE / Description / To Do / ETC)

## 주의사항

- **`README.md`(루트)와 `green-oasis/README.md`는 내용이 중복돼 있다.** 프로젝트 설명·기능·아키텍처를 수정할 때는 두 파일을 함께 고친다. 하나만 고치면 GitHub 홈(루트)과 실제 코드 폴더 문서가 어긋난다.
- `green-oasis/src/`는 다른 프로젝트(실내 자산 위치추적 대시보드)에서 재사용하려고 가져왔던 스캐폴드를 삭제한 뒤 비어있는 상태다. 실제 구현은 이 문서의 저장소 구조를 기준으로 새로 시작한다.
- 저장소 루트에 `.gitignore`가 없어 `.idea/`가 추적되지 않으면서도 git에 무시 설정되어 있지도 않다 — 필요 시 루트에 `.gitignore` 추가를 검토한다.
- `산출물/` 아래 파일(pptx, damx)은 바이너리라 diff로 변경 내용이 안 보인다 — 수정 시 커밋 메시지에 무엇이 바뀌었는지 설명을 남긴다.

## 중요 규칙

- 모든 응답은 한글로 작성한다.
- 코드 수정 전 반드시 해당 파일을 먼저 읽는다.
- 검색·필터·추천 관련 기능은 OpenSearch를 통해서만 조회한다 — PostgreSQL에 검색 로직을 직접 구현하지 않는다.
- 주문·결제·포인트 등 정합성이 중요한 트랜잭션은 PostgreSQL이 source of truth다 — OpenSearch 인덱스를 쓰기 기준으로 삼지 않는다.
