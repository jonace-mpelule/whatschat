export function formatTime(date: Date){
  
  const locale = "en-US"; 
  const options: any = {
    // year: "numeric",
    // month: "short",
    // day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit",
    // timeZoneName: "short",
    hour12: false
  };

  const dateFormatter = new Intl.DateTimeFormat(locale, options);

  const formattedDate = dateFormatter.format(date);

  return formattedDate;
}

export function formatDate(date: Date){
  
    const locale = "en-US"; 
    const options: any = {
      year: "numeric",
      month: "short",
      day: "numeric",
    //   hour: "2-digit",
    //   minute: "2-digit",
      // second: "2-digit",
      // timeZoneName: "short",
      hour12: false
    };
  
    const dateFormatter = new Intl.DateTimeFormat(locale, options);
  
    const formattedDate = dateFormatter.format(date);
  
    return formattedDate;
  }

export function formatDateOfYear(date: Date){
  
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()

  
    return day + month + year;
}
  
  