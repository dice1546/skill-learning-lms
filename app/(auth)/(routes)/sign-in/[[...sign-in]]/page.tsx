import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-white">
      <SignIn />
    </div>
  );
}
