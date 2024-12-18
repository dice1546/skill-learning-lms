"use client";

import dynamic from 'next/dynamic'
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { Form, FormField } from '@/components/ui/form';

const FormControl = dynamic(() => 
 import("@/components/ui/form").then(mod => mod.FormControl)
)
const FormDescription = dynamic(() => 
 import("@/components/ui/form").then(mod => mod.FormDescription)
)
const FormLabel = dynamic(() => 
 import("@/components/ui/form").then(mod => mod.FormLabel)
)
const FormMessage = dynamic(() => 
 import("@/components/ui/form").then(mod => mod.FormMessage)
)
const FormItem = dynamic(() => 
 import("@/components/ui/form").then(mod => mod.FormItem)
)
const Button = dynamic(() => 
 import("@/components/ui/button").then(mod => mod.Button)
)
const Input = dynamic(() => 
 import("@/components/ui/input").then(mod => mod.Input)
)

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

const CreatePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ""
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/courses", values);
      router.push(`/dashboard/teacher/courses/${response.data.id}`);
      toast.success("Course created");
    } catch {
      toast.error("Something went wrong");
    }
  }

  return ( 
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl dark:text-gray-200 text-black">
          Name your course
        </h1>
        <p className="text-sm text-slate-600 dark:text-gray-200 mt-2">
          What would you like to name your course? Don&apos;t worry, you can change this later.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Course title
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Advanced web development'"
                      {...field}
                      className="dark:bg-gray-700 bg-white text-black dark:focus:text-white dark:placeholder:text-gray-300"
                    />
                  </FormControl>
                  <FormDescription>
                    What will you teach in this course?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href="/dashboard/teacher/courses">
                <Button
                  type="button"
                  variant="ghost"
                  className="dark:bg-gray-700 dark:text-gray-400 bg-white text-black dark:focus:text-white dark:placeholder:text-gray-300"
                >
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="dark:bg-black border dark:text-white bg-black text-white"
              >
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
   );
}
 
export default CreatePage;