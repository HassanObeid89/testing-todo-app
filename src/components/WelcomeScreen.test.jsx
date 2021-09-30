import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import WelcomeScreen from "./WelcomeScreen";

describe('WelcomeScreen component',()=>{
  it("Welcome screen should have Add item button", () => {
    const {getByTestId}=render(
      <RecoilRoot>
        <WelcomeScreen />
      </RecoilRoot>
    );
    const buttonElement = getByTestId('addItem');
    expect(buttonElement).toBeTruthy();
  });
})

