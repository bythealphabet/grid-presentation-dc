export const themeSaver = {
  whatTheme() {
    if (typeof window == "undefined") return false;
    if (!localStorage.getItem("theme")) return false;

    return JSON.parse(localStorage.getItem("theme"));
  },
  setTheme(theme) {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", JSON.stringify(theme));
    }
  },
};

export const hasGlasses = () => {
  if (typeof window == "undefined") return false;
  if (!localStorage.getItem("glasses")) return false;

  return JSON.parse(localStorage.getItem("glasses"));
};

export const putGlasses = (has) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("glasses", JSON.stringify(has));
  }
};
