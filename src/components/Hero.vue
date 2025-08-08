<script setup>
  import Ben from '@/assets/images/Ben.jpg';
  import Button from "@/components/Button.vue";
  import Social from '@/components/Social.vue';
</script>

<template>
  <div class="flex lg:h-screen md:h-5/6 h-screen md:my-16 lg:my-0 items-center justify-center">
    <div class="flex gap-x-10 md:flex-row flex-col">
      <img :src="Ben" alt="my-photo" class="my-pic rounded-50%" ref="myImage"/>

      <div class="flex flex-col m-auto">
        <p class="text-gray-700 mb-2 text-center">Hello, I'm</p>
        <h2 class="text-black-900 mb-2 font-bold text-4xl text-center">Ben Ken-Idehen</h2>
        <p class="text-2xl mb-3 text-center font-bold text-gray-500">Full Stack Developer</p>
        <div class="flex m-auto gap-3">
            <a href="/Web developer CV.pdf" download="Benchanan's Resume">
              <Button extra-classes="border border-black hover:bg-black hover:text-white">
                Download CV
              </Button>
            </a>
            <a href="/#contact">
              <Button extra-classes="text-white hover:bg-black bg-gray-600">
                Contact Info
              </Button>
            </a>
        </div>
        <div class="flex m-auto gap-3 p-2">
          <Social href="https://x.com/benchanan008" class-name="fab fa-x-twitter fa-2x text-black"/>
          <Social />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-pic{
  animation: bounce 1.3s infinite;
  height: 300px;
  width: 300px;
  margin-bottom: 20px;
}

@media (min-width: 768px) {
.my-pic{
  height: 400px;
  width: 400px;
}
}

button{
  transition: all .3s ease-in;
}

@keyframes bounce {
  50%{
    transform: translateY(-10px);
  }
  100%{
    transform: translateY(0px);
  }
}
</style>
