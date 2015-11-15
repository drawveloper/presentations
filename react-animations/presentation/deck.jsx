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
            <Heading size={4}>
              1. Why animate?
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4}>
              2. CSS Animations
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4}>
              3. CSSTransitionGroup
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4}>
              4. Animation Components
            </Heading>
          </Appear>
        </Slide>

        {
        // Part 1 - Why Animate?
        }

        <Slide>
          <Heading size={1} fit caps lineHeight={1.2}>
            Why Animate?
          </Heading>
        </Slide>

        <Slide>
          <BlockQuote>
            "Watching an object move demonstrates whether it’s light, heavy, flexible, rigid, small or large."
          </BlockQuote>
        </Slide>

        <Slide>
          <BlockQuote>
            "Responsive interaction encourages deeper exploration of an app by creating timely, logical, and delightful screen reactions to user input."
          </BlockQuote>
        </Slide>

        <Slide>
          <BlockQuote>
            "Motion design can effectively guide the user’s attention in ways that both inform and delight."
          </BlockQuote>
        </Slide>

        <Slide>
          <BlockQuote>
            "A well-designed transition tells the user where to focus their attention."
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={1}>
            Why animate?
          </Heading>
          <Appear>
            <Heading size={4}>
              1. Inform the user.
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4}>
              2. Respond to user input.
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4}>
              3. Focus user attention.
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
