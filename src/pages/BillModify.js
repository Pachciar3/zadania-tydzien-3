import React from 'react';
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

class BillModify extends React.Component {
  defaultTIP = 10
  VAT = 23

  state = {
    netto: '',
    tip: this.defaultTIP,
    result: false
  }


  handleSubmit = (e) => {
    const { netto, tip } = this.state;
    e.preventDefault();
    const result = ((tip / 100 * netto) + netto) * (1 + (this.VAT / 100));
    this.setState({ result });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: parseInt(e.target.value) });
  }

  handleButtonClick = () => {
    this.setState({
      result: false,
      netto: ''
    });
  }

  render() {
    const { netto, tip, result } = this.state;
    return (
      <div>
        {
          result
            ?
            <>
              <Button type="button" onClick={this.handleButtonClick}>Jeszcze raz</Button>
              <div>{result}</div>
            </>
            :
            <Form onSubmit={this.handleSubmit}>
              <Input value={netto} type="number" onChange={this.handleChange} name="netto" label="Cena netto: " />
              <Select value={tip} onChange={this.handleChange} name="tip" id="" label="Napiwek: ">
                {tips.map(({ id, value }) => <Option key={`excersize1-option-${id}`} value={value}>{value}%</Option>)}
              </Select>
              <Button type="submit">Przelicz</Button>
            </Form>
        }
      </div>
    );
  }
}

export default BillModify;
