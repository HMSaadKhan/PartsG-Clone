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
import Question from "../Components/Question";

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
    console.log(selected);
    if (selected === trueOption && selected !== "") {
      setscore(score + 1);
      setselected("");
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
      <Card className="QCard">
        {Questions.slice(previous, next).map((question) => {
          return (
            <div key={question.id}>
              <Question
                question={question}
                isSubmitted={isSubmitted}
                radioSelected={radioSelected}
              />
            </div>
          );
        })}
        <div className="FlexBox-SB">
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
                color="primary"
                size="lg"
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
                color="success"
                size="sm"
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
        </div>
      </Card>
    </div>
  );
}
