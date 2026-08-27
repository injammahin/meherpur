import Link from "next/link";
import { ArrowLeft, MapPinned } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found page-gutter">
      <MapPinned />
      <p>404 · This route is not in the guide</p>
      <h1>Let’s get you back<br /><em>to Meherpur.</em></h1>
      <Link className="button-dark" href="/places"><ArrowLeft /> Explore all places</Link>
    </main>
  );
}
