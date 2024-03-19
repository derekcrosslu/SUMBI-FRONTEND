import {
  List,
  useTable,
  EditButton,
  ShowButton,
  getDefaultSortOrder,
  FilterDropdown,
  useSelect,
} from "@refinedev/antd";
import { Table, Space, Select } from "antd";

import { ICliente } from "../../interfaces";
import { useList, DataProvider } from "@refinedev/core";

export const ClientesList: React.FC = () => {
  const { data: products } = useList<ICliente>({
    resource: "clientes",
  });

  return <></>;
};
