import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test("passord er like", () => {
  render(<App />);
  fireEvent.change(screen.getByTestId("pass1"), {
    target: { value: "123" },
  });
  fireEvent.change(screen.getByTestId("pass2"), {
    target: { value: "123" },
  });
  fireEvent.click(screen.getByTestId("button"));
  expect(screen.getByTestId("errormsg")).toHaveTextContent(
    //Grunnet inputvalidering, så forventer vi dette
    "ERROR! Check av selectbox for å registrere deg!"
  );
});


test("passordene er ikke like", () => {
  render(<App />);
  fireEvent.change(screen.getByTestId("pass1"), {
    target: { value: "123" },
  });
  fireEvent.change(screen.getByTestId("pass2"), {
    target: { value: "12345" },
  });
  fireEvent.click(screen.getByTestId("button"));
  expect(screen.getByTestId("errormsg")).toHaveTextContent(
    "ERROR! gjenta passordet ditt, dersom du ønsker å registrere deg"
  );
});













