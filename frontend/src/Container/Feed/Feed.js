import React from 'react';
import * as S from './styles';
import { Container } from '../../generalStyles';

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
    <Container>
      <S.GridContainer>
        <S.ProfileInfo>
          <span>(O)</span>
          <p>posted by: {mockedPost.id_user}</p>
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
    </Container>
  );
};

export default Feed;
