import React from "react";
import { Card, Button } from "reactstrap";
import { useState } from "react";
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
  const [next, setnext] = useState(1);
  const [previous, setprevious] = useState(0);
  const [isSubmitted, setisSubmitted] = useState(false);
  const [score, setscore] = useState(0);
  const [checklist, setchecklist] = useState([]);

  const radioSelected = (event, index) => {
    setselected(event.target.value);
    const temp = checklist;
    temp[index] = event.target.value;
    setchecklist(temp);
  };

  const checkAnswer = () => {
    let total = score;
    checklist.forEach((element, index) => {
      if (element === Questions[index].answer) {
        total++;
      }
    });
    setscore(total);
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
      <Card className="QCard">
        {isSubmitted ? (
          <div className="FlexBox-SA">
            <div>
              Your Score is {score}/{Questions.length}
            </div>
            <div>
              <Button
                className="myButtons"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Play Again
              </Button>
            </div>
          </div>
        ) : (
          <>
            {Questions.slice(previous, next).map((question) => {
              return (
                <div key={question.id}>
                  <Question
                    question={question}
                    isSubmitted={isSubmitted}
                    radioSelected={radioSelected}
                    Qnumber={previous}
                    checklist={checklist}
                  />
                </div>
              );
            })}
            <div className="FlexBox-SB">
              {previous > 0 && (
                <Button
                  className="myButtons"
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
                    className="myButtons ButtonHover"
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
                    className="myButtons Hover"
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
          </>
        )}
      </Card>
    </div>
  );
}
