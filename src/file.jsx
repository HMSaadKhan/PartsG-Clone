import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  ButtonGroup,
  Button,
  Row,
  Col,
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
  const [next, setnext] = useState(1);
  const [previous, setprevious] = useState(0);
  const [score, setscore] = useState(0);
  const [isSubmitted, setisSubmitted] = useState(false);

  const radioSelected = (event) => {
    setselected(event.target.value);
    console.log(event.target.value);
  };

  const Next = () => {
    if (next < Questions.length) {
      setnext(next + 1);
      setprevious(previous + 1);
    }
  };
  const Previous = () => {
    if (previous > 0) {
      setnext(next - 1);
      setprevious(previous - 1);
    }
  };
  return (
    <div>
      <Card
        style={{
          backgroundColor: "#eeeeee",
          width: "20rem",
        }}
      >
        {/* {isSubmitted && (
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
        )} */}
        {Questions.slice(previous, next).map((question, index) => {
          return (
            <div key={index}>
              <CardBody>
                <CardTitle tag="h5">Question # {previous + 1} </CardTitle>
                <CardText>{question.question}</CardText>

                <ButtonGroup>
                  <div>
                    {question.options.map((option, index) => {
                      return (
                        <div key={index}>
                          <Options
                            option={option}
                            radioSelected={radioSelected}
                          />
                        </div>
                      );
                    })}
                  </div>
                </ButtonGroup>
              </CardBody>
              {previous > 0 && (
                <Button
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
                    onClick={() => {
                      setisSubmitted(true);
                    }}
                  >
                    Submit
                  </Button>
                </>
              )}
            </div>
          );
        })}
      </Card>
    </div>
  );
}
