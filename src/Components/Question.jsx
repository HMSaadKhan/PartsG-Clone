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

export default function Question({ Questions }) {
  const [selected, setselected] = useState("");
  const [next, setnext] = useState(1);
  const [previous, setprevious] = useState(0);
  const [score, setscore] = useState(0);
  const [isSubmitted, setisSubmitted] = useState(false);

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
  const radioSelected = (event) => {
    setselected(event.target.value);
  };
  return (
    <div>
      {Questions.slice(previous, next).map((question, index) => {
        return (
          <div key={index}>
            <CardBody>
              <CardTitle tag="h5">Question # {previous + 1} </CardTitle>
              <CardText>{question.question}</CardText>

              <div>
                <ButtonGroup>
                  {question.options.map((option, index) => {
                    return (
                      <div key={index} style={{ display: "flex" }}>
                        <Options
                          option={option}
                          radioSelected={radioSelected}
                          trueOption={option.answer}
                        />
                      </div>
                    );
                  })}
                </ButtonGroup>
              </div>
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
    </div>
  );
}
