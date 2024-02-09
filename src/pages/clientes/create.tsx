import { useState } from "react";
import { IResourceComponentsProps } from "@refinedev/core";

import { Create, useForm, useSelect } from "@refinedev/antd";

import { RcFile } from "antd/lib/upload/interface";
import { Form, Input, Select, Upload } from "antd";

import MDEditor from "@uiw/react-md-editor";

import { ICliente } from "../../interfaces";

import { supabaseClient, normalizeFile } from "../../utility";

export const ClienteCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ICliente>();

  const { selectProps: clienteSelectProps } = useSelect<ICliente>({
    resource: "clientes",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Nombre" name="nombresPadre">
          <Input />
        </Form.Item>
        <Form.Item label="Apellido" name="apellidoPadre">
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};
