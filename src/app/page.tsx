"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex justify-between p-11">
      <div>
        <h2 className="mb-2 font-semibold">テストセクション</h2>
        <div className="flex flex-col gap-5">
          <Link className=" text-blue-400" href={"/section-6-test"}>
            section-6-test
          </Link>
          <Link className=" text-blue-400" href={"/section-8-test"}>
            section-8-test
          </Link>
          <Link className=" text-blue-400" href={"/section-9-test"}>
            section-9-test
          </Link>
        </div>
      </div>
      <div>
        <h2 className="mb-2 font-semibold">練習セクション</h2>
        <div className="flex flex-col gap-5">
          <Link className=" text-blue-400" href={"/section-7"}>
            section-7
          </Link>
          <Link className=" text-blue-400" href={"/section-10"}>
            section-10
          </Link>
          <Link className=" text-blue-400" href={"/section-11"}>
            section-11
          </Link>
          <Link className=" text-blue-400" href={"/section-12"}>
            section-12
          </Link>
          <Link className=" text-blue-400" href={"/section-13"}>
            section-13
          </Link>
        </div>
      </div>
    </div>
  );
}
