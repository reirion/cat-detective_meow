export const episode2 = {
  id: 'ep-02',
  title: '내 참치캔 돌려줘!',
  subtitle: '내 참치캔 돌려줘!',
  intro: '집사가 큰돈을 주고 사 온 수제 프리미엄 참치 캔이 거실 테이블 위에서 사라졌다. 집 안의 흔적과 네 명의 진술을 조사해 범인과 참치 캔의 행방을 밝혀내자.',
  investigationTurns: 7,
  interviewHeading: '용의자들의 진술과 단서',
  hideBasicTestimony: true,
  letter: {
    to: '{{nickname}}',
    from: '{{nickname}}',
    subject: '내 참치캔 돌려줘!',
    body: '냥 냐냐냥! 애오오옭!!\n\n(큰일이야! 집사가 얼마 전에 큰돈을 주고 사냥해 온 수제 프리미엄 참치 캔이 거실 테이블 위에서 감쪽같이 사라졌어!)\n\n사건은 오후 2시에서 3시 사이에 일어난 것 같아. 현장에는 물그릇이 엎어져 있고, 소파 구석에는 수상한 박스가 놓여 있어.\n\n여긴 내 집이고, 사라진 간식도 내 몫이야. 이 사건은 내가 직접 해결하겠어! 현장의 흔적과 모두의 말을 꼼꼼히 조사해 범인과 참치 캔의 행방을 밝혀내자.'
  },
  scene: { label: '거실 · 테이블과 소파 주변', art: 'assets/images/ep03_bg.png' },
  witnesses: [
    {id:'owner',name:'집사',role:'집주인',info:'다이어트 중이라 예민해져 있다.',testimony:'장보고 돌아오니 캔이 없어졌어! 난 다이어트 중이라 닭가슴살만 먹었다구.'},
    {id:'choco',name:'초코',role:'옆집 강아지',info:'호기심이 많아 장난감을 찾아다닌다.',testimony:'난 장난감 찾으러 들어왔다가 물그릇만 엎지르고 놀라서 도망쳤어!'},
    {id:'gugu',name:'구구',role:'베란다 비둘기',info:'반짝이는 것과 맛있는 냄새를 좋아한다.',testimony:'2시 반쯤 베란다 틈으로 봤는데, “충전소로 돌아갑니다”라는 소리가 나면서 뭔가가 캔을 끌고 가던데?'},
    {id:'robot',name:'싹싹이',role:'로봇 청소기',info:'최근 센서 고장 증상이 있다.',testimony:'기록된 음성: “충전소로 돌아갑니다.” 이동 경로 정보는 저장되어 있지 않습니다.'}
  ],
  suspects: [
    {id:'owner',name:'집사',role:'집주인',portrait:'assets/images/ep02_ph_01.png',bio:'최근에 먹음직한 참치 캔을 사냥했다.',testimonyId:'owner',items:['E2-W-01']},
    {id:'choco',name:'초코',role:'옆집 강아지',portrait:'assets/images/ep02_ph_02.png',bio:'호기심이 많다.',testimonyId:'choco',items:['E2-W-02','E2-W-05']},
    {id:'gugu',name:'구구',role:'베란다 비둘기',portrait:'assets/images/ep02_ph_03.png',bio:'반짝이는 물건과 냄새에 민감하다.',testimonyId:'gugu',items:['E2-W-03']},
    {id:'robot',name:'싹싹이',role:'로봇 청소기',portrait:'assets/images/ep02_ph_04.png',bio:'최근 센서 이상이 있었던 것으로 보인다.',testimonyId:'robot',items:['E2-W-04']}
  ],
  clues: [
    {id:'E2-S-01',name:'엎질러진 물그릇',phase:1,kind:'scene',position:{x:26,y:67},description:'물그릇이 엎어져 있다. 물은 소파와 로봇 청소기 충전기 방향으로 길게 쏟아져 있다.'},
    {id:'E2-S-02',name:'소파 구석의 의심스러운 박스',phase:1,kind:'scene',position:{x:78,y:61},description:'소파 구석에 종이 박스가 놓여 있다. 입구에는 무언가가 드나들며 남긴 듯한 가벼운 긁힌 자국이 있다.'},
    {id:'E2-S-03',name:'테이블 다리의 찌그러진 자국',phase:1,kind:'scene',position:{x:48,y:75},description:'테이블 밑바닥 다리 쪽에 세게 부딪힌 듯한 찌그러짐과 검은 고무 자국이 남아 있다.'},
    {id:'E2-S-04',name:'영수증 조각',phase:1,kind:'scene',position:{x:64,y:37},description:'집사의 외투 주머니에서 떨어진 영수증 조각이다. “동물병원 예약금 · 내일 오전 10시 검진”이라고 적혀 있다.'},
    {id:'E2-W-01',name:'집사의 진술',phase:2,kind:'suspect',suspectId:'owner',description:'“장보고 돌아오니 캔이 없어졌어! 난 다이어트 중이라 닭가슴살만 먹었다구.” 집사는 다이어트 중이라 참치를 먹지 않았다고 주장한다.'},
    {id:'E2-W-02',name:'초코의 진술',phase:2,kind:'suspect',suspectId:'choco',description:'“난 2시 1분에 장난감 찾으러 들어왔다가 물그릇만 엎지르고 놀라서 도망쳤어!” 초코는 물그릇을 엎지른 사실을 인정한다.'},
    {id:'E2-W-03',name:'구구의 진술',phase:2,kind:'suspect',suspectId:'gugu',description:'“2시 반쯤 베란다 틈으로 봤는데, ‘충전소로 돌아갑니다’라는 소리가 나면서 뭔가가 캔을 끌고 가던데?”'},
    {id:'E2-W-04',name:'싹싹이의 먼지통',phase:2,kind:'suspect',suspectId:'robot',description:'먼지통 내부에서 참치 캔 뚜껑의 비닐 라벨 조각과 약간의 기름기가 발견되었다.'},
    {id:'E2-W-05',name:'초코와 대화하기',phase:2,kind:'suspect',suspectId:'choco',description:'초코가 말을 하고있다',audio:'assets/audio/ep02_sfx_1.mp3'}
  ],
  deduction: {
    questions: [
      {id:'q1',type:'choice',text:'이 사건을 일으킨 진짜 범인은 누구입니까?',choices:['집사','초코','구구','싹싹이'],answer:'집사'},
      {id:'q2',type:'written',text:'사라진 참치 캔은 지금 어디에 있습니까?',keywordAny:['박스','상자'],hint:'참치 캔이 옮겨진 마지막 장소를 적으세요.'},
      {id:'q3',type:'written',text:'이 사건이 일어난 이유와 가장 관련 있는 단서는 무엇입니까?',evidence:['E2-S-01','E2-S-02','E2-S-03','E2-S-04','E2-W-01','E2-W-02','E2-W-03','E2-W-04'],requiredEvidence:['E2-S-04'],keywords:['금식'],hint:'가장 관련있는 단서를 1개 선택하세요.'}
    ]
  },
  truth: {
    title:'사건의 전말',
    chapters:[
      {title:'참치 캔이 사라진 이유',body:'🐟 범인은 집사였어요. 내일 오전 10시, {{nickname}}의 건강검진 예약이 있었습니다. 검진 전에는 금식해야 했지만, 집사는 참치 캔을 직접 치우면 {{nickname}}이 크게 떼를 쓸 걸 알고 있었죠.'},
      {title:'로봇 청소기가 옮긴 캔',body:'집사는 참치 캔을 로봇 청소기가 움직이는 길에 두고, 청소기가 충전소로 돌아가도록 했습니다. 초코가 엎지른 물에 싹싹이의 바퀴가 미끄러지면서 테이블 다리를 들이받았고, 떨어진 캔을 밀어 소파 구석 박스까지 옮겼습니다. 먼지통의 비닐 라벨과 기름기, 테이블의 검은 고무 자국이 이 경로를 보여줍니다.'},
      {title:'영수증이 밝힌 진짜 이유',body:'집사의 다이어트 주장은 핑계였어요. 외투에서 떨어진 동물병원 영수증이 진짜 이유, {{nickname}}의 건강검진 전 금식을 밝혀냈습니다. 사건은 해결됐지만… 참치 캔은 검진이 끝난 뒤에 받기로 약속했답니다!'}
    ]
  },
  epilogue:{title:'참치 캔은 검진 뒤에',body:'사건은 해결됐고 참치 캔은 무사합니다. 약속한 건강검진이 끝나면 간식을 받을 수 있어요.'},
  endingLetter:{from:'집사',to:'{{nickname}}',subject:'미안해, 그리고 약속할게',sign:'집사 드림',body:'건강검진 전 금식을 시키려고 참치 캔을 치운 건 맞아. 하지만 직접 말하면 속상해 할 것 같아 괜한 소동을 벌인 것 같아. 걱정 끼쳐서 미안해.\n\n검진이 끝나면 약속대로 맛있는 간식을 준비할게! 아, 그리고 요즘 그 종이 박스를 정말 좋아하는 것 같더라? 캣타워도 사뒀는데… 역시 상자가 최고인가 봐.'},
  ending:{perfect:'참치 캔 실종의 진실을 모두 밝혔습니다.'},
  reward:{failed:1,partial:2,perfect:3},
  sound:{bgm:{main:'assets/audio/Pitter_Patter_in_the_Sun.mp3',investigation:'assets/audio/Pitter_Patter_in_the_Sun.mp3',deduction:'assets/audio/Pitter_Patter_in_the_Sun.mp3',truth:'assets/audio/Pitter_Patter_in_the_Sun.mp3',result:'assets/audio/Pitter_Patter_in_the_Sun.mp3',ending:'assets/audio/Pitter_Patter_in_the_Sun.mp3'}}
};
