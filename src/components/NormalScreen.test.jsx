import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import NormalScreen from "./NormalScreen";

describe("NormalScreen component", () => {
  it("Normal screen should have Add item button", () => {
    const { getByTestId } = render(
      <RecoilRoot>
        <NormalScreen />
      </RecoilRoot>
    );
    const buttonElement = getByTestId("addItem");
    expect(buttonElement).toBeTruthy();
  });
});
