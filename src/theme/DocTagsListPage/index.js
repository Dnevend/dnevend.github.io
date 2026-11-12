import React from "react";
import Original from "@theme-original/DocTagsListPage";
import NoIndex from "@site/src/components/NoIndex";

export default function DocTagsListPageWrapper(props) {
  return (
    <>
      <NoIndex />
      <Original {...props} />
    </>
  );
}
