import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/create-room">部屋を作成</Link>
      <Link href="/join-room">部屋に参加</Link>
    </div>
  );
}
