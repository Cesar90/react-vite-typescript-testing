import { render, screen } from "@testing-library/react";
import { GitItem } from "../../components/";

describe("Testing in <GitItem/ >", () => {
  const url = "https://goku-one.com";
  const title = "Goku";
  const id = "1";

  test("must match with snapshot", () => {
    const { container } = render(<GitItem url={url} title={title} id={id} />);
    expect(container).toMatchSnapshot();
  });

  test("must to show the title, url and id", () => {
    const { getByText } = render(<GitItem url={url} title={title} id={id} />);
    expect(getByText(title)).toBeTruthy();
  });

  test("must to show the imagen with the URL and ALT indicated", () => {
    render(<GitItem url={url} title={title} id={id} />);
    //screen.debug();
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", url);
    expect(image).toHaveAttribute("alt", title);
  });
});
