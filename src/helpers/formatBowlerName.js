export const transformBowlerNameToSlug = (bowlerName) => {
  return bowlerName.toLowerCase().split(" ").join("-");
};

export const transformBowlerSlugToName = (bowlerSlug) => {
  return bowlerSlug
    .split("-")
    .map((char) => char.charAt(0).toUpperCase() + char.slice(1))
    .join(" ");
};
