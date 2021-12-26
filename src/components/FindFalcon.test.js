import {
  render,
  screen,
  cleanup,
  waitForElement,
  getByTestId,
  getAllByTestId,
} from "@testing-library/react";
// import "jest-dom/extend-expect";
import axios from "axios";
import { FindFalcon } from "./FindFalcon.js";

describe("Falcon component", () => {
  test("it should render heading", () => {
    render(<FindFalcon />);
    const heading = screen.getByText("Finding Falcone !!");
    expect(heading).toBeInTheDocument();
  });
  test("it should render select boxes", () => {
    render(<FindFalcon />);
    const selectBoxes = screen.getAllByTestId("select-input");
    // const selectBoxOptions = screen.getAllByTestId("select-input-options");
    expect(selectBoxes).toHaveLength(4);
    // expect(selectBoxOptions).toHaveLength(16);
  });

  afterEach(cleanup);
  test("fetches successfully data from an API", async () => {});
  test("fetches erroneously data from an API", async () => {});
});
