import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Button>
        <Link href={"/dashboard"}>Click me</Link>
      </Button>
    </div>
  );
}
