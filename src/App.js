/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHatWizard, faCrow } from '@fortawesome/free-solid-svg-icons'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { spin: false };
    console.log(`
 ██████╗ ███████╗████████╗████████╗██╗███╗   ██╗    ███╗   ██╗██╗   ██╗████████╗███████╗██╗
██╔════╝ ██╔════╝╚══██╔══╝╚══██╔══╝██║████╗  ██║    ████╗  ██║██║   ██║╚══██╔══╝██╔════╝██║
██║  ███╗█████╗     ██║      ██║   ██║██╔██╗ ██║    ██╔██╗ ██║██║   ██║   ██║   ███████╗██║
██║   ██║██╔══╝     ██║      ██║   ██║██║╚██╗██║    ██║╚██╗██║██║   ██║   ██║   ╚════██║╚═╝
╚██████╔╝███████╗   ██║      ██║   ██║██║ ╚████║    ██║ ╚████║╚██████╔╝   ██║   ███████║██╗
 ╚═════╝ ╚══════╝   ╚═╝      ╚═╝   ╚═╝╚═╝  ╚═══╝    ╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚══════╝╚═╝
                                                                                           
               ___,,___                       
          _,-='=- =-  -\`"--.__,,.._           
       ,-;// /  - -       -   -= - "=.        
     ,'///    -     -   -   =  - ==-=\`.      
    |/// /  =    \`. - =   == - =.=_,,._ \`=/|  
   ///    -   -    \  - - = ,ndDMHHMM/\b  \\  
 ,' - / /        / /\ =  - /MM(,,._\`YQMML  \`| 
<_,=^Kkm / / / / ///H|wnWWdMKKK#""-;. \`"0\  | 
       \`""QkmmmmmnWMMM\""WHMKKMM\   \`--. \> \ 
             \`""'  \`->>>    \`\`WHMb,.    \`-_<@)
                               \`"QMM\`.        
hjm                               \`>>>
`);
  }

  render() {
    const {
      spin,
    } = this.state;
    const now = moment();
    const fellDate = moment('2015-03-09');
    const years = now.diff(fellDate, 'years');
    const months = now.diff(fellDate, 'months') % 12;
    const lastMonth = now.clone().subtract(1, 'month');
    const days = now.date() === 9 ? 0 : now.date() > 9 ? now.date() - 9 : now.diff(moment(`${lastMonth.year()}-${lastMonth.format('MM')}-09`), 'days');
    return (
      <div className="App">
        <header className="App--header">
          <p>
            <code>{years} years {months} months{days > 0 ? ` and ${days} days` : ''} </code>
          </p>
          <FontAwesomeIcon 
            icon={faHatWizard}
            className="App--hatWiz"
          />
         <FontAwesomeIcon
            icon={faCrow}
            className={`App--bird${spin ? '' : ' App--bird-offset'}`}
            onClick={() => this.setState({ spin: !spin})}
            spin={spin}
          />
        </header>
      </div>
    );
  }
}

export default App;
