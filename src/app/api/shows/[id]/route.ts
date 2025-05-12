import { NextResponse } from "next/server";
import { InMemoryShowRepository } from "@/infrastructure/repositories/InmemoryShowRepository";
import { getShowsById } from "@/application/useCases/getShowsById";

export async function GET(
  request: Request,
  { params }: { params?: { id?: string } } = {}
) {
  const showRepository = new InMemoryShowRepository();

  if (!params?.id) {
    return NextResponse.json({ error: "Show ID is required" }, { status: 400 });
  }

  try {
    const show = await getShowsById(showRepository, params.id as string);
    return NextResponse.json(show);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 404 });
  }
}
