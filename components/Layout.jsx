import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className={dark ? "bg-primary transition contenedor" : "transition contenedor"}>
      <Navbar />
      <main className="container py-4">
      
         {title && (
           <h1 className={dark ? 'text-center text-light' : "text-center"} >
             {title}
           </h1>
         )}
        {children}
        
      </main>

      {footer && (
        <footer className="bg-primary text-light text-center">
          <div className="container p-4">
            <h1>&copy; Franklin Cañadas</h1>
            <p>Esta página está desarrollada con Next js, Html5, Bootstrap5 y css3</p>
            <p>2021 Todos los derechos reservados.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
