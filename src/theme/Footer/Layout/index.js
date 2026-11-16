import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { TAGLINE } from "@site/src/constants/tagline";

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx(
        ThemeClassNames.layout.footer.container,
        "footer",
        { "footer--dark": style === "dark" },
      )}
    >
      <div className="footer__ambient" aria-hidden="true" />
      <div className="footer__glass">
        <div className="container">
          <div className="footer__top">
            <div className="footer__quote">
              <p className="footer__quote-text" data-serif="true">
                {TAGLINE}
                <Link to="/mark/mind-sentence" className="footer__quote-link">
                  摘录
                  <span aria-hidden="true">→</span>
                </Link>
              </p>
            </div>
            {links && <div className="footer__nav">{links}</div>}
          </div>

          {(logo || copyright) && (
            <div className="footer__bottom">
              {logo && <div className="margin-bottom--sm">{logo}</div>}
              {copyright}
              <a
                className="footer__badge"
                href="https://classygit.pages.dev/dnevend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://classygit.pages.dev/badge/dnevend.svg?theme=mac"
                  width="88"
                  height="31"
                  alt="ClassyGit"
                  loading="lazy"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
