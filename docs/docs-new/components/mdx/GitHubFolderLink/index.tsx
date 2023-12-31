import React from "react";
import parseHref from "@/utils/parseHref";
import GitHubLogo from "@/public/images/github-icon.svg";

export const GitHubFolderLink = (props: propsType) => {
  const { href } = props;
  const { filePath } = parseHref(href, 99);

  return (
    <div className="block-link">
      <a
        href={href}
        target="_blank"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img
          src={GitHubLogo}
          alt="GitHub Logo"
          style={{
            width: "25px",
            height: "25px",
            margin: "0 10px 0 0",
            border: "none",
          }}
        />
        <div>{filePath}</div>
      </a>
    </div>
  );
};

export default GitHubFolderLink;

interface propsType {
  href: string;
}
