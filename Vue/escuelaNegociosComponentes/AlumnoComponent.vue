<template>
    <div>
        <figure class="text-center">
            <img :src="alumno.foto" />
        </figure>
        <div class="col col-expand text-center">
            <h1>{{ alumno.nombre }} {{ alumno.apellido }}</h1>
            <p>{{ alumno.direccion }}</p>
            <p v-if="alumno.edad !== null">Nacido en: {{ calcNacimiento }}</p>
            <p>{{ alumno.curso }}</p>
            <span class="">
                Faltas: {{ alumno.faltas }}
            </span>
            <div v-if="puedeFaltar">
                <button class="btn btn-primary" @click="anadirFalta">Añadir Falta</button>
            </div>
            <div v-else>
                <button disabled class="btn btn-primary">Añadir Falta</button>
                <label class="text-danger">Hablar con el Alumno</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    alumno: Object
  },
  computed: {
    calcNacimiento() {
      return this.alumno.edad !== null ? new Date().getFullYear() - parseInt(this.alumno.edad) : null;
    },
    puedeFaltar() {
      return this.alumno.faltas < this.alumno.faltasMaximas;
    }
  },
  methods: {
    anadirFalta() {
      this.$emit('anadir-falta', this.alumno);
    }
  }
};
</script>