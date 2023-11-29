import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Testing on the hook useFetchGifs", () => {
  const category = "Goku";
  test("Must return the initial state", () => {
    const { result } = renderHook(() => useFetchGifs(category));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Must of return an array of images and isLoading in false", async () => {
    const { result } = renderHook(() => useFetchGifs(category));
    await waitFor(() => {
      expect(result.current.images.length).toBeGreaterThan(0);
    });
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
