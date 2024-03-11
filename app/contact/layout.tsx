import Script from "next/script";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden flex flex-col">
      {children}
      <footer className="flex items-center w-full">
        <span className="">
          Copyright © {new Date().getFullYear()} Kano Dev. All rights reserved.
        </span>
      </footer>
      <Script type="text/javascript" src="/script/TimeLineMax.min.js" />
      <Script type="text/javascript" src="/script/TweenMax.min.js" />
      <Script type="text/javascript" src="/script/scriptContact.js" />
    </section>
  );
}
