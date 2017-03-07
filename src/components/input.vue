<template>
  <div class="ui"
       :class="[
         !!size ? size : '',
         {
           transparent: transparent,
           left: left,
           icon: !!withIcon,
           disabled: disabled,
           input: true,
           loading: loading,
           error: error
         }]">
    <input type="text" :placeholder="placeholder">
    <i :class="withIcon" class="icon"></i>
  </div>
</template>

<script>
  //TODO: inverted fluid
  export default {
    name : 'svInput',
    props: {
      placeholder: String,
      loading    : Boolean,
      withIcon   : Boolean,
      left       : Boolean,
      error      : Boolean,
      transparent: Boolean,
      size       : String,
    }
  }
</script>

<style lang="" scoped></style>
