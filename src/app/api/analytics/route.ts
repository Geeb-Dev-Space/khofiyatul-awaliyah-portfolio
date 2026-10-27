import { NextResponse } from "next/server";

const BASE = "https://api.vercel.com/v1/query/web-analytics/visits";

export async function GET(request: Request) {
  const token = process.env.VERCEL_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
  const teamId = process.env.VERCEL_TEAM_ID; // opsional, kosongkan jika akun personal

  if (!token || !projectId) {
    return NextResponse.json(
      { error: "VERCEL_TOKEN atau VERCEL_PROJECT_ID belum diatur" },
      { status: 500 },
    );
  }

  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") === "daily" ? "daily" : "total";
  const path = searchParams.get("path"); // contoh: /?path=/blog
  const days = Math.min(Number(searchParams.get("days")) || 7, 90);

  const params = new URLSearchParams({ projectId });
  if (teamId) params.set("teamId", teamId);
  if (path) {
    // OData: escape tanda kutip tunggal dengan menggandakannya
    params.set("filter", `requestPath eq '${path.replace(/'/g, "''")}'`);
  }

  let endpoint = `${BASE}/count`;
  if (type === "daily") {
    endpoint = `${BASE}/aggregate`;
    params.set("by", "day");
    params.set("since", String(Date.now() - days * 24 * 60 * 60 * 1000));
  }

  const res = await fetch(`${endpoint}?${params}`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 3600 }, // cache 1 jam supaya tidak boros rate limit
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Gagal mengambil data dari Vercel", status: res.status },
      { status: 502 },
    );
  }

  return NextResponse.json(await res.json());
}
