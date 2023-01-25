import styled from 'styled-components';

// export const List = styled.ul`
//   margin-left: auto;
//   margin-right: auto;
//   display: grid;
//   padding: 60px 0;
//     grid-template-columns: repeat(3, 395px);
//     gap: 32px 16px;
// `;

// export const Item = styled.li`
//   justify-self: center;
// `;

// export const Image = styled.img`
//   width: 395px;
//   height: 574px;
//   object-fit: cover;
// `;

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
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
