import React from 'react/addons'

import {
  Appear, BlockQuote, Cite, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from '../src/spectacle'

import preloader from '../src/utils/preloader'

const images = {
  wolfpack: require('./wolfpack.jpg'),
  army: require('./army.jpg'),
  machine: require('./machine.jpg'),
  family: require('./family.jpg'),
  organism: require('./organism.jpg')
}

preloader( Object.keys(images).map(k => images[k]) )

export default class extends React.Component {
  render() {
    return (
      <Deck progress='bar' transition={ [ 'fade' ] } transitionDuration={333}>
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
          <Heading size={2} fit textColor='black'>
            How organizations
          </Heading>
          <Heading size={2} fit textColor='black'>
            work and evolve
          </Heading>
        </Slide>

        <Slide bgColor='secondary'>
          <Quote style={{textAlign: 'left', fontSize: '5em'}}>
            Problems can’t be solved with the same level of consciousness that created them in the first place.
          </Quote>
        </Slide>

        <Slide>
          <Heading size={2} textColor='black'>
            Evolution of counsciousness
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} fit textColor='black'>
            Breakthroughs
          </Heading>
          <Appear>
            <Heading size={3} fit textColor='black'>
              in ability to cooperate
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={2} fit textColor='black'>
            overview of the main
          </Heading>
          <Heading size={3} fit textColor='black'>
            Paradigms
          </Heading>
          <Appear>
            <Heading fit textColor='black'>
              Analogy, Characteristics, Breakthroughs, Examples
            </Heading>
          </Appear>
        </Slide>

        <Slide bgColor='red'>
          <Heading>Red</Heading>
        </Slide>

        <Slide bgImage={images.wolfpack}>
        </Slide>

        <Slide bgColor='red'>
          <Heading fit>Powerful Leader</Heading>
          <Appear>
            <Heading fit>Thrives in chaos</Heading>
          </Appear>
          <Appear>
            <Heading fit>Inspires fear</Heading>
          </Appear>
        </Slide>

        <Slide bgColor='red'>
          <Heading fit>Division of labour</Heading>
          <Appear>
            <Heading fit>Command authority</Heading>
          </Appear>
        </Slide>

        <Slide bgColor='red'>
          <Heading>Mafia</Heading>
          <Appear>
            <Heading>Gangs</Heading>
          </Appear>
        </Slide>

        <Slide bgColor='#FF7E00'>
          <Heading>Amber</Heading>
        </Slide>

        <Slide bgImage={images.army}>
        </Slide>

        <Slide bgColor='#FF7E00'>
          <Heading fit>Rigid Hierarchy</Heading>
          <Appear>
            <Heading fit>Stability focus</Heading>
          </Appear>
          <Appear>
            <Heading fit>Command & Control</Heading>
          </Appear>
        </Slide>

        <Slide bgColor='#FF7E00'>
          <Heading fit>Formal roles</Heading>
          <Appear>
            <Heading fit>Rigorous processes</Heading>
          </Appear>
          <Appear>
            <Heading fit>Long term perspective</Heading>
          </Appear>
        </Slide>

        <Slide bgColor='#FF7E00'>
          <Heading>Churches</Heading>
          <Appear>
            <Heading>Military</Heading>
          </Appear>
          <Appear>
            <Heading>Government</Heading>
          </Appear>
          <Appear>
            <Heading>Schools</Heading>
          </Appear>
        </Slide>

        <Slide bgColor='orange'>
          <Heading>Orange</Heading>
        </Slide>

        <Slide bgImage={images.machine}>
        </Slide>

        <Slide bgColor='orange' notes='Unlike Amber, freedom on the how, control on the what.'>
          <Heading fit>Competition</Heading>
          <Appear>
            <Heading fit>Profit & Growth</Heading>
          </Appear>
          <Appear>
            <Heading fit>Management by objectives</Heading>
          </Appear>
        </Slide>

        <Slide bgColor='orange'>
          <Heading fit>Innovation</Heading>
          <Appear>
            <Heading fit>Accountability</Heading>
          </Appear>
          <Appear>
            <Heading fit>Meritocracy</Heading>
          </Appear>
        </Slide>

        <Slide bgColor='orange'>
          <Heading>Multinational companies</Heading>
        </Slide>

        <Slide bgColor='green'>
          <Heading>Green</Heading>
        </Slide>

        <Slide bgImage={images.family}>
        </Slide>

        <Slide bgColor='green'>
          <Heading fit>Focus on culture</Heading>
          <Appear>
            <Heading fit>Employee engagement</Heading>
          </Appear>
          <Appear>
            <Heading fit>Consensus oriented</Heading>
          </Appear>
        </Slide>

        <Slide bgColor='green'>
          <Heading fit>Values-driven culture</Heading>
          <Appear>
            <Heading fit>Empowerment</Heading>
          </Appear>
          <Appear>
            <Heading fit>Stakeholder model</Heading>
          </Appear>
        </Slide>

        <Slide bgColor='green'>
          <Heading>Startups</Heading>
        </Slide>

        <Slide bgColor='#18A7B5'>
          <Heading>Teal</Heading>
        </Slide>

        <Slide bgImage={images.organism}>
        </Slide>

        <Slide bgColor='#18A7B5'>
          <Heading fit>Anti-fragile organization</Heading>
          <Appear>
            <Heading fit>Higher purpose</Heading>
          </Appear>
          <Appear>
            <Heading fit>Distributed Leadership</Heading>
          </Appear>
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
          <Quote textColor='white' style={{textAlign: 'left', fontSize: '3.8em', borderLeft: "3px solid white"}}>
            Teal Organizations have a life and a sense of direction of their own. Instead of trying to predict and control the future, members of the organization are invited to listen in and understand what the organization wants to become, what purpose it wants to serve.
          </Quote>
        </Slide>

        <Slide>
          <Heading textColor='black'>
            There's more...
          </Heading>
        </Slide>

        <Slide notes='Breathing, freedom and responsibility, solitude and community'>
          <Heading size={3} textColor='black'>
            The role of ego
          </Heading>
          <Appear>
            <Heading size={3} textColor='black'>
              Either-or vs both-and
            </Heading>
          </Appear>
          <Appear>
            <Heading size={3} textColor='black'>
              Consensus vs advice
            </Heading>
          </Appear>
        </Slide>

        {/*
        <Slide>
          <Quote textColor='black' style={{textAlign: 'left', fontSize: '4.2em', borderLeft: "3px solid black"}}>
            The level of consciousness of an organization cannot exceed the level of consciousness of its leader.
          </Quote>
        </Slide>
        */}
       
        <Slide>
          <Quote textColor='black' style={{textAlign: 'left', fontSize: '3.6em', borderLeft: "3px solid black"}}>
            There is nothing inherently “better” about being at a higher level of development, just as an adolescent is not “better” than a toddler. However, the fact remains that an adolescent is able to do more, because he or she can think in more sophisticated ways than a toddler.
          </Quote>
        </Slide>

        <Slide bgColor='black'>
          <Heading>
            Thanks!
          </Heading>
          <br/>
          <Heading size={1} fit>
            <Link href='http://tiny.cc/reinventing'>tiny.cc/reinventing</Link>
          </Heading>
        </Slide>
      </Deck>
    )
  }
}
