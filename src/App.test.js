import React from 'react';
import { render } from '@testing-library/react';
import Feature from './Feature';
import Joke from './test1';

test("Feature component receives props and then render the text", () => {
  const { getByTestId } = render(
        <Feature text="Contact Form" />  );

  expect(getByTestId("feature-text")).toHaveTextContent("Contact Form");});

test("Joke component receives props and then render the text", () => {
  const { getByTestId } = render(
    <Joke text="The funniest joke of this year." />
  );
  expect(getByTestId("joke-text")).toHaveTextContent(
    "The funniest joke of this year."
  );
});
