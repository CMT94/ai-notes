import React from "react";

import Link from "next/link";

import { Button } from "../ui/button";
import { UserRoundPlus } from "lucide-react";

const SignupButton = () => {
  return (
    <Button asChild className="hidden sm:inline-flex">
      <Link href="/sign-up">
        <UserRoundPlus />
        Sign up
      </Link>
    </Button>
  );
};

export default SignupButton;
