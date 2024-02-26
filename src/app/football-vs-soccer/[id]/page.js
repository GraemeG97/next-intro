import Link from "next/link";

export default function Page({ params }) {
  return (
    <div>
      <h2>dynamic route page: </h2>
      <p>This is what I put after /cats-vs-dogs/{params.id}</p>
      <Link href={`/cats-vs-dogs/${params.id}/names-of-warrior-cats`}>
        Link to something
      </Link>
    </div>
  );
}
