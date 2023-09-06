import React from 'react';
import styled from 'styled-components';

const Wrapper = ({ bgColor, children, className }) => {
  return (
    <OuterContainer bgColor={bgColor} className={className}>
      <InnerContainer children={children} />
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
`;

export default Wrapper;
