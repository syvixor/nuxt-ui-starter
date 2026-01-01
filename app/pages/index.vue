<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui";

const links: ButtonProps[] = [
    {
        to: "https://ui.nuxt.com",
        target: "_blank",
        icon: "i-lucide-book",
        label: "Documentation",
        color: "primary",
        variant: "soft"
    },
    {
        to: "https://github.com/syvixor/nuxt-ui-starter",
        target: "_blank",
        icon: "i-lucide-github",
        label: "Github Repo",
        color: "neutral",
        variant: "soft"
    }
];
</script>

<template>
    <div class="flex flex-col justify-center items-center gap-4 h-screen">
        <UIcon name="i-devicon-nuxt" class="w-16 h-16" />
        <UColorModeButton />
        <div class="flex items-center gap-2">
            <UButton :to="link.to" :target="link.target" :icon="link.icon" :label="link.label" :color="link.color"
                :variant="link.variant" v-for="(link, index) in links" :key="index" />
        </div>
    </div>
</template>