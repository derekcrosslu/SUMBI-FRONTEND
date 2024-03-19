import { IResourceComponentsProps, getDefaultFilter } from "@refinedev/core";
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

import {
  ICliente,
  IHijo,
  IPago,
  INotificacion,
  IDeposito,
  IRecibo,
  ISeguimiento,
  IConcepto,
  IEscala,
  INota,
} from "../../interfaces";

export const ClienteList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorters, filters } = useTable<ICliente>({
    resource: "clientes",
    initialCurrent: 1,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="codigoCliente">
        <Table.Column
          key="codigoCliente"
          dataIndex="codigoCliente"
          title="Código Cliente"
          sorter
          defaultSortOrder={getDefaultSortOrder("codigoCliente", sorters)}
        />
        <Table.Column
          key="nombresMadre"
          dataIndex="nombresMadre"
          title="Nombres Madre"
          sorter
          defaultSortOrder={getDefaultSortOrder("nombresMadre", sorters)}
        />

        <Table.Column<ICliente>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton
                hideText
                size="small"
                recordItemId={record.codigoCliente}
              />
              <ShowButton
                hideText
                size="small"
                recordItemId={record.codigoCliente}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
