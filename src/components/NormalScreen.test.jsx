import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import NormalScreen from "./NormalScreen";

test("Normal screen should have Add item button", () => {
  render(
    <RecoilRoot>
      <NormalScreen />
    </RecoilRoot>
  );

  const buttonElement = screen.getAllByText(/add item/i);
  expect(buttonElement).toBeInTheDocument;
});

