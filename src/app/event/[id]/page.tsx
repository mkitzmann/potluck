import { db } from "@/db";
import { Event } from "@/db/schema";
import { FormParticipantAdd } from "@/app/components/FormParticipantAdd";

async function getEvent(id: string): Promise<Event> {
  return db.query.event.findFirst({
    where: (event, { eq }) => eq(event.id, id),
    with: {
      items: true,
    },
  });
}

export default async function Page({ params }: { params: { id: string } }) {
  const event = await getEvent(params.id);
  return (
    <div>
      event: {event.title}
      <br />
      param: {params.id}
      <br />
      <FormParticipantAdd event={event} />
      <br />
    </div>
  );
}
