import { SITES } from "../lib/sites";
import { Feature, WorkItem } from "./Frame";
import BookButton from "./BookButton";

export default function WorkGallery() {
  return (
    <>
      <Feature site={SITES[0]} />
      <div className="cards">
        {SITES.slice(1).map((s) => <WorkItem key={s.slug} site={s} />)}
      </div>
      <div className="center">
        <p className="lead" style={{ margin: "0 auto 24px" }}>Want yours to look like this?</p>
        <BookButton className="btn">Book a free strategy call &rarr;</BookButton>
      </div>
    </>
  );
}
