import { OverlayPanel } from "primereact/overlaypanel";
import { useRef } from "react";
import InputSelectRow from "./InputSelectRow";
import Pagination from "./Pagination";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";

const Table = () => {
  const op = useRef<OverlayPanel>(null);

  return (
    <div>
      <TableHeader/>
      <TableRows op={op}/>
      <InputSelectRow op={op}/>   
      <Pagination/>  
    </div>
  );
};

export default Table;
