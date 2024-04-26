export type HighlightText = {
  matched: boolean;
  text: string;
};

export const getHighlightText = (text: string, word: string): HighlightText[] => {
  const regex = new RegExp(`(${word})`, "i");
  const parts = [];
  let lastIndex = 0;

  text.replace(regex, (match, _, index) => {
    if (index > lastIndex) {
      parts.push({
        text: text.substring(lastIndex, index),
        matched: false,
      });
    }

    parts.push({
      text: match,
      matched: true,
    });

    lastIndex = index + match.length;
    return match;
  });

  if (lastIndex < text.length) {
    parts.push({
      text: text.substring(lastIndex),
      matched: false,
    });
  }

  return parts;
};
