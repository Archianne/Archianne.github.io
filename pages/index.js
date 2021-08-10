import Link from "next/link";
import PageWrapper from "../src/components/PageWrapper";

const Home = () => {
  return (
    <PageWrapper>
      Hello World.{" "}
      <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
        <a>Abosdfsdfut</a>
      </Link>
    </PageWrapper>
  );
};

export default Home;
