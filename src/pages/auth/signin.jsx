import Google from "@/assets/gooogle";
import bg1 from "../../assets/content1.png";
import bg2 from "../../assets/content2.png";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInSchema } from "@/schemas/auth.schemas";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import Apple from "@/assets/apple";

const Signin = () => {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div>
      <div className="flex items-center">
        <div
          className="h-screen w-full flex items-center justify-start bg-cover bg-center"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className="p-20 max-w-7xl mx-auto">
            <h1 className="text-[#120A0B] text-center font-montserrat text-[36px] font-bold leading-[140%] tracking-[-1px]">
              Welcome Back!
            </h1>

            <p className="text-[#454140] text-center font-montserrat text-[16px] font-normal leading-[170%] mb-8">
              Please fill in your Email and Password to Sign In.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(Signin)} className="space-y-4">
                <div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Email Address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="w-full h-12 mb-10 mt-5" type="submit">
                    Sign In
                  </Button>
                </div>

                <div className="flex flex-col gap-5 ">
                  <Button
                    className="w-full h-12 bg-white text-black"
                    type="submit"
                  >
                    <Google />
                    <p>Sign in with Google</p>
                  </Button>
                  <Button
                    className="w-full h-12  bg-white text-black"
                    type="submit"
                  >
                    <Apple />
                    <p>Sign in with Apple</p>
                  </Button>
                </div>
                <div className="flex justify-center">
                  <p className="text-foreground/70 space-x-2">
                    <span>Don’t have an Account?</span>
                    <Link to="/auth/sign-up" className="font-medium">
                       Sign-Up here!
                    </Link>
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </div>
        <div
          className="h-screen w-full flex items-center justify-start bg-cover bg-center"
          style={{ backgroundImage: `url(${bg2})` }}
        ></div>
      </div>
    </div>
  );
};

export default Signin;
