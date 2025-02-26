export async function getCounts() {

    const apiBaseUrl = 'http://marcapersonalfp.test/api/v1/'

    const apiEmpresasUrl =  `${apiBaseUrl}empresas/count`
    const apiProyectosUrl = `${apiBaseUrl}proyectos/count`
    const apiAlumnosUrl = `${apiBaseUrl}users/count`

    const empresas = 
            await fetch (apiEmpresasUrl).then(response => response.json());
    
    const empresasCount = empresas.count;
    
    const proyectos = 
            await fetch (apiProyectosUrl).then(response => response.json());
    
    const proyectosCount = proyectos.count;

    const alumnos =
            await fetch (apiAlumnosUrl).then(response => response.json());
    
    const alumnosCount = alumnos.count;

    return({
        empresasCount,
        proyectosCount,
        alumnosCount
    })
}