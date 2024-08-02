import type { Metadata } from "next";

import { SigninForm } from "@/components/auth/signin/form";

export const metadata: Metadata = {
  title: "Sign in - Teerakan",
  description: "Sign in to Dashboard page",
};

export default function SigninPage() {
  return (
    <>
      <SigninForm />
    </>
  );
}
