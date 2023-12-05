<template>
    <div v-if="mostrarListaAlumnos">
        <AlumnoComponent v-for="alumno in alumnos" :key="alumno.id" :alumno="alumno" @anadir-falta="anadirFalta" />
    </div>
</template>

<script>
import AlumnoComponent from './AlumnoComponent.vue';

export default {
  components: {
    AlumnoComponent
  },
  props: {
    alumnos: Array,
    mostrarListaAlumnos: Boolean
  },
  methods: {
    anadirFalta(alumno) {
      this.$emit('anadir-falta', alumno);
    }
  }
};
</script>