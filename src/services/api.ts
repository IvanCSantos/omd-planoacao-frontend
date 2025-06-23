const apiUrl = import.meta.env.VITE_API_URL;

export async function createActionPlan(body: { title: string; goal: string }) {
  const url = `${apiUrl}/action-plan`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `Erro ${res.status}: ${res.statusText}. Detalhes: ${errorText}`
    );
  }

  return res.json();
}
