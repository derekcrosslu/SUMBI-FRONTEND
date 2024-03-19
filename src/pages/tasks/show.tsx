import { useShow, IResourceComponentsProps, useOne } from "@refinedev/core";
import {
  Show,
  MarkdownField,
  ImageField,
  ListButton,
  EditButton,
  RefreshButton,
} from "@refinedev/antd";
import { Typography, Alert, Button } from "antd";

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
import { useState } from "react";

const { Title, Text } = Typography;

export const ClienteShow: React.FC<IResourceComponentsProps> = () => {
  const [isDeprecated, setIsDeprecated] = useState(false);

  const { queryResult } = useShow<ICliente>({
    liveMode: "manual",
    onLiveEvent: () => {
      setIsDeprecated(true);
    },
  });

  const { data, isLoading } = queryResult;

  const record = data?.data;

  const handleRefresh = () => {
    queryResult.refetch();
    setIsDeprecated(false);
  };

  return (
    <Show
      isLoading={isLoading}
      headerProps={{
        extra: (
          <>
            <ListButton />
            <EditButton />
            <RefreshButton onClick={handleRefresh} />
          </>
        ),
      }}
    >
      {isDeprecated && (
        <Alert
          message="This client is changed. Reload to see its latest version."
          type="warning"
          style={{
            marginBottom: 20,
          }}
          action={
            <Button onClick={handleRefresh} size="small" ghost>
              Refresh
            </Button>
          }
        />
      )}

      <Title level={5}>Código Cliente</Title>
      <Text>{record?.codigoCliente}</Text>

      <Title level={5}>Nombres Madre</Title>
      <Text>{record?.nombresMadre}</Text>

      <Title level={5}>Crédito</Title>
      <Text>{record?.credito ? "Yes" : "No"}</Text>

      <Title level={5}>Al Día con los Pagos</Title>
      <Text>{record?.alDiaConLosPagos ? "Yes" : "No"}</Text>

      <Title level={5}>Deuda Total</Title>
      <Text>{record?.deudaTotal}</Text>

      <Title level={5}>Fecha de Bloqueo</Title>
      <Text>{record?.fechaDeBloqueo?.toLocaleString()}</Text>

      <Title level={5}>Nota</Title>
      <Text>{record?.nota}</Text>
    </Show>
  );
};
