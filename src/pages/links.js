import { Suspense } from "react";

const Links = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <h1>In progress</h1>
    </Suspense>
  );
};

export default Links;
