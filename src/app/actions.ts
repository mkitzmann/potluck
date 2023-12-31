"use server";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { event, item, participant, participantItem } from "@/db/schema";
import { customAlphabet, nanoid } from "nanoid";

export const addEventAction = async (formData: FormData) => {
  const description = formData.get("description") as string;
  const title = formData.get("title") as string;

  const nanoid = customAlphabet("abcdefghiyklmnopqrstuvwxyz0123456789");
  db.insert(event)
    .values({
      description,
      id: nanoid(),
      admin: nanoid(),
      title,
    })
    .run();
  revalidatePath("/");
};

export const addItemAction = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const amount = formData.get("amount") as number;
  const event = formData.get("event") as string;
  console.log(formData);

  db.insert(item)
    .values({
      id: nanoid(),
      title,
      amount,
      event,
    })
    .run();
  revalidatePath("/");
};

export const addParticipantAction = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const event = formData.get("event") as string;
  console.log(formData);

  db.insert(participant)
    .values({
      id: nanoid(),
      name,
      event,
    })
    .run();
  revalidatePath("/");
};

export const selectItemAction = async (itemId: string) => {
  console.log(itemId);

  db.insert(participantItem)
    .values({
      item: itemId,
    })
    .run();
  revalidatePath("/");
};
