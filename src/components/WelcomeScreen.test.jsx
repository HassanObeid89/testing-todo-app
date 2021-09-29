import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import WelcomeScreen from "./WelcomeScreen";

test("Welcome screen should have Add item button", () => {
  render(
    <RecoilRoot>
      <WelcomeScreen />
    </RecoilRoot>
  );
  const buttonElement = screen.getAllByText(/add item/i);
  expect(buttonElement).toBeInTheDocument;
});
