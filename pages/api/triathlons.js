import db from "../../../utils/db";

export default async (req, res) => {
  try {
    const { slug } = req.body;
    const triathlons = await db.collection("triathlons").get();
    const triathlonsData = triathlons.docs.map((entry) => entry.data());

    if (triathlonsData.some((entry) => entry.slug === slug)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection("triathlons").add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end();
  }
};
