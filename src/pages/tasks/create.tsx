import { useState } from "react";
import { IResourceComponentsProps } from "@refinedev/core";

import { Create, useForm, useSelect } from "@refinedev/antd";

import { RcFile } from "antd/lib/upload/interface";
import {
  Form,
  Input,
  Select,
  Upload,
  DatePicker,
  Checkbox,
  InputNumber,
} from "antd";

import MDEditor from "@uiw/react-md-editor";

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
import { supabaseClient, normalizeFile } from "../../utility";

export const ClienteCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ICliente>();

  return (
    <Create saveButtonProps={saveButtonProps}>
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
    </Create>
  );
};
