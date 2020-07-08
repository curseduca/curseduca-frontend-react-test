import React from 'react';
import * as S from './styles';

const Feed = (props) => {
  const mockedPost = {
    id: 1,
    title: 'Minha primeira postagem',
    text: 'Essa é a minha <b>primeira postagem</b>!',
    id_category: 3,
    id_user: 2,
    date: '2020-07-07 14:00:00'
  };

  return (
    <section>
      <S.GridContainer>
        <S.ProfileInfo>
          <span>(O)</span>
          <p>posted by: {mockedPost.title}</p>
          <hr />
          <p>category:{mockedPost.id_category} </p>
        </S.ProfileInfo>
        <S.PostMetadata>
          <p>{mockedPost.date}</p>
          <p>#{mockedPost.id}</p>
        </S.PostMetadata>
        <S.PostContent>
          <h1>{mockedPost.title}</h1>
          <p>{mockedPost.text}</p>
        </S.PostContent>
      </S.GridContainer>
    </section>
  );
};

export default Feed;
