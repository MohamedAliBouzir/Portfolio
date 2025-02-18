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
          <div
            id="picture-container"
            className="basis-1/3 flex items-center justify-center"
          >
            <div
              id="picture-border"
              className="w-72 h-72 rounded-full border-4 border-purple-400 p-1 overflow-hidden"
            >
              <img
                id="picture-avatar"
                src={devPic}
                alt="Personal Image"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div
            id="description profile part"
            className="basis-1/3 flex flex-col items-center md:items-start gap-5"
          >
            <div
              id="greetings-name-container"
              className="flex gap-2 flex-col md:flex-row w-full h-full items-center"
            >
              <p id="greetings" className="text-3xl font-bold">
                Hi There! 👋
              </p>
              <p id="personalName" className="flex items-center gap-1">
                <span className="text-lg font-mono">I'm</span>
                <div>
                <span className="text-xl font-bold text-purple-500">&ldquo;</span>
                <span className="text-lg">BOUZIR Mohamed Ali</span>
                <span className="text-xl font-bold text-purple-500 relative top-3">&rdquo;</span></div>
              </p>
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
              {/* https://www.linkedin.com/in/bouzir-mohamed-ali/ */}
              <div id="Linkedin-MohamedAliBouzir"></div>
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
