export function getAlumnos() {
    return fetch("http://marcapersonalfp.test/api/v1/users", {
      method: "GET",
    }).then((response) => {
      const data = response.json();
      return data;
    });
  }
  