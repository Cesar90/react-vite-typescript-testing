import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components";

describe("testing in <AddCategory>", () => {
  const title = "Goku";
  test("must change the value in textbox", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.input(input, { target: { value: title } });
    expect(input.value).toBe(title);
    screen.debug();
  });
});
