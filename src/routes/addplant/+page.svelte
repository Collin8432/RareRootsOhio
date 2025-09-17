<script>
    import { supabase } from '$lib/utils/supabaseClient';

    let auth = false;
    let password = '';

    function checkPassword() {
        if (password === '1234') {
            auth = true;
        }
    }

    let name = "";
    let description = "";
    let price = "";
    let image = "";
    let color = "";
    let plantcare = "";
    let usdahardinesszone = "";

    let message = "";

    async function addPlant() {
        if (!name || !description || !price || !image || !color || !plantcare || !usdahardinesszone) {
            message = "⚠️ Please fill out all fields before submitting.";
            return;
        }

        const { data, error } = await supabase
            .from('plants')
            .insert([{ name, description, price, image, color, plantcare, usdahardinesszone }]);

        if (error) {
            console.error(error);
            message = "Error: " + error.message;
        } else {
            console.log("Plant added:", data);
            message = "✅ Plant added successfully!";
            // clear fields
            name = description = price = image = color = plantcare = usdahardinesszone = "";
        }
    }
</script>

{#if !auth}
<div class="flex flex-col items-center justify-center space-y-2">
    <input
        type="password"
        placeholder="Password"
        bind:value={password}
        class="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button 
        on:click={checkPassword}
        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
        Submit
    </button>
</div>
{:else}
<div class="flex flex-col items-center justify-center space-y-2">
    <input placeholder="Name" bind:value={name} class="border px-3 py-2 rounded w-64" />
    <input placeholder="Description" bind:value={description} class="border px-3 py-2 rounded w-64" />
    <input placeholder="Price" bind:value={price} class="border px-3 py-2 rounded w-64" />
    <input placeholder="Image URL" bind:value={image} class="border px-3 py-2 rounded w-64" />
    <input placeholder="Color" bind:value={color} class="border px-3 py-2 rounded w-64" />
    <input placeholder="Plant Care" bind:value={plantcare} class="border px-3 py-2 rounded w-64" />
    <input placeholder="USDA Hardiness Zones" bind:value={usdahardinesszone} class="border px-3 py-2 rounded w-64" />

    <button 
        on:click={addPlant} 
        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
        Add Plant
    </button>

    {#if message}
        <p class="mt-2 text-sm">{message}</p>
    {/if}
</div>
{/if}