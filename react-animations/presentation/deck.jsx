import React from 'react/addons'

import {
  Appear, BlockQuote, Cite, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from 'spectacle/src/spectacle'

import preloader from 'spectacle/src/utils/preloader'

const images = {
}

// preloader( Object.keys(images).map(k => images[k].replace('/', '')) )

export default class extends React.Component {
  render() {
    return (
      <Deck progress='bar' transition={ [ 'fade' ] } transitionDuration={333}>
        <Slide>
          <Heading size={1} fit caps lineHeight={1.2}>
            Master Animations
          </Heading>
          <Heading size={3} fit>
            with React CSSTransitionGroup
          </Heading>
          <Text>Guilherme Rodrigues - firstdoit.com</Text>
        </Slide>
        <Slide>
          <Heading size={1} fit>
            What we're doing today
          </Heading>
          <Appear>
            <Heading size={1} fit>
              Why animate?
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading>
            Thanks!
          </Heading>
          <br/>
          <Heading size={1}>
            <Link textColor='secondary' href='http://firstdoit.com'>firstdoit.com</Link>
          </Heading>
        </Slide>
      </Deck>
    )
  }
}
