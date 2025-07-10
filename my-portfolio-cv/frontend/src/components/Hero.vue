<template>
  <section id="profil" class="bg-[#4682B4] px-6 py-20">
    <div class="container mx-auto flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-10 md:mb-0">
        <h1
          class="text-5xl font-bold text-black mb-4 animate-slide-in-left"
          style="animation-delay: 200ms"
        >
          Halo, Saya <span class="text-[#00FFFF]">Lingga Firmansyah</span>
        </h1>
        <p class="text-xl text-white mb-8 animate-slide-in-left" style="animation-delay: 400ms">
          Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.
        </p>

        <a
          href="#kontak"
          class="bg-white text-[#4682B4] font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300 inline-block animate-slide-in-left"
          style="animation-delay: 600ms"
        >
          Hubungi Saya
        </a>
      </div>
      <div class="md:w-1/2 flex justify-center animate-slide-in-right">
        <img
          src="/images/foto1.jpg"
          alt="Foto Profil"
          class="w-80 h-80 rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  </section>
</template>
