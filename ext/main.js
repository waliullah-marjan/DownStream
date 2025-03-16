chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      if (details.url.includes(".mp4") || details.url.includes(".m3u8")) {
        console.log("Video request detected:", details.url);
      }
    },
    { urls: ["<all_urls>"] }
);

