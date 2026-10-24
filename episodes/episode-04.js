export const episode4 = {
  id: 'ep-04', 
  title: '자색 양을 구해주세요', 
  subtitle: '에어프라이어 성과 사라진 자색 양',
  intro: '유기농 박스 마을의 스타 자색 양이 흔적도 없이 사라졌다. 현장에는 어질러진 흙 자국만 남아있는데...',
  investigationTurns: 18,
  recordRoom: true,
  notifications: { 
    clueUnlocked: '새로운 구석을 조사할 수 있습니다.', 
    testimonyUnlocked: '새로운 진술을 확인할 수 있습니다.', 
    passwordUnlocked: '비밀번호를 입력하여 상자를 열 수 있습니다.' 
  },
  letter: {
    from: '밤고구마', 
    subject: '마을의 스타 자색 양이 사라졌어요!', 
    sign: '유기농 마을 구마 올림',
    body: `{{nickname}} 탐정님께,\n\n저희 베란다 유기농 박스 마을의 제일 유명하고 도도한 '자색 양'이 오늘 아침 흔적도 없이 사라졌습니다!\n\n마을 주민인 감자 아저씨, 양파 군, 대파 아주머니 모두 수상한 행동을 보이고 있어요. 바닥에는 거대한 손의 흔적과 매운 즙, 흙 자국이 뒤엉켜 있습니다.\n\n자색 양이 어디로 갔는지, 혹시 무서운 '에어프라이어 성'으로 끌려간 것은 아닌지 밝혀주세요!`
  },
  scene: { label: '유기농 박스 마을', art: 'assets/images/ep04_bg.png' },
  witnesses: [
    { id:'potato', name:'감자 아저씨', role:'동네 주민', info:'늘 묵묵히 자리를 지키는 둥글둥글한 이웃 감자.', testimony:'아침에 거대한 손이 들어왔을 때 너무 무서워서 구석에 숨어있었어. 대파 아주머니가 거대한 손에게 뭐라 속삭이는 걸 똑똑히 들었지!' },
    { id:'onion', name:'양파 군', role:'소심한 친구', info:'매운 눈물을 자주 흘리는 소심한 양파. 자색 양을 몰래 짝사랑 중.', testimony:'아침에 거대한 손이 찾아왔을 때 자색 양은 이미 없었어요! 에어프라이어 성 쪽에서 따뜻한 꿀 냄새가 났단 말이에요!' },
    { id:'greenonion', name:'대파 아주머니', role:'마을 정보통', info:'키가 크고 잎사귀가 날카로운 마을의 수다쟁이 대파.', testimony:'오호호, 내가 자색 양의 매끈한 자색 피부를 조금 부러워하긴 했지. 하지만 난 아무 짓도 안 했다구!' },
    { id:'purple', name:'자색 양', role:'실종자', info:'마을 최고의 촉촉함과 달콤함을 자랑하는 인플루언서 고구마.', testimony:'자색 양의 일기장부터 조사해보자.' }
  ],
  suspects: [
    {id:'potato', name:'감자 아저씨', role:'동네 주민', portrait:'assets/images/ep04_ph_01.jpg', bio:'흙이 무성하게 묻어있는 튼튼한 감자. 싹이 나지 않게 매일 운동한다.', testimonyId:'potato', items:['W-01-A','W-01-B','W-01-C','W-01-D']},
    {id:'onion', name:'양파 군', role:'소심한 친구', portrait:'assets/images/ep04_ph_02.jpg', bio:'껍질이 겹겹이 싸인 양파. 비밀이 많고 혼자 울 때가 많다.', testimonyId:'onion', items:['W-02-A','W-02-B','W-02-C','W-02-D']},
    {id:'greenonion', name:'대파 아주머니', role:'마을 정보통', portrait:'assets/images/ep04_ph_03.jpg', bio:'길쭉한 몸집을 자랑하며 박스 마을의 모든 소문을 쥐고 흔든다.', testimonyId:'greenonion', items:['W-03-A','W-03-B','W-03-C','W-03-D']},
    {id:'purple', name:'자색 양', role:'실종자', portrait:'assets/images/ep04_ph_04.png', bio:'도도하고 달콤한 향을 풍기는 최고의 자색 고구마.', testimonyId:'purple', items:['W-04-A','W-04-B','W-04-C']}
  ],
  combinations: [  ],
  clues: [
    // [현장 단서 6개]
    {id:'S-01', name:'찢어진 일기장 조각', phase:1, kind:'scene', position:{x:34, y:50}, description:'자색 양의 찢어진 일기 조각이다.\n"내 휴대폰 비밀번호는 내 생일이야. 4자리로 해뒀지! 생일은 처음 싹이 난 날(4일)과 다이어리에 적어둔 최고 촉촉도의 날을 합쳐서 정했어."' },
    {id:'S-02', name:'바닥의 스크래치와 키 측정표', phase:1, kind:'scene', position:{x:39, y:33}, description:'박스 벽면의 키 측정표 옆에 15cm 이상의 길쭉한 잎사귀 스크래치 자국이 남아있다. 키가 작은 고구마나 감자의 흔적은 아니다.'},
    {id:'S-03', name:'탄산수 병뚜껑', phase:1, kind:'scene', position:{x:23, y:84},  image:'assets/images/ep04_S-03.png',description:'3x3 격자 모양의 홈이 파여있는 탄산수 병뚜껑이다. 자세히 보니 바닥에 \'오른쪽, 아래쪽\'으로 깊게 긁힌 자국이 있다.'},
    {id:'S-04', name:'알싸하고 매운 즙 자국', phase:1, kind:'scene', position:{x:40, y:80}, description:'현장 바닥에 방울방울 떨어진 매운 즙 자국. 양파나 대파의 체액임이 분명하다.'},
    {id:'S-05', name:'거인의 메모지', phase:1, kind:'scene', position:{x:10, y:40}, description:'거인이 남긴 포스트잇.', original:'"오늘의 요리 온도 설정: 180도! 조리 시간은 20분으로 조절할 것. 최고로 달콤할 때 꺼내자."'},
    {id:'S-06', name:'끌린 흙 자국', phase:1, kind:'scene', position:{x:78, y:70}, description:'박스 중앙에서부터 문턱 너머 에어프라이어 성 쪽으로 이어진 길게 끌린 흙 흔적이다.'},

    // [서류 및 기록 단서]
    {id:'F-01', name:'자색 양의 다이어리', phase:1, kind:'document', requires:{all:['S-01']}, locationText:'현장 조사 → 기록 보관함 → 자색 양의 다이어리', original:'"1번 햇빛 자리는 촉촉도 4, 2번 햇빛 자리는 촉촉도 8... 나는 언제나 제일 촉촉한 2번 햇빛 자리가 좋아! 감자 아저씨는 4번, 양파 군은 3번, 대파 아주머니는 6번자리가 좋대!"', description:'달콤함과 촉촉함에 대한 자색 양의 취향이 상세히 적혀있다.'},
    {id:'F-02', name:'에어프라이어 성 조종법', phase:1, kind:'document', requires:{all:['S-05']}, locationText:'현장 조사 → 기록 보관함 → 에어프라이어 성 조종법', passwordRequired:true, passwordAnswer:'180', passwordMode:'text', passwordCaseSensitive:false, passwordHint:'오늘 거인이 설정한 성의 온도는 몇 도인가? (숫자만 입력)', description:'거인은 자색 양을 에어프라이어 성으로 끌고간 것 같다. 성 내부를 조사하기 전에 끌려간 자국을 확인해야 할 것 같다.'},
    {id:'M-01', name:'에어프라이어 성 내부', phase:1, kind:'document', locationText:'현장 조사 → 에어프라이어 성 내부', requires:{all:['S-06','F-02']}, passwordRequired:true, passwordAnswer:'꿀', passwordMode:'text', passwordCaseSensitive:false, passwordHint:'고구마가 완벽하게 익었을 때 흘러 나오는 달콤한 성분은?', description:'에어프라이어 성 내부로 들어가려고 했지만 뜨거운 열기에 가로막혀 들어가지 못했다. 하지만 근처에 자색 양의 껍질이 벗겨져 있는 것을 확인했다. 그러나 자색 양의 흔적을 제외하고는 아무것도 발견하지 못했다.'},
    {id:'F-03', name:'에어프라이어 성의 기사단장', phase:1, kind:'document', requires:{all:['M-01']}, locationText:'현장 조사 → 기록 보관함 → 에어프라이어 성의 기사단장', description:'에어프라이어 성의 기사단장 종이호일을 만났다. "오늘 방문자는 주인님과 자색 양, 둘 뿐입니다. 자색 양은 들어오면서 \'평소랑은 다르게 이번엔 나한테 도움이 되어주었네\'라는 말을 중얼거렸습니다."'},

    // [용의자 단서 - 감자 아저씨]
    {id:'W-01-A', name:'잠긴 감자폰', phase:2, kind:'suspect', suspectId:'potato', passwordRequired:true, passwordMode:'text', passwordAnswer:'4', passwordHint:'감자 아저씨가 좋아하는 햇빛 자리는?', description:'감자 아저씨가 메모장에 적어둔 내용이다.', original: '"양파 군은 늘 비밀스럽지만, 습관만큼은 한결같다. 어떤 행동을 하더라도 왼쪽부터 시작해서 반시계 방향으로 도는 걸 좋아한다."' },
    {id:'W-01-B', name:'흙 털이 브러시', phase:2, kind:'suspect', suspectId:'potato', description:'아저씨가 싹을 방지하고 몸을 단장할 때 쓰는 브러시. 현장의 흙 자국과는 종류가 다르다.'},
    {id:'W-01-C', name:'감자 아저씨의 운동 일지', phase:2, kind:'suspect', suspectId:'potato', original:'"오늘 할 일 : 구석에서 굴러다니며 싹 트지 않기 운동 수행."', description:'아저씨에게는 명확한 알리바이가 있다.'},
    {id:'W-01-D', name:'이웃의 증언', phase:2, kind:'suspect', suspectId:'potato', description:'감자 아저씨는 입버릇처럼 늘 하는 말이 있다고 한다.', original:'이 세상은 강한 자가 지배한다. 고로 나는 나보다 강한 자를 찾으면 그를 따를 것이다.'},

    // [용의자 단서 - 양파 군]
    {id:'W-02-A', name:'양파 군의 보물 상자', phase:2, kind:'suspect', suspectId:'onion', passwordRequired:true, passwordMode:'direction', passwordAnswer:['right','right','down','down'], passwordHint:'탄산수 병뚜껑 바닥에 긁혀 있는 화살표 방향', description:'상자 안에서 \'자색 양 팬클럽 1호 회원증\'과 \'에어프라이어 성 지도\'가 나왔다! 1호 회원증을 보니 양파 군은 자색 양을 오랫동안 짝사랑한 것 같다. 지도를 왜 가지고 있냐 물었더니, 누군가에게 복수를 하고싶어서 구한거라고 대답했다.'},
    {id:'W-02-B', name:'매운 눈물 휴지', phase:2, kind:'suspect', suspectId:'onion', description:'현장에서 발견된 매운 즙과 성분이 완벽히 일치한다. 양파 군은 자색 양이 사라진 걸 보고 현장에서 슬퍼서 울었다고 진술했다.'},
    {id:'W-02-C', name:'양파 군의 비밀 일기', phase:2, kind:'suspect', suspectId:'onion', description:'일기에는 매운 즙이 몇 방울 떨어져 있어 전문은 발췌하지 못했지만 한 문장은 명확하게 적혀있었다.', original:'"대파 아주머니가 자색 양의 매끈한 피부를 질투하며, 조만간 에어프라이어 성으로 보내버리겠다고 중얼거리는 걸 들었다."'},
    {id:'W-02-D', name:'양파 군의 고백', phase:2, kind:'suspect', suspectId:'onion', description:'"저는 자색 양을 좋아해요! 아니, 사랑해요! 자색 양도 절 좋아한다구요. 자색 양은 분명 강제로 끌려간 거예요. 며칠 전만 해도 제 옆에서 같이 광합성을 했다구요!"'},

    // [용의자 단서 - 대파 아주머니]
    {id:'W-03-A', name:'화장대 서랍', phase:2, kind:'suspect', suspectId:'greenonion', passwordRequired:true, passwordMode:'direction', passwordAnswer:['left','down','right','up'], passwordHint:'이 화장대 서랍은 양파 군이 제작했다고 한다.', description:'서랍 속에서 \'요리 레시피북\'이 발견되었다.', original: '"떠먹는 피자: 1.고구마를 에어프라이어에 굽고, 도톰하게 깔아준다. 2.위에 토마토 소스를 바르고 토핑을 올린다. 3.모짜렐라 치즈를 아낌없이 얹어준다."'},
    {id:'W-03-B', name:'대파의 잎사귀', phase:2, kind:'suspect', suspectId:'greenonion', description:'현장에 남아있던 15cm 이상의 스크래치 자국은 대파 아주머니의 뾰족한 잎사귀 마찰 자국과 정확히 일치한다.'},
    {id:'W-03-C', name:'질투 어린 소문', phase:2, kind:'suspect', suspectId:'greenonion', description:'대파 아주머니는 늘 자색 양의 피부와 인기를 시샘하여 박스 마을 사람들에게 자색 양의 험담을 하고 다녔다. 자색 양이 하려는 일마다 사사건건 훼방을 놓기 일쑤였다고 한다.'},
    {id:'W-03-D', name:'대파 아주머니의 힘', phase:2, kind:'suspect', suspectId:'greenonion', requires:{all:['W-03-A','W-03-B']}, description:'대파 아주머니는 사실 감자 아저씨보다 강한 힘을 가지고 있다. 자색 양을 충분히 힘으로 제압할 수 있다. 아무래도 현장의 흙자국은 대파 아주머니가 만든 자국같다.'},

    // [용의자 단서 - 자색 양]
    {id:'W-04-A', name:'명품 꿀고구마 보증서', phase:2, kind:'suspect', suspectId:'purple', description:'자색 양은 마을에서 가장 높은 당도를 가진 고구마임을 증명하는 문서.', original:'"180도 이상에서 온열 찜질 시 보석 같은 달콤한 \'꿀\'이 흘러나옴"'},
    {id:'W-04-B', name:'꿀고구마 가문의 가훈', phase:2, kind:'suspect', suspectId:'purple', original: '"우리는 명망 높은 자색 꿀고구마 가문이다. 명품은 명품다운 품격을 지켜야 해. 인기를 얻은 만큼 그에 맞는 의무를 다하지 않는 녀석은 가문에서 퇴출이다. 기꺼이 그 의무를 다할 때, 비로소 성에서 가문의 조상님들을 당당히 만날 수 있을 것이다."', description:'자색 양의 집에 붙어있었다.'},
    {id:'W-04-C', name:'이웃의 증언', phase:2, kind:'suspect', suspectId:'purple', description:'감자 아저씨의 이웃이 말했다. "감자 아저씨가 대파 아주머니를 좋아하는 것 같아요. 왜냐구요? 대파 아주머니가 부탁하는 건 항상 다 들어주거든요!"'}
  ],
  deduction: {
    questions: [
      {id:'q1', type:'choice', text:'자색 양이 사라지게 만든 사건의 원인 제공자는 누구인가?', choices:['대파 아주머니','양파 군','감자 아저씨','밤고구마'], answer:'대파 아주머니'},
      {id:'q2', type:'written', text:'범인의 범행 동기는 무엇인가?', evidence:['S-02','S-06','W-03-D','W-04-C'], requiredEvidence:['W-03-D','W-04-C'], requiredEvidenceCount:1, requirements:[['대파','밀어','위'],['자색','손','간택','주인','거인','성','선택','에어프라이어','질투']]},
      {id:'q3', type:'choice', text:'에어프라이어 성에 들어간 자색 양의 현재 상태는 어떠한가?', choices:['행복하다','복수심을 태우고 있다','탈출하고 싶어한다','이미 흔적도 없이 먹혀버렸다'], answer:'행복하다'}
    ]
  },
  truth: {
    title:'사건의 전말',
    chapters:[
    {title: '자색 양의 화려한 자태와 질투',
    body: '유기농 박스 마을의 스타인 자색 양은 매끈한 피부와 높은 당도로 주민들의 사랑을 독차지했다. 하지만 대파 아주머니는 자색 양의 외모와 인기를 질투하며, 언젠가 그녀를 에어프라이어 성으로 보내버리겠다고 마음먹었다.'},
  {title: '대파 아주머니의 납치',
    body: '사건 당일, 대파 아주머니는 자색 양을 강제로 끌고 에어프라이어 성으로 향했다. 현장에는 대파 아주머니의 길쭉한 잎사귀가 남긴 스크래치와 성을 향해 이어지는 흙 자국이 남았다.'},
  {title: '자색 양의 숨겨진 소망',
    body: '사실 자색 양은 명품 꿀고구마 가문의 일원으로서 가문의 의무를 다하고 싶어 했다. 명품으로 태어났고 명품의 대우를 받았으니 명품의 의무를 다하겠다는 의지를 마음에 품고 있었기에, 성으로 끌려가는 상황을 자신이 바라던 기회로 받아들였다.'},
  {title: '양파 군의 짝사랑과 오해',
    body: '자색 양을 짝사랑하던 양파 군은 그녀가 사라진 것을 알고 슬픔에 빠졌다. 그가 가지고 있던 에어프라이어 성 지도와 현장에 남은 매운 눈물은 의심을 불러일으켰지만, 실제로는 자색 양을 계속 괴롭히던 대파 아주머니를 성으로 보내기 위해 혼자 계획을 세웠다는 게 추후에 밝혀졌다.'},
  {title: '엇갈린 의도와 사건의 해결',
    body: '사건의 진상은 질투에 눈먼 대파 아주머니가 자색 양을 강제로 끌고 갔다는 것이었다. 그러나 자색 양은 이를 오랫동안 바라던 가문의 의무를 다할 기회로 받아들였다. 범인의 악의와 피해자의 소망이 엇갈린 이 기묘한 사건은 {{nickname}}의 추리로 그 전말이 밝혀졌다.'}
    ]
  },
  endingLetter:{
    from:'밤고구마',
    subject:'사건을 완벽하게 해결해 주셔서 감사합니다!',
    sign:'유기농 박스 마을을 대표하여, 구마 드림',
    body:`{{nickname}}님! 덕분에 자색 양이 무서운 악당에게 끌려간 게 아니라 명예로운 '오늘의 간식'으로 간택된 거란 사실을 알게 되었어요!\n\n대파 아주머니도 진심으로 반성하고 있고, 양파 군도 마음을 추스르고 있답니다.\n\n감사의 표시로 저희 마을 특산품인 '달콤촉촉 햇밤고구마 1박스'와 고양이용 츄르를 함께 보내드립니다. 다음에도 사건이 생기면 꼭 도와주세요!`
  },
  ending:{perfect:'유기농 박스 마을은 다시 평화를 되찾았고, 에어프라이어 성에서는 달콤한 냄새가 풍겨온다.'},
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