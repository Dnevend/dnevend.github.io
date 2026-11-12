import React from "react";
import NavbarNavLink from "@theme-original/NavbarItem/NavbarNavLink";

function LabelReel({ en, zh }) {
  return (
    <span className="nav-reel">
      <span className="nav-reel__item nav-reel__en" lang="en">
        {en}
      </span>
      <span className="nav-reel__item nav-reel__zh" lang="zh-Hans">
        {zh}
      </span>
    </span>
  );
}

export default function NavbarNavLinkWrapper({
  label,
  zh,
  isDropdownLink,
  ...props
}) {
  if (!zh || props.html) {
    return (
      <NavbarNavLink {...props} isDropdownLink={isDropdownLink} label={label} />
    );
  }

  // Submenu items stay Chinese-only; the reel is for top-level entries.
  if (isDropdownLink) {
    return <NavbarNavLink {...props} isDropdownLink label={zh} />;
  }

  return (
    <NavbarNavLink
      {...props}
      isDropdownLink={isDropdownLink}
      label={<LabelReel en={label} zh={zh} />}
    />
  );
}
