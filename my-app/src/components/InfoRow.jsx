import React from "react";
import {
  StyledRow,
  StyledTitle,
  Details,
  StyledAdditionalInfo
} from "./Styled";

export const InfoRow = ({ item }) => {
  const { title, url, points, author } = item;

  return (
    <StyledRow>
      <StyledTitle>{title}</StyledTitle>
      <StyledAdditionalInfo>
        <Details>
          <label>author: </label>
          {author}
        </Details>
        <Details>
          <label>points: </label>
          {points}
        </Details>
      </StyledAdditionalInfo>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
    </StyledRow>
  );
};
