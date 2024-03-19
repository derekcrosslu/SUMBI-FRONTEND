import React, { useState } from "react";
import { IResourceComponentsProps } from "@refinedev/core";

import {
  Edit,
  ListButton,
  RefreshButton,
  useForm,
  useSelect,
} from "@refinedev/antd";

import {
  Alert,
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  Checkbox,
  InputNumber,
} from "antd";

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

export const ClienteEdit: React.FC<IResourceComponentsProps> = () => {
  const [isDeprecated, setIsDeprecated] = useState(false);
  const { formProps, saveButtonProps, queryResult } = useForm<ICliente>({
    liveMode: "manual",
    onLiveEvent: () => {
      setIsDeprecated(true);
    },
  });

  const clienteData = queryResult?.data?.data;

  const handleRefresh = () => {
    queryResult?.refetch();
    setIsDeprecated(false);
  };

  return (
    <Edit
      saveButtonProps={saveButtonProps}
      headerProps={{
        extra: (
          <>
            <ListButton />
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

      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Código Cliente"
          name="codigoCliente"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item label="Nombres Madre" name="nombresMadre">
          <Input />
        </Form.Item>

        <Form.Item
          label="Fecha de Pago Preferencial"
          name="fechaDePagoPreferencial"
        >
          <DatePicker />
        </Form.Item>
        <Form.Item label="Crédito" name="credito" valuePropName="checked">
          <Checkbox />
        </Form.Item>
        <Form.Item
          label="Al Día con los Pagos"
          name="alDiaConLosPagos"
          valuePropName="checked"
        >
          <Checkbox />
        </Form.Item>
        <Form.Item label="Deuda Total" name="deudaTotal">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Fecha de Bloqueo" name="fechaDeBloqueo">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Nota" name="nota">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Edit>
  );
};
