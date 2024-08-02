import type { Metadata } from "next";

import { SignupForm } from "@/components/auth/signup/form";

export const metadata: Metadata = {
  title: "Sign up - Teerakan",
  description: "Create new account",
};

export default function SignupPage() {
  return (
    <>
      <SignupForm />
    </>
  );
}
