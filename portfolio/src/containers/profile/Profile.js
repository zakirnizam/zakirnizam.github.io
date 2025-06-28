import React, { lazy, Suspense } from "react";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <GithubProfileCard />
      </Suspense>
      <Contact />
    </>
  );
}
