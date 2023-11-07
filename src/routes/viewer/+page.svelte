<script lang="ts">
  import { processChat } from "$lib/chatprocess";
  import { formatTime, formatDateOfYear, formatDate } from "$lib/formatDateString"

  let isChatImported: boolean = false
  let primaryUser: string = ""
  let primaryUserIndex: number = 0
  let time = new Date(Date.now())

  let chat: Array<{
    id: number;
    senderName: string;
    message: string;
    dateTime: string;
    omitted: boolean;
  }> = [];

  let users: Array<{id:number, name:string}> = []

  const importChat = async () => {
    await processChat()
      .then(async (chatData) => {
        isChatImported = true
        chat = chatData?.chat!
        users = chatData?.users!
        primaryUser = users.at(0)?.name!
    })
      .catch((e) => {
        window.alert(e);
    });
    
    console.log(users)
    console.log(chat)
  };

  function changeUser(){
    if((primaryUserIndex + 1) > (users.length - 1)){
        primaryUserIndex = 0
        primaryUser = users.at(primaryUserIndex)?.name!
    }else{
        primaryUserIndex++
        primaryUser = users.at(primaryUserIndex)?.name!
    }
  }

</script>





<div
  class=" {isChatImported === true ? 'hidden' : 'block'} fixed z-[50] h-full w-full top-0 bg-[#ffffff75] backdrop-blur-sm flex justify-center align-middle items-center font-inter">
  <div class="px-8">

    <div class="flex items-center justify-center w-full font-inter">
      <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-400 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100">
        <button class="  px-5 py-3 w-full rounded-full  " on:click={importChat}>
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p class="mb-2 text-lg text-black "><span class="font-semibold">Click To Upload Chat</span></p>
              <p class="text-xs text-gray-500 dark:text-gray-400">TXT (Whatsapp Chats Only)</p>
          </div>

            </button>
      </label>
    </div> 

    
  </div>
</div>

