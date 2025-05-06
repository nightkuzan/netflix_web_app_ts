import { NextResponse } from "next/server";
import { InMemoryShowRepository } from "@/infrastructure/repositories/InmemoryShowRepository";
import { getShows } from "@/application/useCases/getShows";

export async function GET() {
  const showRepository = new InMemoryShowRepository();
  const shows = await getShows(showRepository);

  return NextResponse.json(shows);
}


