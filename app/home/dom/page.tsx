import Button from "@/app/components/test";
import Link from "next/link";

export default function Dom() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <b>dom</b>
      <Button>BUTTTTON</Button>
      <Link href="/">ROOT</Link>
    </main>
  );
}
