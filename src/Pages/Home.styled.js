import styled from 'styled-components';

export const MainWrapper = styled.main`
margin-top: 80px;
`;

export const Wrapper = styled.div`
margin: 0 auto;
`;
export const List = styled.ul`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  padding: 60px 0;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 16px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 100%);
  }
`;

export const Item = styled.li`
  justify-self: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
