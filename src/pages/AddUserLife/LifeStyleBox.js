import React from 'react';

export const lifestyleBox = () => {
  const testQnA = [
    {
      question: { id: 0, Question: '당신은 함께 살고있는 가족이 있나요?' },
      answer: [
        { name: 'cohabitation', emotion: '가족/형제', id: '0' },
        { name: 'cohabitation', emotion: '친구', id: '1' },
        { name: 'cohabitation', emotion: '혼자', id: '2' },
      ],
    },
    {
      question: { id: 1, Question: '오늘 댕댕이가 홀로 보낸 시간은?' },
      answer: [
        { name: 'emotion', emotion: '2시간 이하', id: '0' },
        { name: 'emotion', emotion: '3-6시간', id: '1' },
        { name: 'emotion', emotion: '6-10시간', id: '2' },
        { name: 'emotion', emotion: '10시간 이상', id: '3' },
      ],
    },
    {
      question: { id: 2, Question: '오늘 댕댕이와의 산책 횟수는?' },
      answer: [
        { name: 'emotion', emotion: '1번', id: '0' },
        { name: 'emotion', emotion: '2번', id: '1' },
        { name: 'emotion', emotion: '3번', id: '2' },
        { name: 'emotion', emotion: '안함', id: '3' },
      ],
    },
    {
      question: { id: 3, Question: '오늘 댕댕이에게 간식 준 횟수는?' },
      answer: [
        { name: 'emotion', emotion: '1번', id: '0' },
        { name: 'emotion', emotion: '2-3번', id: '1' },
        { name: 'emotion', emotion: '4번 이상', id: '2' },
        { name: 'emotion', emotion: '안줌', id: '3' },
      ],
    },
  ];
  return <div>lifestyleBox</div>;
};
