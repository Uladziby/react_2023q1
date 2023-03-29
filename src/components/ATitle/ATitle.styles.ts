import styled from 'styled-components';

export const StyledTitle = styled.h2<{
  size: number;
  weight: number;
  lineHeight: number;
  marginBottom?: number;
  color?: string;
}>`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  color: ${({ color }) => color};
`;
