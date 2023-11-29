import {db} from "@/db";
import {Event} from "@/db/schema";
import {FormItemAdd} from "@/app/components/FormItemAdd";

async function getEvent(id: string): Promise<Event> {
	return db.query.event.findFirst({
		where: (event, { eq }) => eq(event.id, id),
		with: {
			items: true
		}
	});
}

export default async function Page({ params }: { params: { id: string } }) {
	const event = await getEvent(params.id)
	return <div>
		Event: {params.id}
		title: {event.title}<br/>
		{event.items.map(item => {
			return <div key={item.id}>
				{item.title}
				{item.amount}
			</div>
		})}
	</div>
}
