import { getGifs } from "../../helpers/getGifs";

describe("Testing on getGifs", () => {
  const title = "Goku";

  test("Must return array of gifs", async () => {
    const gifs = await getGifs(title);
    //console.log(gifs);
    expect(gifs.length).toBe(10);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
