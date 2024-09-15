
export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export function getDate()
  {
    // Get the current date and time
    const currentDate = new Date();

    // Get the year, month, and day
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed
    const day = currentDate.getDate();

    // Format as a string: "MM-DD-YYYY"
    return `${month}.${day}.${year}`;
  }

export function getById(products, pId)
{
    return(products.find((prod) => prod.id === pId))
}