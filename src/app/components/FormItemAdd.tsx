"use client";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {addItemAction} from "../actions";
import {useRef} from "react";
import {Events} from "@/db/schema";

export function FormItemAdd(props: { event: Events }) {
  const { event } = props;
  const formRef = useRef<HTMLFormElement | null>(null);
  return (
    <form
      action={async (formData) => {
        formRef.current?.reset();
        await addItemAction(formData);
      }}
      className="flex flex-col gap-4"
      ref={formRef}
    >
      <Input type="text" name="title" label="Title" />

      <Input type="number" name="amount" label="Amount" />
      <Input type="text" name="event" value={event.id as string} className={"hidden"} />
      <Button type="submit" color="primary">
        Add
      </Button>
    </form>
  );
}
