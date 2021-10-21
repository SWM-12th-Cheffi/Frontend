const categoryData: { [key: string]: any } = {
  '떡/곡류': [
    '맵쌀',
    '오곡',
    '찹쌀',
    '쌀',
    '잡곡밥',
    '떡',
    '찹쌀떡',
    '그래놀라',
  ],

  가공식품: {
    통조림: [
      '번데기',
      '고추참치',
      '햄/스팸',
      '스위트콘',
      '과일통조림',
      '옥수수콘/캔옥수수',
      '꽁치통조림',
    ],
    '육류/어류가공품': ['어묵류', '비엔나소시지', '김밥햄', '맛살'],
    기성식품: [
      '동그랑땡',
      '치킨너겟',
      '돈까스',
      '순대',
      '감자튀김',
      '꼬치전',
      '김말이튀김',
      '피자도우',
      '시나몬스틱',
      '삼계탕한방팩',
      '젤라틴',
      '단무지',
    ],
  },
  '계란/유제품': {
    '치즈/버터': [
      '리코타치즈',
      '크림치즈',
      '피자치즈/치즈가루',
      '모짜레라치즈',
      '페타치즈',
      '마스카포네치즈',
      '로마노치즈',
    ],
    '우유/두유/연유': ['두유', '연유', '바나나우유/딸기우유', '우유'],
    '요거트/크림': ['요거트', '요구르트', '생크림/휘핑크림'],

    '계란/유제품': ['계란', '콘아이스크림', '아이스크림', '메추리알'],
  },
  '콩/묵/두부': [
    '두부',
    '콩물',
    '도토리묵',
    '콩',
    '팥',
    '녹두콩앙금',
    '삶은녹두',
    '백앙금',
    '팥앙금',
  ],

  채소류: {
    뿌리채소: [
      '고구마',
      '연근',
      '당근',
      '무',
      '우엉',
      '생강',
      '토란대',
      '감자',
    ],
    열매채소: [
      '방울토마토',
      '오이',
      '애호박',
      '토마토',
      '단호박',
      '호박',
      '옥수수',
      '피망',
      '파프리카',
      '가지',
    ],
    잎줄기채소: [
      '시금치',
      '양파',
      '파류',
      '브로콜리',
      '부추',
      '상추',
      '양상추',
      '깻잎',
      '어린잎',
      '치커리',
      '쌈',
      '아스파라거스',
      '열무',
      '쑥갓',
      '쑥',
      '새싹채소',
      '무순',
      '아욱',
      '샐러리',
      '무청',
    ],
    허브: ['민트', '케이퍼', '워터크래스', '고수', '타임', '월계수잎'],
    마늘류: ['마늘'],
    버섯류: [
      '새송이버섯',
      '느타리버섯',
      '가닥버섯',
      '양송이버섯/그 외 버섯',
      '팽이버섯',
      '송이버섯',
      '목이버섯',
      '표고버섯',
    ],
    배추류: ['배추', '알배추', '얼갈이', '적채', '청경채'],
    양념채소: [
      '김치',
      '동치미',
      '피클',
      '간장장아찌',
      '무쌈',
      '깍두기',
      '생강초절임',
      '파채',
    ],
    열매류: ['산딸기', '딸기', '매실', '대추', '다래', '아로니아', '올리브'],
    고추채소: [
      '오이고추',
      '태국고추/할라피뇨',
      '고추',
      '건고추',
      '말린고추',
      '꽈리고추',
      '청양고추',
    ],
    바다채소: ['미더덕'],
    나물: [
      '세발나물',
      '깐도라지',
      '달래',
      '근대',
      '두릅',
      '미나리',
      '건고구마나물',
      '취나물',
      '숙주나물',
      '우거지',
      '고사리',
      '콩나물',
    ],
    꽃채소: ['식용꽃'],
    기타채소: ['베이비채소', '콩고기', '샐러드채소'],
  },
  육류: {
    삶는용: ['수육용삼겹살'],
    국거리: ['국거리소고기'],
    구이용: [
      '꼬치',
      '떡갈비',
      '소고기',

      '소고기(장조림용)',
      '차돌박이',
      '삼겹살류',
      '곱창',
      '돼지고기',

      '소고기(불고기용)',
      'LA갈비',
    ],
    '양식용 고기': ['스테이크용 고기', '베이컨'],
    막창: ['막창'],
    볶음용: ['제육볶음용고기', '돼지껍데기', '닭똥집'],
    전골요리용: ['소고기 샤브샤브용'],
    회: ['육회'],
    다용도: [
      '닭',

      '립',
      '무뼈닭발',
      '오돌뼈',
      '오리고기',
      '잡채용돼지고기',
      '잡채용쇠고기',
    ],
  },
  과일류: [
    '파인애플',
    '천도복숭아',
    '아보카도',
    '바나나',
    '말린 과일',
    '키위',
    '포도',
    '자몽',
    '오렌지/한라봉',
    '감',
    '곶감',
    '체리',
    '수박',
    '사과',
    '레몬',
    '석류',
    '냉동망고',
    '배',
    '블루베리',
    '라임',
    '귤',
  ],

  '조미료/양념/육수': {
    조미료: [
      '소금',
      '후추',
      '치킨스톡',
      '쇠고기다시다',
      '물엿',
      '올리고당',
      '설탕',
      '식초',
      '꿀',
      '매실액',
      '스테비아',
      '발사믹식초',
      '액젓',
      '맛술/미림',
      '까나리액젓',
      '요리당',
      '쯔유',
      '아가베시럽',
      '혼다시',
      '멸치액젓',
      '쌀엿',
      '깨',
      '참치액',
    ],
    '장/젓갈': [
      '고추장',
      '간장류',
      '된장',
      '쌈장',
      '춘장',
      '약고추장',
      '초고추장',
      '두반장',
      '새우젓',
      '명란젓갈',
    ],
    '양념/소스': [
      '스테이크소스',
      '돈까스소스',
      '시판 불고기양념',
      '칠리소스',
      '떡볶이 양념/불닭소스',
      '스리라차소스',
      '케첩',
      '제육볶음양념',
      '발사믹소스',
      '소고기양념',
      '스파게티소스',
      '허니머스터드소스',
      '마요네즈',
      '홀스래디쉬소스',
      '키위소스',
      '우스터소스',
      '핫소스',
      '참소스',
      '굴소스',
      '사워크림',
      '치즈소스',
      '피자소스',
      '파인애플소스',
      '타르타르소스',
      '참깨드레싱',
      '돼지갈비양념',
      '겨자/와사비',
      '크림치즈소스',
    ],

    '청/즙': [
      '생강청',
      '홍초',
      '감초',
      '생강즙',
      '매실청',
      '과일청',
      '양파청',
      '양파즙',
      '사과즙',
      '배즙',
      '레몬즙',
      '라즈베리청',
    ],
  },
  '빵/면/만두류': {
    면: [
      '비빔면/쫄면',
      '우동면',
      '중화면',
      '소면/라면',
      '불닭볶음면',
      '돈코츠라멘',
      '짜파게티',
      '천사채',
      '스파게티면',
      '냉면 면',
      '실곤약',
      '국수면',
      '숏파스타',
      '메밀국수',
      '잡채',
      '칼국수',
      '라자냐',
    ],
    빵: ['도넛', '또띠아', '치아바타', '카스테라', '버터식빵', '핫케이크'],

    만두: ['만두'],
  },
  '수산/건어물': {
    '생선/건어물': [
      '조기',
      '멸치/디포리',
      '국물용멸치',
      '황태채',
      '고등어',
      '밴댕이',
      '동태',
      '장어',
      '대구',
      '북어포',
      '연어',
      '쥐포',
      '먹태',
      '갈치',
      '참치',
      '삼치',
      '해물믹스',
    ],
    '조개/갑각류': [
      '게류',
      '랍스타',
      '골뱅이',
      '바지락/조개',
      '꼬마전복',
      '굴',
      '꼬막',
      '키조개관자',
      '그린홍합',
    ],
    '오징어/문어/새우': [
      '낙지',
      '새우',
      '대하',
      '오징어',
      '자숙문어',
      '주꾸미',
    ],
    '해초/알': ['다시마', '미역', '김', '매생이', '김자반', '날치알'],
  },

  '기름/향신료/가루': {
    '오일/육수': [
      '기름류',
      '올리브유',
      '카놀라유',
      '면수',
      '육수류',
      '크림육수',
      '사골국물',
      '해물육수',
      '다시마육수',
      '해물다시팩',
    ],
    '향신료/베이킹': [
      '허브류',
      '바질',
      '파슬리',
      '칠리페퍼',
      '바닐라빈',
      '드라이 이스트',
      '드라이타임',
      '바닐라에센스',
      '베이킹파우더/소다',
      '믹스가루류',
      '빵가루',
      '밀가루',
    ],
    '가루/파우더': [
      '생강가루',
      '한천가루',
      '케이준파우더',
      '멸치가루',
      '라면스프',
      '들깨가루',
      '강황가루',

      '계피가루',
      '주먹밥후레이크',
      '갈릭 파우더',

      '카레',
      '가쓰오부시',

      '흑임자',

      '생강가루',
      '찹쌀가루',
      '김가루',
      '고추가루',
      '녹차가루',

      '코코아파우더',
      '치킨파우더',

      '튀김가루',
      '전분',
      '녹말',
    ],
  },
  '초콜릿/과자/견과류': {
    '과자/초콜릿': [
      '말린과일칩',
      '팥양갱',
      '스프링클',
      '시리얼토핑',
      '호떡',
      '아귀포',
      '키스틱',
      '과자류',

      '롯데샌드',
      '바나나킥',
      '빠다코코낫',
      '카라멜',
      '초코파이',

      '초콜릿',

      '마시멜로우',
    ],
    기타: ['그래놀라 시리얼', '토핑', '초코시럽', '견과류', '잣', '호두'],
  },
  '음료/주류': [
    '얼음',
    '사이다',
    '주류',
    '콜라',
    '오렌지주스',
    '포도주스',
    '사과주스',
    '배주스',
    '라임주스',
    '와인류',
    '맥주',
    '동동주',
    '막걸리',
    '탄산수',
    '커피',
    '아이스티분말',
  ],
};

