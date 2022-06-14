import { Sidebar } from "./Components/Sidebar/sidebar";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
