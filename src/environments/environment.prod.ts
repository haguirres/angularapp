export const environment = {
  production: true,
  apiUrl: 'https://fepade-api-dev.azurewebsites.net/api/',
  // apiUrl:'http://localhost:51090/api/',
  apiCatalogsUrlChunk: 'catalogos/',
  apiCatalogsUrls: {
    administrativeFault: 'faltas-administrativas/',
    age: 'edades/',
    answer: 'respuestas-ofrecidas/',
    complaintFepade: 'quejas-fepade/',
    country: 'paises/',
    dependency: 'dependencias/',
    educationLevel: 'escolaridades/',
    electoralElection: 'informacion-electoral/',
    electoralRegistration: 'registro-electores/',
    incident: 'incidentes/',
    notApplicableFolio: 'llamadas-improcedentes/',
    occupation: 'ocupaciones/',
    politicalParty: 'partidos/',
    politicalViolence: 'violencias-politicas/',
    quality: 'calidades/',
    serviceDesk: 'puntos-atencion/',
    settlement: 'asentamientos/',
    settlementPC: 'asentamientos-pc/',
    gender: 'generos/',
    state: 'estados/',
    status: 'paises/',
    town: 'municipios/',
  },
  complaint: 'pde/denuncia',
  apiVersion: 2
};
