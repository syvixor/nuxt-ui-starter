<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui";

const links: ButtonProps[] = [
    {
        to: "https://ui.nuxt.com",
        target: "_blank",
        icon: "i-lucide-book",
        label: "Documentation",
        color: "primary",
        variant: "subtle"
    },
    {
        to: "https://github.com/syvixor/nuxt-ui-starter",
        target: "_blank",
        icon: "i-lucide-github",
        label: "Github Repo",
        color: "neutral",
        variant: "subtle"
    }
];
</script>

<template>
    <Head>
        <Title>Nuxt + Nuxt UI v3 - Starter Template</Title>
    </Head>
    <div class="flex flex-col justify-center items-center gap-4 h-screen">
        <h1 class="text-3xl font-bold">Nuxt + Nuxt UI v3</h1>
        <Theme />
        <div class="flex items-center gap-2">
            <UButton :to="link.to" :target="link.target" :icon="link.icon" :label="link.label" :color="link.color"
                :variant="link.variant" v-for="(link, index) in links" :key="index" />
        </div>
    </div>
</template>