import styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (location, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[location];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

export const Spacer = styled.View`
  ${({ location, size, theme }) => getVariant(location, size, theme)}
`;

Spacer.defaultProps = {
  location: "top",
  size: "small",
};
