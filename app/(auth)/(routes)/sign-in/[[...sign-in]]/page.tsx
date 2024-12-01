import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-white">
      <SignIn afterSignInUrl={"/dashboard"} afterSignUpUrl={"/dashboard"}/>
    </div>
  );
}
