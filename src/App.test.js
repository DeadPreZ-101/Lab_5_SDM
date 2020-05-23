import React from 'react';
import { render } from '@testing-library/react';
import Feature from './Feature';


test("Feature component receives props and then render the text", () => {
  const { getByTestId } = render(
        <Feature text="Contact Form" />  );

  expect(getByTestId("joke-text")).toHaveTextContent("Contact Form");});
