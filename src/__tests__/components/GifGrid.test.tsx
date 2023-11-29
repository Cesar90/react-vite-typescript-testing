import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Testing on <GifGrid />", () => {
  const category = "Goku";
  const mockUseClientRect = useFetchGifs as jest.MockedFunction<
    typeof useFetchGifs
  >;
  test("must to show the loading at the beginning", () => {
    mockUseClientRect.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
    screen.debug();
  });
  test("must to show items when load images useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "123",
        title: "Goku",
        url: "https://localhost/goku.jpg",
      },
    ];
    mockUseClientRect.mockReturnValue({
      images: gifs,
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
