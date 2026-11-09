import WorkGallery from "../../components/WorkGallery";
export const metadata = {"title": "Our Work", "description": "Live websites Booked Town has built for US contractors.", "alternates": {"canonical": "/work"}};

export default function Work() {
  return (
    <>
<section className="phero"><div className="wrap">
  <h1>Our work</h1>
  <p className="lead">Real websites for working US contractors, all built on the Booked Town system. Click any site to open the live version.</p>
</div></section>
<section style={{ paddingTop: "24px" }}><div className="wrap">
  <WorkGallery /></div></section>
    </>
  );
}
