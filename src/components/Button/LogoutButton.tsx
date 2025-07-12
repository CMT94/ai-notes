"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { Button } from "../ui/button";
import { Loader2, LogOut } from "lucide-react";
import { toast } from "sonner";

const LogoutButton = () => {
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);

  const handleLogout = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const errorMessage = null;

    if (errorMessage) {
      toast.error("Oops...", { description: errorMessage });
      setLoading(false);
      return;
    }

    toast.success("Logged out successfully!");
    router.push("/");
    setLoading(false);
  };

  return (
    <Button
      variant={"outline"}
      className="w-24 cursor-pointer"
      onClick={handleLogout}
      disabled={loading}
    >
      {loading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <React.Fragment>
          <LogOut />
          Log Out
        </React.Fragment>
      )}
    </Button>
  );
};

export default LogoutButton;
