'use server';
import { revalidatePath } from 'next/cache';
import { db } from '@/db';
import {events} from '@/db/schema';
import {nanoid} from "nanoid";

export const addNoteAction = async (formData: FormData) => {
  const description = formData.get('description') as string;
  const title = formData.get('title') as string;

  // insert the new note
  db.insert(events)
    .values({
      description: description,
      id: nanoid(),
      title: title,
    })
    .run();
  revalidatePath('/');
};
