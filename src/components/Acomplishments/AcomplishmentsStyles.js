import styled from "styled-components";

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    max-width: 500px;
    margin: 24px auto;
  }
`;

export const Box = styled.div`
  background: #212D45;
  border-radius: 12px;
  height: 180px;
  padding: 24px;

  @media ${props => props.theme.breakpoints.lg} {
    height: 210px;
  }

  @media ${props => props.theme.breakpoints.md} {
    height: 160px;
    padding: 18px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 130px;
    padding: 16px;
  }
`;

export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 30px;
    line-height: 34px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 26px;
    line-height: 30px;
  }
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 22px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md} {
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
    padding-bottom: 40px;
  }
`;

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

  @media ${props => props.theme.breakpoints.md} {
    font-size: 22px;
    line-height: 30px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;
