import React from "react";

import Link from "next/link";

import { Button } from "../ui/button";
import { LogIn } from "lucide-react";

const LoginButton = () => {
  return (
    <Button asChild variant={"outline"}>
      <Link href="/login">
        <LogIn />
        Log In
      </Link>
    </Button>
  );
};

export default LoginButton;
