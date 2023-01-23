import 'bootstrap/dist/css/bootstrap.min.css'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import React from 'react'

import { Link } from 'react-router-dom'

class TextControls extends React.Component {
  constructor(props) {
    super(props)
    this.textSubmit = this.textSubmit.bind(this)
    this.textInputRef = React.createRef('')
  }

  textSubmit() {
    const text = this.textInputRef.current.value
    this.props.setTextData(text)
  }

  render() {
    const cardStyle = {
      width: '50%',
      minWidth: '300px',
      marginTop: '2rem',
      marginBottom: '3.5rem',
      paddingTop: '1.5rem',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
    }

    const cardBodyStyle = {
      padding: 0,
      marginTop: '1rem',
    }

    return (
      <center>
        <Card style={cardStyle}>
          <Card.Title>What u tryna say? 🧐</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            Type stuff below.
          </Card.Subtitle>
          <Card.Body style={cardBodyStyle}>
            <Form style={{ minWidth: '200px' }}>
              <Form.Group
                controlId='exampleForm.ControlTextarea1'
                style={{
                  margin: 0,
                }}
              >
                <Form.Control as='textarea' rows={20} ref={this.textInputRef} />
              </Form.Group>
            </Form>
          </Card.Body>
          <Link to='/result'>
            <Button
              variant='primary'
              style={{
                backgroundColor: '#DC143C',
                borderColor: '#DC143C',
                marginTop: '1rem',
                marginBottom: '1rem',
              }}
              type='submit'
              onClick={this.textSubmit}
            >
              See Result 👀
            </Button>
          </Link>
        </Card>
      </center>
    )
  }
}

export default TextControls
