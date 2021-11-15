/*
제주,0
통영,1
여수,2
거제,3
군산,4
인천,5
속초,6
포항,7
강릉,8
서울,9
/*
제주,0
통영,1
여수,2
거제,3
군산,4
인천,5
속초,6
포항,7
강릉,8
서울,9
가평,10
전주,11
경주,12

...
*/
const qnaList0 = [
  {
    q: '0. 여행에는 누구랑 가고 싶어?',
    a: [
      { answer: 'a. 동해', type: [0, 1, 2, 3 ] , img:""},
      { answer: 'b. 서해', type: [0, 1, 2, 3 ], img:""},
      { answer: 'c. 남해', type: [0, 1, 2, 3 ], img:""},

    ]
  },
]
const qnaList = [
  {
    q: '1. 여행에는 누구랑 가고 싶어?',
    a: [
      { answer: 'a. 친구랑', type: [0, 1, 2, 3 ] , img:""},
      { answer: 'b. 가족이랑', type: [0, 1, 2, 3 ], img:""},
      { answer: 'c. 연인이랑', type: [0, 1, 2, 3 ], img:""},
      { answer: 'd. 혼자서', type: [0, 1, 2, 3 ], img:""},
    ]
  },
  {
    q: '2. 이쁜사진 찍어서 SNS에 올려야지! 어디로 갈까?',
    a: [
      { answer: 'a. 매미성', type: [3 ] , img:"거제/매미성.jpg" },
      { answer: 'b. 동피랑벽화마을', type: [1 ] , img:"통영/동피랑.jpg" },
      { answer: 'c. 청방폭포', type: [0 ] , img:"제주/정방폭포.jpg" },
      { answer: 'd. 아르떼뮤지엄', type: [2 ] , img:"여수/아르떼뮤지엄.jpg" },
      { answer: 'e. 무지개해안도로', type: [0 ] , img:"제주/무지개해안도로.jpg" },
      { answer: 'f. 예술랜드', type: [2 ] , img:"여수/예술랜드.jpg" },
    ]
  },
  {
    q: '3. 금강산도 식후경! 맛있는 것도 먹으러가야지! 뭐 먹을래?',
    a: [
      { answer: 'a. 강성횟집', type: [3 ] , img:"거제/강성횟집.jpg" },
      { answer: 'b. 다찌', type: [1 ] , img:"통영/다찌.jpg" },
      { answer: 'c. 돔베고기', type: [0 ] , img:"제주/돔베고기.jpg" },
      { answer: 'd. 게장백반', type: [2 ] , img:"여수/게장.jpg" },
      { answer: 'e. 장어탕', type: [2 ] , img:"여수/장어탕.jpg" },
      { answer: 'f. 해물촌', type: [1 ] , img:"통영/해물촌.jpg" },
    ]
  },
  {
    q: '4. 나에게는 재밌는 액티비티가 빠질 수 없다! 뭐할까?',
    a: [
      { answer: 'a. 오션뷰카트 ', type: [3 ] , img:"거제/오션뷰카트.jpg" },
      { answer: 'b. 스카이라인루지 ', type: [1 ] , img:"통영/루지.jpg" },
      { answer: 'c. 제주제트 ', type: [0 ] , img:"제주/제트.jpg" },
      { answer: 'd. 케이블카 ', type: [2 ] , img:"여수/케이블카.jpg" },
    ]
  },
  {
    q: '5. 뻥뚫린 대자연과 함께 힐링하 가야지! 어디가 좋을까?',
    a: [
      { answer: 'a. 가조도', type: [3 ] , img:"거제/가조도.jpg" },
      { answer: 'b. 삼칭이길', type: [1 ], img:"통영/삼칭이길.jpg" },
      { answer: 'c. 대포 주상절리', type: [0 ] , img:"제주/주상절리.jpg" },
      { answer: 'd. 향일암', type: [2 ] , img:"여수/향일암.jpg" },
      { answer: 'e. 금오도', type: [2 ] , img:"여수/금오도.jpg" },
      { answer: 'f. 바람의 언덕', type: [3 ] , img:"거제/바람의언덕.jpg" },
    ]
  },

  {
    q: '6. 얼마동안 여행할거야?',
    a: [
      { answer: 'a. 당일치기로 즐겨야지', type: [0, 1, 2, 3 ], img:""},
      { answer: 'b. 2박 3일 정도', type: [0, 1, 2, 3 ], img:""},
      { answer: 'c. 1주일 정도', type: [0, 1, 2, 3 ], img:""},
      { answer: 'd. 한달살이 해볼까?', type: [0, 1, 2, 3 ], img:""},
    ]
  },
  {
    q: '7. 숙소는 어디가 좋아?',
    a: [
      { answer: 'a. 펜션', type: [0, 1, 2, 3 ], img:""},
      { answer: 'b. 게스트하우스', type: [0, 1, 2, 3 ], img:""},
      { answer: 'c. 호텔', type: [0, 1, 2, 3 ], img:""},
      { answer: 'd. 차박', type: [0, 1, 2, 3 ], img:""},
    ]
  },
]

