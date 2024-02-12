<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BarraLateral',
  data() {
    return { modoEscuroAtivo: false }
  },
  computed: {
    textoBotao() {
      if (this.modoEscuroAtivo) {
        return 'Desativar modo escuro'
      }
      return 'Ativar modo escuro'
    }
  },
  emits: ['aoTemaAlterado'],
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo
      this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
    }
  }
})
</script>

<template>
  <header>
    <h1><img src="../assets/logo.png" /></h1>
    <div class="has-text-centered">
      <button @click="alterarTema" class="button">{{ textoBotao }}</button>
    </div>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link class="link" to="/"> <i class="fas fa-tasks"></i> tarefas </router-link>
        </li>
        <li>
          <router-link class="link" to="/projetos">
            <i class="fas fa-project-diagram"></i> projetos
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
h1 {
  text-align: center;
}
strong {
  color: #f95738;
}
header {
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  padding: 2rem;
}
@media only screen and (max-width: 768px) {
  header {
    height: auto;
  }
}
.panel li {
  margin: 8px 0;
  padding: 0.5em;
}
.link {
  color: #fff;
}
.link:hover {
  color: #faf0ca;
}
.link.router-link-active {
  color: #faf0ca;
}
</style>
