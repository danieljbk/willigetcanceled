import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import { Navigate } from 'react-router-dom'
import { TryAgainButton } from './TryAgainButton'

import tokenizer from 'sbd'
import alex from 'alex'
import Highlighter from 'react-highlight-words'

function Result({ textData }) {
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
    backgroundColor: 'rgb(211, 211, 211)',
    padding: 0,
    marginTop: '1rem',
  }

  if (textData === undefined) {
    return <Navigate to='/' />
  } else if (textData === '') {
    return (
      <center>
        <Card style={cardStyle}>
          <center>
            <Card.Title>You survived! 🥳</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              Saying nothing is the best way to avoid getting canceled.
            </Card.Subtitle>
            <TryAgainButton />
          </center>
        </Card>
      </center>
    )
  }

  const paragraphs = textData.split('\n')
  let lines = []
  paragraphs.forEach((paragraph) => {
    const optional_options = {}
    let sentences = tokenizer.sentences(paragraph, optional_options)
    sentences = sentences.map((sentence) => sentence.trim())
    sentences = sentences.filter((sentence) => sentence !== '')
    lines = lines.concat(sentences)
  })

  const profanityEmoji = (severity) => {
    switch (severity) {
      case 0:
        return '😇'
      case 1:
        return '😬'
      case 2:
        return '🤬'
      default:
        return '🤔'
    }
  }

  return (
    <center>
      <Card style={cardStyle}>
        <center>
          <Card.Title>
            {alex(textData).messages.length === 0
              ? 'You survived! 🥳'
              : 'You got canceled. 😔'}
          </Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            You said {alex(textData).messages.length} bad things.
          </Card.Subtitle>
        </center>
        <Card.Body style={cardBodyStyle}>
          <ListGroup variant='flush'>
            {lines.map((sentence) => {
              const alexMessages = alex(sentence).messages
              const highlightWords = alexMessages.map((message) => {
                return message.actual
              })
              return (
                <div>
                  {alexMessages.length > 0 ? (
                    <div>
                      <Card.Header>
                        <Highlighter
                          highlightStyle={{ backgroundColor: '#FF7F7F' }}
                          searchWords={highlightWords}
                          autoEscape={true}
                          textToHighlight={sentence}
                        />
                      </Card.Header>
                      {alexMessages.map((message) => {
                        return (
                          <ListGroup.Item>
                            <div className='alex-messages'>
                              {message.message +
                                ' ' +
                                profanityEmoji(message.profanitySeverity)}
                            </div>
                          </ListGroup.Item>
                        )
                      })}
                    </div>
                  ) : (
                    <Card.Header>{sentence}</Card.Header>
                  )}
                </div>
              )
            })}
          </ListGroup>
        </Card.Body>
        <TryAgainButton />
      </Card>
    </center>
  )
}

export default Result
