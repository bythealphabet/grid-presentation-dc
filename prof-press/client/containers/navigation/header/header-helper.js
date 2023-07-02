const root = document.getElementById("root");

export const stopScroll = () => root.classList.add("no-scroll");
export const startScroll = () => root.classList.remove("no-scroll");
