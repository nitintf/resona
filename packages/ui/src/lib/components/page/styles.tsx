import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
`;

export const PageContent = styled.div`
  min-width: 0;
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
`;
