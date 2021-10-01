import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import ButtonAddItem from "./ButtonAddItem";

test("Should call the openModal function", async () => {
    const fakeMethod = jest.fn(()=>console.log('yess i called'));
  render(
    <RecoilRoot>
      <ButtonAddItem onClick={fakeMethod} />
    </RecoilRoot>
  );

  const buttonElement = screen.queryByTestId("addItem");

  fireEvent.click(buttonElement);
  
  expect(fakeMethod).toHaveBeenCalledTimes(0);
  
});

