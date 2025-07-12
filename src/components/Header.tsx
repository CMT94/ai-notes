import React from "react";

import Link from "next/link";

import { Bot } from "lucide-react";
import { shadow } from "@/styles/utils";

import { LoginButton, LogoutButton, SignupButton } from "./Button";
import { DarkModeToggle } from "./Toggle";

const Header = () => {
  const user = false;

  return (
    <header
      className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{ boxShadow: shadow }}
    >
      <Link href="/" className="flex items-center justify-center gap-2">
        <Bot size={48} />
        <h1 className="flex justify-center text-2xl leading-5 font-semibold">
          AI Notes
        </h1>
      </Link>

      <div className="flex gap-4">
        {user ? (
          <LogoutButton />
        ) : (
          <React.Fragment>
            <LoginButton />
            <SignupButton />
          </React.Fragment>
        )}

        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
