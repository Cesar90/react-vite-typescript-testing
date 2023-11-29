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
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    const form = screen.getByRole("form") as HTMLFormElement;
    fireEvent.input(input, { target: { value: title } });
    fireEvent.submit(form);
    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(title);
  });

  test("must not call onNewCategory if the input is empty", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form") as HTMLFormElement;
    fireEvent.submit(form);
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
