<template>
    <div v-else>
        <div class="form-group">
            <div class="col-md-6 col-md-offset-2">
                <strong>Nombre del alumno:</strong>
                <input v-model="nuevoAlumno.nombre" class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-6 col-md-offset-2">
                <strong>Motivo de la comunicación:</strong>
                <select v-model="nuevoAlumno.motivoComunicacion" class="form-control">
                    <option value="faltaInjustificada">Falta Injustificada</option>
                    <option value="excesoFaltas">Exceso de Faltas</option>
                </select>
            </div>
        </div>

        <div class="col-md-9 col-md-offset-2 verify">
            <pre>
        Nombre del alumno: {{ nuevoAlumno.nombre }} 
        Motivo de la comunicación: {{ nuevoAlumno.motivoComunicacion }} 
      </pre>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoAlumno: { nombre: "", motivoComunicacion: "" }
    };
  }
};
</script>