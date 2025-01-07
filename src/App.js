import { PageBoard } from "./components/PageBoard/PageBoard";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";

import { Event } from "./components/Event/Event";
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
     <PageBoard>
     <Event/>
     </PageBoard>
    
    </div>
  );
}

export default App;
