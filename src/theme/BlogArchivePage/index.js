import React from "react";
import Original from "@theme-original/BlogArchivePage";
import NoIndex from "@site/src/components/NoIndex";

export default function BlogArchivePageWrapper(props) {
  return (
    <>
      <NoIndex />
      <Original {...props} />
    </>
  );
}
