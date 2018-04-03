// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
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
