import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  ButtonGroup,
  Button,
  Row,
  Container,
} from "reactstrap";
import { useState } from "react";
import Options from "../Components/Options";

const Questions = [
  {
    id: 0,
    question: "What is our religion?",
    options: ["Islam", "Christianity", "Budhism", "Hinduism"],
    answer: "Islam",
  },
  {
    id: 1,
    question: "Who are you?",
    options: ["Alien", "Human", "No one", "Muslim"],
    answer: "Muslim",
  },
  {
    id: 2,
    question: "How are you?",
    options: ["Good", "Not Good", "Alhamdulillah", "Fine"],
    answer: "Alhamdulillah",
  },
];

export default function QuestionPage() {
  const [selected, setselected] = useState("");
  const [trueOption, settrueOption] = useState("");
  const [next, setnext] = useState(1);
  const [previous, setprevious] = useState(0);
  const [isSubmitted, setisSubmitted] = useState(false);
  const [score, setscore] = useState(0);

  const radioSelected = (event, trueOption) => {
    setselected(event.target.value);
    settrueOption(trueOption);
    console.log(event.target.value, trueOption);
  };
  const checkAnswer = () => {
    if (selected === trueOption) {
      setscore(score + 1);
    }
  };
  const Next = () => {
    if (next < Questions.length) {
      setnext(next + 1);
      setprevious(previous + 1);
    }
    checkAnswer();
  };
  const Previous = () => {
    if (previous > 0) {
      setnext(next - 1);
      setprevious(previous - 1);
      setscore(score - 1);
    }
  };
  return (
    <div>
      {isSubmitted && (
        <>
          <div>
            Your Score is {score}/{Questions.length}
          </div>
          <div>
            <Button
              onClick={() => {
                window.location.reload();
              }}
            >
              Play Again
            </Button>
          </div>
        </>
      )}
      {Questions.slice(previous, next).map((question) => {
        return (
          <Card
            key={question.id}
            style={{
              backgroundColor: "#eeeeee",
              width: "20rem",
            }}
          >
            <>
              <CardBody>
                <CardTitle tag="h5">Question</CardTitle>
                <CardText>{question.question}</CardText>

                <div>
                  <Container>
                    <Row xs="2">
                      {question.options.map((option, index) => {
                        return (
                          <Options
                            key={index}
                            option={option}
                            radioSelected={radioSelected}
                            trueOption={question.answer}
                            isSubmitted={isSubmitted}
                          />
                        );
                      })}
                    </Row>
                  </Container>
                </div>
              </CardBody>
              {previous > 0 && (
                <Button
                  disabled={isSubmitted}
                  onClick={() => {
                    Previous();
                  }}
                >
                  Previous
                </Button>
              )}

              {next !== Questions.length ? (
                <>
                  <Button
                    disabled={isSubmitted}
                    onClick={() => {
                      Next();
                    }}
                  >
                    Next
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    disabled={isSubmitted}
                    onClick={() => {
                      checkAnswer();
                      setisSubmitted(true);
                    }}
                  >
                    Submit
                  </Button>
                </>
              )}
            </>
          </Card>
        );
      })}
    </div>
  );
}
