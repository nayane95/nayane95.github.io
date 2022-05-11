<template>
	<div class="flex flex-col w-full h-screen overflow-hidden bg-white">
		<slot />
		<div
			class="flex fixed bottom-5 items-center justify-center h-16 w-full bg-white"
		>
			<div
				class="flex rounded-xl border-2 w-5/12 h-full text-black justify-center drop-shadow-lg items-center"
			>
				<div class="flex flex-row h-full space-x-5 text-gray-400">
					<button class="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-3 md:h-7 w-3 md:w-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path d="M12 14l9-5-9-5-9 5 9 5z" />
							<path
								d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
							/>
						</svg>
					</button>
					<button class="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-3 md:h-7 w-3 md:w-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path d="M12 14l9-5-9-5-9 5 9 5z" />
							<path
								d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style></style>
