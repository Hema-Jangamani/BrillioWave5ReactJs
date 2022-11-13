import Component1 from "./Component1";
import AppContext from "./AppContext";


function App() {
  return (
    <div >
      {/* <ContextProvider value="Hema">
      <Component1/>
      </ContextProvider> */}

      {<AppContext.Provider value="Hema">
        <Component1 />
      </AppContext.Provider>}
     
    </div>
  );
}

export default App;
