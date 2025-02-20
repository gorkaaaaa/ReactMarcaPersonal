export function getProyectos() {
    return fetch("http://marcapersonalfp.test/api/v1/proyectos", {
      method: "GET",
    }).then((response) => {
      const data = response.json();
      return data;
    });
  }