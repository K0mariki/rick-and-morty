import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout() {
  const navigation = useNavigation();
  
  return (
    <>
      <Header />
      <main>
        {navigation.state === "loading" ? (
          <div className="container" style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
            <img src="src\assets\images\loading.png"></img>
            <p>Loading...</p>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </>
  );
}
