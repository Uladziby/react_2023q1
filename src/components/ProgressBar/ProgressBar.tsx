/** @format */
import {
  ProgressBarInner,
  ProgressBarWrapper,
  StyledContainer,
} from "./ProgressBar.styles";
import { useEffect, useState } from "react";

export const ProgressBar = () => {
  const [percentComplete, setPercentComplete] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (percentComplete >= 100) {
        setPercentComplete(0);
      } else {
        setPercentComplete(percentComplete + 1);
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, [percentComplete]);

  return (
    <StyledContainer>
      <ProgressBarWrapper>
        <ProgressBarInner style={{ width: `${percentComplete}%` }} />
      </ProgressBarWrapper>
    </StyledContainer>
  );
};
