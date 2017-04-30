import { Button, Icon } from 'semantic-ui-react'
import React from 'react';

const AnimatedButton = () => (
  <div>
    <Button animated='fade' id="animated-button">
      <Button.Content visible>
        Don't click me
      </Button.Content>
      <Button.Content hidden>
        Just kidding, click me
      </Button.Content>
    </Button>
  </div>
)

export default AnimatedButton