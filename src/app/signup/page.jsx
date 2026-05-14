"use client";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import Link from "next/link";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: user?.name,
      email: user?.email,
      image: user?.image,
      password: user?.password,
    });

    if (data) {
      alert("Success!");
      redirect("/");
    }
    if (error) {
      alert(`Failed! ${error.message}`);
    }
  };
  const handleSignInGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="w-2xl mx-auto py-7">
      <h2 className="text-center font-bold text-2xl">Create an Account</h2>
      <p className="text-center text-gray-400">
        Start your adventure with Wanderlust
      </p>
      <Card>
        <Form
          onSubmit={onSubmit}
          className="flex w-[500px] mx-auto flex-col gap-4"
        >
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>
          <TextField isRequired name="image" type="url">
            <Label>Image URL</Label>
            <Input placeholder="Enter your image url here" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="Enter your Email" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex flex-col gap-2">
            <div>
              <Button
                type="submit"
                className={"w-full bg-cyan-500 text-white rounded-none"}
              >
                <Check />
                Create Account
              </Button>
            </div>
          </div>
        </Form>
        <div className="flex items-center justify-center gap-2">
          <Separator />
          <p className="whitespace-nowrap">Or SignUp with</p>
          <Separator />
        </div>
        <div className="w-[500px] mx-auto">
          <Button
            onClick={handleSignInGoogle}
            variant="outline"
            className={"w-full rounded-none"}
          >
            <FcGoogle />
            SignUp with Google
          </Button>
          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link className="underline text-blue-500" href={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
