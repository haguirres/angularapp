export interface IComplaint {
  IdDenuncia: number;
  Folio: string;
  PasswordDenuncia: string;
  IdEstatus: number;
  EsDenunciaFepadeTel: boolean;
  Transferencia: boolean;
  DependenciaTransferencia: string;
  Anonimo: boolean;
  Nombre: string;
  PrimerApellido: string;
  SegundoApellido: string;
  IdSexo: number;
  IdEdad: number;
  IdEscolaridad: number;
  IdOcupacion: number;
  IdCalidad: number;
  Telefono: string;
  OtroTelefono: string;
  Correo: string;
  IdPais: number;
  CodigoPostal: string;
  IdEstado: number;
  IdMunicipio: number;
  IdAsentamiento: number;
  Calle: string;
  NumExterior: string;
  NumInterior: string;
  FechaHechos: Date;
  IdPaisHechos: number;
  IdEstadoHechos: number;
  IdMunicpioHechos: number;
  IdAsentamientoHechos: number;
  CalleHechos: string;
  NumExteriorHechos: string;
  NumInteriorHechos: string;
  CodigoPostalHechos: string;
  Referencia: string;
  UbicacionHechosOtro: string;
  FechaAproximada: string;
  JsonProbablesResponsables: string;
  ListaProbablesResponsables: [
    {
      IdSujeto: number;
      IdPartido: number;
      IdCalidad: number;
      IdDenuncia: number;
      Nombre: string;
      PrimerApellido: string;
      SegundoApellido: string;
      PartidoPolitico: string;
      ListaProbablesResponsables: [{}];
    }
  ];
  DescripcionHechos: string;
  Adjuntos: string;
  ListaAdjuntos: [
    {
      IdBlob: number;
      UrlBlob: string;
      Blob: string;
      Fecha: Date;
      IdDenuncia: number;
      Datos: string;
      NombreArchivo: string;
      ContentType: string;
    }
  ];
  IdIncidente: number;
  IdFaltaAdministrativa: number;
  IdInformacionElectoral: number;
  IdViolenciaPolitica: number;
  IdQuejaVsFepade: number;
  IdRegFedElectores: number;
  IdLlamadaImprocedente: number;
  IdRespuestaOfrecida: number;
  IdPuntoRelevante: number;
  IdTurnar: number;
  FolioJS: string;
  Creado: Date;
  Modificado: Date;
  Operador: string;
  AMPF: string;
  SolicitarInformacion: string;
  FocoRojo: boolean;
}
