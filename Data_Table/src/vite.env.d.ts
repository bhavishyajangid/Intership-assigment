interface TableData {
  id: number;
  title: string;
  place_of_origin: string;
  artist_display: string;
  inscriptions: string | null;
  date_start: number;
  date_end: number;
}

interface Pagination {
  current_page: number;
  offset: number;
  total: number;
  total_pages: number;
  limit: number;
  next_url: string;
}

interface extraSelectedRowType {
  startPage: null | number;
  endPage: null | number;
  count: number;
}

interface StoreType {
  tableData: TableData[];
  pagination: Pagination | null;
  currentPage: number;
  loader: boolean;
  selectedRow: TableData[];
  extraSelectedRow: extraSelectedRowType;
}
