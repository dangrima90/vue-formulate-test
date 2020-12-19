<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>Empty Model</h3>
    <FormulateForm v-model="data">
      <FormulateInput
        label="First Name"
        name="firstName"
      />
      <FormulateInput
        label="Last Name"
        name="lastName"
      />
      <FormulateInput
        label="Age"
        name="age"
        type="number"
      />
    </FormulateForm>
    <h3>Pre-populdated Model</h3>
    <FormulateForm v-model="populatedData">
      <FormulateInput
        label="First Name"
        name="firstName"
      />
      <FormulateInput
        label="Last Name"
        name="lastName"
      />
      <FormulateInput
        label="Age"
        name="age"
        type="number"
      />
    </FormulateForm>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      formData: 'formData',
      populdatedFormData: 'populatedFormData',
    }),
    data: {
      get() {
        return this.formData;
      },
      set(newData) {
        console.log(newData);
        this.saveData(newData);
      }
    },
    populatedData: {
      get() {
        return this.populdatedFormData;
      },
      set(newData) {
        console.log(newData);
        this.savePopulatedData(newData);
      }
    }
  },

  methods: {
    ...mapActions({
      saveData: 'saveFormData',
      savePopulatedData: 'savePopuldatedFormData'
    })
  }
}
</script>

<style>

</style>