import React, { useState } from 'react';
import Form from '../components/Form';
import Button from '../components/Button';
import Input from '../components/Input';
import { Select, Option } from '../components/Select';

const tips = [
  {
    id: 1,
    value: 0
  },
  {
    id: 2,
    value: 10
  },
  {
    id: 3,
    value: 15
  },
  {
    id: 4,
    value: 20
  },
  {
    id: 5,
    value: 25
  }
];

function Bill() {
  const defaultTIP = 10;
  const VAT = 23;
  const [netto, setNetto] = useState('');
  const [tip, setTip] = useState(defaultTIP);
  const [result, setResult] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const result = ((tip / 100 * netto) + netto) * (1 + (VAT / 100));
    setResult(result);
  }

  function handleChange(e) {
    if (e.target.name === "netto") {
      setNetto(parseInt(e.target.value));
    } else {
      setTip(parseInt(e.target.value));
    }
  }

  function handleButtonClick() {
    setResult(false);
    setNetto('');
  }

  return (
    <div>
      {
        result
          ?
          <>
            <Button type="button" onClick={handleButtonClick}>Jeszcze raz</Button>
            <div>{result}</div>
          </>
          :
          <Form onSubmit={handleSubmit}>
            <Input value={netto} type="number" onChange={handleChange} name="netto" label="Cena netto: " />
            <Select value={tip} onChange={handleChange} name="tip" id="" label="Napiwek: ">
              {tips.map(({ id, value }) => <Option key={`excersize1-option-${id}`} value={value}>{value}%</Option>)}
            </Select>
            <Button type="submit">Przelicz</Button>
          </Form>
      }
    </div>
  );
}

export default Bill;
