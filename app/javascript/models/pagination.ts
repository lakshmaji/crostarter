export interface IPagy {
  scaffold_url: string;
  first_url: string;
  prev_url: string;
  page_url: string;
  next_url: string;
  last_url: string;
  count: number;
  page: number;
  items: number;
  vars: Vars;
  pages: number;
  last: number;
  in: number;
  from: number;
  to: number;
  prev: number;
  next: number;
  series: Array<number | string>;
}

interface Vars {
  page: number;
  items: number;
  outset: number;
  size: number[];
  page_param: string;
  params: Params;
  fragment: string;
  link_extra: string;
  i18n_key: string;
  cycle: boolean;
  metadata: string[];
  count: number;
}

type Params = Record<string, string>;
