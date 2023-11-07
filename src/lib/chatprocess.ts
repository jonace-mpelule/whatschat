import { writable } from "svelte/store";
import { parse, format } from "date-fns";

export async function processChat(): Promise<{chat: Array<{id:number, senderName: string; message: string; dateTime: string; omitted: boolean }> | null, users:any[]} | null > {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".txt";
  
  return new Promise(async (resolve) => {
    try {
      fileInput.onchange = async (e: any) => {
        const file = e.target.files[0];
        if (!file) {
          throw new Error("No file selected.");
        }

        const fileContent = await file.text();

        // Check if the file content has the expected format
        // if (!isValidChatFileContent(fileContent)) {
        //   throw new Error("Invalid chat file format.");
        // }

        const chat: Array<{id: number, senderName: string; message: string; dateTime: string; omitted: boolean}> = [];
        const users: Array<{id:number, name:string}> = []

        const lines = fileContent.split('\n');
        let id = 0
        let userId = 0
        let senderName = "";
        let message = "";
        let dateTime;
        let omitted = false;


        

        for (const line of lines) {
          const parts = line.split("] ");
          if (parts.length >= 2) {
            const dateTimeString = parts[0].substring(1).replace('[', '').replace(']', '');
            const formatStr = "dd/MM/yyyy, HH:mm:ss";
            const parsedDate = parse(dateTimeString, formatStr, new Date());
            dateTime = parsedDate;

            const senderAndMessage = parts[1];
            if (senderAndMessage.includes(": ")) {
              const senderMessageParts = senderAndMessage.split(": ");
              senderName = senderMessageParts[0];
              message = senderMessageParts[1];
              omitted = false;
            } else if (senderAndMessage.includes("omitted")) {
              senderName = "";
              message = "";
              omitted = true;
            }

            const existingUser = users.find(user => user.name === senderName);
            if (!existingUser) {
              // If not, add the user to the users array
              users.push({
                id: userId,
                name: senderName
              });
              userId++;
            }
            

            id++

            chat.push({
              id,
              senderName,
              message,
              dateTime: dateTime.toString(),
              omitted,
            });
          }
        }

        resolve({chat, users});
      };

      fileInput.click();
    } catch (error) {
      console.error(error);
      resolve(null); // Return null when there's an error
    }
  });
}

function isValidChatFileContent(fileContent: string): boolean {
  const firstLine = fileContent.split('\n')[0];
  return /^\[\d{2}\/\d{2}\/\d{4}, \d{2}:\d{2}:\d{2}\] .+: .+$/.test(firstLine);
}
