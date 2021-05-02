import React from "react";
import { Table, Button, Form, Col } from "react-bootstrap";

import "./index.scss";

export default function StyleGuide() {
  return (
    <>
      <section className="colors">
        <h1>Colors</h1>

        <p className="color-blocks">
          {[
            "white",
            "gray-100",
            "gray-200",
            "gray-300",
            "gray-400",
            "gray-500",
            "gray-600",
            "gray-700",
            "gray-800",
            "gray-900",
            "black",
            "primary",
            "secondary",
            "success",
            "info",
            "warning",
            "danger",
            "light",
            "dark",
          ].map((color) => (
            <span className="color" key={color}>
              <span className={"color-block bg-" + color} />
              <span className="color-details">{color}</span>
            </span>
          ))}
        </p>
      </section>

      <section className="typography">
        <h1>Typography</h1>

        <p>
          Lorem ipsum dolor sit amet, <em>consectetur adipiscing</em> elit.
          Mauris id arcu in lectus tempus semper.{" "}
          <strong>Nullam ut odio pellentesque,</strong> ultricies ligula nec,
          luctus dui. <a href="/">Maecenas vel enim</a> eu neque porta maximus
          sit amet nec augue.
        </p>
        {[1, 2, 3, 4, 5, 6].map((i) => {
          const Tag = "h" + i;
          return <Tag key={i}>Heading {i}</Tag>;
        })}
        <ul>
          <li>Praesent sed mollis lorem</li>
          <li>Phasellus eleifend rutrum mi ut tempus</li>
          <li>
            Quisque dignissim, sapien quis fermentum rhoncus, velit elit finibus
            purus, nec tempus ex risus luctus lectus
          </li>
        </ul>
        <ol>
          <li>
            Maecenas faucibus, risus vel cursus pellentesque, dui neque tempor
            enim, in tristique sem justo quis quam
          </li>
          <li>Maecenas quis ligula nec felis tempor vehicula</li>
          <li>Aliquam malesuada sapien vel euismod consequat</li>
          <li>Donec aliquam non eros porta feugiat</li>
        </ol>
        <Table>
          <thead>
            <tr>
              <th>Lorem Ipsum</th>
              <th>Dolor Sit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Risus vel cursus pellentesque</td>
              <td>Maecenas quis ligula</td>
            </tr>
            <tr>
              <td>Donec aliquam non eros porta</td>
              <td>Aliquam malesuada</td>
            </tr>
            <tr>
              <td>Tristique sem</td>
              <td>Mauris</td>
            </tr>
            <tr>
              <td>Quisque</td>
              <td>Donec</td>
            </tr>
          </tbody>
        </Table>
      </section>

      <section className="buttons">
        <h1>Buttons</h1>
        <p>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </p>
      </section>

      <section className="forms">
        <h1>Forms</h1>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <p>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </p>
        </Form>
      </section>
    </>
  );
}
