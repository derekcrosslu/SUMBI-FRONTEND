export interface Cliente {
  codigoCliente: number;
  nombresMadre?: string;
  apellidoMaternoMadre?: string;
  apellidoPaternoMadre?: string;
  tipoIdentificacionMadre?: string;
  nroIdentificacionMadre?: string;
  direccionMadre?: string;
  correoMadre?: string;
  telefonoMadre?: string;
  nombresPadre?: string;
  apellidoPaternoPadre?: string;
  apellidoMaternoPadre?: string;
  tipoIdentificacionPadre?: string;
  nroIdentificacionPadre?: string;
  direccionPadre?: string;
  correoPadre?: string;
  telefonoPadre?: string;
  responsableDelPago?: string;
  nombreDelBanco?: string;
  tipoDeCuenta?: string;
  numeroCta?: string;
  ingresadoAlSistemaContable?: boolean;
  fechaDePagoPreferencial?: Date;
  credito?: boolean;
  alDiaConLosPagos?: boolean;
  deudaTotal?: number;
  fechaDeBloqueo?: Date;
  nota?: string;
  hijo: Hijo[];
  notas: Nota[];
  notificaciones: Notificacion[];
  pago: Pago[];
}

export interface Hijo {
  codigoHijo: number;
  codigoEscala?: number;
  codigoCliente: number;
  nombresHijo?: string;
  apellidoPaternoHijo?: string;
  apellidoMaternoHijo?: string;
  tipoDeDocumento?: string;
  nroDeDocumento?: string;
  fechaDeMatricula?: Date;
  salon: string;
  nota?: string;
  cliente: Cliente;
  notas: Nota[];
  pagos: Pago[];
}

export interface Pago {
  codigoPago: number;
  codigoCliente?: number;
  codigoHijo?: number;
  rucEmpresa?: string;
  codigoClase?: number;
  moneda?: string;
  fechaDeProceso?: Date;
  cuentaRecaudadora?: string;
  referencias?: string;
  fechaDeEmision?: Date;
  fechaDeVencimiento?: Date;
  concepto?: string;
  valorMaximo?: number;
  valorMinimo?: number;
  descuento?: number;
  importeDelPago?: number;
  montoDepositado?: number;
  pagoConfirmado?: boolean;
  reciboEmitido?: boolean;
  nota?: string;
  conceptos: Concepto[];
  depositos: Deposito[];
  notas: Nota[];
  notificaciones: Notificacion[];
  cliente?: Cliente;
  hijo?: Hijo;
  recibo?: Recibo;
}

export interface Deposito {
  codigoDeposito: number;
  codigoNotificacion?: number;
  codigoPago: number;
  codigoCliente: number;
  codigoHijo?: number;
  importeDelOrigen: number;
  importeDelDeposito: number;
  importeMora?: number;
  oficinaDePago?: string;
  tipoValor?: string;
  canalDeEntrada?: string;
  imagenDelVoucher?: string;
  depositoValidado: boolean;
  nota?: string;
  pago: Pago;
  notas: Nota[];
}

export interface Recibo {
  codigoRecibo: number;
  codigoCliente: number;
  codigoPago: number;
  codigoNotificacion?: number;
  fechaDeVencimiento: Date;
  fechaDeEmision: Date;
  nombreDelCliente: string;
  dni: string;
  tipoDeMoneda: string;
  observacion?: string;
  cantidad: number;
  unidadDeMedida: string;
  descripcion: string;
  valorUnitario: number;
  descuento?: number;
  importeDeVenta: number;
  icbper?: number;
  opGravada?: number;
  opExonerada?: number;
  opInafecta?: number;
  isc?: number;
  igv?: number;
  otrosCargos?: number;
  otrosTributos?: number;
  montoDeRedondeo?: number;
  importeTotal: number;
  nota?: string;
  notas: Nota[];
  pago: Pago;
}

export interface Notificacion {
  codigoNotificacion: number;
  codigoCliente: number;
  codigoPago?: number;
  fechaDeEmision: Date;
  emisorNotificado: string;
  fechaDeRecepcion?: Date;
  fechaDeRespuesta?: Date;
  concepto: string;
  mensaje: string;
  notaInterna?: string;
  notas: Nota[];
  cliente: Cliente;
  pago?: Pago;
  seguimientos: Seguimiento[];
}

export interface Seguimiento {
  codigoSeguimiento: number;
  codigoNotificacion: number;
  codigoCliente: number;
  codigoPago?: number;
  fechaDeEmision: Date;
  emisorNotificado: string;
  fechaDeRecepcion?: Date;
  fechaDeRespuesta?: Date;
  concepto: string;
  mensaje: string;
  notaInterna?: string;
  notas: Nota[];
  notificacion: Notificacion;
}

export interface Concepto {
  codigoConcepto: number;
  codigoCliente: number;
  codigoPago?: number;
  codigoNotificacion?: number;
  avisoDePago?: string;
  vencimientoDePago?: Date;
  recordatorio1?: string;
  recordatorio2?: string;
  recordatorio3?: string;
  avisoFinal?: string;
  recibo?: string;
  nota?: string;
  pago?: Pago;
  notas: Nota[];
}

export interface Escala {
  codigoEscala: number;
  codigoCliente: number;
  A?: string;
  B?: string;
  C?: string;
  D?: string;
  exonerado: boolean;
  nota?: string;
  notas: Nota[];
}

export interface Nota {
  codigoNota: number;
  codigoCliente?: number;
  codigoHijo?: number;
  codigoPago?: number;
  codigoDeposito?: number;
  codigoRecibo?: number;
  codigoNotificacion?: number;
  codigoSeguimiento?: number;
  codigoConcepto?: number;
  codigoEscala?: number;
  texto: string;
  cliente?: Cliente;
  concepto?: Concepto;
  deposito?: Deposito;
  escala?: Escala;
  hijo?: Hijo;
  notificacion?: Notificacion;
  pago?: Pago;
  recibo?: Recibo;
  seguimiento?: Seguimiento;
}
