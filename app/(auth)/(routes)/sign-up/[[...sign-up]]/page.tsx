import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-white">
      <SignUp afterSignInUrl={"/dashboard"} afterSignUpUrl={"/dashboard"}/>
    </div>
  );
}
