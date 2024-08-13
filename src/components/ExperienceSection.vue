<script setup>
  import Card from './Card.vue';
  import Language from "@/components/Language.vue";
</script>

<template>
  <section class="p-5 mt-16">
    <p class="text-gray-500 mb-2 text-center">Explore My</p>
    <p class="text-5xl font-bold text-center mb-16">Experience</p>
    <div class="grid md:grid-cols-3 grid-cols-1 gap-2 r">
      <Card class-name="border-gray-500 rounded-pill">
        <p class="text-xl opacity-60 text-center font-bold mb-4">Frontend Development</p>
        <div class="grid lg:grid-cols-2 grid-cols-1 md:gap-4">
          <Language title="HTML" level="Experienced" icon="code"/>
          <Language title="Vuejs" level="Intermediate" icon="vuejs" brand/>
          <Language title="SASS" level="Experienced" icon="sass" brand/>
          <Language title="JavaScript" level="Experienced" icon="js" brand/>
          <Language title="TypeScript" level="Basic"/>
          <Language title="Tailwind" level="Intermediate"/>
        </div>
      </Card>
      <Card class-name="border-gray-500 rounded-pill">
        <p class="text-xl opacity-60 text-center font-bold mb-4">Backend Development</p>
        <div class="grid lg:grid-cols-2 grid-cols-1 md:gap-4">
          <Language title="PHP" level="Experienced" icon="php" brand/>
          <Language title="Laravel" level="Experienced" icon="laravel" brand/>
          <Language title="Node.js" level="Intermediate" icon="node-js" brand/>
          <Language title="Express.js" level="Intermediate" />
        </div>
      </Card>
      <Card class-name="border-gray-500 rounded-pill">
        <p class="text-xl opacity-60 text-center font-bold mb-4">Server Tools</p>
        <div class="grid lg:grid-cols-2 grid-cols-1 md:gap-4">
          <Language title="GIT" level="Experienced" icon="git-alt" brand/>
          <Language title="MYSQL" level="Experienced" icon="database"/>
          <Language title="Ubuntu" level="Experienced" icon="server"/>
          <Language title="Google Cloud" level="Basic" icon="cloud"/>
          <Language title="PHPmyadmin" level="EXperienced" />
          <Language title="SSL Terminal" level="Intermediate" icon="rectangle-terminal"/>
        </div>
      </Card>
    </div>
  </section>
</template>

<style scoped>

</style>
