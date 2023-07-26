import React from 'react';
import PlaceTitle from '../../components/PlaceTitle';
import PlaceContainer from '../../components/PlaceContainer';
import Header from '../../components/Header';

const dummyList = {
  rest: [
    {
      title: '98개 7월26일',
      place: '정하상관(J관)',
      location: '정하상관 3층',
      like: 98,
      createdDate: '2023-07-26',
    },
    {
      title: '99개 7월25일',
      place: '마태오관(MA관)',
      location: '마태오관 3층',
      like: 99,
      createdDate: '2023-07-25',
    },
    {
      title: '100개 7월30일',
      place: '김대건관(K관)',
      location: '김대건관 1층',
      like: 100,
      createdDate: '2023-07-30',
    },
  ],
  study: [
    {
      title: '97개 7월23일',
      place: '김대건관(K관)',
      location: '김대건관 지하1층',
      like: 97,
      createdDate: '2023-07-23',
    },
    {
      title: '99개 6월20일',
      place: '게페르트 남덕우 경제관(GN관)',
      location: '게페르트 남덕우 경제관 4층',
      like: 99,
      createdDate: '2023-06-20',
    },
    {
      title: '98개 7월21일',
      place: '정하상관(J관)',
      location: '정하상관 1층',
      like: 98,
      createdDate: '2023-07-21',
    },
  ],
  team: [
    {
      title: '98개 3월30일',
      place: '정하상관(J관)',
      location: '정하상관 1층',
      like: 98,
      createdDate: '2023-03-30',
    },
    {
      title: '99개 7월19일',
      place: '아담샬관(AS관)',
      location: '아담샬관 5층',
      like: 99,
      createdDate: '2023-07-19',
    },
    {
      title: '100개 7월18일',
      place: '바오로 경영관(PA관)',
      location: '바오로 경영관 1층',
      like: 100,
      createdDate: '2023-07-18',
    },
  ],
  path: [
    {
      title: '10개 7월26일',
      place: '다산관(D관)',
      like: 10,
      createdDate: '2023-07-26',
    },
    {
      title: '99개 7월16일',
      place: '로욜라도서관',
      like: 99,
      createdDate: '2023-07-16',
    },
    {
      title: '91개 7월15일',
      place: '정하상관(J관)',
      like: 91,
      createdDate: '2023-07-15',
    },
  ],
};

const Place = () => {
  return (
    <div>
      <Header />
      <PlaceTitle />
      <PlaceContainer data={dummyList.rest} purpose="rest" />
      <PlaceContainer data={dummyList.study} purpose="study" />
      <PlaceContainer data={dummyList.team} purpose="team" />
      <PlaceContainer data={dummyList.path} purpose="path" />
    </div>
  );
};

export default Place;
