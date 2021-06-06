function scrollToFunc(selector) {
  return function () {
    document.querySelector(selector).scrollIntoView({
      behavior: "smooth",
    });
  };
}

document.getElementById("overview-next").onclick = scrollToFunc(
  "#authenticity"
);
document.getElementById("authenticity-prev").onclick = scrollToFunc(
  "#overview"
);
document.getElementById("authenticity-next").onclick = scrollToFunc(
  "#connection"
);
document.getElementById("connection-prev").onclick = scrollToFunc(
  "#authenticity"
);
document.getElementById("connection-next").onclick = scrollToFunc("#autonomy");
document.getElementById("autonomy-prev").onclick = scrollToFunc("#connection");
document.getElementById("autonomy-next").onclick = scrollToFunc("#discipline");
document.getElementById("discipline-prev").onclick = scrollToFunc("#autonomy");
