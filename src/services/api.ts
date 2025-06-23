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

export async function getAllActionPlan() {
  const url = `${apiUrl}/action-plan/all`;
  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `Erro ${res.status}: ${res.statusText}. Detalhes: ${errorText}`
    );
  }

  return res.json();
}

export async function editActionPlan(body: {
  id: number;
  title: string;
  goal: string;
}) {
  const url = `${apiUrl}/action-plan/${body.id}`;
  const res = await fetch(url, {
    method: "PUT",
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

export async function removeActionPlan(id: number) {
  const url = `${apiUrl}/action-plan/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `Erro ${res.status}: ${res.statusText}. Detalhes: ${errorText}`
    );
  }

  return res;
}
