export const episode5 = {
  id: 'ep-05',
  title: '별빛 수정의 행방',
  subtitle: '난쟁이 마을의 수호 보물 도난 사건',
  intro: '축제 전날 밤, 난쟁이 마을 회관의 잠긴 방에서 마을의 수호 보물인 「별빛 수정」이 감쪽같이 사라졌다.',
  investigationTurns: 15,
  recordRoom: false,
  notifications: { 
    clueUnlocked: '현장에서 새로운 조사 단서가 열렸습니다.', 
    testimonyUnlocked: '새로운 난쟁이의 증언을 확인할 수 있습니다.', 
    passwordUnlocked: '잠긴 단서를 확인할 수 있습니다.' 
  },
  interviewHeading: '용의자들의 진술과 소지품 단서',
  letter: {
    from: '난쟁이 마을 촌장',
    subject: '사라진 별빛 수정을 찾아주세요',
    sign: '난쟁이 마을 촌장 드림',
    body: '탐정님께,\n\n축제를 앞둔 어젯밤, 우리 마을의 가장 소중한 수호 보물인 「별빛 수정」이 마을 회관에서 사라졌습니다. 회관 문은 안쪽에서 잠겨 있었고, 좁은 창문으로 누군가 들어온 흔적이 있습니다.\n\n사건 당시 회관에 접근할 수 있었던 이는 마을 경비 루비, 보석 세공사 파루, 그리고 약초꾼 모스 세 명뿐입니다. 현장과 세 난쟁이의 소지품, 증언을 살펴 진짜 범인과 사건의 진실을 밝혀주세요.'
  },
  scene: { label: '난쟁이 마을 · 마을 회관 내부', art: 'assets/images/ep05_bg.png' },
  witnesses: [
    { id: 'ruby', name: '루비', role: '마을 경비', info: '회관의 정식 열쇠를 관리한다. (빨간 옷)', testimony: '저는 회관의 정식 열쇠를 관리하고 있습니다. 사건 당일 저녁 열쇠를 잠시 잃어버렸다가 곧 찾았어요. 회관 뒤편 창문으로 누군가 향하는 걸 봤는데, 파루인지 모스인지는 확실하지 않아요. 제가 색을 잘 구분하지 못하거든요.' },
    { id: 'paru', name: '파루', role: '보석 세공사', info: '별빛 수정의 빛을 점검하고 다듬는다. (파란 옷)', testimony: '저는 21시까지 별빛 수정 점검을 마치고 작업실로 돌아갔습니다. 초록 옷을 입은 모스가 사건 당일 회관 근처에서 뭔가를 숨기는 것처럼 행동하더군요. 루비가 열쇠를 잃어버렸다는 얘기도 들었습니다.' },
    { id: 'moss', name: '모스', role: '약초꾼', info: '숲의 약초와 광물을 채집하며 수정을 연구한다. (초록 옷)', testimony: '저는 별빛 수정 근처의 빛나는 버섯을 연구하고 있었습니다. 루비가 해 질 무렵 회관에 들어가는 걸 봤고, 사건이 일어나기 전에 파루가 천으로 무언가를 감싼 채 작업실 쪽으로 걸어가는 걸 봤어요.' }
  ],
  suspects: [
    { id: 'ruby', name: '루비', role: '마을 경비', portrait: 'assets/images/ep05_ph_01.png', bio: '책임감이 강하지만 자존심이 세다. 마을 회관 열쇠를 관리한다.', testimonyId: 'ruby', items: ['R-01', 'R-02', 'R-03'] },
    { id: 'paru', name: '파루', role: '보석 세공사', portrait: 'assets/images/ep05_ph_02.png', bio: '꼼꼼하고 세공 기술에 대한 자부심이 강하다. 별빛 수정을 다듬는다.', testimonyId: 'paru', items: ['B-01', 'B-02', 'B-03'] },
    { id: 'moss', name: '모스', role: '약초꾼', portrait: 'assets/images/ep05_ph_03.png', bio: '호기심이 많고 혼자 행동한다. 수정이 동물과 버섯에 미치는 영향을 연구한다.', testimonyId: 'moss', items: ['G-01', 'G-02', 'G-03'] }
  ],
  combinations: [],
  clues: [
    // 현장 조사 단서 (Scene)
    { id: 'S-01', name: '잠긴 회관 문', phase: 1, kind: 'scene', position: { x: 30, y: 50 }, description: '문은 안쪽에서 잠겨 있었지만 자물쇠에 강제로 부순 흔적은 없다. 문틈을 자세히 살펴보니 아주 가느다란 은빛 섬유가 끼어 있다.' },
    { id: 'S-02', name: '별빛 수정의 받침대', phase: 1, kind: 'scene', position: { x: 50, y: 60 }, description: '수정이 놓였던 자리에 날카로운 날에 긁힌 자국이 새로 남아 있다. 자국의 폭은 세공 도구와 비슷하지만, 받침대에는 오래된 흠집들도 여러 개 섞여 있다.' },
    { id: 'S-03', name: '푸른 가루와 발자국', phase: 1, kind: 'scene', position: { x: 45, y: 75 }, description: '미세한 푸른색 가루가 창문에서 받침대까지 이어져 뿌려져 있다. 함께 남은 발자국의 크기는 세 난쟁이 모두와 비슷하다.' },
    { id: 'S-04', name: '회관 뒤편 창문', phase: 1, kind: 'scene', position: { x: 75, y: 35 }, description: '창문은 열려 있었고 창틀에는 안쪽을 향해 나 있는 긁힌 자국과 함께 붉은 밀랍 조각이 붙어 있다.' },
    { id: 'S-05', name: '방문 기록판', phase: 1, kind: 'scene', position: { x: 20, y: 30 }, description: '기록판에는 루비가 저녁 경비를 맡았고, 파루는 수정 점검을 마쳤으며, 모스는 숲에서 약초를 채집했다고 적혀 있다. 어제 기록에는 모스가 버섯 연구를 위해 방문했던 기록도 남아 있다.' },

    // 용의자 A: 루비 단서
    { id: 'R-01', name: '회관 열쇠 꾸러미', phase: 2, kind: 'suspect', suspectId: 'ruby', description: '회관의 정식 열쇠가 걸려 있는 꾸러미. 루비는 사건 당일 저녁 열쇠를 잠시 잃어버렸지만 곧 회관 근처에서 다시 찾았다고 주장한다.' },
    { id: 'R-02', name: '붉은 밀랍과 봉인 도장', phase: 2, kind: 'suspect', suspectId: 'ruby', description: '루비의 가방에서 발견된 붉은 밀랍. 루비는 창문 잠금장치가 헐거워 임시로 밀랍을 발라 봉인해 두었다고 설명한다.' },
    { id: 'R-03', name: '목격담 (루비의 증언)', phase: 2, kind: 'suspect', suspectId: 'ruby', description: '“누군가가 회관 뒤편 창문으로 향하는 걸 봤어. 파루인지 모스인지는 확실하지 않아. 나는 초록색과 파란색을 잘 구분하지 못하거든.”' },

    // 용의자 B: 파루 단서
    { id: 'B-01', name: '푸른 연마 가루', phase: 2, kind: 'suspect', suspectId: 'paru', description: '파루의 소지품에서 발견된 가루. 별빛 수정을 다듬고 연마할 때 사용하는 전용 푸른 가루이다.' },
    { id: 'B-02', name: '은제 세공 도구', phase: 2, kind: 'suspect', suspectId: 'paru', description: '파루가 사용하는 세공 도구. 끝부분에 미세하게 깎인 흠집이 남아 있다. 파루는 평소 보석을 세공하다 생긴 흔적이라고 말한다.' },
    { id: 'B-03', name: '모스와 루비에 대한 증언', phase: 2, kind: 'suspect', suspectId: 'paru', description: '“초록 옷을 입은 모스가 사건 당일 회관 근처에서 뭔가를 숨기는 것처럼 행동했어. 그리고 루비가 열쇠를 잃어버렸다는 얘기도 들었지.”' },

    // 용의자 C: 모스 단서
    { id: 'G-01', name: '약초 주머니', phase: 2, kind: 'suspect', suspectId: 'moss', description: '모스의 약초 주머니 안에서 푸른색 가루가 묻은 천 조각이 발견된다. 모스는 약초를 염색할 때 사용한 천이라고 설명한다.' },
    { id: 'G-02', name: '은빛 실타래', phase: 2, kind: 'suspect', suspectId: 'moss', description: '가방 속의 은빛 실타래. 끝부분이 최근에 무언가에 걸려 끊어진 듯하다. 모스는 숲에서 빛나는 버섯 채취 경로를 표시할 때 썼다고 주장한다.' },
    { id: 'G-03', name: '루비와 파루에 대한 증언', phase: 2, kind: 'suspect', suspectId: 'moss', description: '“루비가 해 질 무렵 회관에 들어가는 걸 봤어. 그리고 사건이 일어나기 전에 파루가 천으로 무언가를 감싼 채 작업실 쪽으로 걸어가는 걸 봤지.”' }
  ],
  deduction: {
    questions: [
      { id: 'q1', type: 'choice', text: '별빛 수정을 훔쳐간 진범은 누구인가?', choices: ['루비', '파루', '모스'], answer: '파루' },
      { id: 'q2', type: 'choice', text: '범인이 별빛 수정을 몰래 가져간 진짜 동기는 무엇인가?', choices: ['보물을 팔아 돈을 벌기 위해', '수정의 약해진 빛을 몰래 복구하기 위해', '마을 축제를 망치기 위해', '모스에게 죄를 뒤집어씌우기 위해'], answer: '수정의 약해진 빛을 몰래 복구하기 위해' },
      { id: 'q3', type: 'choice', text: '범인이 회관의 잠긴 문을 통과하거나 현장을 조작할 때 사용한 트릭의 핵심 요소는?', choices: ['밀랍 봉인', '푸른 연마 가루와 세공 도구', '은빛 실과 열쇠', '버섯 포자 마법'], answer: '푸른 연마 가루와 세공 도구' }
    ]
  },
  truth: {
    title: '사건의 전말',
    chapters: [
      { title: '수호 보물의 비밀', body: '보석 세공사 파루는 최근 별빛 수정의 빛이 조금씩 약해지고 있다는 사실을 가장 먼저 알아차렸습니다. 파루는 자신의 세공 기술로 수정을 완전히 복구할 수 있다고 생각했지만, 마을 사람들에게 이 사실을 말하면 혼란이 올까 봐 두려워했습니다.' },
      { title: '위장된 도난 사건', body: '파루는 수정을 몰래 자신의 작업실로 가져가 다듬은 뒤 돌려놓기로 결심했습니다. 그는 수정을 천으로 감싸 옮기면서 세공용 푸른 연마 가루 흔적을 남겼고, 자신이 수정을 훔쳤다는 사실을 감추기 위해 받침대를 도구로 긁고 현장을 외부 침입처럼 위장했습니다.' },
      { title: '오해와 교란의 단서들', body: '약초꾼 모스는 버섯 연구를 위해 회관을 오가며 은빛 실을 사용했고 약초 주머니에 연마 가루가 옮겨붙어 의심을 받았습니다. 경비 루비 역시 열쇠 관리 부주의와 밀랍 흔적으로 오해를 샀지만, 두 사람은 범행과 무관했습니다.' },
      { title: '마음 따뜻한 진실', body: '파루의 목적은 탐욕이나 악의가 아니라 마을의 수호 보물인 별빛 수정을 지키려는 자부심과 책임감이었습니다. 진실을 밝혀낸 덕분에 별빛 수정은 파루의 정성스러운 세공을 거쳐 다시 예전처럼 빛을 되찾게 됩니다.' }
    ]
  },
  endingLetter: {
    from: '난쟁이 마을 촌장',
    subject: '별빛 수정을 찾아주셔서 감사합니다',
    sign: '감사를 담아, 난쟁이 마을 촌장 올림',
    body: '탐정님께,\n\n덕분에 사건의 진실을 정확히 밝혀내고, 파루의 진심과 함께 수호 보물인 별빛 수정도 무사히 지켜낼 수 있었습니다.\n\n마을 축제가 다시 환한 빛 속에서 열리게 되었습니다. 감사의 마음을 담아 작은 선물을 보내드립니다.'
  },
  ending: { perfect: '별빛 수정 도난 사건의 진범과 범행 동기를 완벽하게 밝혀냈습니다.' },
  reward: { failed: 1, partial: 2, perfect: 3 },
  sound: {
    bgm: {
      main: ['assets/audio/ep05_sfx.mp3', 'assets/audio/사건의 진상_추리 느낌.mp3'],
      investigation: ['assets/audio/ep05_sfx.mp3', 'assets/audio/사건의 진상_추리 느낌.mp3'],
      deduction: ['assets/audio/ep05_sfx.mp3', 'assets/audio/사건의 진상_추리 느낌.mp3'],
      truth: ['assets/audio/ep05_sfx.mp3', 'assets/audio/사건의 진상_추리 느낌.mp3'],
      result: ['assets/audio/ep05_sfx.mp3', 'assets/audio/사건의 진상_추리 느낌.mp3'],
      ending: ['assets/audio/ep05_sfx.mp3', 'assets/audio/사건의 진상_추리 느낌.mp3']
    }
  }
};