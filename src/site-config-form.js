import React from 'react'
import ReactDom from 'react-dom'
import Form from '@rjsf/core'
const schema = require('./data/schema-site-config.json')

const log = (type) => console.log.bind(console, type)

ReactDom.render((
    <Form schema={schema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
), document.getElementById('root'))
