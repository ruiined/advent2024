export async function aocFetch(path: string) {
  const res = await fetch(`https://adventofcode.com/2024/${path}`, {
    headers: {
      cookie: `session=${process.env.SESSION}`,
    },
  });
  return res.text();
}
