<style></style>

<template>
  <div class="sv-checkbox"
       :class="[{
         ui: true,
         checkbox: true,
       }]">
    
    
    <input
        type="checkbox"
        @change="handleChange"
        v-model="model"
        :value="label"
        :name="name"
        :disabled="disabled">
  
    <!--:true-value=""-->
    <!--:false-value=""-->
    
    <label class="sv-checkbox-label">
      {{ label }}
    </label>
  </div>
</template>

<script>
  export default{
    name: 'SvCheckbox',
    componentName: 'SvCheckbox',
    props: {
      label: [String],
      name: [String],
      disabled: Boolean,
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      handleChange(ev) {
        this.$emit('change', ev)
      }
    },
    mounted() {
    
    }
  }
</script>

