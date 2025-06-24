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

export async function getActionsByActionPlan(id: number) {
  const url = `${apiUrl}/action-plan/${id}/action`;
  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `Erro ${res.status}: ${res.statusText}. Detalhes: ${errorText}`
    );
  }

  return res.json();
}

export async function createAction(props: {
  actionPlanId: number;
  title: string;
  status: string;
  dueDate: string;
}) {
  const url = `${apiUrl}/action-plan/${props.actionPlanId}/action`;
  const body = {
    title: props.title,
    status: props.status,
    dueDate: props.dueDate,
  };

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

export async function editAction(body: {
  id: number;
  title: string;
  status: string;
  dueDate: string;
}) {
  const url = `${apiUrl}/action/${body.id}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: body.title,
      status: body.status,
      dueDate: body.dueDate,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `Erro ${res.status}: ${res.statusText}. Detalhes: ${errorText}`
    );
  }

  return res.json();
}

export async function removeAction(id: number) {
  const url = `${apiUrl}/action/${id}`;
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
