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

  test("must call onNewCategory if input has a value", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    const form = screen.getByRole("form") as HTMLFormElement;
    fireEvent.input(input, { target: { value: title } });
    fireEvent.submit(form);
    expect(input.value).toBe("");
  });
});
