// export const resultList = [
//   {
//     dog_name: '지노',
//     dog_age: 6,
//     dog_img:
//       'https://yt3.ggpht.com/49Zod3k6JNnbqLQmU8FCJkOSbQ9L5vRu4ZmLnH54HhhQrjgcmic-k83HGFdp7mUmIsdoh2VBmw=s900-c-k-c0x00ffffff-no-rj',
//     slug: 'sdkfajdkfjalkdsj',
//     match: true,
//     dog: { emotion: 'Happy', prob: 0.9054175019 },
//     dog_coordinate: 'x1, y1, x2, y2',
//     human_emotion: { emotion: 'sad', prob: 0.2054175019 },
//     human_coordinate: 'x1, y1, x2, y2',
//     needs: [
//       { title: '산책', desc: '산책하세요' },
//       { title: '간식', desc: '육포주세요' },
//       { title: '놀이', desc: '놀아주세요' },
//       { title: '밥', desc: '밥주세요' },
//     ],
//     emotion_description:
//       '루루는 지금 행복한 감정을 느끼고 있어요. 루루는 지금 행복한 감정을 느끼고 있어요. 루루는 지금 행복한 감정을 느끼고 있어요. 루루는 지금 행복한 감정을 느끼고 있어요. 루루는 지금 행복한 감정을 느끼고 있어요. 루루는 지금 행복한 감정을 느끼고 있어요.',
//     solution: {
//       1: '크림님은 평소 루루를 정확하게 파악하고 계시네요. 앞으로도 꾸준히 관심 가져주세요.',
//       2: '루루는 현재 스트레스를 받고 있어요.',
//       3: 'B. 루루의 솔루션 (Q1-4 각 솔루션 제공) Q1. a) 일치: 크림님은 평소 루루를 정확하게 파악하고 계시네요. 앞으로도 꾸준히 관심 가져주세요',
//       4: 'a) 2시간 이하: 루루가 크림님과 함께 보낸 오늘은 정말 아늑하고 행복한 하루였겠네요. 앞으로도 소중한 추억 많이 만들어주세요!',
//     },
//   },
// ];
export const resultList = {
  created_at: '2022-03-12T13:57:08.865614+09:00',
  dog_name: '지노',
  dog_age: 33,
  slug: 'bDGlFYdZ',
  image: `https://post-phinf.pstatic.net/MjAxOTA2MTlfMjkz/MDAxNTYwODk0NTEyMTc1.ULlCfhg6lQMIKjQnb3yCEPnOEaEbGiUBhzvevjv2_iUg.U-0rKnMk-ZXvmrgEg8Ch4pqtuNBF1xhBcTsBNJvlpF4g.JPEG/5b8f8d7a6e6a5-Bored-Panda_Page_7-5b8cfbd671419-5b8e6f8e3a2ec__880.jpg?type=w1200`,
  dog: null,
  dog_emotion: '두려움',
  dog_emotion_percentage: '68.10',
  dog_coordinate: '414,143,652,383',
  human_emotion: '기쁨',
  human_emotion_percentage: '80.00',
  human_coordinate: null,
  status: '업로드',
  chemistry_percentage: '39.85',
  is_dog_emotion_negative: true,
  is_human_emotion_negative: true,
  is_chemistry_negative: true,
  solution: [
    {
      id: 7,
      sort_order: 3,
      content: '6-10시간',
      solution:
        '오늘 하루 지노와 시간을 많이 못 보내셨군요. 지노가 반려인님만을 애타게 기다렸을 것 같네요. 앞으로 지노가 외롭지 않게 시간을 더 함께 보내주세요!',
    },
    {
      id: 12,
      sort_order: 4,
      content: '안 함',
      solution:
        '지노가 정말 답답하고 찌뿌둥하겠네요. 산책은 강아지에게 필수 활동입니다! 산책만으로 강아지의 몸과 정신 건강을 증진 시킬 수 있으며 산책을 안 할 시 강아지는 심각한 우울감을 느낍니다. 내일은 꼭 긴 산책을 통해 지노가 행복과 개운함을 느끼게 해주세요!',
    },
    {
      id: 15,
      sort_order: 3,
      content: '4번 이상',
      solution:
        '지노가 오늘 간식을 많이 먹었네요! 간식을 너무 많이 먹는 것은 해로울 수 있습니다. 지노의 식습관과 건강이 망가지지 않도록 주의해 주세요!',
    },
  ],
  needs: [
    {
      choice: 12,
      name: '산책',
      description:
        '산책할 때 볼일을 해결하려는 강아지들이 많은데요, 매너 있는 반려인이 되기 위해 배변 봉투를 챙겨주세요!!',
    },
    {
      choice: 15,
      name: '간식',
      description:
        '포도, 양파, 마늘, 커피, 마카다미아, 자이리톨, 초콜릿 등은 강아지에게 알레르기와 같은 문제를 일으킬 수 있어요! 조심해주세요~',
    },
    {
      choice: 7,
      name: '놀이',
      description:
        '앉아 훈련에 도전해보세요. 서두르지 않고 충분한 시간을 가지면서 00이가 편안함을 느끼는 훈련 환경을 만들어 주세요.',
    },
  ],
  dog_emotion_description:
    '강아지의 공격성은 겁에 질린 상태일 때 가장 크게 나타나요. 야생돌물과 다르게 집에서 기르는 강아지는 도망갈 곳이 없기 때문에 위협을 느끼면 맞서 싸워요 우선. 강아지가 이빨을 보인다면 거리를 두는 것이 좋아요. 위협이 되지 않도록 서있기 보다는 옆으로 누워서 놀아주세요. 또 강아지는 소리에 민감하기 때문에 방어적인 산책을 해주는 것도 도움이 되요. 훈련에 의한 사회화 역시 도움이 된답니다.',
};
