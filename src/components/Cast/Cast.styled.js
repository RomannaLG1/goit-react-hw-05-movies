import styled from "styled-components";


export const List = styled.ul`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  padding: 60px 0;
    grid-template-columns: repeat(6, 195px);
    gap: 15px;
`;

export const Item = styled.li`
justify-self: center;
`;

export const Image = styled.img`
 width: 195px;
      height: 374px;
      object-fit: cover;
`;