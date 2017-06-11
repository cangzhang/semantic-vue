<template>
  <div>
    <sv-accordion>
      <sv-accordion-item>
        <span slot="title">What is a dog?</span>
        <span slot="content">
          A dog is a type of domesticated animal.
        </span>
      </sv-accordion-item>
      <sv-accordion-item>
        <span slot="title">What kinds of dogs are there?</span>
        <span slot="content">
          There are many breeds of dogs. Each breed varies in size and temperament.
          Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.
        </span>
      </sv-accordion-item>
      <sv-accordion-item>
        <span slot="title">How do you acquire a dog?</span>
        <span slot="content">
          Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.
          <br>
          A pet shop may be the most convenient way to buy a dog.
          <br>
          Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home.
          Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.
        </span>
      </sv-accordion-item>
    </sv-accordion>
  </div>
</template>

<script>
  export default {
    name: 'accordion',
    props: {}
  }
</script>

<style lang=""></style>
