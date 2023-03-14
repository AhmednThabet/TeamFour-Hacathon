import { createContext } from "react";
type ForContext = {
  id: number;
  data: {};
  users: [];
};
const DataList = createContext<ForContext>({
  id: 0,
  data: {},
  users: [],
});

export default DataList;