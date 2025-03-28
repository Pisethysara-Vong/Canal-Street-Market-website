import Food from './Food';

function App() {
  
  return (
    <div className="overflow-x-hidden antialiased selection:bg-black selection:text-white min-h-screen">
      <div className="box-border h-full w-full m-0 p-0">
      <div className="flex flex-wrap h-full">
        <Food />
      </div>
    </div>
    </div>
    
  );
}

export default App;
