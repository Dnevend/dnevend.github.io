import React from "react";
import Original from "@theme-original/DocTagDocListPage";
import NoIndex from "@site/src/components/NoIndex";

export default function DocTagDocListPageWrapper(props) {
  return (
    <>
      <NoIndex />
      <Original {...props} />
    </>
  );
}
