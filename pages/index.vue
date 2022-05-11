<template>
	<NuxtLayout>
		<div
			class="flex flex-col items-center justify-center h-full space-y-2 text-xl"
		>
			<h2 class="text-neutral-600 text-2xl">Hi</h2>
			<h2 class="text-neutral-600 text-xl">I'm Nayanajith</h2>
			<h2 class="text-neutral-600 text-xl">AKA DOiZ</h2>
			<img class="h-2/3" src="~/assets/home_me_out_circle.png" alt="" />
		</div>
	</NuxtLayout>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	definePageMeta({
		layout: "default",
	});
</script>
