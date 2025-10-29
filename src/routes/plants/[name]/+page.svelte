<script lang="ts">
    export let data;
    const { plant } = data;
</script>
    <svelte:head>
        <title>{plant ? `${plant.name} - Rare Roots Ohio` : "Plant not found"}</title>
        <meta name="description" content={plant ? plant.description : "Plant not found"} />
    </svelte:head>
    <section class="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-green-50 to-green-300 px-4 py-12">
        {#if plant}
            <div class="bg-white rounded-3xl shadow-2xl max-w-3xl w-full flex flex-col md:flex-row overflow-hidden border border-green-100">
                <div class="md:w-1/2 bg-green-100 flex items-center justify-center p-6">
                    <img 
                        src={plant.image} 
                        alt={plant.name}
                        class="rounded-2xl w-full h-72 object-cover shadow-md border border-green-200"
                        style="background: #e9f5ee;" 
                    />
                </div>
                <div class="md:w-1/2 p-8 flex flex-col justify-center">
                    <h1 class="text-4xl font-bold text-green-900 mb-4">{plant.name}</h1>
                    <p class="text-green-800 font-medium mb-3 text-lg">${plant.price}</p>
                    <p class="mb-4 text-base text-green-700">{plant.description}</p>
                    <div class="space-y-2">
                        <div>
                            <span class="font-semibold text-green-900">Color:</span>
                            <span class="text-green-700">{plant.color}</span>
                        </div>
                        <div>
                            <span class="font-semibold text-green-900">USDA Hardiness:</span>
                            <span class="text-green-700">{plant.usdahardinesszone}</span>
                        </div>
                        <div>
                            <span class="font-semibold text-green-900">Plant Care:</span>
                            <span class="text-green-700">{plant.plantcare}</span>
                        </div>
                    </div>
                </div>
            </div>
        {:else}
            <div class="bg-white/90 rounded-2xl shadow-xl p-12 text-center w-full max-w-lg">
                <h1 class="text-3xl font-bold text-green-900 mb-3">Plant Not Found</h1>
                <p class="text-green-700">Sorry, we couldn't find the plant you're looking for.</p>
            </div>
        {/if}
    </section>

