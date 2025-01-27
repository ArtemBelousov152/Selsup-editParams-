import { FC, useCallback, useState } from 'react';

import classNames from './app.module.scss';

enum ParamTypes {
  string = 'string',
}

interface Param {
  id: number;
  name: string;
  type: ParamTypes;
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
}

interface ParamEditorProps {
  model: Model;
  params: Param[];
}

interface ParamRowProps extends Param {
  paramValues: ParamValue[];
  handleChangeModelItem: ({
    newValue,
    id,
  }: {
    newValue: string;
    id: number;
  }) => void;
}

interface EditableFieldProps {
  handleChangeModelItem: ({ newValue }: { newValue: string }) => void;
  type: ParamTypes;
  value: ParamValue['value'];
}

const params: Param[] = [
  { id: 1, name: 'Назначение', type: ParamTypes.string },
  { id: 2, name: 'Длина', type: ParamTypes.string },
];

const model: Model = {
  paramValues: [
    {
      paramId: 1,
      value: 'повседневное',
    },
    {
      paramId: 2,
      value: 'макси',
    },
  ],
};

const EditableField: FC<EditableFieldProps> = ({
  type,
  value,
  handleChangeModelItem,
}) => {
  switch (type) {
    case ParamTypes.string: {
      return (
        <input
          value={value}
          onChange={(event) => {
            handleChangeModelItem({ newValue: event.target.value });
          }}
        />
      );
    }
  }
};

const ParamRow: FC<ParamRowProps> = ({
  id,
  name,
  type,
  paramValues,
  handleChangeModelItem,
}) => {
  const value = paramValues.find(({ paramId }) => paramId === id)?.value ?? '';
  const changeHandler = useCallback(
    ({ newValue }: { newValue: string }) => {
      handleChangeModelItem({ id, newValue });
    },
    [id]
  );

  return (
    <div className={classNames.editorRow}>
      <h3>{name}</h3>
      <EditableField
        type={type}
        value={value}
        handleChangeModelItem={changeHandler}
      />
    </div>
  );
};

const ParamEditor: FC<ParamEditorProps> = ({ model, params }) => {
  const [paramValues, setParamValues] = useState(model.paramValues);

  const getModel = (): Model => ({ paramValues });

  console.log(getModel());

  const handleChangeModelItem = ({
    newValue,
    id,
  }: {
    newValue: ParamValue['value'];
    id: number;
  }) => {
    setParamValues((prevParamValues) =>
      prevParamValues.map((param) =>
        id === param.paramId ? { ...param, value: newValue } : param
      )
    );
  };

  return (
    <div className={classNames.editorWrapper}>
      {params.map(({ id, name, type }) => (
        <ParamRow
          key={id}
          handleChangeModelItem={handleChangeModelItem}
          id={id}
          name={name}
          paramValues={paramValues}
          type={type}
        />
      ))}
    </div>
  );
};

export const App = () => {
  return (
    <div className={classNames.app}>
      <ParamEditor model={model} params={params} />
    </div>
  );
};
