import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const socialLinks = [
  { id: "jike", label: "即刻", href: "https://okjk.co/YFO95r" },
  {
    id: "twitter",
    label: "Twitter",
    href: "https://twitter.com/Dnevend_09",
  },
  { id: "github", label: "GitHub", href: "https://github.com/Dnevend" },
  { id: "email", label: "邮箱", href: "mailto:dnevend@gmail.com" },
];

function TwitterIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.23l-4.88-6.38L6.5 22H3.38l7.24-8.28L2.8 2h6.39l4.41 5.83L18.9 2Zm-1.09 17.9h1.72L7.27 3.99H5.43L17.81 19.9Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12v3.14c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
    </svg>
  );
}

export default function SocialLinks({
  className,
  align = "center",
  showEmail = false,
}) {
  const jikeLogo = useBaseUrl("/img/jike-logo.svg");
  const links = showEmail
    ? socialLinks
    : socialLinks.filter(({ id }) => id !== "email");

  return (
    <nav
      className={className ? `${styles.socials} ${className}` : styles.socials}
      style={{ justifyContent: align }}
      aria-label="社交主页"
    >
      {links.map(({ id, label, href }) => (
        <a
          key={id}
          className={styles.socialLink}
          href={href}
          {...(id === "email"
            ? {}
            : { target: "_blank", rel: "noreferrer" })}
          aria-label={label}
          title={label}
        >
          {id === "jike" ? (
            <img
              src={jikeLogo}
              alt=""
              className={styles.jikeIcon}
              width="20"
              height="20"
            />
          ) : id === "twitter" ? (
            <TwitterIcon />
          ) : id === "github" ? (
            <GithubIcon />
          ) : (
            <EmailIcon />
          )}
        </a>
      ))}
    </nav>
  );
}
