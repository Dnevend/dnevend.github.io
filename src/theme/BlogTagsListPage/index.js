import React from "react";
import Original from "@theme-original/BlogTagsListPage";
import NoIndex from "@site/src/components/NoIndex";

export default function BlogTagsListPageWrapper(props) {
  return (
    <>
      <NoIndex />
      <Original {...props} />
    </>
  );
}
