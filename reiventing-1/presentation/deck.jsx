import React from 'react/addons'

import {
  Appear, BlockQuote, Cite, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from '../src/spectacle'

import preloader from '../src/utils/preloader'

const images = {
}

preloader( [ ] )

export default class extends React.Component {
  render() {
    return (
      <Deck transition={ [ 'fade' ] } transitionDuration={333}>
        <Slide>
          <Heading size={1} fit caps lineHeight={1.2} textColor='black'>
            Reinventing
          </Heading>
          <Heading size={1} fit caps lineHeight={1.2} textColor='black'>
            Organizations
          </Heading>
          <Heading size={3} fit textColor='white'>
            a quick introduction to
          </Heading>
          <Heading size={3} fit textColor='white'>
            organization paradigms
          </Heading>
        </Slide>
        <Slide bgColor='black'>
          <Heading size={1} fit textColor='primary'>
            Frederic Laloux
          </Heading>
          <Appear>
            <Heading size={1} fit textColor='primary'>
              <Link href='http://tiny.cc/reinventing'>tiny.cc/reinventing</Link>
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={2} textColor='black'>
            How <br/> organizations work
          </Heading>
          <Appear>
            <Heading size={2} textColor='black'>
              and evolve
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={2} textColor='black'>
            Evolution of counsciousness
          </Heading>
        </Slide>

        <Slide bgColor='secondary'>
          <Quote style={{textAlign: 'left', fontSize: '5.2em'}}>
            Problems can’t be solved with the same level of consciousness that created them in the first place.
          </Quote>
        </Slide>

        <Slide>
          <Heading size={2} textColor='black'>
            Breakthroughs
          </Heading>
        </Slide>
        <Slide bgColor='red'>
          <Heading>Red</Heading>
        </Slide>
        <Slide bgColor='#FF7E00'>
          <Heading>Amber</Heading>

        </Slide>
        <Slide bgColor='orange'>
          <Heading>Orange</Heading>

        </Slide>
        <Slide bgColor='green'>
          <Heading>Green</Heading>

        </Slide>

        <Slide bgColor='#18A7B5'>
          <Heading>Teal</Heading>
        </Slide>

        <Slide bgColor='#18A7B5'>
          <Heading>Self management</Heading>
        </Slide>

        <Slide bgColor='#18A7B5'>
          <Quote textColor='white' style={{textAlign: 'left', fontSize: '4.2em', borderLeft: "3px solid white"}}>
            Teal Organizations have found the key to operate effectively, even at a large scale, with a system based on peer relationships, without the need for either hierarchy or consensus.
          </Quote>
        </Slide>

        <Slide bgColor='#18A7B5'>
          <Heading>Wholeness</Heading>
        </Slide>

        <Slide bgColor='#18A7B5'>
          <Quote textColor='white' style={{textAlign: 'left', fontSize: '4.2em', borderLeft: "3px solid white"}}>
            Organizations encourage people to show up with a narrow “professional” self. Teal Organizations invite us to reclaim our inner wholeness and bring all of who we are to work.
          </Quote>
        </Slide>

        <Slide bgColor='#18A7B5'>
          <Heading>Evolutionary purpose</Heading>
        </Slide>

        <Slide bgColor='#18A7B5'>
          <Quote textColor='white' style={{textAlign: 'left', fontSize: '4.2em', borderLeft: "3px solid white"}}>
            Teal Organizations have a life and a sense of direction of their own. Instead of trying to predict and control the future, members of the organization are invited to listen in and understand what the organization wants to become, what purpose it wants to serve.
          </Quote>
        </Slide>
      </Deck>
    )
  }
}
