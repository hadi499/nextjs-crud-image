"use client";

import { useActionState } from "react";
import { clsx } from "clsx";
import Link from "next/link";
import { deleteImage } from "@/lib/actions";

export const SubmitButton = ({ label }: { label: string }) => {
  const isUpload = label === "upload";
  return (
    <button
      className={clsx(
        "bg-blue-700 text-white w-full font-medium py-2.5 px-6 text-base rounded-sm hover:bg-blue-600"
      )}
      type="submit"
    >
      {isUpload ? "Upload" : "Update"}
    </button>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`edit/${id}`}
      className="py-3 text-sm bg-gray-50 rounded-bl-md w-full hover:bg-blue-200 text-center"
    >
      Edit
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  // Correct use of useActionState
  const deleteImageWithId = deleteImage.bind(null, id);
  const [state, formAction, pending] = useActionState(deleteImageWithId, null);

  return (
    <form
      action={formAction}
      className="py-3 text-sm bg-gray-50 hover:bg-red-200 rounded-br-md w-full text-center"
    >
      <button type="submit" disabled={pending}>
        {pending ? "Deleting..." : "Delete"}
      </button>
    </form>
  );
};
