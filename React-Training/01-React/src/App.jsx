import { useState } from "react";
import LinLout from "./components/li-co-components/LinLout";
import PropParent from "./components/prop-components/PropParent"
import SelfIntro from "./components/SelfIntro"
import IDRT from "./components/idrt-components/IDRT";
import Form from "./components/form-components/Form";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <SelfIntro />
      <PropParent />
      <LinLout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <IDRT />
      <Form />
    </>
  )
}

export default App
