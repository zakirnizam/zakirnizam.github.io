import React, {useState, useEffect, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {socialMediaLinks} from "../../portfolio";
import Loading from "../../containers/loading/Loading";

const GithubRepoCard = lazy(() =>
  import("../../components/githubRepoCard/GithubRepoCard")
);

export default function Projects() {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    fetch("/profile.json")
      .then(result => {
        if (result.ok) return result.json();
        throw result;
      })
      .then(response => {
        setRepo(response.data.user.pinnedItems.edges);
      })
      .catch(error => {
        console.error(
          `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
        );
        setRepo("Error");
      });
  }, []);

  // You can add your UI rendering logic here, e.g.:
  // return (
  //   <Suspense fallback={<Loading />}>
  //     <GithubRepoCard repo={repo} />
  //   </Suspense>
  // );

  return null;
}

