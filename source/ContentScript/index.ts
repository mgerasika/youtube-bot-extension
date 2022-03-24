console.log("helloworld from content script");
window.addEventListener("scroll", () => {
  console.log("hello-scroll2");
});
window.setTimeout(() => {
  const root = document.body.getElementsByTagName(
    "ytd-comment-renderer"
  );
  console.log("hello-result");
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = `.yt-img-shadow { position: relative;} .iconDiv {position:absolute;font-size:12px;border:1px solid black;border-radius:4px; z-index:100;text-transform:uppercase; font-weight:bold;background-color:white;padding:4px 8px;}`;

  const div = document.createElement("div");
  div.appendChild(style);
  const iconDiv = document.createElement("div");
  iconDiv.className = "iconDiv";
  iconDiv.innerHTML = "Bot";
  div.appendChild(iconDiv);
  div.className = "hello";
  div.appendChild(root[0]);

  root[0].appendChild(div);
}, 3000);

// <a id="author-text" class="yt-simple-endpoint style-scope ytd-comment-renderer" href="/channel/UCRu51PFIo156tREHHVKxIDA">
//             <span class="style-scope ytd-comment-renderer">
//               Н
//             </span>
//           </a>
export {};
