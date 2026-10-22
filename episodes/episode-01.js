export const episode = {
  id: 'ep-01', title: '사라진 등대지기', subtitle: '사라진 등대지기',
  intro: '해안 마을의 등대지기 에드윈이 어느 날 밤 사라졌다. 등대에는 수상한 흔적이 남고, 주민의 진술과 오래된 기록은 서로 맞지 않는다.',
  investigationTurns: 18,
  recordRoom: true,
  notifications: { clueUnlocked: '새로운 단서를 조사할 수 있습니다.', testimonyUnlocked: '새로운 증언을 확인할 수 있습니다.', passwordUnlocked: '비밀번호가 필요한 단서를 조사할 수 있습니다.' },
  letter: {
    from: '마거릿', subject: '등대지기 에드윈의 실종', sign: '마거릿 드림',
    body: `탐정님께,\n\n해안 마을의 등대지기 에드윈이 어느 날 밤 사라졌습니다. 등대 주변에는 설명하기 어려운 흔적이 남아 있고, 주민들의 진술과 오래된 기록 사이에는 모순이 있습니다.\n\n에드윈이 어디로 갔는지, 그날 밤 등대에서 무슨 일이 있었는지 밝혀 주셨으면 합니다. 제가 아는 이야기는 모두 말씀드리겠습니다. 부디 등대와 마을 사람들을 살펴봐 주세요.`
  },
  scene: { label: '북쪽 해안', art: 'assets/images/ep01_bg.png' },
  witnesses: [
    { id:'margaret', name:'마거릿', role:'여관 주인', info:'마을 사람들에게 친절하고 믿음직한 여관 주인.', testimony:'밤 11시 50분 이후 등대 근처에 서있던 알버트 시장님을 봤어요.' },
    { id:'thomas', name:'토머스', role:'어부', info:'약 2년 전 다른 항구에서 이주해 왔다고 알려진 어부.', testimony:'항구에서 등대 신호가 짧게 세 번, 길게 세 번, 짧게 세 번 깜빡이는 것을 보았습니다. 정확한 시각은 확실하지 않습니다.' },
    { id:'albert', name:'알버트', role:'마을 시장', info:'대대로 협약을 관리해 온 시장.', testimony:'에드윈은 지하 공간에 관심을 보였고, 나는 위험하다고 경고했습니다. 지하 공간은 오래전에 폐쇄됐습니다.' },
    { id:'edwin', name:'에드윈', role:'실종된 등대지기', info:'어린 시절부터 사랑한 사람과 10년 전 결혼했으나, 1년 전 아내에 대한 기억을 잃었다.', testimony:'에드윈의 개인 기록을 먼저 조사해보자.' }
  ],
  suspects: [
    {id:'margaret',name:'마거릿',role:'여관 주인',portrait:'assets/images/margaret_ph.png',bio:'마을에서 오랜 시간 여관을 운영하고 있다. 사람들은 그녀를 친절하고 믿음직하게 여긴다.',testimonyId:'margaret',items:['W-01-A','W-01-B']},
    {id:'thomas',name:'토머스',role:'어부',portrait:'assets/images/thomas_ph.png',bio:'2년 전에 다른 항구에서 이주해 왔다고 한다. 종종 마을에 대해 잘 아는 것처럼 보인다',testimonyId:'thomas',items:['W-02-A','W-02-B','W-02-C','W-02-D']},
    {id:'albert',name:'알버트',role:'마을 시장',portrait:'assets/images/albert_ph.png',bio:'가문 대대로 마을의 시장을 담당했다. 마을에 대해 모르는 게 없다.',testimonyId:'albert',items:['W-03-A','W-03-B','W-03-C']},
    {id:'edwin',name:'에드윈',role:'등대지기 · 실종자',portrait:'assets/images/edwin_ph.png',bio:'최근 수심이 깊어보였지만 착실히 등대지기의 업무를 수행했다.',testimonyId:'edwin',items:['W-04-A','W-04-B','W-04-C']}
  ],
  combinations: [],
  clues: [
    {id:'S-01',name:'잠긴 관리실 문',phase:1,kind:'scene',position:{x:21,y:42},description:'관리실 문은 잠겨 있지만 자물쇠에 강제로 부순 흔적은 없다. 누군가 강제로 침입했다고 단정할 수 없다. 문이 잠겨 있다는 사실만으로 실종 경위를 설명하기 어렵다.'},
    {id:'S-02',name:'등대 신호 장치',phase:1,kind:'scene',position:{x:21,y:11},description:'등대 신호 장치는 수동으로 조작할 수 있다. 조작 기록에는 신호 패턴과 관련된 흔적이 남아 있다. 토머스의 진술을 확인해봐야겠다.'},
    {id:'S-03',name:'조수표와 등대 기록',phase:1,kind:'scene',position:{x:70,y:38},description:'기록에는 이번 주 조수 변화가 표시되어 있다. 사건이 발생한 날은 23시 40분이 간조였다고 기록되어 있다. 간조는 바닷물이 가장 낮아지는 시기이다. 이를 잘 아는건 등대지기와 어부이다.'},
    {id:'S-04',name:'지하 계단과 젖은 흔적',phase:1,kind:'scene',position:{x:27,y:74},description:'젖은 발자국이 지하 계단으로 이어진다. 발자국과 소금 결정이 남은 벽을 따라가면 벽의 한쪽 방향에 흔적이 집중되어 있다. 숨겨진 공간이 있을 가능성과 그 방향을 알 수 있다. 여기서 더 깊은 곳의 실체는 아직 보이지 않는다.'},
    {id:'S-05',name:'책상 아래의 작은 가죽 수첩',phase:1,kind:'scene',position:{x:70,y:75},description:'책상 아래에서 작은 가죽 수첩을 발견했다. 짧은 메모가 적혀있다.',original:'"협약? 바다? 진실은?"',passwordRequired:true,passwordAnswer:'SOS',passwordMode:'text',passwordCaseSensitive:false,passwordHint:'바다가 가장 낮아지는 때, 길은 열린다. 그 길을 아는 자는 신호를 기억한다.'},
    {id:'S-06',name:'소금 결정이 두껍게 쌓인 벽',phase:1,kind:'scene',position:{x:22,y:63},description:'일반적인 습기 흔적보다 두꺼운 소금 결정이 벽 일부에 집중되어 있다. 지하에 숨겨진 통로나 평소와 다른 환경이 존재할 수도 있다.'},
    {id:'F-01',name:'에드윈이 발견한 오래된 기록',phase:1,kind:'document',requires:{all:['S-04']},locationText:'현장 조사 → 기록 보관함 → 에드윈이 발견한 오래된 기록',description:'에드윈이 오래된 자료를 조사하며 남긴 메모.\n\n시장은 지하 공간에 관한 질문을 받을 때마다 설명을 바꾸었다. 과거 기록에는 현재 주민들이 설명하지 못하는 이름과 흔적이 있다. 어떤 사람에 관한 기록은 남아 있지만, 마을 사람들은 그 사람의 과거를 제대로 설명하지 못한다. 등대 지하의 비밀 공간과 오래된 협약 사이에 연관성이 있는 것 같다. 기록을 비교하면 현재 마을의 기억만으로는 설명할 수 없는 모순이 드러난다.\n\n협약의 발동 조건이나 내용에 대해서 좀 더 알아봐야겠다.'},
    {id:'F-02',name:'협약과 기억에 관한 문서',phase:1,kind:'document',requires:{all:['S-06']},locationText:'현장 조사 → 기록 보관함 → 협약과 기억에 관한 문서',passwordRequired:true,passwordAnswer:'기억',passwordMode:'text',passwordCaseSensitive:false,passwordHint:'바다가 원한 것, 우리에게 돌려주지 않은 것.',description:'오래전 마을은 위험한 파도로부터 보호받기 위해 바다와 협약을 맺었다. 협약은 제물의 기억을 대가로 삼는다. 바다가 가져가는 기억의 종류는 제물마다 다를 수 있다. 원래는 자발적인 제물의 동의를 바탕으로 했으나, 후대의 시장들은 제물 선정에 개입하고 뇌물을 받으며 관련 기록을 감추기 시작했다. 물리적인 기록은 남아있지만 사라진 기억은 바다가 사라지기 전까지 복구되지 않는다.'},
    {id:'M-01',name:'숨겨진 공간의 돌바닥',phase:1,kind:'document',locationText:'현장 조사 → 기록 보관함 → 숨겨진 공간의 돌바닥',image:'assets/images/ep01_M-01.png',requires:{all:['S-04','F-02']},passwordRequired:true,passwordAnswer:'바다',passwordMode:'text',passwordCaseSensitive:false,passwordHint:'우리를 지켜주면서 우리를 불행하게 하는 건 누구인가',description:'지하 공간의 돌바닥에는 오래된 원형 마법진이 새겨져 있다. 이 곳에서 협약에 관련된 일이 일어났을 지도 모른다.\n\n벽 한 켠에는 녹슬은 신호 조절 장치가 있다. 레버에는 최근에 누가 사용한 흔적이 남아있다.'},
    {id:'W-01-A',name:'여관 장부',phase:2,kind:'suspect',suspectId:'margaret',description:'여관 장부의 마지막 손님 결제는 밤 11시 30분이다. 손님은 알버트로 보이며, 장부에는 서명 ABT가 남아 있다. 이후 손님 기록은 없다. 이 기록만으로 마거릿이 정확히 언제 여관을 떠났는지는 확정할 수 없다.'},
    {id:'W-01-B',name:'오래된 사진',phase:2,kind:'suspect',suspectId:'margaret',description:'약 15년 전의 사진이다. 사진 속에는 토머스와 닮아 보이는 남자아이가 있다. 마거릿에게 아이가 토머스인지 물으면 그녀는 모른다고 답한다. 토머스의 옛날 사진을 확인해보고 싶다.'},
    {id:'W-02-A',name:'배 출항 기록',phase:2,kind:'suspect',suspectId:'thomas',description:'출항 기록에는 다음과 같이 적혀있다.\n출항 예정 시각: 밤 11시 30분\n출항 확인:  \n담당 어부: 토머스\n\n확인 란이 비어있어 출항 여부를 알 수 없다.'},
    {id:'W-02-B',name:'오래된 장난감 배',phase:2,kind:'suspect',suspectId:'thomas',description:'오래된 나무 장난감 배가 발견되었다. 장난감 배에는 이 마을의 마크가 그려져 있다.'},
    {id:'W-02-C',name:'오래된 단체 사진에 관한 정보',phase:2,kind:'suspect',suspectId:'thomas',description:'토머스는 마을의 오래된 사진과 기록에 관심을 보였다. 사진 속 아이가 토머스인지 확정할 수는 없지만, 토머스와 상당히 닮았다. 토머스의 주장과 물리적인 기록을 비교할 필요가 있다.'},
    {id:'W-02-D',name:'제물 선정 기록',phase:2,kind:'suspect',suspectId:'thomas',locationText:'용의자 조사 → 토머스 → 제물 선정 기록',requires:{all:['W-03-C']},passwordRequired:true,passwordMode:'direction',passwordAnswer:['up','left','right','left','right'],passwordHint:'이 기록을 열려면 알버트가 자주 하는 행동을 알아야 한다.',description:'협약 제물 선정 기록.\n\n"제물 : 마거릿 \n조건 : 주변인들의 인정, 호감" \n\n알버트가 마거릿을 제물로 올리기 위한 준비를 진행한 것 같다. 토머스는 개인적인 사정이 있어서 알버트의 집무실에서 훔쳐왔다고 말했다.'},
    {id:'W-03-A',name:'출입 제한 공문',phase:2,kind:'suspect',suspectId:'albert',description:'올해 내려온 지하 공간의 출입을 제한한다는 공문이다. 제한 이유는 명확하게 설명되어 있지 않다. 알버트의 진술에서 지하 공간은 오래전에 폐쇄했다는 내용과 충돌한다.'},
    {id:'W-03-B',name:'오래된 기록',phase:2,kind:'suspect',suspectId:'albert',passwordRequired:true,passwordMode:'text',passwordAnswer:'ABT',passwordCaseSensitive:false,passwordHint:'이 기록을 열려면 알버트의 서명이 필요하다.',description:'협약은 매년 정해진 날짜와 시각에 발동한다. 시장이 제물의 이름을 적은 종이를 지하 마법진 위에 올려놓거나, 사람이 직접 마법진 위에 서면 발동한다.\n\n정해진 제물이 아니어도 협약의 발동에 휘말릴 수 있을 것으로 보인다. 에드윈이 휘말렸을 가능성도 있을까?'},
    {id:'W-03-C',name:'알버트의 수상한 행동',phase:2,kind:'suspect',suspectId:'albert',description:'에드윈의 행방을 정말 모르느냐고 묻자 알버트는 하늘을 한 번 바라보고 고개를 왼쪽, 오른쪽으로 두 번 돌렸다. 행동이 수상해 마을 사람들에게 물었더니 원래 자주 그런다는 답변을 받았다.'},
    {id:'W-04-A',name:'근무 기록',phase:2,kind:'suspect',suspectId:'edwin',description:'주간 근무: 재클린 - 07:30 출근, 15:35 퇴근 \n오후 근무: 에드윈 - 15:30 출근, 23:35 퇴근 \n야간 근무: 테린 - 23:30 출근, 07:35 퇴근 \n야간 근무자 테린은 에드윈이 23시 35분까지는 등대에 있었다고 진술했다.'},
    {id:'W-04-B',name:'열쇠 대여 기록',phase:2,kind:'suspect',suspectId:'edwin',description:'지하 공간과 관련된 열쇠가 에드윈에게 대여된 기록이 남아 있다. 반납 확인은 없다.'},
    {id:'W-04-C',name:'에드윈의 개인 기록',phase:2,kind:'suspect',suspectId:'edwin',description:'“이상하다. 지난 10년간의 기억 한가운데가 텅 비어 있는 느낌이다.\n\n오늘 아침에도 커피를 두 잔 내렸다. 아무 생각 없이 잔을 두 개 꺼내고, 두 번째 잔을 놓을 자리를 비워 두었다. 그제야 이상하다는 생각이 들었다.\n\n나는 혼자 살고 있다. 그런데 왜 매일 아침 커피를 두 잔씩 준비하는 걸까? 집 안에는 내가 혼자 사용한다고 생각하기 어려운 물건들이 남아 있다. 익숙한 습관도 있고, 설명할 수 없는 빈자리도 있다.\n\n분명히 무언가가 있었던 것 같은데, 그게 무엇인지 떠올릴 수가 없다. 내가 잊어버린 것은 단순한 기억 하나가 아니다. 내 삶에서 중요한 무언가가 사라졌다는 느낌이 든다.”\n\n에드윈의 기억에 무언가 문제가 있어보인다.'}
  ],
  deduction: {
    questions: [
      {id:'q1',type:'choice',text:'에드윈의 실종에 가장 큰 영향을 미친 인물은 누구인가?',choices:['알버트','토머스','마거릿','에드윈'],answer:'에드윈'},
      {id:'q2',type:'written',text:'에드윈이 사라진 과정을 설명하시오.',evidence:['S-04','F-01','W-03-B','M-01','W-04-C'],requiredEvidence:['S-04','M-01','W-03-B','W-04-C'],requiredEvidenceCount:3,requirements:[['기억'],['바다'],['마법진']]},
      {id:'q3',type:'written',text:'이번 사건이 발생하게 된 배경은 무엇인가?',evidence:['F-01','F-02','W-02-B','W-02-D','W-03-A','W-03-B','W-03-C'],requiredEvidence:['F-02','W-02-D'],requirements:[['바다'],['기억'],['제물']]},
      {id:'q4',type:'choice',text:'이번 협약에서 제물로 선정된 사람은 누구인가?',choices:['에드윈','알버트','마거릿','토머스'],answer:'마거릿'}
    ]
  },
  truth: {
    title:'사건의 전말',
    chapters:[
      {title:'에드윈의 아내와 사라진 기억',body:'1년 전, 에드윈의 아내가 비공식적 제물로 선정되었다. 바다는 다른 사람들이 아내에 대해 가지고 있던 기억을 가져갔고, 에드윈도 아내에 대한 기억을 잃었다. 그러나 아내를 향한 사랑이 너무 강렬했다. 아내에 대한 기억을 잃고, 혼자 산다고 생각하면서도 커피 두 잔을 준비하는 습관을 발견한 에드윈은 삶에서 중요한 무언가가 사라졌다는 사실을 알아차리고 과거를 조사하기 시작했다.'},
      {title:'협약을 추적한 에드윈',body:'에드윈은 오래된 기록과 주민들의 진술을 비교했다. 현재 주민들의 기억으로 설명할 수 없는 이름과 기록, 알버트의 모순된 진술, 등대 지하의 비밀 공간을 발견한 그는 협약의 실체를 확인하기 위해 지하 공간으로 향했다.'},
      {title:'토머스가 훔친 기록',body:'토머스는 자신이 마을에서 태어나 자랐다는 사실을 기억하지만, 주민들은 그에 대한 기억을 잃어 그를 2년 전 이주민으로 여긴다. 과거를 밝히려던 토머스는 알버트의 집무실에서 제물 선정 기록을 훔쳤다. 기록은 마거릿이 이번 협약의 제물로 선정되었음을 입증했다.'},
      {title:'알버트의 계획과 책임',body:'알버트는 뇌물을 받고 마거릿을 제물로 선정했으며, 그녀의 이름을 적어 마법진에 올릴 계획이었다. 에드윈을 제물로 선정하거나 그의 실종을 직접 계획한 것은 아니다. 그러나 협약을 악용하고 선정 과정을 부패시켰으며 관련 기록과 지하 공간을 은폐한 책임이 있다.'},
      {title:'에드윈의 실종',body:'에드윈은 협약의 발동 시각에 지하 마법진 위에 섰다. 사람의 이름을 적은 종이를 놓는 것뿐 아니라 사람이 직접 마법진 위에 서는 것도 발동 조건이었다. 바다는 에드윈을 제물로 인식해 그의 모든 기억을 가져갔다. 에드윈은 자신의 정체와 지하 공간에서 빠져나가는 방법을 기억하지 못하게 되었다. 기억을 잃은 채 지하실에 갇힌 에드윈은 오래된 신호 조절 장치를 이용해 SOS신호를 보냈다.'},
      {title:'마을에 남은 기록',body:'어느 날 등대지기 에드윈이 실종됐다. 외부에서 온 탐정이 사건의 진상을 밝혀주었다. 그러나 에드윈은 모든 기억을 잃었고, 무엇을 위해 지하실까지 갔는지 아직도 기억하지 못하고 있다. 시장 알버트는 책임을 물어 수도의 감옥으로 이송됐다.'}
    ]
  },
  endingLetter:{from:'마거릿',subject:'사건을 해결해 주셔서 감사합니다',sign:'감사와 함께, 마거릿',body:`탐정님께,\n\n사건의 진실을 밝혀 주셔서 정말 감사합니다. 덕분에 마을에 감춰져 있던 일을 알게 되었어요.\n\n에드윈은 여전히 자신이 누구인지 기억을 못하고 있어요. 그래도 그가 무사히 돌아와서 정말 다행입니다.\n\n작은 감사의 선물로 츄르를 보냅니다. 받아 주세요.`},
  ending:{perfect:'네 가지 추리를 모두 풀어 사건의 진실에 도달했습니다.'},
  reward:{failed:1,partial:2,perfect:3},
  sound:{bgm:{main:'assets/audio/Salt_on_the_Glass.mp3',investigation:'assets/audio/Beneath_the_Floorboards.mp3',deduction:'assets/audio/Beneath_the_Floorboards.mp3',truth:'assets/audio/Beneath_the_Floorboards.mp3',result:'assets/audio/Beneath_the_Floorboards.mp3',ending:'assets/audio/Beneath_the_Floorboards.mp3'}}
};
