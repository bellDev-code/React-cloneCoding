import React from "react";
import styled from "styled-components";
import useInput from "../../hooks/useInput";

const Container = styled.div`
  width: 100%;
`;
const QuestionWrapper = styled.div`
  width: 100%;
  padding: 8px 0px;
  font-size: 17px;
  font-weight: 600;
`;
const AnswerWrapper = styled.div`
  width: 100%;
  padding: 5px 0 13px 0;
`;

const AnswerInput = styled.input`
  border: initial;
  border-bottom: 1px solid black;
  padding: 5px 0;
  width: 100%;
  background-color: transparent;
`;

const MobContainer = styled.div`
  width: 100%;
`;

const MobQuestionWrapper = styled.div`
  width: 100%;
  padding: 5px 0px;
  font-size: 12px;
  font-weight: 600;
`;

const MobAnswerWrapper = styled.div`
  width: 100%;
  padding: 3px 0 8px 0;
`;

const AnswerInputRow = ({
  question,
  platfrom,
  answer,
  currentPage,
  updateAnswer,
}) => {
  const onChange = (event) => {
    updateAnswer(currentPage, question.id, event.target.value);
  };
  if (platfrom === "desktop") {
    return (
      <Container>
        <QuestionWrapper>{question.title}</QuestionWrapper>
        <AnswerWrapper>
          <AnswerInput
            type="text"
            name="answer-input"
            value={answer}
            defaultValue={answer}
            onChange={onChange}
          />
        </AnswerWrapper>
      </Container>
    );
  } else {
    return (
      <MobContainer>
        <MobQuestionWrapper>{question}</MobQuestionWrapper>
        <MobAnswerWrapper>
          <AnswerInput
            type="text"
            name="answer-input"
            value={answer}
            defaultValue={answer}
            onChange={onChange}
          />
        </MobAnswerWrapper>
      </MobContainer>
    );
  }
};

export default AnswerInputRow;