<main class="font-inter flex justify-center">

    <div class="device-options-wrapper flex">
    <div class="wrapper">

        

        
    <img class="frame" src="/iphone12.png" alt="" />
    
    <!-- home bar -->
    <div class="h-1 w-[40%] absolute bottom-5 rounded-full bg-[#efeaea] z-[12] text-white">
        
    </div>

    <div class="device bg-black relative">
       
       <!-- top bar -->
        <div class="absolute h-[11.5%] w-full bg-[#1a1a1a8e] backdrop-blur-lg rounded-t-xl z-[7] text-white">
            <!-- top top bar -->
            <div class="w-full flex justify-between text-xs px-5 p-2">
                <div class=""><strong>{formatTime(time)}</strong></div>
                <div class="flex items-center gap-2">
                    <svg width="14px" height="14px" fill="white" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg"><path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"/></svg>
                    <!-- <strong>3G</strong> -->
                    <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    >
                    <rect x="2" y="7" width="16" height="10" rx="2" ry="2" />
                    <line x1="22" x2="22" y1="11" y2="13" />
                    </svg>
                </div>
            </div>

            <div class="flex items-center">

                <div class="text-[#53A6FD] text-sm flex items-center px-1 py-[1.2%]  align-middle">
                <svg fill="#53A6FD" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><path d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z"/></svg>
                <span >63</span>
                </div>
                
                
                <div class="w-[80%] text-ellipsi overflow-clip">
                <p class="text-sm ml-3 text overflow-hidden text-ellipsis whitespace-nowrap">
                  {#each users as user }
                  <span class="text-xs text-white font-semibold"> {user.name} {(users.length - 1) !== user.id ? " &  " : " " }</span> 
                  {/each}
                </p>

                </div>

        </div>
        </div>

        <!-- chat scrollview -->
        <div class="chatscrollview w-full overflow-y-auto overflow-x-clip h-[89.5%]">
        <!-- chat -->
        {#each chat as chatData}
          {#if chatData.id === 1}
            <!-- <div class=" w-2/3 p-3 rounded-xl mt-10 mb-3 mx-auto bg-[#363638]">
                <p class=" text-yellow-400 text-xs text-center ">{chatData.message}</p>
            </div> -->
            <div class=" h-24"></div>
            <!-- first time bubble -->
            <div class="text-[10px] text-white mx-auto my-3 p-1 bg-[#2e2e2e] rounded-full max-w-[35%]">
                <p class="text-gray-300 text-center">{formatDate(new Date(Date.parse(chatData.dateTime)))}</p>
            </div>

          {:else}


            <!-- time and date of chat bubble -->
            {#if chatData.id !== 0 && chatData.id !== chat.length-1 && formatDateOfYear(new Date(Date.parse(chatData.dateTime))) !== formatDateOfYear(new Date(Date.parse(chat.at(chatData.id-2)?.dateTime ?? "")))}
                <div class="text-[10px] text-white mx-auto my-3 p-1 bg-[#2e2e2e] rounded-full max-w-[35%]">
                    <p class="text-gray-300 text-center">{formatDate(new Date(Date.parse(chatData.dateTime)))}</p>
                </div>
            {/if}



            <div class="">

            </div>


            <div class="flex {chatData.senderName === primaryUser ? " justify-end" : "justify-start"}" >
              <div class="bubble " class:primary={chatData.senderName === primaryUser}>
                
                <p class="text-white">{chatData.message}</p>
                
                <p class="text-[10px] text-[#A9A9B1] text-end pt-[6px] mr-2 ml-2 font-medium">
                    <span class=" {chatData.senderName === primaryUser ? "text-orange-500" : "text-purple-400"}">{chatData.senderName}</span> • 
                    <span>
                    {formatTime(new Date(Date.parse(chatData.dateTime))) }</span></p>
                
                    {#if chatData.senderName === primaryUser}
                    
                    <svg width="17" height="17" class="absolute bottom-[-2px] right-[-5.4px] " viewBox="0 0 17 17" fill="#005046" xmlns="http://www.w3.org/2000/svg">
                    <path id="Shape" d="M11.5 10.5C12.0014 13.5086 14.8333 16.3333 16.5 17C10.1 17 6 14.8333 5 13.5L0 15L0.5 0H11V2V4V4.5C11 5.5 11 7.5 11.5 10.5Z" fill="#005046"/>
                    </svg>
                    
                    {:else}

                    <svg width="17" height="17" class="absolute bottom-[-2px] left-[-5.4px] " viewBox="0 0 17 17" fill="#363638" xmlns="http://www.w3.org/2000/svg">
                        <path id="Shape" d="M5 10.5C4.49857 13.5086 1.66667 16.3333 0 17C6.4 17 10.5 14.8333 11.5 13.5L16.5 15L16 0H5.5V2V4V4.5C5.5 5.5 5.5 7.5 5 10.5Z" fill="#363638"/>
                        </svg>
                        

                    {/if}
              </div>
          </div>
          
          {/if}
        {/each}
    
        </div>
    
        <!-- message input place -->
        <div class="h-[10.5%] w-full bg-[#171717] rounded-b-xl flex justify-center align-middle items-center">
            <p class="pb-3  text-[#53A6FD] text-[10px] text-center align-middle">Private conversations should remain private. <a href="/ethics">Learn More</a> </p>
        </div>
        

    </div>
        
    
    </div>

    <div class="max-h-[20%] h-auto ml-2  rounded-lg font-inter">
        <div class="option">
            <button on:click={changeUser}>
                <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z"/></svg>
            </button>
        </div>
        <div class="option">
            <button on:click={()=>{isChatImported = false}}>New</button>
        </div>
    </div>
</div>
</main>

<style lang="postcss">
  .device-options-wrapper {
    @apply md:my-0 my-10
  }
  .wrapper {
    @apply h-[590.66px] w-[298px]  md:h-[620.66px] md:w-[322px] mx-auto my-auto  relative justify-center flex;
  }
  .device {
    @apply bg-[url("/background.png")] bg-cover h-[564.66px] w-[270px] md:h-[593.66px] md:w-[290px] rounded-2xl  mx-auto my-auto;
  }
  .frame {
    @apply absolute h-full w-full mx-auto pointer-events-none z-[9];
  }
  .bubble {
    @apply relative max-w-[70%] min-w-[35%] my-1 p-[6px] rounded-xl text-xs bg-[#363638] break-words
  }

  .chatscrollview::-webkit-scrollbar {
    width: 0.25rem; 
  }

  .chatscrollview::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.48); 
    border-radius: 20%;
    margin-right: 4px;
  }

  .chatscrollview {
    @apply px-2
  }

  .primary{
    @apply bg-[#005046]
  }

  .option {
    @apply h-10 w-10 flex justify-center align-middle m-1 bg-gray-200 rounded-md
  }
  a{
    @apply underline
  }
</style>
