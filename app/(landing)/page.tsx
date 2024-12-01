import dynamic from "next/dynamic";

const WebNavbar = dynamic(
  () => import("@/components/web/components/web-navbar"),
  {
    loading: () => (
      <p className="flex justify-center h-screen items-center font-bold text-xl text-white">
        {" "}
        Loading...
      </p>
    ),
    ssr: true,
  }
);

const Hero = dynamic(
  () => import("@/components/web/sections/Hero"),
  {
    loading: () => (
      <p className="flex justify-center h-screen items-center font-bold text-xl text-white">
        {" "}
        Loading...
      </p>
    ),
    ssr: true,
  }
);




const LandingPage = () => {
  return (
    <div className="bg-white dark:bg-black overflow-hidden">
      <div>
        <WebNavbar />
      </div>
      <Hero />
    </div>
  );
};
export default LandingPage;
