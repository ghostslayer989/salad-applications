import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox } from './Checkbox'
import { action } from '@storybook/addon-actions'

storiesOf('Components/Checkbox', module)
  .add('checkboxes', () => {
    return (
      <div>
        <Checkbox checked={true} onClick={action('clicked 1')} text={'Text goes here'} />
        <Checkbox checked={false} onClick={action('clicked 2')} />
        <Checkbox checked={true} onClick={action('clicked 3')} />
      </div>
    )
  })
  .add('with error', () => {
    return (
      <div>
        <Checkbox
          checked={true}
          onClick={action('clicked 1')}
          text={'Texty text goes here'}
          errorText={'Error goes here'}
        />
        <Checkbox checked={false} onClick={action('clicked 2')} errorText={'Error goes here'} />
        <Checkbox checked={true} onClick={action('clicked 3')} errorText={'Error goes here'} />
      </div>
    )
  })
  .add('multiline', () => {
    return (
      <div style={{ width: '200px' }}>
        <Checkbox
          checked={true}
          onClick={action('clicked 1')}
          text={'This is very long texty text and it will take up multiple lines'}
        />
        <Checkbox
          checked={false}
          onClick={action('clicked 2')}
          text={'This is very long texty text and it will take up multiple lines'}
          errorText={'Short error'}
        />
        <Checkbox
          checked={true}
          onClick={action('clicked 3')}
          text={'Short text'}
          errorText={'Here is a really long error. This will go to multiple lines.'}
        />
      </div>
    )
  })
  .add('disabled', () => {
    return (
      <>
        <Checkbox disabled onClick={action('This should not happen')} text={'Disabled checkbox'} />
        <Checkbox onClick={action('This should happen')} text={'Enabled checkbox'} />
      </>
    )
  })
