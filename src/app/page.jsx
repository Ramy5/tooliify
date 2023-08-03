import HomeHeader from "@/components/HomeHeader/HomeHeader";
import Navigation from "@/components/Navigation/Navigation";
import MainHome from "@/components/Home/MainHome";
import Partners from "@/components/Partners/Partners";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import classes from "./Home.module.css";

export default function Home({ searchParams }) {
  let content = <MainHome />;

  if (searchParams.nav === "about") content = <About />;
  if (searchParams.nav === "all") content = <MainHome />;
  if (searchParams.nav === "partners") content = <Partners />;
  if (searchParams.nav === "contact") content = <Contact />;

  return (
    <>
      <HomeHeader />
      <Navigation />
      <main className={classes.main}>{content}</main>
    </>
  );
}
