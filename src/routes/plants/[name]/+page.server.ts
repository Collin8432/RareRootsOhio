import { supabase } from "$lib/utils/supabaseClient";

export async function load({ params }) {
  const { name } = params;

  const { data: plant, error } = await supabase
    .from("plants")
    .select("*")
    .eq("name", name)
    .single();

  if (error || !plant) {
    return {
      status: 404,
      error: new Error("Plant not found"),
    };
  }

  return { plant };
}
