<template>
    <div class="max-w-7xl m-center pb-20">
        <h2 class="text-5xl text-black text-center mb-6">Portfolio</h2>
        <swiper :slidesPerView="3" :spaceBetween="0" :centeredSlides="true" :modules="modules"
            :pagination="{ clickable: true }" :breakpoints="{
            '200': {
                slidesPerView: 1,
            },
            '600': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 3,
            },
        }">
            <swiper-slide v-for="(project, key) in recent_projects" :key="key" style="height: 65vh;">
                <div class="flex flex-col justify-between drop-shadow-2xl bg-white w-80 h-96 p-6 m-center">
                    <div class="badge badge-outline mb-2 self-end">{{ project.type }}</div>
                    <div class="flex flex-col items-center text-center">
                        <img src="../assets/system.png" style="width: 40% " />
                        <p class="text-2l text-black">{{ project.name }}</p>
                        <p>{{ project.description }}</p>
                    </div>
                    <div class="self-center">
                        <button class="btn grow mr-2">View Site</button>
                        <button class="btn grow ml-2">More Details</button>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        return {

        };
    },

    data() {
        return {
            modules: [Pagination],
            recent_projects: [
                {
                    name: "E-Palengke",
                    project_link: "https://epalengke.shop/",
                    project_logo: "../assets/system.png",
                    description: "Laravel + VueJS",
                    type: 'Academic Thesis',
                    class: "project_image",
                },

                {
                    name: "Web Based Research Management System",
                    project_link: "https://epalengke.shop/",
                    project_logo: "../assets/system.png",
                    description: "Laravel + VueJS",
                    type: 'Freelance',
                    class: "project_image",
                },

                {
                    name: "Cloud Based Disaster and Risked Geosptial Management System",
                    project_link: "https://epalengke.shop/",
                    project_logo: "../assets/system.png",
                    description: "Laravel + VueJS",
                    type: 'Freelance',
                    class: "project_image",
                },
            ],
        };
    },
};

</script>