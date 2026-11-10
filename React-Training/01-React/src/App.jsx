import LinLout from "./components/li-co-components/LinLout";
import ListRen from "./components/li-co-components/ListRen";
import PropParent from "./components/prop-components/PropParent"
import SelfIntro from "./components/SelfIntro"

const App = () => {
  const isLoggedIn = true;

  return (
    <>
      <SelfIntro />
      <PropParent />
      <LinLout isLoggedIn={isLoggedIn} />      
    </>
  )
}

export default App
