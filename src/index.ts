import BypassButton from "./BypassButton";

import "./index.scss";

const element = document.createElement("div");
element.id = "medium-bypass-tool";
document.body.appendChild(element);

const isMediumWebsite =
  location.hostname.endsWith("medium.com") ||
  document.querySelector(
    "meta[property='al:ios:app_name'][content='Medium']"
  ) !== null;

isMediumWebsite && element.appendChild(BypassButton());
