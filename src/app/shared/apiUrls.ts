import { environment } from '../../environments/environment';

const version = 'v' + environment.apiVersion + '/';
export const apiUrls = {
    urlCatalog: environment.apiUrl + version + environment.apiCatalogsUrlChunk,
    urlLogin: environment.apiUrl + version + 'seguridad/login',
    urlComplaint: environment.apiUrl + version + environment.complaint
};
