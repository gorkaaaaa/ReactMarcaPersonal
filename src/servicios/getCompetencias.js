export function getCompetencias() {
    return fetch("http://marcapersonalfp.test/api/v1/competencias", {
      method: "GET",
    }).then((response) => {
      const data = response.json();
      return data;
    });
  }