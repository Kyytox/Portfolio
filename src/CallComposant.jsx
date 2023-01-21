import NavBar from "./NavBar";
import ErrCommand from "./ErrCommand";
import Skills from "./Skills";
import Projects from "./Projects";
import Socials from "./Socials";
import HeadAsciiArt from "./HeadAsciiArt";
import Welcome from "./Welcome";
import AddrBTC from "./AddrBTC";
import LetterByLetterText from "./LetterByLetterText";

// renvoi le bon composant suivant l'input du l'user
function CallComposant(input) {
    switch (input) {
        case "head":
            return (
                <>
                    <HeadAsciiArt />
                </>
            );
        case "headWelcome":
            return (
                <>
                    <LetterByLetterText text="Welcome on my portfolio, he is interactive but u can use terminal command" timeSpeed={50} />
                </>
            );
        case "welcome":
            return (
                <>
                    <Welcome />
                </>
            );
        case "menu":
            return (
                <>
                    <NavBar />
                </>
            );
        case "skills":
            return (
                <>
                    <Skills />
                </>
            );
        case "projects":
            return (
                <>
                    <Projects />
                </>
            );
        case "socials":
            return (
                <>
                    <Socials />
                </>
            );
        case "bitcoin":
            return (
                <>
                    <AddrBTC />
                </>
            );
        default:
            return (
                <>
                    <ErrCommand error={input} />
                </>
            );
    }
}
export default CallComposant;
