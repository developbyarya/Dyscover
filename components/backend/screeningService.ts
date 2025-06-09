interface ScreeningTest {
  alphabet_test: string[][];
  word_test: string[];
}

export async function fetchScreeningTest(): Promise<ScreeningTest> {
  try {
    const response = await fetch('https://dyslexia-backend.vercel.app/api/screening');
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching screening test:', error);
    // Fallback data in case API is unreachable
    return {
      alphabet_test: [
        ["y", "p", "e"],
        ["w", "r"],
        ["f", "w", "h"],
        ["m", "a", "n"],
        ["o", "z"]
      ],
      word_test: [
        "proyek",
        "matahari",
        "kaca",
        "teh",
        "lambat"
      ]
    };
  }
} 