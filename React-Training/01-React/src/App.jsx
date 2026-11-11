import { useState } from "react";
import LinLout from "./components/li-co-components/LinLout";
import PropParent from "./components/prop-components/PropParent"
import SelfIntro from "./components/SelfIntro"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <SelfIntro />
      <PropParent />
      <LinLout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </>
  )
}

export default App
