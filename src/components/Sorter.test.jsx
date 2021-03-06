import { render, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import Sorter from "./Sorter";
import { sortByName, sortByPrice } from "../scripts/sortList";
jest.mock("../scripts/sortList");
describe("Sorter component", () => {
  it("Should call the sortByName function", () => {
    
    const { getByTestId } = render(
      <RecoilRoot>
        <Sorter />
      </RecoilRoot>
    );
    const button = getByTestId("byName");
    fireEvent.click(button);
    expect(sortByName).toHaveBeenCalledTimes(1);
  });

  it('Should call sortByPrice function',()=>{
    const { getByTestId } = render(
        <RecoilRoot>
          <Sorter />
        </RecoilRoot>
      );
      const button = getByTestId("byPrice");
      fireEvent.click(button);
      expect(sortByPrice).toHaveBeenCalledTimes(1);
  })
});
