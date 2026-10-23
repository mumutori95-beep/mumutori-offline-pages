/* 2026-10-24 변경: 주문제작 버터 조형 보류 → 박스형 버터 테이블보·빈티지 중고 가구 도장·캐릭터 액자, 매장 타자기·우편함 코너 다시 배치.
   공유 기록에는 이미 목록이 저장돼 있으므로, 아래 항목은 체크리스트·준비물 위의 '10/24 변경 항목 추가' 버튼으로 없는 것만 더합니다(기존 항목은 바꾸지 않음). */
window.OFFLINE_UPDATES = [
  {
    "id": "update-1024",
    "label": "10/24 변경",
    "summary": "버터 테이블보·빈티지 가구·캐릭터 액자·타자기와 우편함 코너",
    "taskCategories": ["버터 집기·인테리어", "매장 레터 코너"],
    "inventoryCategories": ["가구", "장식 소품", "간판·시공", "매장 레터 코너"],
    "tasks": [
      {
        "id": "decision-1024-v6",
        "title": "[10/24 결정] 주문제작 버터 조형 보류 → 박스형 버터 테이블보로 오픈",
        "category": "버터 집기·인테리어",
        "owner": "무무토리",
        "priority": "확인 완료",
        "detail": "가운데 버터 조형 주문제작은 견적 750만 원·제작 기간 약 한 달이라 10/27 설치·10/31 오픈에 맞출 수 없어 보류합니다. 대신 기존 가운데 테이블을 버터색 박스형 테이블보(앞면 도토리 캐릭터 + MUMUTORI BUTTER)로 감싸고, 양옆은 높이가 비슷한 빈티지 중고 가구를 버터색으로 칠해 놓습니다. 벽면에는 무무토리 캐릭터 액자를 걸고, 오른쪽 벽에는 타자기 책상·스툴·우편함을 다시 둡니다. 매출이 붙으면 본 조형 제작은 그때 다시 견적을 받습니다.",
        "dependsOn": [],
        "status": "done",
        "dueDate": "2026-10-24"
      },
      {
        "id": "table-measure-v6",
        "title": "가운데 테이블 실측 (가로·세로·높이)",
        "category": "버터 집기·인테리어",
        "owner": "무무토리",
        "priority": "필수",
        "detail": "테이블보 제작 치수의 기준입니다. 기존 테이블 약 200×60cm로 알고 있으니 높이까지 재서 노트에 적습니다. 바닥에서 1~2cm 띄워 끝나도록 길이를 정합니다.",
        "dependsOn": [],
        "status": "todo",
        "dueDate": "2026-10-24"
      },
      {
        "id": "tablecloth-file-v6",
        "title": "버터 테이블보 인쇄 파일 준비",
        "category": "버터 집기·인테리어",
        "owner": "무무토리",
        "priority": "필수",
        "detail": "앞면: 왼쪽 도토리 캐릭터, 오른쪽 작은 'MUMUTORI' + 큰 'BUTTER'(짙은 갈색 #6A3906). 옆면: 작은 도토리 하나씩. 상판: 무지(상품이 올라가므로 인쇄 없음). 바탕은 버터색(#EBCF79 계열에서 시안으로 결정). 로고는 AI·PDF 벡터로 넘깁니다.",
        "dependsOn": ["table-measure-v6"],
        "status": "todo",
        "dueDate": "2026-10-25"
      },
      {
        "id": "tablecloth-order-v6",
        "title": "박스형 버터 테이블보 업체 문의·색상 확인·발주",
        "category": "버터 집기·인테리어",
        "owner": "무무토리 · 제작 업체",
        "priority": "필수",
        "detail": "'4면 박스형(맞춤형), 모서리 각 살림, 바닥 1~2cm 위까지, 두께감 있는 폴리 원단 승화전사'로 요청합니다. 가장 먼저 10/30까지 받을 수 있는지 묻고, 버터색은 화면과 다르게 나오니 색상 시안이나 원단 샘플을 확인합니다. 받은 금액은 예산의 '박스형 테이블보' 칸에 입력합니다.",
        "dependsOn": ["tablecloth-file-v6"],
        "status": "todo",
        "dueDate": "2026-10-26"
      },
      {
        "id": "vintage-buy-v6",
        "title": "빈티지 중고 서랍장·책상 구매와 운반",
        "category": "버터 집기·인테리어",
        "owner": "무무토리",
        "priority": "필수",
        "detail": "왼쪽 벽 서랍장 2개, 오른쪽 벽 서랍장·수납장 2개, 타자기 책상 1개를 목표로 높이가 비슷한 것으로 고릅니다. 서랍이 잘 열리는지, 흔들림·냄새·벌레 흔적이 없는지 확인하고 운반(차량·용달) 방법을 함께 정합니다. 도장 시간을 고려해 주말 안에 확보합니다.",
        "dependsOn": [],
        "status": "todo",
        "dueDate": "2026-10-25"
      },
      {
        "id": "vintage-paint-v6",
        "title": "중고 가구 버터색 도장",
        "category": "버터 집기·인테리어",
        "owner": "무무토리",
        "priority": "필수",
        "detail": "기존 니스·광택 면은 페인트가 잘 안 먹으므로 샌딩 없이 바르는 초크 페인트, 또는 젯소 후 수성 페인트를 씁니다. 손잡이는 떼거나 마스킹합니다. 색은 테이블보 색상 샘플에 맞춥니다. 건조·경화에 하루 이틀이 걸리니 상품 진열은 마른 뒤에 합니다.",
        "dependsOn": ["vintage-buy-v6"],
        "status": "todo",
        "dueDate": "2026-10-26"
      },
      {
        "id": "character-frames-v6",
        "title": "무무토리 캐릭터 액자 2개 출력·설치",
        "category": "버터 집기·인테리어",
        "owner": "무무토리",
        "priority": "필수",
        "detail": "왼쪽 벽 서랍장 위, 오른쪽 벽 거울 옆에 하나씩 겁니다. 크림 바탕 도토리 캐릭터 선화 + 짙은 갈색 나무 액자. 벽 고정 방법(못·꼭꼬핀·와이어)은 원상복구 범위에 맞춥니다.",
        "dependsOn": [],
        "status": "todo",
        "dueDate": "2026-10-27"
      },
      {
        "id": "letter-corner-v6",
        "title": "[10/24 다시 배치] 오른쪽 벽 타자기 책상·스툴·우편함 설치",
        "category": "매장 레터 코너",
        "owner": "무무토리",
        "priority": "필수",
        "detail": "오른쪽 벽 끝, 출입 동선을 막지 않는 위치에 버터색 타자기 책상과 나무 스툴을 두고, 바로 위 벽에 도토리 우편함을 겁니다. 우편함은 잠금이 되는지, 원고가 밖에서 보이지 않는지 확인합니다.",
        "dependsOn": ["vintage-paint-v6"],
        "status": "todo",
        "dueDate": "2026-10-27"
      },
      {
        "id": "letter-rules-v6",
        "title": "매장 레터 이용 방법·가격·규격 다시 정하기",
        "category": "매장 레터 코너",
        "owner": "무무토리",
        "priority": "필수",
        "detail": "고객 작성 → 우편함 투입 → 카운터 결제 → 다음날 직원 집계·타자기 인쇄·우편 발송 흐름을 기준으로, 용지 크기·글자 수·가격·집계 마감·휴무일 처리를 정합니다. 원고와 결제를 같은 접수번호로 맞출지도 함께 정합니다. 이 페이지에는 실제 고객 편지·주소를 적지 않습니다.",
        "dependsOn": [],
        "status": "todo",
        "dueDate": "2026-10-28"
      },
      {
        "id": "letter-test-v6",
        "title": "타자기 한글·용지 시험과 레터 접수 모의 시험",
        "category": "매장 레터 코너",
        "owner": "무무토리",
        "priority": "필수",
        "detail": "타자기의 한글 입력·급지·여백을 시험하고, 테스트 원고로 작성·투입·결제·다음날 인쇄·봉함까지 한 번 돌려 봅니다. 준비가 덜 되면 오픈 날은 상품만 열고 레터는 시험이 끝난 뒤 안내합니다.",
        "dependsOn": ["letter-corner-v6", "letter-rules-v6"],
        "status": "todo",
        "dueDate": "2026-10-30"
      }
    ],
    "inventory": [
      {
        "id": "item-cloth-v6",
        "name": "박스형 버터 테이블보 (실사출력)",
        "category": "가구",
        "priority": "필수",
        "quantity": "1장 · 테이블 실측 후 (약 200×60cm 테이블, 바닥 1~2cm 위까지)",
        "detail": "앞면 도토리 캐릭터 + MUMUTORI BUTTER, 옆면 작은 도토리, 상판 무지. 4면 박스형, 두께감 있는 폴리 원단.",
        "status": "검토"
      },
      {
        "id": "item-vintage-v6",
        "name": "빈티지 중고 서랍장·수납장·타자기 책상",
        "category": "가구",
        "priority": "필수",
        "quantity": "서랍장·수납장 4개 내외 + 책상 1개 · 높이 비슷하게",
        "detail": "왼쪽 벽 2개, 오른쪽 벽 2개, 타자기 책상 1개 목표. 버터색으로 칠해 씁니다.",
        "status": "검토"
      },
      {
        "id": "item-paint-v6",
        "name": "버터색 초크 페인트·붓·마스킹 테이프·마감 바니시",
        "category": "간판·시공",
        "priority": "필수",
        "quantity": "가구 수량 확정 후 (2~3L 내외 예상)",
        "detail": "테이블보 색상 샘플에 맞춰 조색. 손이 닿는 상판은 무광 바니시로 마감.",
        "status": "검토"
      },
      {
        "id": "item-frames-v6",
        "name": "무무토리 캐릭터 액자",
        "category": "장식 소품",
        "priority": "필수",
        "quantity": "2개",
        "detail": "크림 바탕 도토리 캐릭터 선화, 짙은 갈색 나무 액자.",
        "status": "검토"
      },
      {
        "id": "item-typewriter-v6",
        "name": "타자기",
        "category": "매장 레터 코너",
        "priority": "필수",
        "quantity": "1대",
        "detail": "한글 입력·급지 시험 후 확정. 리본·예비 소모품 함께 확인.",
        "status": "검토"
      },
      {
        "id": "item-mailbox-v6",
        "name": "도토리 우편함 (잠금형)",
        "category": "매장 레터 코너",
        "priority": "필수",
        "quantity": "1개",
        "detail": "원고가 밖에서 보이지 않고 잠기는 벽걸이형.",
        "status": "검토"
      },
      {
        "id": "item-stool-v6",
        "name": "타자기 책상용 나무 스툴",
        "category": "매장 레터 코너",
        "priority": "필수",
        "quantity": "1개",
        "detail": "책상 높이에 맞춰 고릅니다.",
        "status": "검토"
      },
      {
        "id": "item-letterpaper-v6",
        "name": "고객 작성용 편지지·봉투·필기구·안내 카드",
        "category": "매장 레터 코너",
        "priority": "필수",
        "quantity": "규격·가격 정한 뒤 확정",
        "detail": "타자기 용지와 규격을 맞춥니다.",
        "status": "검토"
      }
    ]
  }
];
