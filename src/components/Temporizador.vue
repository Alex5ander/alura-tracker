<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    <button class="button" @click="iniciar" :disabled="cronometroRodando">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="finalizar" :disabled="!cronometroRodando">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import Cronometro from './Cronometro.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TemporizadorVue',
  emits: ['aoTemporizadorFinalizado'],
  data() {
    return {
      cronometro: 0,
      cronometroRodando: false,
      tempoEmSegundos: 0
    }
  },
  components: {
    Cronometro
  },
  methods: {
    iniciar() {
      this.cronometroRodando = true
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1
        console.log('incrementado o contador')
      }, 1000)
      console.log('iniciando')
    },
    finalizar() {
      this.cronometroRodando = false
      clearInterval(this.cronometro)
      console.log('finalizando')
      this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
      this.tempoEmSegundos = 0
    }
  }
})
</script>
