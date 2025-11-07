
 export const tableHeaderFieldArray = [
  { field: "title", header: "Title" },
  { field: "place_of_origin", header: "Place Of Origin" },
  { field: "artist_display", header: "Artist" },
  { field: "inscriptions", header: "Inscriptions" },
  { field: "date_start", header: "Start Date" },
  { field: "date_end", header: "End Date" },
];
 
 export const sortFiled = (value: string, maxlength: number = 15): string => {
    if (!value) return "N/A";

    return value.length > maxlength ? value.slice(0, maxlength) + "..." : value;
  };

  