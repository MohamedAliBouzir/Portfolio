import { useMeasure } from "react-use";
// import useDarkMode from "../../hooks/useDarkMode";
import Page from "../../components/layout/Page/Page";
import PageWrapper from "../../components/layout/PageWrapper/PageWrapper";
import { PortfolioHome } from "../../menu";

const Home = () => {
  // const { setDarkModeStatus } = useDarkMode();
  const [ref] = useMeasure<HTMLDivElement>();
  return (
    <PageWrapper ref={ref} title={PortfolioHome.welcomePage.text}>
      <Page className="w-full h-full bg-black">
        <div id="welcome page header container">
        {/* add image background none scrollable with the page (when scroll down it does scroll down too) */}
          <div id="image in cercle">img</div>
          <div id="description profile part">
            <div id="position full js">Full Stack Js Developer</div>
            <div id="current position in society"></div>
            <div id="name typed">BOUZIR Mohamed Ali</div>
            <div id="titre software engineer">Software Engineer</div>
            <div id="short description">Driven by a relentless pursuit of excellence, I'm a software engineer and ISSATSo graduate passionate about building exceptional web experiences. I'm not satisfied with "good enough"—I'm always pushing myself to achieve the best possible results. I bring a meticulous eye for detail to every project, ensuring high-quality code and optimal performance. I'm experienced in developing and maintaining websites, with a particular interest in optimizing and modernizing existing platforms. I thrive on challenges and embrace opportunities to elevate my skills and deliver impactful solutions.</div>
            <div id="media links">
              <div id="Github" ref="https://github.com/MohamedAliBouzir">MohamedAliBouzir</div>
              <div id="GitLab" ref="https://gitlab.com/MohamedAliBouzir">MohamedAliBouzir</div>
              {/* will be updated at home ! */}
              <div id="Linkedin">Mohamed Ali BOUZIR</div>
            </div>
            <div id="short word">I discover new coding tricks by seeing how different libraries are built.</div>
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
