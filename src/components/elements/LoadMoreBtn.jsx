import React from "react";
import PropTypes from "prop-types";

import { StyledLoadMoreBtn } from "../styles/StyledLoadMoreBtn";

const LoadMoreBtn = ({ text, callBack }) => {
  return (
    <StyledLoadMoreBtn type="button" onClick={callBack}>
      {text}
    </StyledLoadMoreBtn>
  );
};

LoadMoreBtn.propTypes = {
  text: PropTypes.string,
  callBack: PropTypes.func
};

export default LoadMoreBtn;
