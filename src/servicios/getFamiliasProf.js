export async function getFamiliasProf() {
  return fetch("http://marcapersonalfp.test/api/v1/familias_profesionales", {
    method: "GET",
  }).then((response) => {
    const data = response.json();
    return data;
  });
}
