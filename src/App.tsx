// Screen
import Bulletin from "./screen/bulletin"

// Context
import { CartEditContextProvider } from "./appContext"

import "./App.scss";

const App = () => {
  return (
    <CartEditContextProvider>
      <Bulletin />
    </CartEditContextProvider>
  )
}

export default App