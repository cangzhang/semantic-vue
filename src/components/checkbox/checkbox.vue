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
  import Emitter from './../../utils/emitter'
  
  export default{
    name: 'SvCheckbox',
    componentName: 'SvCheckbox',
    mixins: [Emitter],
    props: {
      value: {},
      label: {},
      name: String,
      disabled: Boolean,
      checked: Boolean,
      trueLabel: [String, Number],
      falseLabel: [String, Number],
    },
    data() {
      return {
        selfModel: false,
        focus: false,
      }
    },
    computed: {
      model: {
        get() {
          return this.isGroup ?
              this.store
              : typeof this.value !== 'undefined' ?
                  this.value : this.selfModel
        },
        set(val) { //TODO
          if (this.isGroup) {
          
          } else {
            this.$emit('input', val)
            this.selfModel = val
          }
        }
      },
      
      isGroup() {
        let parent = this.$parent
        while (parent) {
          if (parent.$options.componentName !== 'SvCheckboxGroup') {
            parent = parent.$parent
          } else {
            this._checkboxGroup = parent
            return true
          }
        }
        return false
      },
      
      store() {
        return this._checkboxGroup ?
            this._checkboxGroup.value
            : this.value
      }
    },
    methods: {
      addToStore(){
        if (Array.isArray(this.model)
            && this.model.indexOf(this.label) < 0) {
          this.model.push(this.label)
        } else {
          this.model = this.trueLabel || true
        }
      },
      handleChange(ev) {
        this.$emit('change', ev)
        if (this.isGroup) {
          this.$nextTick(() => {
            this.dispatch(
                'SvCheckboxGroup', 'change', [this._checkboxGroup.value]
            )
          })
        }
      }
    },
    created() {
      if (this.checked) {
        this.addToStore()
      }
    }
  }
</script>

