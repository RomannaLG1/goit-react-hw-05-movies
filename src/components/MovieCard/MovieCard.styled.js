import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Image = styled.img`
  width: 195px;
`;

export const Title = styled.p`
  margin-bottom: 5px;
  font-size: 26px;
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;
export const Item = styled.li`
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    color: orangered;
  }
`;