const qnaList2 = [
  {
    q: '1. 여행에는 누구랑 가고 싶어?',
    a: [
      { answer: 'a. 친구랑', type: [4, 5, 6, 7, 8 ],img:},
      { answer: 'b. 가족이랑', type: [4, 5, 6, 7, 8 ],img:},
      { answer: 'c. 연인이랑', type: [4, 5, 6, 7, 8 ],img:},
      { answer: 'd. 혼자서', type: [4, 5, 6, 7, 8 ],img:},
    ]
  },
  {
    q: '2. 이쁜사진 찍어서 SNS에 올려야지! 어디로 갈까?',
    a: [
      { answer: 'a. 월화거리', type: [8 ] , img:"/강릉/월화거리" },
      { answer: 'b. 차이나타운', type: [5 ] , img:"/인천/차이나타운" },
      { answer: 'c. 시간여행마을', type: [4 ] , img:"/군산/시간여행마을" },
      { answer: 'd. 동화마을', type: [5 ] , img:"/인천/동화마을" },
      { answer: 'e. 청초호수공원', type: [6 ] , img:"/속초/청초호수공원" },
      { answer: 'f. 두낫디스터브', type: [7 ] , img:"/포항/두낫디스터브" },
    ]
  },
  {
    q: '3. 금강산도 식후경! 맛있는 것도 먹으러가야지! 뭐 먹을래?',
    a: [
      { answer: 'a. 해물짬뽕', type: [4 ] , img:"/군산/해물짬뽕" },
      { answer: 'b. 초당순두부', type: [8 ] , img:"/강릉/순두부" },
      { answer: 'c. 물회', type: [7 ] , img:"/포항/물회" }
      { answer: 'd. 아바이순대', type: [6 ] , img:"/속초/아바이순대" }
      { answer: 'e. 옹기병', type: [5 ] , img:"/인천/옹기병" }
      { answer: 'f. 도루묵찌개', type: [6 ] , img:"/속초/도루묵" }
    ]
  },
  {
    q: '4. 나에게는 재밌는 액티비티가 빠질 수 없다! 뭐할까?',
    a: [
      { answer: 'a. 레포츠파크 ', type: [5 ] , img:"/인천/강화레포츠" },
      { answer: 'b. 레일바이크 ', type: [8 ] , img:"/강릉/레일바이크" },
      { answer: 'c. 크루즈 ', type: [7 ] , img:"/포항/크루즈" },
      { answer: 'd. 요트투어 ', type: [6 ] , img:"/속초/요트투어" },
    ]
  },
  {
    q: '5. 뻥뚫린 대자연과 함께 힐링하 가야지! 어디가 좋을까?',
    a: [
      { answer: 'a. 선유도 ', type: [4 ] , img:"/군산/선유도" },
      { answer: 'b. 을왕리해수욕장 ', type: [5 ], img:"/인천/을왕리해수욕장" },
      { answer: 'c. 경포대 ', type: [8 ] , img:"/강릉/경포대" },
      { answer: 'd. 이가리닻전망대 ', type: [7 ] , img:"/포항/이가리닻" },
      { answer: 'e. 설악산 ', type: [6 ] , img:"/속초/설악산" },
      { answer: 'e. 은파호수공원', type: [ ] , img:"/군산/은파호수공원" },
    ]
  },

  {
    q: '6. 얼마동안 여행할거야?',
    a: [
      { answer: 'a. 당일치기로 즐겨야지', type: [4, 5, 6, 7, 8 ]},
      { answer: 'b. 2박 3일 정도', type: [4, 5, 6, 7, 8 ]},
      { answer: 'c. 1주일 정도', type: [4, 5, 6, 7, 8 ]},
      { answer: 'd. 한달살이 해볼까?', type: [4, 5, 6, 7, 8 ]},
    ]
  },
  {
    q: '7. 숙소는 어디가 좋아?',
    a: [
      { answer: 'a. 펜션', type: [4, 5, 6, 7, 8 ]},
      { answer: 'b. 게스트하우스', type: [4, 5, 6, 7, 8 ]},
      { answer: 'c. 호텔', type: [4, 5, 6, 7, 8 ]},
      { answer: 'd. 차박', type: [4, 5, 6, 7, 8 ]},
    ]
  },
]

