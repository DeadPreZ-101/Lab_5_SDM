import React from "react";
import { render } from "@testing-library/react";
import Feature from "./Feature";
import Joke from "./test1";
import Test from "./test3";

test("Feature component receives props and then render the text", () => {
  const { getByTestId } = render(<Feature text="Contact Form" />);

  expect(getByTestId("feature-text")).toHaveTextContent("Contact Form");
});

test("Joke component receives props and then render the text", () => {
  const { getByTestId } = render(
    <Joke text="The funniest joke of this year." />
  );
  expect(getByTestId("joke-text")).toHaveTextContent(
    "The funniest joke of this year."
  );
});

test("Checkin Homepage to see if it has correct text", () => {
  const { getByTestId } = render(<Test text="Team 9" />);

  expect(getByTestId("test-3")).toHaveTextContent("Team 9");
});