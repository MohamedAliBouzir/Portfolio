import { useMeasure } from "react-use";
// import useDarkMode from "../../hooks/useDarkMode";
import Page from "../../components/layout/Page/Page";
import PageWrapper from "../../components/layout/PageWrapper/PageWrapper";
import { PortfolioHome } from "../../menu";
import devPic from "../../assets/images/devPic.jpg";
import { ReactTyped } from "react-typed";

const Home = () => {
  // const { setDarkModeStatus } = useDarkMode();
  const [ref] = useMeasure<HTMLDivElement>();
  return (
    <PageWrapper ref={ref} title={PortfolioHome.welcomePage.text}>
      <Page className="w-full h-full gap-11">
        <div
          id="welcome page header container"
          className="flex items-center justify-center flex-col-reverse md:flex-row w-[80%] mx-auto gap-5"
        >
          {/* add image background none scrollable with the page (when scroll down it does scroll down too) */}
          <div id="image in cercle" className="basis-1/3">
            <img src={devPic} />
          </div>
          <div
            id="description profile part"
            className="basis-1/3 flex flex-col items-center md:items-start gap-5"
          >
            <div id="greetings-name">
              <p>Hi there, I'm BOUZIR Mohamed Ali</p>
            </div>
            <div id="position full js">
              <ReactTyped
                strings={[
                  "Software Engineer",
                  "Full Stack JS Developer",
                  "React Enthusiast",
                ]}
                className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>
            <div id="media links">
              {/* https://github.com/MohamedAliBouzir */}
              <div id="Github-MohamedAliBouzir"></div>
              {/* https://gitlab.com/MohamedAliBouzir */}
              <div id="GitLab-MohamedAliBouzir"></div>
              {/* will be updated at home ! */}
              <div id="Linkedin-MohamedAliBouzir">Mohamed Ali BOUZIR</div>
            </div>
            <div id="short word">
              <p>
                I discover new coding tricks by seeing how different libraries
                are built.
              </p>
            </div>
          </div>
        </div>
        <div id="counter">
          <div id="Total Projects">31</div>
          <div id="Personal Projects">16</div>
          <div id="Professional Projects">15</div>
          <div id="Clients finished Projects">14</div>
        </div>
      </Page>
    </PageWrapper>
  );
};

Home.propTypes = {};

export default Home;
