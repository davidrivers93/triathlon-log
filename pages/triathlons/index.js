import Link from "next/link";
import db from "../../utils/db";

const Triathlons = (props) => {
  const { entriesData } = props;

  return (
    <div>
      <h1>Triathlons</h1>
      {entriesData.map((entry) => (
        <div key={entry.id}>
          <Link href={`/posts/${entry.slug}`}>
            <a>{entry.name}</a>
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const a = await db.listCollections();
  const entries = await db.collection("triathlons").get();
  const entriesData = entries.docs.map((entry) => ({
    id: entry.id,
    ...entry.data(),
  }));

  return {
    props: { entriesData },
    revalidate: 10,
  };
};

export default Triathlons;
