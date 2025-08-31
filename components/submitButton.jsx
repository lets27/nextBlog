"use client";

import { Loader2 } from "lucide-react";
// useFormStatus is a client function so  this component has to be in use-client mode

import React from "react";
import { useFormStatus } from "react-dom";
import { Button, buttonVariants } from "./ui/button";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <div>
      <Button
        type="submit"
        disabled={pending} //make it unclickable when pending
        className=" text-white p-2 rounded w-fit"
      >
        {pending ? (
          <>
            <p>Creating blog</p>
            <Loader2 className="size-5 animate-spin" />
          </>
        ) : (
          <p>Create blog</p>
        )}
      </Button>
    </div>
  );
};

export default SubmitButton;
