import React from 'react';
import { Provider } from 'react-redux';
import { Heart, Feather } from 'react-feather';
import Link from 'next/link';
import { InstantSearch } from 'react-instantsearch/dom';
import Responsive from 'react-responsive';
import Desktop from '../components/Desktop';
import Mobile from '../components/Mobile';
import store from '../store/store';
import stylesheet from '../styles/index.scss';

const DesktopContainer = props => <Responsive {...props} minWidth={800} />;
const MobileContainer = props => <Responsive {...props} maxWidth={799} />;

const Index = () => (
  <Provider store={store}>
    <div>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className="App">
        <InstantSearch
          appId="AZ293N8KMQ"
          apiKey="ab9e458f31e3e6f9a8e73a2304de3067"
          indexName="gapyear"
        >
          <div className="banner">
            <Link href="/"><a className="overlay logo">Noschool.io</a></Link>
            <Link href="/contact"><a className="overlay contact">Contact</a></Link>
            <div className="overlay main">Discover awesome activities for your gap year</div>
            <div className="overlay sub">Explore the world, try something new</div>
          </div>
          <DesktopContainer>
            <Desktop />
          </DesktopContainer>
          <MobileContainer><Mobile /></MobileContainer>
        </InstantSearch>
      </div>
      <footer>
        <p>Made with </p><Heart /> <p> by <a href="http://taylormilliman.me/">Taylor</a></p>
        <div className="feedback-link-container">
          <Link href="/feedback">
            <a>Leave Some Feedback! <Feather />
            </a>
          </Link>
        </div>
      </footer>
    </div>
  </Provider>
);

export default Index;
