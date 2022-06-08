export const transformNameToSlug = (name) => {
  return name.toLowerCase().split(" ").join("-");
};

export const transformSlugToName = (slug, type = undefined) => {
  return slug
    .split("-")
    .map((char, index) =>
      type === "team" && index === 0
        ? char.toUpperCase()
        : char.charAt(0).toUpperCase() + char.slice(1)
    )
    .join(" ");
};
