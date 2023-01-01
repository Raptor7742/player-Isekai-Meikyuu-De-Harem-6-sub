const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Isekai Meikyuu De Harem - épisode 6 VOSTFR",
      description: "Vous regardez",
      image: "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/03/isekaimeikyuudeharemwo_keyvisual-1-e1648179739159.jpg?resize=696%2C391&ssl=1",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m204.syncusercontent.com/mfs-60:d65e2c2ae2e38718ba69c9b0b88437bc=============================/p/Isekai.Meikyuu.De.Harem.Wo.S01e06.Unrated.Vostfr.1080P.Webrip.french-anime.com.mp4?allowdd=0&datakey=mCB9sjZQxdqrvqQdQSPk3pfT9eL9UGPglsNDjBzUOYsTdN9E7g/u9CHNGXj0S4IMU6P4jGvu3rKgvpB6tDePm6fIoT7mLPXIAYla2h1PWAka5U7gDH8WfB03gIj8PE6oUVp/pgAfUZL7NVLmKx7ynUmHnZDJUN0FMdjN6G3xu/pe7miPg99MZybLBKPAG+t1tvxfRs8SBiL0o0ZO/5qhOgEgV5DyzZsbxa5PimTCZNg01hhb40+AsUZNM9vyAA13iLX78K2z367Unx4sniOQb5j3+nT8RY2lDuz/sTyjMiU1jgDj3ChpCs5/YsuQCJnMkcnJeVP99dFVVB2NCNf53g&engine=ln-2.3.7.3&errurl=DyD2QFyN/mDSvcSsFK4v2FNiuigTKw6xn5fBZjPdZL0xTlo0SPBJdZg/GFrvZLqlAO52jVijmSEiJ7rKfZKjHrhB9bNPnMnaYgwSBWV9zt+ALkCyIU7p6k0B9lTdDO7c9FENoO01WlFuUBafoH5Bc0wTj7LAC1e9hQtrHZSfyCOQVz4jNCoziQug5Hpb9n4q59cGK167x6ydsU/3fHvVbguCDFen1YfuFK/yNq3xCqKBkjmLs4H6MGL5KgIOiRreeFDq7MPQEz9YvS7SSDNJMkcn0NdFd59gwmpZ+/P+sibcVFPbDBhGR1x8s7V3XYwZ0xYGtQjgFMlaIxr0+Rwk1Q==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iSXNla2FpLk1laWt5dXUuRGUuSGFyZW0uV28uUzAxZTA2LlVucmF0ZWQuVm9zdGZyLjEwODBQLldlYnJpcC5mcmVuY2gtYW5pbWUuY29tLm1wNCI7ZmlsZW5hbWUqPVVURi04JydJc2VrYWkuTWVpa3l1dS5EZS5IYXJlbS5Xby5TMDFlMDYuVW5yYXRlZC5Wb3N0ZnIuMTA4MFAuV2VicmlwLmZyZW5jaC1hbmltZS5jb20ubXA0Ow&ipaddress=1458994159&linkcachekey=b2138ea50&linkoid=1747010004&mode=101&sharelink_id=11804807900004&timestamp=1672597456585&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=e01ffe6861bd2a91e318c6e9b3fb8bd8aa11bcf9&cachekey=60:d65e2c2ae2e38718ba69c9b0b88437bc=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
