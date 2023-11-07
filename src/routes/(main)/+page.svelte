<script>
    import { goto } from "$app/navigation";
</script>

<main class="bg-[#0F0F0F] text-[#DCD5CC] min-h-[100vh] font-inter">


    <div class="hero flex-wrap md:flex md:px-32">
        <div class="w-full md:w-1/2 md:pr-5">
            <img src="/whatschat-featured-text.png" alt="">
            <div class="px-5">

                <p class="my-5">Export and preview Whatsapp chats for your business, work-group, and other use cases! (WINK!)</p>
                <h2 class="underline mt-6">Note:</h2>
                <ul class=" list-decimal pl-5 my-5  md:text-base ">
                    <li>This tool is 100% Free & Open Source</li>
                    <li>Not created for any commercial purposes (on my end)</li>
                    <li>If you can, Tag me when you share.</li>
                    <li>*Use this ethically*👀</li>
                    <li>Also i have a <a class="underline" href="https://buymeacoffee.com/jonace.mpelule">BuyMeACoffe☕ </a> page😁</li>
                </ul>

                <button class="px-9 py-3 bg-[crimson] mt-9 font-semibold rounded-full w-full md:w-auto" on:click={()=>{goto('/viewer')}}>Get Started</button>
            </div>
        </div>
        <div class="w-full md:w-1/2  mt-14 md:mt-0">
            <img src="/whatschat-featured-image.png" alt="">
        </div>
    </div>

    <div class="px-10">

        <h1 class="text-center  md:text-sm font-bold my-14 mt-20 uppercase">&lbrace; Created with Love &lessdot;3 By <a href="htpps://twitter.com/jonace_mpelule" class="underline">@jonace.mpelule</a> &rbrace;</h1>
        <div class="md:px-32 ">

            <p class="text-2xl md:text-6xl font-inconsolata uppercase text-justify ">Incase you are wondering this entire platform was created using SvelteKit, Tailwindcss, & Typescript</p>
            

            
        </div>
    </div>

</main>

<style lang="postcss">
  
</style>


