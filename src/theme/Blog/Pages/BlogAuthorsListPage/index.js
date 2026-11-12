import React from "react";
import Original from "@theme-original/Blog/Pages/BlogAuthorsListPage";
import NoIndex from "@site/src/components/NoIndex";

export default function BlogAuthorsListPageWrapper(props) {
  return (
    <>
      <NoIndex />
      <Original {...props} />
    </>
  );
}
