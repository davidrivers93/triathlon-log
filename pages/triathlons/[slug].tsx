import Link from "next/link";
import { Triathlon } from "../../models/triathlon";
import db from "../../utils/db";
import { DATABASE_CONST } from "../../utils/db/consts";

const Triathlons = (props: { entriesData: Triathlon[] }) => {
  const { entriesData } = props;

  return (
    <div>
      <h1>Triathlons</h1>
      {entriesData.map((entry: Triathlon) => (
        <div key={entry.id}>
          <Link href={`/triathlons/${entry.id}`}>
            <a>{entry.name}</a>
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await db
    .collection(DATABASE_CONST.TRIATHLONS)
    .where("id", "==", id)
    .get();
  const entry = res.docs.map((entry) => entry.data());
  if (entry.length) {
    return {
      props: {
        entry: entry[0],
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default Triathlons;
