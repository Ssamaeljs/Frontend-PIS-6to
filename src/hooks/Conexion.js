const URLN = "http://localhost:3006/api";
export const URLBASE = "http://localhost:3006";

export const GET = async (urls, token = null) => {
  const headers = {};
  if (token) {
    headers["x-api-token"] = token;
  }
  const datos = await (
    await fetch(`${URLN}/${urls}`, {
      method: "GET",
      headers: headers,
    })
  ).json();
  return datos;
};

export const POST = async (data, urls, token = null, type = "json") => {
  const headers = {};
  switch (type) {
    case "json":
      headers["Content-Type"] = "application/json";
      data = JSON.stringify(data);
      break;
    case "form-data":
      break;
    default:
      break;
  }
  if (token) {
    headers["x-api-token"] = token;
  }

  const datos = await (
    await fetch(`${URLN}/${urls}`, {
      method: "POST",
      body: data,
      headers: headers,
    })
  ).json();

  return datos;
};

export const DELETE = async (urls) => {
  const datos = await (
    await fetch(URLN + "/" + urls, {
      method: "DELETE",
    })
  ).json();
  return datos;
};
