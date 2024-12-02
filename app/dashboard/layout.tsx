import dynamic from "next/dynamic";

const Navbar = dynamic(() =>
  import("./_components/navbar").then((mod) => mod.Navbar)
);

const Sidebar = dynamic(() =>
  import("./_components/sidebar").then((mod) => mod.Sidebar)
);

type LayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full bg-white dark:bg-slate-900 text-black">
      <div className="h-[80px] lg:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden lg:flex h-full lg:w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-0 lg:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
