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
      <div className="container">
        <div className="footer__top">
          <div className="footer__quote">
            <p className="footer__quote-text">
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
          </div>
        )}
      </div>
    </footer>
  );
}