export default categoryData;

export const mockIngredient: { [key: string]: any } = {
  '떡/곡류': ['맵쌀', '그래놀라'],
  가공식품: {
    통조림: ['번데기', '꽁치통조림'],
    '육류/어류가공품': ['어묵류', '김밥햄', '맛살'],
    기성식품: ['동그랑땡', '치킨너겟', '단무지'],
  },
  '빵/면/만두류': {
    면: ['우동면', '중화면'],
    빵: ['도넛', '버터식빵', '핫케이크'],
    만두: ['만두'],
  },
  '콩/묵/두부': ['두부', '백앙금', '팥앙금'],
};

/**
 * @constant Ingredient
 * 총 재료 개수는 419개이다.
 */

const flatten = (ob: { [key: string]: any } | any[]) => {
  let ret: any[] = [];

  //기저 사례
  if (Array.isArray(ob)) return ob;

  //자식 object 순회
  for (let key in ob) ret = [...ret, ...flatten(ob[key])];

  return ret;
};

export const flatIngredient = Object.keys(categoryData).reduce((acc, cur) => {
  const flatArray = flatten(categoryData[cur]);
  return { ...acc, [cur]: flatArray };
}, {});

/***************************
 * @function 전처리
 ****************************/
export const mappingCategory: { [key: string]: string } = ((ob: {
  [key: string]: string[];
}) => {
  let ret = {};
  for (let key in ob)
    ob[key].map(element => {
      ret = { ...ret, [element]: key };
    });
  return ret;
})(flatIngredient);

export const IngredientArray = Object.keys(mappingCategory);