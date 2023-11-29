import {db} from "@/db";
import {Event} from "@/db/schema";
import {FormItemAdd} from "@/app/components/FormItemAdd";

async function getAdmin(id: string): Promise<Event> {
	return db.query.event.findFirst({
		where: (event, { eq }) => eq(event.admin, id),
		with: {
			items: true
		}
	});
}

export default async function Page({ params }: { params: { id: string } }) {
	const event = await getAdmin(params.id)

	if(!event) {
		return <div>event not found</div>
	}
	return <div>
		param: {params.id}
		title: {event.title}<br/>
		{event.items.map(item => {
			return <div key={item.id}>
				{item.title}
				{item.amount}
			</div>
		})}
		<FormItemAdd event={event}/>
	</div>
}
