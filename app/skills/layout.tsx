import Script from "next/script";

export default function DashboardLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" ">
      {children}
      <Script type="text/javascript" src="/script/TimeLineMax.min.js" />
      <Script type="text/javascript" src="/script/TweenMax.min.js" />
      <Script type="text/javascript" src="/script/scriptSkills.js" />
    </section>
  );
}
