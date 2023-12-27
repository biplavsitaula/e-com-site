import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/fetchItems";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <div className="body">
      <Header></Header>
      <FetchItems />
      {fetchStatus.fetching ? <Loading></Loading> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
}

export default App;
