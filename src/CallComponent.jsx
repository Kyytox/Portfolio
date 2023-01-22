import NavBar from "./Menu";
import ErrCommand from "./ErrCommand";
import Skills from "./Skills";
import Projects from "./Projects";
import Socials from "./Socials";
import HeadAsciiArt from "./HeadAsciiArt";
import Welcome from "./Welcome";
import AddrBTC from "./AddrBTC";
import LetterByLetterText from "./LetterByLetterText";

// renvoi le bon composant suivant l'input du l'user
function CallComponent(input) {
    const components = {
        head: HeadAsciiArt,
        headWelcome: LetterByLetterText,
        welcome: Welcome,
        menu: NavBar,
        skills: Skills,
        projects: Projects,
        socials: Socials,
        bitcoin: AddrBTC,
    };

    const headWelcomeProps = {
        text: "Welcome on my portfolio, he is interactive but u can use terminal command",
        timeSpeed: 50,
    };

    const Component = components[input] || ErrCommand;
    const props = input === "headWelcome" ? headWelcomeProps : { error: input };

    return <Component {...props} />;
}
export default CallComponent;
