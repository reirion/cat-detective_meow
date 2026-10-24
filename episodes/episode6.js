export const episode6 = {
  id: 'ep-06',
  title: '더 라임 힐스의 이상 현상',
  subtitle: '더 라임 힐스 아파트 이상 현상 조사',
  intro: '신축 프리미엄 아파트에서 발생한 이상 현상.',
  investigationTurns: 20,
  recordRoom: false,
  notifications: { 
    clueUnlocked: '아파트 단지 내에서 새로운 단서를 발견했습니다.', 
    testimonyUnlocked: '주민 및 관계자의 새로운 진술을 확보했습니다.', 
    passwordUnlocked: '잠겨 있던 장치의 비밀번호를 해제했습니다.' 
  },
  interviewHeading: '관계자들의 진술과 소지품 단서',
  letter: {
    from: '익명의 아파트 입주민',
    subject: '더 라임 힐스 아파트의 이상 현상을 조사해 주세요',
    sign: '익명의 제보자 드림',
    body: '탐정님께,\n\n최근 저희 신축 아파트 단지에서 기괴한 일들이 벌어지고 있습니다. 밤마다 물건이 혼자 움직이거나 무언가 지켜보는 듯한 시선이 느껴진다는 소문이 돕니다. 입주자대표 회장은 집값이 떨어질 것을 우려해 이 사실을 감추고 밤중에 몰래 무당을 불러 대규모 퇴마 굿을 진행했다고 합니다.\n\n하지만 그 이후 이상 현상은 멈추지 않고 오히려 아파트 전체에 흉흉한 기운이 감돌고 있습니다. 아파트 주민들과 관계자들의 진술을 조사해 이 소동 뒤에 숨겨진 진실과 진짜 원인을 밝혀 주세요.'
  },
  scene: { label: '더 라임 힐스 아파트 단지 · 놀이터 & 관리사무소', art: 'assets/images/ep04_bg.png' },
  witnesses: [
    { id: 'chairman', name: '입주자대표 회장', role: '입주민 대표', info: '아파트 집값 보존에 극도로 예민하다.', testimony: '소문나면 우리 아파트 집값 떨어집니다. 귀신이든 도깨비든 쫓아내는 게 당연한 거 아닌가요? 전 잘못한 게 없습니다.' },
    { id: 'manager', name: '아파트 관리소장', role: '관리책임자', info: '회장의 지시를 받아 성실히 수행했다고 주장한다.', testimony: '저는 회장님이 시키는 대로 했을 뿐입니다. 그날 밤엔 무속인을 엘리베이터로 비밀리에 올리려고 보안 카메라를 잠시 끄라고 하셨어요.' },
    { id: 'shaman', name: '무속인', role: '퇴마 의식 진행자', info: '회장의 요청으로 대규모 굿을 집행했다.', testimony: '난 분명 경고했소! 이곳은 악귀가 아니라 오랫동안 터를 지키던 도깨비의 터라고. 하지만 회장이 돈을 더 얹어주며 당장 쫓아내라고 강요했소.' },
    { id: 'kid', name: '초등학생', role: '동네 아이', info: '놀이터에서 자주 목격되는 아파트 아이.', testimony: '어떤 투명한 아저씨가 자꾸 같이 놀자고 치근덕거려서 괴물인 줄 알고 애들이랑 스마트폰 플래시 켜고 돌 던지면서 쫓아낸 건데... 무슨 문제라도 있나요?' },
    { id: 'guard', name: '아파트 경비원', role: '노인 경비원', info: '이 터가 아파트가 되기 전부터 살아온 지역 토박이.', testimony: '이 아파트가 들어서기 전, 여긴 오랜 도깨비터였어. 그 도깨비는 메밀묵이랑 알록달록한 예쁜 장난감 방망이만 주면 아이처럼 화를 풀고 다정하게 굴곤 했지...' }
  ],
  suspects: [
    { id: 'chairman', name: '입주자대표 회장', role: '입주민 대표', portrait: 'assets/images/ep04_ph_01.png', bio: '아파트 단지의 가치 방어를 위해 수단과 방법을 가리지 않는다.', testimonyId: 'chairman', items: ['C-01', 'C-02', 'C-03'] },
    { id: 'manager', name: '아파트 관리소장', role: '관리소장', portrait: 'assets/images/ep04_ph_02.png', bio: '회장의 권력에 압박받아 불법적인 지시를 이행했다.', testimonyId: 'manager', items: ['M-01', 'M-02', 'M-03'] },
    { id: 'shaman', name: '무속인', role: '무속인', portrait: 'assets/images/ep04_ph_03.png', bio: '돈에 눈이 멀어 터주신을 쫓아내는 위험한 굿판을 벌였다.', testimonyId: 'shaman', items: ['S-01', 'S-02', 'S-03'] },
    { id: 'kid', name: '초등학생', role: '동네 아이', portrait: 'assets/images/ep04_ph_04.png', bio: '순수함을 잃고 도깨비를 괴롭혀 상처를 준 장본인.', testimonyId: 'kid', items: ['K-01', 'K-02', 'K-03', 'K-04'] },
    { id: 'guard', name: '아파트 경비원', role: '경비원', portrait: 'assets/images/ep04_ph_05.png', bio: '옛 전통과 도깨비의 존재를 유일하게 기억하고 이해하는 노인.', testimonyId: 'guard', items: ['G-01', 'G-02', 'G-03'] }
  ],
  combinations: [
    { id: 'ep04-dokkaebi-offering', clueIds: ['G-01', 'K-02'], resultClueId: 'R-01', successMessage: '메밀묵과 아이들의 재료로 리폼한 예쁜 도깨비방망이를 모아 완벽한 화해의 공물을 준비했다.' }
  ],
  clues: [
    // 1차 현장 조사 단서 (장소)
    { id: 'F-01', name: '관리사무소 찢어진 메모', phase: 1, kind: 'scene', position: { x: 25, y: 35 }, description: '관리사무소 서랍 구석에서 발견된 메모 조각. 금고 비밀번호(숫자 4자리)에 대한 힌트가 적혀 있다.' },
    { id: 'F-02', name: '놀이터 바닥의 이상한 발자국', phase: 1, kind: 'scene', position: { x: 60, y: 65 }, description: '아이들 놀이터 바닥에 묘하게 새겨진 동선. 특정 방향키 입력 퍼즐(↑ → ↓ ←)의 힌트처럼 보인다.' },
    { id: 'F-03', name: '지하주차장 최심부의 탄 흔적', phase: 1, kind: 'scene', position: { x: 40, y: 80 }, description: '지하주차장 구석에 촛농과 향을 피운 흔적이 선명하다. 최근 이곳에서 비밀스러운 의식이 치러진 듯하다.' },
    { id: 'F-04', name: '아파트 게시판 공지문', phase: 1, kind: 'scene', position: { x: 75, y: 30 }, description: '“최근 기현상은 건물 유격 현상이니 유언비어 유포 시 법적 대응함”이라는 이상할 정도로 강경한 주민대표 명의의 경고문.' },

    // 용의자 1: 입주자대표 회장 단서
    { id: 'C-01', name: '비밀 퇴마 계약서', phase: 2, kind: 'suspect', suspectId: 'chairman', description: '관리사무소 금고를 열어 확보한 서류. 집값 방어를 위해 무속인에게 거액을 지급하고 대규모 굿을 의뢰한 계약서이다.' },
    { id: 'C-02', name: '집값 방어 주장에 대한 진술', phase: 2, kind: 'suspect', suspectId: 'chairman', description: '“쉬쉬해야 집값이 안 떨어집니다. 소문낸 놈을 찾아내 처벌할 겁니다.”' },
    { id: 'C-03', name: '사건 당일 밤 회의 기록', phase: 2, kind: 'suspect', suspectId: 'chairman', description: '사건 당일 밤 11시, 회장이 무속인 일행을 주민들 눈에 띄지 않게 비밀리에 입주 엘리베이터로 탑승시키는 CCTV 장면.' },

    // 용의자 2: 아파트 관리소장 단서
    { id: 'M-01', name: '무속인 입금 내역 영수증', phase: 2, kind: 'suspect', suspectId: 'manager', description: '아파트 장기수선충당금 및 관리비 명목에서 비공식 용역비로 차출된 출금 내역서.' },
    { id: 'M-02', name: '외부인 통제 진술', phase: 2, kind: 'suspect', suspectId: 'manager', description: '“회장님이 시키는 대로 했습니다. 그날 밤엔 보안 카메라를 잠시 꺼두라고 강요하셨어요.”' },
    { id: 'M-03', name: '차단기 조작 기록', phase: 2, kind: 'suspect', suspectId: 'manager', description: '굿 의식이 진행되는 동안 주민들의 시선을 돌리기 위해 아파트 전체 전기 차단기를 일시적으로 내렸던 작업 일지.' },

    // 용의자 3: 무속인 단서
    { id: 'S-01', name: '찢어진 부적과 경고문', phase: 2, kind: 'suspect', suspectId: 'shaman', description: '“이 터는 오래된 도깨비터다. 성주신과 도깨비를 강제로 쫓아내면 재앙이 닥칠 것이다”라는 경고문이 적힌 부적.' },
    { id: 'S-02', name: '퇴마 굿 실토 진술', phase: 2, kind: 'suspect', suspectId: 'shaman', description: '“난 분명 경고했소! 악귀가 아니라 터주신이라고. 하지만 회장이 돈을 얹어주며 당장 쫓아내라고 했소.”' },
    { id: 'S-03', name: '의식 도중 도망친 흔적', phase: 2, kind: 'suspect', suspectId: 'shaman', description: '굿을 집행하던 중 갑자기 서늘한 강풍이 불고 제구가 공중에 떠올라 겁을 먹고 제구실도 못 한 채 도망쳤다는 진술.' },

    // 용의자 4: 초등학생 단서
    { id: 'K-01', name: '아이들의 스마트폰 영상', phase: 2, kind: 'suspect', suspectId: 'kid', description: '방향키 퍼즐을 풀어 해제한 스마트폰. 도깨비가 다가와 놀자고 하자 스마트폰 플래시를 비추고 돌을 던지며 조롱하는 영상이 담겨 있다.' },
    { id: 'K-02', name: '꺾인 도깨비 감투 조각', phase: 2, kind: 'suspect', suspectId: 'kid', description: '아이들이 도깨비에게서 빼앗아 장난치다 부러뜨리고 버린 낡은 짚 감투 조각. 예쁜 리폼 재료로 쓸 수 있다.' },
    { id: 'K-03', name: '장난이었다는 진술', phase: 2, kind: 'suspect', suspectId: 'kid', description: '“투명한 아저씨가 자꾸 놀자고 해서 괴물인 줄 알고 애들이랑 쫓아낸 건데... 괴롭히려고 한 건 아니에요.”' },
    { id: 'K-04', name: 'SNS 게시물 업로드 기록', phase: 2, kind: 'suspect', suspectId: 'kid', description: '“우리 아파트에 괴물 나타남 ㅋㅋㅋ”이라며 조회수를 올리기 위해 쇼츠 영상을 제작했던 기록.' },

    // 용의자 5: 아파트 경비원 단서
    { id: 'G-01', name: '낡은 메밀묵 가루 항아리', phase: 2, kind: 'suspect', suspectId: 'guard', description: '경비실 구석에 보관되어 있던 항아리. 옛날 도깨비에게 바치던 메밀묵을 쑤기 위한 전통 재료이다.' },
    { id: 'G-02', name: '옛 토속 신앙 진술', phase: 2, kind: 'suspect', suspectId: 'guard', description: '“이 아파트가 들어서기 전 여긴 오랜 도깨비터였어. 그 도깨비는 메밀묵이랑 알록달록한 예쁜 장난감 방망이만 주면 아이처럼 좋아하곤 했지.”' },
    { id: 'G-03', name: '혼자 촛불을 켜둔 일지', phase: 2, kind: 'suspect', suspectId: 'guard', description: '굿이 일어난 날 밤, 성난 도깨비를 달래려 홀로 경비실 뒤편에 메밀묵을 바치려다 회장에게 저지당하고 쫓겨난 기록.' },

    // 조합 완성 단서
    { id: 'R-01', name: '화해의 공물 세트', phase: 2, kind: 'suspect', combinationOnly: true, locationText: '인벤토리 조합 완료', description: '김이 모락모락 나는 따뜻한 메밀묵과 아이들의 반성을 담아 예쁘게 리폼한 도깨비방망이 세트. 도깨비의 마음을 돌릴 수 있다.' }
  ],
  deduction: {
    questions: [
      { id: 'q1', type: 'choice', text: '아파트 이상 현상 소동의 진짜 원인은 무엇인가?', choices: ['자연 지진', '배관 파열', '퇴마굿', '도둑의 침입'], answer: '퇴마굿' },
      { id: 'q2', type: 'choice', text: '도깨비를 강제로 쫓아내려 굿판을 주도한 인물은 누구인가?', choices: ['입주자대표 회장', '아파트 관리소장', '무속인', '초등학생', '아파트 경비원'], answer: '입주자대표 회장' },
      { id: 'q3', type: 'choice', text: '도깨비가 인간을 깊이 혐오하게 된 결정적 계기는 무엇인가?', choices: ['집값 하락', '아이들의 괴롭힘', '경비원의 배신', '무속인의 부적'], answer: '아이들의 괴롭힘' },
      { id: 'q4', type: 'written', text: '상처받은 도깨비의 마음을 풀기 위해 바쳐야 할 핵심 공물은 무엇인가?', requirements: [['메밀묵']] }
    ]
  },
  truth: {
    title: '사건의 전말',
    chapters: [
      { title: '잊혀진 땅의 터줏대감', body: '더 라임 힐스 아파트가 들어서기 훨씬 전부터 이곳은 인간과 도깨비가 함께 어우러지던 오랜 도깨비터였습니다. 아파트가 들어선 후에도 도깨비는 자리를 떠나지 않고 인간을 좋아해 밤마다 가벼운 장난을 치며 함께 살아가고자 했습니다.' },
      { title: '주민들의 이기심과 무자비한 굿판', body: '그러나 이상 현상이 발생하자 입주자대표 회장은 아파트의 부동산 가치 하락을 두려워했습니다. 회장은 관리소장을 압박하고 무속인을 불러 비밀리에 대규모 퇴마 굿을 치렀습니다. 무속인의 경고에도 불구하고 터주신과 도깨비를 강제로 몰아내려 했고, 이로 인해 아파트 전체의 기운이 뒤틀렸습니다.' },
      { title: '아이들의 배신과 도깨비의 상처', body: '쫓겨날 위기에 처한 도깨비는 존재를 알리고 도움을 청하기 위해 단지 내 아이들에게 다가갔습니다. 그러나 아이들은 도깨비를 신기해하기는커녕 스마트폰 플래시를 비추고 돌을 던지며 조롱했습니다. 순수한 아이들에게마저 배신당한 도깨비는 깊은 절망과 자존감 상처를 입고 결국 인간을 혐오하는 앙심을 품게 되었습니다.' },
      { title: '진심 어린 사과와 화해', body: '탐정은 주민들의 이기심과 아이들의 잔인함이 불러온 진실을 밝혀냈습니다. 그리고 경비원의 옛 기억을 토대로 따뜻한 메밀묵과 아이들의 반성이 담긴 예쁜 도깨비방망이를 만들어 지하주차장의 도깨비에게 바쳤습니다. 진심 어린 사죄를 받은 도깨비는 비로소 마음의 문을 열고 분노를 거두었으며, 아파트에는 다시 평화가 찾아왔습니다.' }
    ]
  },
  endingLetter: {
    from: '더 라임 힐스 아파트 경비원',
    subject: '도깨비와 아파트를 구해주셔서 감사합니다',
    sign: '감사를 담아, 경비원 올림',
    body: '탐정님께,\n\n탐정님 덕분에 우리 아파트에 찾아왔던 큰 재앙을 막고, 오랫동안 이 땅을 지켜주던 도깨비 친구의 상처받은 마음도 달래줄 수 있었습니다.\n\n입주자대표 회장과 관련자들도 자신의 이기적인 행동을 반성하게 되었습니다. 작지만 마음을 담은 선물을 보내드리니 받아주세요.'
  },
  ending: { perfect: '더 라임 힐스 아파트 소동의 진실을 밝히고 도깨비와의 화해를 이끌어냈습니다.' },
  reward: { failed: 1, partial: 2, perfect: 3 },
  sound: {
    bgm: {
      main: ['assets/audio/ep04_sfx.mp3', 'assets/audio/사건의 진상_추리 느낌.mp3'],
      investigation: ['assets/audio/ep04_sfx.mp3', 'assets/audio/사건의 진상_추리 느낌.mp3'],
      deduction: ['assets/audio/ep04_sfx.mp3', 'assets/audio/사건의 진상_추리 느낌.mp3'],
      truth: ['assets/audio/ep04_sfx.mp3', 'assets/audio/사건의 진상_추리 느낌.mp3'],
      result: ['assets/audio/ep04_sfx.mp3', 'assets/audio/사건의 진상_추리 느낌.mp3'],
      ending: ['assets/audio/ep04_sfx.mp3', 'assets/audio/사건의 진상_추리 느낌.mp3']
    }
  }
};