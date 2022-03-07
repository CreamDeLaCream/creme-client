const appKey = process.env.REACT_APP_KAKAO_SHARE_KEY;

const kakaoShareList = (
  title = '오늘의 마이펫',
  description = '나의 반려견의 표정은?',
  imgUrl = process.env.PUBLIC_URL + `/Image/partner1.png`,
  link = window.location.href,
  buttonTitle = '보러 가기',
) => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!window.Kakao.isInitialized()) {
      kakao.init(appKey);
    }
    kakao.Link.sendDefault({
      // container: '#test',
      objectType: 'feed',
      content: {
        title: title,
        description: description,
        imageUrl: imgUrl,
        link: {
          webUrl: link,
          mobileWebUrl: link,
        },
      },
      buttons: [
        {
          title: buttonTitle,
          link: {
            webUrl: link,
            mobileWebUrl: link,
          },
        },
      ],
    });
  }
};

export default kakaoShareList;
