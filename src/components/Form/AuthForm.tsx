"use client";

import React from "react";

import { useRouter } from "next/navigation";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

type Props = {
  type: "login" | "signup";
};

const AuthForm = (props: Props) => {
  const { type } = props;

  const isLoginForm = type === "login";
  const isSignupForm = type === "signup";

  const router = useRouter();

  const [isPending, startTransition] = React.useTransition();

  const handleFormSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
  };

  const handleSubmit = async (formData: FormData) => {};

  const renderSubmitButtonTitle = (type: "login" | "signup") => {
    if (type === "login") return "Login";
    return "Sign Up";
  };

  return (
    <form action={handleSubmit}>
      <div className="grid w-full items-center gap-5">
        <div className="flex flex-col space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            disabled={isPending}
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            disabled={isPending}
            required
          />
        </div>
        <div className="mt-4 flex flex-col gap-6">
          <Button className="w-full cursor-pointer" disabled={isPending}>
            {isPending ? (
              <Loader2 className="animate-spin" />
            ) : (
              renderSubmitButtonTitle(type)
            )}
          </Button>

          <p className="text-center text-xs">
            {isLoginForm
              ? "Don't have an account yet?"
              : "Already have an account?"}{" "}
            <Link
              href={isLoginForm ? "/sign-up" : "/login"}
              className={`text-blue-500 underline ${isPending ? "pointer-events-none opacity-50" : "cursor-pointer"}`}
            >
              {isLoginForm ? "Sign Up" : "Login"}
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
