import type IProjeto from '@/interfaces/IProjeto'
import type { INotificacao } from '@/interfaces/INotificacao'
import { createStore, Store, useStore as vuexUseStore } from 'vuex'
import type { InjectionKey } from 'vue'
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, NOTIFICAR } from './tipo-mutacoes'

export interface Estado {
  projetos: IProjeto[]
  notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    projetos: [],
    notificacoes: []
  },
  mutations: {
    [ADICIONA_PROJETO](state: Estado, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      } as IProjeto
      state.projetos.push(projeto)
    },
    [ALTERA_PROJETO](state: Estado, projeto: IProjeto) {
      const index = state.projetos.findIndex((proj) => proj.id == projeto.id)
      state.projetos[index] = projeto
    },
    [EXCLUIR_PROJETO](state: Estado, id: String) {
      state.projetos = state.projetos.filter((proj) => proj.id != id)
    },
    [NOTIFICAR](state: Estado, novaNotificacao: INotificacao) {
      novaNotificacao.id = new Date().getTime()
      state.notificacoes.push(novaNotificacao)

      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter((e) => e.id != novaNotificacao.id)
      }, 3000)
    }
  }
})

export function useStore(): Store<Estado> {
  return vuexUseStore(key)
}
