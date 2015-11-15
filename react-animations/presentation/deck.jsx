import React from 'react/addons'

import {
  Appear, BlockQuote, Cite, Deck, Fill, CodePane,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from 'spectacle/src/spectacle'

import preloader from 'spectacle/src/utils/preloader'

const CSSTransitionGroup = React.addons.CSSTransitionGroup

const images = {
}

// preloader( Object.keys(images).map(k => images[k].replace('/', '')) )

class TransitionExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: true};
  }

  render() {
    return (
      <CSSTransitionGroup
          component="div"
          style={{width:'100%', height: 120, cursor: 'pointer'}}
          onClick={() => this.setState({visible: !this.state.visible})}
          transitionName="example"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          {this.state.visible &&
            <Heading size={1} key="content">
              Hello, world!
            </Heading>
          }
      </CSSTransitionGroup>
    )
  }
}

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

        {
        // Part 2 - CSS Animations
        }

        <Slide>
          <Heading size={1} fit caps lineHeight={1.2}>
            CSS Animations
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit lineHeight={1.2}>
            <code>animation</code> vs <code>transition</code>
          </Heading>
        </Slide>

        <Slide>
          <CodePane
            lang="css"
            source={require("raw!./animation.css.example")}
            margin="20px auto"/>
          <div className="pulse-example" style={{
              width: 250,
              height: 250,
              position: "absolute",
              top: 80,
              right: 60
            }}></div>
        </Slide>

        <Slide>
          <CodePane
            lang="css"
            source={require("raw!./animation2.css.example")}
            margin="20px auto"/>
          <div className="pulse-example-2" style={{
              width: 250,
              height: 250,
              position: "absolute",
              top: 80,
              right: 60
            }}></div>
        </Slide>

        <Slide>
          <CodePane
            lang="css"
            source={require("raw!./transition.css.example")}
            margin="20px auto"/>
          <div className="transition-example" style={{
              width: 210,
              height: 210,
              position: "absolute",
              top: 80,
              right: 60
            }}></div>
        </Slide>

        <Slide>
          <Heading size={1}>Question</Heading>
          <Heading size={3}>What happens if we move the transition property?</Heading>
        </Slide>

        <Slide>
          <CodePane
            lang="css"
            source={require("raw!./transition2.css.example")}
            margin="20px auto"/>
          <div className="transition-example-2" style={{
              width: 210,
              height: 210,
              position: "absolute",
              top: 80,
              right: 60
            }}></div>
        </Slide>

        <Slide>
          <Heading size={1}>
            CSS Animations
          </Heading>
          <Appear>
            <Heading size={4}>
              <code>animation</code>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4}>
              for complex tasks
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4}>
              <code>transition</code>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4}>
              for everything else
            </Heading>
          </Appear>
        </Slide>

        {
        // Part 3 - CSSTransitionGroup
        }

        <Slide>
          <Heading size={1} fit lineHeight={1.2}>
            {"<CSSTransitionGroup/>"}
          </Heading>
        </Slide>

        <Slide>
          <BlockQuote>
            "React provides a (...) ReactCSSTransitionGroup for easily implementing basic CSS animations and transitions."
          </BlockQuote>
        </Slide>

        <Slide>
          <CodePane
            lang="js"
            source={require("raw!./react.jsx.example")}
            margin="20px auto"/>
        </Slide>

        <Slide>
          <CodePane
            lang="js"
            source={require("raw!./react.css.example")}
            margin="20px auto"/>
        </Slide>

        <Slide>
          <TransitionExample/>
        </Slide>

        <Slide>
          <CodePane
            lang="js"
            source={require("raw!./react2.jsx.example")}
            margin="20px auto"/>
        </Slide>

        <Slide>
          <Heading size={4}>
            <Link href="https://www.google.com/design/spec/material-design/introduction.html">Google Material Design</Link>
          </Heading>
          <Heading size={4}>
            <Link href="https://css-tricks.com/almanac/properties/a/animation/">CSS Tricks - Animation</Link>
          </Heading>
          <Heading size={4}>
            <Link href="https://css-tricks.com/almanac/properties/t/transition/">CSS Tricks - Transition</Link>
          </Heading>
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
