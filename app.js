const sharebuttons = document.querySelectorAll(".tile-share");

async function copyText(e) {
  e.preventDefault();
  const link = this.getAttribute("link");
  //   console.log(link);
  try {
    await navigator.clipboard.writeText(link);
  } catch (error) {
    console.log(error);
  }
}

sharebuttons.forEach((sharebuttons) =>
  sharebuttons.addEventListener("click", copyText)
);

const MainShareButton = document.querySelector(".Share-button");
MainShareButton.addEventListener("click", copyText);
