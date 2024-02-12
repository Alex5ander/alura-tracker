export enum TipoNotificacao {
  SUCCESSO,
  FALHA,
  ATENCAO
}

export interface INotificacao {
  titulo: string
  text: string
  tipo: TipoNotificacao
  id: number
}
