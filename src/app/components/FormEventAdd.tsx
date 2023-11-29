'use client';
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { addEventAction } from "../actions";
import { useRef } from "react";

export function FormEventAdd() {
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <form action={async (formData) => {
      formRef.current?.reset();
      await addEventAction(formData);
    }} className="flex flex-col gap-4" ref={formRef}>
			<h2>Create new event</h2>
      <Input type="text" name="title" label="Title" required/>

      <Input type="text" name="description" label="Description" />

      <Button type="submit" color="primary">
        Create Event
      </Button>
    </form>
  );
}
