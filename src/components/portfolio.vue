<template>
    <div class="max-w-7xl m-center pt-20">
        <div class="about-me text-center mt-10 md:mt-32">
            <h2 class="text-5xl dark:text-white">Portfolio</h2>
            <span class="f-gray text-sm dark:text-white">Recent Projects</span>
        </div>
        <div class="details flex gap-10 justify-center">
            <swiper :slidesPerView="3" :spaceBetween="0" :centeredSlides="true" :modules="modules" :pagination="{
                clickable: true,
            }" :breakpoints="{
                '200': {
                    slidesPerView: 1,
                },
                '600': {
                    slidesPerView: 2,
                    spaceBetween: 25,
                },
                '768': {
                    slidesPerView: 3,
                },
            }" class="mySwiper">
                <swiper-slide v-for="(project, key) in recent_projects" :key="key">
                    <div class="custom-card bg-white dark:bg-slate-800 drop-shadow-2xl w-80 h-96 rounded">
                        <div class="card__content p-2 flex flex-col justify-between">
                            <div class="flex justify-end ">
                                <v-chip>{{ project.type }}</v-chip>
                            </div>
                            <div class="flex flex-col gap-2">
                                <div class="project-img">
                                    <img src="../assets/system.png" alt=""
                                        :class="`${project.class} thumbnail m-auto`" />
                                </div>
                                <div class="title dark:text-white text-2xl font-semibold pt-2">
                                    {{ project.name }}
                                </div>
                                <div class="description text-sm text-gray-400">
                                    {{ project.description }}
                                </div>
                            </div>
                            <div class="flex justify-center ">
                                <v-btn color="black" variant="outlined">
                                    View Website
                                </v-btn>
                                <v-btn color="black" variant="outlined">
                                    More Details
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>

        </div>
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
                    name: "Web Based Research Management System",
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

<style scoped>
.custom-card {
    border-radius: 8px;
    z-index: 1;
    height: 26rem;
}

.tools {
    display: flex;
    align-items: center;
    padding: 9px;
}

.circle {
    padding: 0 4px;
}

.box {
    display: inline-block;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 1px;
    border-radius: 50%;
}


.swiper {
    width: 100%;
    height: 65vh;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}



.cssbuttons-io-button {
    color: white;
    font-family: inherit;
    padding: 0.35em;
    padding-left: 1.2em;
    font-size: 17px;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    height: 2.8em;
    padding-right: 3.3em;
}

.cssbuttons-io-button .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    right: 0.3em;
    transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.6em);
}


.project_image {
    width: 40% !important;
}

.cssbuttons-io-button .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
}

.cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
    transform: scale(0.95);
}

.card__content {
    height: 22rem;
}
</style>
