"use client";
import { Input } from "@nextui-org/input";
import { Event } from "@/db/schema";
import { Button } from "@nextui-org/button";
import {
  addItemAction,
  addParticipantAction,
  selectItemAction,
} from "@/app/actions";
import { nanoid } from "nanoid";
import { useRef, useState } from "react";

export function FormParticipantAdd(props: { event: Event }) {
  const { event } = props;
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <form
      action={async (formData) => {
        await addParticipantAction(formData);
      }}
      className="flex flex-col gap-4"
      ref={formRef}
    >
      <Input type="text" name="name" label="Name" />

      <Input
        type="text"
        name="event"
        value={event.id as string}
        className={"hidden"}
      />

      {event.items.map((item) => {
        if (!item.id) {
          return;
        }
        return (
          <label key={item.id}>
            <input type="checkbox" name="item" id={item.id} />
            {item.title}
            <span className="p-2 bg-gray-200">{item.amount}</span>
          </label>
        );
      })}
      <Button type="submit" color="primary">
        Save
      </Button>
    </form>
  );
}
