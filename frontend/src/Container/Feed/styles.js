import styled from 'styled-components';

export const GridContainer = styled.article`
  display: grid;
  grid-template-columns: 1.5fr 2fr 2fr 2fr;
  grid-template-rows: 0.5fr 2fr 2fr;
  gap: 1px 1px;
`;

export const ProfileInfo = styled.div`
  grid-area: 1 / 1 / 4 / 2; 
`;

export const PostMetadata = styled.div`
  grid-area: 1 / 2 / 2 / 5;
`;

export const PostContent = styled.div`
  grid-area: 2 / 2 / 4 / 5;
`;
