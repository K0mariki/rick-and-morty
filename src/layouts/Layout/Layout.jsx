import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Loader from "../../components/Loader/Loader";

export default function Layout() {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <main>
        {navigation.state === "loading" ? (
          <Loader />
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </>
  );
}