const qnaList3 = [
  {
    q: '1. 여행에는 누구랑 가고 싶어?',
    a: [
      { answer: 'a. 친구랑', type: [9, 10, 11, 12 ]},
      { answer: 'b. 가족이랑', type: [9, 10, 11, 12 ]},
      { answer: 'c. 연인이랑', type: [9, 10, 11, 12 ]},
      { answer: 'd. 혼자서', type: [9, 10, 11, 12 ]},
    ]
  },
  {
    q: '2. 이쁜사진 찍어서 SNS에 올려야지! 어디로 갈까?',
    a: [
      { answer: 'a. 힙지로', type: [9 ] , img:"/서울/힙지로" },
      { answer: 'b. 쁘띠프랑스', type: [10 ] , img:"/가평/쁘띠프랑스" },
      { answer: 'c. 한옥마을', type: [11 ] , img:"/전주/전주한옥마을" },
      { answer: 'd. 황리단길', type: [12 ] , img:"/경주/황리단길" },
      { answer: 'e. 덕수궁', type: [9 ] , img:"/서울/덕수궁" },
      { answer: 'f. 북촌 한옥마을', type: [9 ] , img:"/서울/북촌마을" },
    ]
  },
  {
    q: '3. 금강산도 식후경! 맛있는 것도 먹으러가야지! 뭐 먹을래?',
    a: [
      { answer: 'a. 곱창', type: [9 ] , img:"/서울/곱창" },
      { answer: 'b. 바베큐', type: [10 ] , img:"/가평/바베큐" },
      { answer: 'c. 콩국수', type: [11 ] , img:"/전주/콩국수" }
      { answer: 'd. 순두부', type: [12 ] , img:"/경주/순두부" }
      { answer: 'e. 막국수', type: [10 ] , img:"/가평/막국수" }
      { answer: 'f. 중국가정식', type: [9 ] , img:"/서울/중국가정식" }
    ]
  },
  {
    q: '4. 나에게는 재밌는 액티비티가 빠질 수 없다! 뭐할까?',
    a: [
      { answer: 'a. 롯데월드 ', type: [9 ] , img:"/서울/롯데월드" },
      { answer: 'b. 빠지(물놀이) ', type: [10 ] , img:"/가평/웨이크보드" },
      { answer: 'c. 동물원 ', type: [11 ] , img:"/전주/전주동물원" },
      { answer: 'd. 경주월드 ', type: [12 ] , img:"/경주/경주월드" },
    ]
  },
  {
    q: '5. 뻥뚫린 대자연과 함께 힐링하 가야지! 어디가 좋을까?',
    a: [
      { answer: 'a. 올림픽공원', type: [9 ] , img:"/서울/올림픽공원" },
      { answer: 'b. 남이섬', type: [10 ], img:"/가평/남이섬" },
      { answer: 'c. 서울숲', type: [9 ] , img:"/서울/서울숲" },
      { answer: 'd. 주상절리', type: [12] , img:"/경주/주상절리" },
      { answer: 'e. 계곡', type: [10 ] , img:"/가평/계곡" },
      { answer: 'e. 대릉원', type: [12 ] , img:"/경주/대릉원" },
    ]
  },

  {
    q: '6. 얼마동안 여행할거야?',
    a: [
      { answer: 'a. 당일치기로 즐겨야지', type: [9, 10, 11, 12 ]},
      { answer: 'b. 2박 3일 정도', type: [9, 10, 11, 12 ]},
      { answer: 'c. 1주일 정도', type: [9, 10, 11, 12 ]},
      { answer: 'd. 한달살이 해볼까?', type: [9, 10, 11, 12 ]},
    ]
  },
  {
    q: '7. 숙소는 어디가 좋아?',
    a: [
      { answer: 'a. 펜션', type: [9, 10, 11, 12 ]},
      { answer: 'b. 게스트하우스', type: [9, 10, 11, 12 ]},
      { answer: 'c. 호텔', type: [9, 10, 11, 12 ]},
      { answer: 'd. 차박', type: [9, 10, 11, 12 ]},
    ]
  },
]










































