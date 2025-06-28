import React, { useState, useEffect, lazy, Suspense } from "react";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setRepo] = useState([]);

  function setProfileFunction(array) {
    setRepo(array);
  }

  useEffect(() => {
    // You can add logic here, like API calls, if needed
  }, []);

  return (
    <>
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard />
      </Suspense>
      <Contact />
    </>
  );
}
