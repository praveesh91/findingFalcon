import { render, screen } from "@testing-library/react";
import { FindFalcon } from "./FindFalcon.js";
import Home from "./Home.js";

describe("Home component", () => {
  test("it should render instruction in home page", () => {
    render(<Home />);
    const instruction = screen.getByText(
      "Follow the instructions to find your Falcon"
    );
    expect(instruction).toBeInTheDocument();
  });
  test("it should render step1 description", () => {
    render(<Home />);
    const step1 = screen.getByText("Goto find");
    expect(step1).toBeInTheDocument();
  });
  test("it should render step2 description", () => {
    render(<Home />);
    const step2 = screen.getByText("Select planets");
    expect(step2).toBeInTheDocument();
  });
  test("it should render step3 description", () => {
    render(<Home />);
    const step3 = screen.getByText("Select Vehicles");
    expect(step3).toBeInTheDocument();
  });
  test("it should render step4 description", () => {
    render(<Home />);
    const step4 = screen.getByText("Click find falcon");
    expect(step4).toBeInTheDocument();
  });
  test("it should render step5 description", () => {
    render(<Home />);
    const step5 = screen.getByText("Done");
    expect(step5).toBeInTheDocument();
  });
});

describe("Falcon component", () => {
  test("it should render heading", () => {
    render(<FindFalcon />);
    const heading = screen.getByRole("heading", {
      name: "Finding Falcone !!",
      level: 3,
    });
    expect(heading).toBeInTheDocument();
  });
  test("it should render select boxes", () => {
    render(<FindFalcon />);
    const selectBoxes = screen.queryAllByLabelText("Select Planet name");
    expect(selectBoxes).toHaveLength(4);
  });
  // Will do after learning async loading
  // test("it should render option list", () => {
  //   render(<FindFalcon />);
  //   const listElement = screen.queryAllByText("Space pod");
  //   expect(listElement).toHaveLength(4);
  // });
  test("it should render heading", () => {
    render(<FindFalcon />);
    const findButton = screen.getByRole("button", {
      name: "Find falcone",
    });
    expect(findButton).toBeInTheDocument();
  });
  test("it should render heading", () => {
    render(<FindFalcon />);
    const resetButton = screen.getByRole("button", {
      name: "Reset",
    });
    expect(resetButton).toBeInTheDocument();
  });
});
