import React from "react";

import { AuthForm } from "@/components/Form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SignupPage = () => {
  return (
    <section className="mt-20 flex flex-1 flex-col items-center">
      <Card className="w-full max-w-md">
        <CardHeader className="mb-4">
          <CardTitle className="text-center text-3xl">Sign Up</CardTitle>
        </CardHeader>

        <CardContent>
          <AuthForm type="signup" />
        </CardContent>
      </Card>
    </section>
  );
};

export default SignupPage;
