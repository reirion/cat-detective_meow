export const episode4 = {
  id: 'ep-04', 
  title: '자색양을 구해주세요', 
  subtitle: '에어프라이어 성과 사라진 자색 양',
  intro: '유기농 마을의 스타 자색 양이 흔적도 없이 사라졌다. 현장에는 어질러진 흙 자국만 남아있는데...',
  investigationTurns: 18,
  recordRoom: true,
  notifications: { 
    clueUnlocked: '새로운 구석을 조사할 수 있습니다.', 
    testimonyUnlocked: '새로운 진술을 확인할 수 있습니다.', 
    passwordUnlocked: '비밀번호를 입력하여 상자를 열 수 있습니다.' 
  },
  letter: {
    from: '밤고구마 (구마)', 
    subject: '마을의 스타 자색 양이 사라졌어요!', 
    sign: '유기농 마을 탐정 구마 올림',
    body: `{{nickname}} 탐정님께,\n\n저희 베란다 유기농 박스 마을의 제일 유명하고 도도한 '자색 양'이 오늘 아침 흔적도 없이 사라졌습니다!\n\n마을 주민인 감자 아저씨, 양파 군, 대파 아주머니 모두 수상한 행동을 보이고 있어요. 바닥에는 거대한 손의 흔적과 매운 즙, 흙 자국이 뒤엉켜 있습니다.\n\n자색 양이 어디로 갔는지, 혹시 무서운 '에어프라이어 성'으로 끌려간 것은 아닌지 밝혀주세요!`
  },
  scene: { label: '베란다 박스 마을', art: 'assets/images/ep04_bg.png' },
  witnesses: [
    { id:'potato', name:'감자 아저씨', role:'동네 주민', info:'늘 묵묵히 자리를 지키는 둥글둥글한 이웃 감자.', testimony:'아침에 거대한 손이 들어왔을 때 너무 무서워서 구석에 숨어있었어. 대파 아주머니가 거대한 손에게 뭐라 속삭이는 걸 똑똑히 들었지!' },
    { id:'onion', name:'양파 군', role:'소심한 친구', info:'매운 눈물을 자주 흘리는 소심한 양파. 자색 양을 몰래 짝사랑 중.', testimony:'아침에 거대한 손이 찾아왔을 때 자색 양은 이미 없었어요! 에어프라이어 성 쪽에서 따뜻한 꿀 냄새가 났단 말이에요!' },
    { id:'greenonion', name:'대파 아주머니', role:'마을 정보통', info:'키가 크고 잎사귀가 날카로운 마을의 수다쟁이 대파.', testimony:'오호호, 내가 자색 양의 매끈한 자색 피부를 조금 부러워하긴 했지. 하지만 난 아무 짓도 안 했다구!' },
    { id:'purple', name:'자색 양', role:'실종자', info:'마을 최고의 촉촉함과 달콤함을 자랑하는 인플루언서 고구마.', testimony:'자색 양의 다이어리부터 조사해보자.' }
  ],
  suspects: [
    {id:'potato', name:'감자 아저씨', role:'동네 주민', portrait:'assets/images/potato_ph.png', bio:'흙이 무성하게 묻어있는 튼튼한 감자. 싹이 나지 않게 매일 운동한다.', testimonyId:'potato', items:['W-01-A','W-01-B','W-01-C','W-01-D']},
    {id:'onion', name:'양파 군', role:'소심한 친구', portrait:'assets/images/onion_ph.png', bio:'껍질이 겹겹이 싸인 양파. 비밀이 많고 혼자 울 때가 많다.', testimonyId:'onion', items:['W-02-A','W-02-B','W-02-C','W-02-D']},
    {id:'greenonion', name:'대파 아주머니', role:'마을 정보통', portrait:'assets/images/greenonion_ph.png', bio:'길쭉한 몸집을 자랑하며 박스 마을의 모든 소문을 쥐고 흔든다.', testimonyId:'greenonion', items:['W-03-A','W-03-B','W-03-C','W-03-D']},
    {id:'purple', name:'자색 양', role:'실종자', portrait:'assets/images/purple_ph.png', bio:'도도하고 달콤한 향을 풍기는 최고의 자색 고구마.', testimonyId:'purple', items:['W-04-A','W-04-B','W-04-C']}
  ],
  combinations: [
    { id: 'ep04_selection', clueIds: ['W-03-A', 'W-03-B'], resultClueId: 'W-03-D', successMessage: '대파 아주머니의 잎사귀 흔적과 레시피북을 대조해보니, 아주머니가 자색 양을 밀어 올려 거대한 손(주인) 눈에 띄게 만든 정황이 드러났다!' }
  ],
  clues: [
    // [현장 단서 6개]
    {id:'S-01', name:'찢어진 일기장 조각', phase:1, kind:'scene', position:{x:15, y:30}, description:'자색 양의 찢어진 일기 조각이다.\n"내가 가장 좋아하는 암호는 내 생일이야. 첫 싹이 난 날(04일)과 마을 최고 촉촉도(08)를 합친 \'0408\'이지!"'},
    {id:'S-02', name:'바닥의 스크래치와 키 측정표', phase:1, kind:'scene', position:{x:35, y:20}, description:'박스 벽면의 키 측정표 옆에 15cm 이상의 길쭉한 잎사귀 스크래치 자국이 남아있다. 키가 작은 고구마나 감자의 흔적은 아니다.'},
    {id:'S-03', name:'탄산수 병뚜껑', phase:1, kind:'scene', position:{x:55, y:40}, description:'3x3 격자 모양의 홈이 파여있는 탄산수 병뚜껑이다. 누군가 이걸로 패턴을 연습한 듯하다.'},
    {id:'S-04', name:'알싸하고 매운 즙 자국', phase:1, kind:'scene', position:{x:75, y:30}, description:'현장 바닥에 방울방울 떨어진 매운 즙 자국. 양파나 대파의 체액임이 분명하다.'},
    {id:'S-05', name:'거인의 메모지', phase:1, kind:'scene', position:{x:25, y:70}, description:'거대한 손(주인님)이 남긴 포스트잇.\n"오늘의 온도: 180도, 시간: 20분. 최고로 달콤할 때 꺼낼 것!"', passwordRequired:true, passwordAnswer:'SOS', passwordMode:'text', passwordCaseSensitive:false, passwordHint:'수첩에 적힌 구조 신호(도움의 요청)'},
    {id:'S-06', name:'끌린 흙 자국', phase:1, kind:'scene', position:{x:65, y:75}, description:'박스 중앙에서부터 문턱 너머 에어프라이어 성 쪽으로 이어진 길게 끌린 흙 흔적이다.'},

    // [서류 및 기록 단서]
    {id:'F-01', name:'자색 양의 다이어리', phase:1, kind:'document', requires:{all:['S-01']}, locationText:'현장 조사 → 기록 보관함 → 자색 양의 다이어리', description:'"1번 햇빛은 촉촉도 4, 2번 햇빛은 촉촉도 8... 나는 언제나 제일 촉촉한 2번 햇빛 자리가 좋아!"\n달콤함과 촉촉함에 대한 자색 양의 집착이 적혀있다.'},
    {id:'F-02', name:'에어프라이어 성 조종법', phase:1, kind:'document', requires:{all:['S-05']}, locationText:'현장 조사 → 기록 보관함 → 에어프라이어 성 조종법', passwordRequired:true, passwordAnswer:'180', passwordMode:'text', passwordCaseSensitive:false, passwordHint:'거인의 메모지에 적힌 성의 작동 온도는 몇 도인가?', description:'에어프라이어 성 내부를 보려면 알맞은 온도와 시간을 설정해야 한다. 온도를 180으로 맞추면 안쪽의 따뜻한 조명이 켜진다.'},
    {id:'M-01', name:'에어프라이어 성 내부', phase:1, kind:'document', locationText:'현장 조사 → 에어프라이어 성 내부', image:'assets/images/ep02_M-01.png', requires:{all:['S-06','F-02']}, passwordRequired:true, passwordAnswer:'꿀', passwordMode:'text', passwordCaseSensitive:false, passwordHint:'노릇노릇하게 익어갈 때 고구마 피부에서 흘러 나오는 달콤한 이것은?', description:'에어프라이어 성 안쪽에서 노릇노릇하게 익어가는 자색 양이 보인다! 그녀는 위협받아 끌려온 것이 아니라, 최고로 달콤해지기 위한 영광스러운 찜질을 즐기는 중이었다.'},

    // [용의자 단서 - 감자 아저씨]
    {id:'W-01-A', name:'잠긴 감자폰', phase:2, kind:'suspect', suspectId:'potato', passwordRequired:true, passwordMode:'text', passwordAnswer:'0408', passwordHint:'자색 양의 생일(첫 싹이 난 날 + 촉촉도 숫자)', description:'감자 아저씨의 메모: "오전 7시, 양파 군이 베란다 구석으로 3x3 격자 상자를 들고 수상하게 이동하는 것을 봄."'},
    {id:'W-01-B', name:'흙 털이 브러시', phase:2, kind:'suspect', suspectId:'potato', description:'아저씨가 싹을 방지하고 몸을 단장할 때 쓰는 브러시. 현장의 흙 자국과는 종류가 다르다.'},
    {id:'W-01-C', name:'감자 아저씨의 운동 일지', phase:2, kind:'suspect', suspectId:'potato', description:'"오전 6시~8시: 구석에서 굴러다니며 싹 트지 않기 운동 수행." 아저씨에게는 명확한 알리바이가 있다.'},
    {id:'W-01-D', name:'이웃의 증언', phase:2, kind:'suspect', suspectId:'potato', description:'감자 아저씨는 매일 아침 구석에서 굴러다니기 때문에 거대한 손의 눈에 띄지 않았다고 한다.'},

    // [용의자 단서 - 양파 군]
    {id:'W-02-A', name:'패턴 잠금 상자', phase:2, kind:'suspect', suspectId:'onion', passwordRequired:true, passwordMode:'direction', passwordAnswer:['right','right','down','down'], passwordHint:'탄산수 병뚜껑의 오른쪽 아래 방향 흐름', description:'상자 안에서 \'자색 양 팬클럽 1호 회원증\'과 \'에어프라이어 성 지도\'가 나왔다! 양파 군은 자색 양을 오랫동안 짝사랑해 왔다.'},
    {id:'W-02-B', name:'매운 눈물 휴지', phase:2, kind:'suspect', suspectId:'onion', description:'현장에서 발견된 매운 즙(S-04)과 성분이 완벽히 일치한다. 양파 군은 자색 양이 사라진 걸 보고 현장에서 슬퍼서 울었던 것이다.'},
    {id:'W-02-C', name:'양파 군의 비밀 일기', phase:2, kind:'suspect', suspectId:'onion', description:'"대파 아주머니가 자색 양의 매끈한 피부를 질투하며, 조만간 에어프라이어 성으로 보내버리겠다고 위협했다."'},
    {id:'W-02-D', name:'양파 군의 고백', phase:2, kind:'suspect', suspectId:'onion', description:'"저는 자색 양을 너무 좋아해서 지켜보고 있었을 뿐이에요! 진짜로 아주머니가 자색 양을 밀치는 걸 봤어요!"'},

    // [용의자 단서 - 대파 아주머니]
    {id:'W-03-A', name:'화장대 서랍 (방향 암호)', phase:2, kind:'suspect', suspectId:'greenonion', passwordRequired:true, passwordMode:'direction', passwordAnswer:['left','down','right','up'], passwordHint:'양파 군이 상자를 옮긴 방향 (좌 -> 하 -> 우 -> 상)', description:'서랍 속에서 \'거인의 오늘자 요리 레시피북\'이 발견되었다. "가장 색이 고르고 달콤한 고구마를 선택할 것"이라는 문구에 동그라미가 쳐져 있다.'},
    {id:'W-03-B', name:'대파의 잎사귀 흔적', phase:2, kind:'suspect', suspectId:'greenonion', description:'현장에 남아있던 15cm 이상의 스크래치 자국(S-02)은 대파 아주머니의 뾰족한 잎사귀 마찰 자국과 정확히 일치한다.'},
    {id:'W-03-C', name:'질투 어린 소문', phase:2, kind:'suspect', suspectId:'greenonion', description:'대파 아주머니는 늘 자색 양의 피부와 인기를 시샘하여 박스 마을 사람들에게 자색 양의 험담을 하고 다녔다.'},
    {id:'W-03-D', name:'대파 아주머니의 밀어내기', phase:2, kind:'suspect', suspectId:'greenonion', combinationOnly:true, requires:{all:['W-03-A','W-03-B']}, description:'대파 아주머니는 질투심에 자색 양을 거대한 손(주인)의 눈에 가장 잘 띄는 박스 맨 위쪽으로 밀어 올렸다. 결국 자색 양이 간택되도록 만든 결정적 원인 제공자다.'},

    // [용의자 단서 - 자색 양]
    {id:'W-04-A', name:'명품 꿀고구마 보증서', phase:2, kind:'suspect', suspectId:'purple', description:'자색 양은 마을에서 가장 높은 당도와 촉촉함을 가진 명품 고구마임을 증명하는 문서.'},
    {id:'W-04-B', name:'에어프라이어 입성 꿈', phase:2, kind:'suspect', suspectId:'purple', description:'"나는 언젠가 따뜻하고 거룩한 에어프라이어 성에 들어가 진정한 꿀을 흘리는 최고 요리가 될 거야!" 자색 양에겐 이것이 영광이었다.'},
    {id:'W-04-C', name:'자색 양의 행적', phase:2, kind:'suspect', suspectId:'purple', description:'박스 맨 위로 밀려 올라간 자색 양은 마침 간식을 찾던 거대한 손에 의해 기꺼이 간택되어 에어프라이어 성으로 들어갔다.'}
  ],
  deduction: {
    questions: [
      {id:'q1', type:'choice', text:'자색 양이 사라지게 만든 사건의 원인 제공자는 누구인가?', choices:['대파 아주머니','양파 군','감자 아저씨','밤고구마 (구마)'], answer:'대파 아주머니'},
      {id:'q2', type:'written', text:'자색 양이 박스 마을에서 사라져 에어프라이어 성으로 가기까지의 과정을 설명하시오.', evidence:['S-02','S-06','W-03-D','W-04-C'], requiredEvidence:['W-03-D','W-04-C'], requiredEvidenceCount:1, requirements:[['대파','질투','밀어','위'],['손','간택','주인','선택','에어프라이어']]},
      {id:'q3', type:'written', text:'양파 군이 현장에 매운 즙을 남기고 수상하게 행동한 진짜 이유는 무엇인가?', evidence:['S-04','W-02-A','W-02-B','W-02-D'], requiredEvidence:['W-02-A','W-02-B'], requiredEvidenceCount:1, requirements:[['짝사랑','좋아','팬클럽'],['울었','슬퍼','눈물','즙']]},
      {id:'q4', type:'choice', text:'에어프라이어 성에 들어간 자색 양의 현재 상태는 어떠한가?', choices:['따뜻하게 익어가며 행복해하고 있다','납치당해 갇혀서 슬퍼하고 있다','마을로 돌아오기 위해 탈출을 시도 중이다','이미 흔적도 없이 먹혀버렸다'], answer:'따뜻하게 익어가며 행복해하고 있다'}
    ]
  },
  truth: {
    title:'사건의 전말',
    chapters:[
      {title:'자색 양의 화려한 자태와 질투', body:'친환경 박스 마을의 스타인 자색 양은 특유의 도도함과 매끈한 피부, 높은 당도로 주민들의 부러움을 샀다. 그러나 대파 아주머니는 그런 자색 양을 항상 질투해 왔으며, 언젠가 자색 양을 거대한 손(주인님)의 눈에 띄게 만들어 마을에서 치워버리겠다고 다짐했다.'},
      {title:'어느 날 아침의 공작', body:'오늘 아침, 대파 아주머니는 자색 양이 잠든 사이에 뾰족한 잎사귀로 그녀를 박스 꼭대기로 밀어 올렸다. 이 과정에서 바닥에 잎사귀 스크래치(S-02)가 남았고 자색 양이 위로 끌려간 흔적(S-06)이 생겼다.'},
      {title:'거대한 손의 간택', body:'아침 출근길, 출출했던 거대한 손(주인님)은 베란다 박스 제일 위에 올려져 있던 가장 매끈하고 달콤한 자색 양을 집어 들었다. 자색 양에게 에어프라이어 성에 들어가는 것은 평생의 꿈이었기에, 그녀는 기꺼이 손에 올려져 에어프라이어 성으로 이동했다.'},
      {title:'양파 군의 오해와 눈물', body:'자색 양을 은밀히 짝사랑하던 양파 군은 뒤늦게 박스 위로 올라갔다가 자색 양이 사라진 것을 알고 슬픔에 겨워 매운 눈물(S-04)을 흘렸다. 그는 자색 양을 구하겠답시고 에어프라이어 지도를 챙겨 수상하게 움직였던 것이다.'},
      {title:'성에서의 재회', body:'구마와 탐정은 에어프라이어 성의 온도(180도)와 시간(20분)을 설정하고 내부를 들여다보았다. 그곳에는 납치당해 괴로워하는 피해자가 아닌, 따뜻한 온열 조명을 받으며 노릇노릇 꿀을 흘리고 행복해하는 자색 양이 손을 흔들고 있었다.'},
      {title:'마을의 평화', body:'사건의 내막이 밝혀지자 대파 아주머니는 질투심에 눈이 멀어 친구를 위험(? )에 빠뜨릴 뻔했다며 사과했다. 자색 양은 가장 명예로운 순간을 맞이했고, 구마 탐정은 마을의 평화를 지켜낸 공로로 맛있는 흙목욕권을 포상으로 받았다.'}
    ]
  },
  endingLetter:{
    from:'밤고구마 (구마)',
    subject:'사건을 완벽하게 해결해 주셔서 감사합니다!',
    sign:'고구마 마을을 대표하여, 구마 드림',
    body:`탐정님! 덕분에 자색 양이 무서운 악당에게 끌려간 게 아니라 명예로운 '오늘의 간식'으로 간택된 거란 사실을 알게 되었어요!\n\n대파 아주머니도 진심으로 반성하고 있고, 양파 군도 마음을 추스르고 있답니다.\n\n감사의 표시로 저희 마을 특산품인 '달콤촉촉 햇밤고구마 1박스'와 고양이용 츄르를 함께 보내드립니다. 다음에도 사건이 생기면 꼭 도와주세요!`
  },
  ending:{perfect:'고구마 마을은 다시 평화를 되찾았고, 에어프라이어 성에서는 고소한 냄새가 풍겨온다.'},
  reward:{failed:1, partial:2, perfect:3},
  sound:{
    bgm:{
      main:'assets/audio/Sweet_Sweet_Sweet.mp3',
      investigation:'assets/audio/Potato_Detective.mp3',
      deduction:'assets/audio/Potato_Detective.mp3',
      truth:'assets/audio/Potato_Detective.mp3',
      result:'assets/audio/Potato_Detective.mp3',
      ending:'assets/audio/Potato_Detective.mp3'
    }
  }
};