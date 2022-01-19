import React from 'react';
import './Header.css';

// export default class Header extends React.Component {
//     render() {
//         return (
//             <div className="header">
//                 {this.props.heading}
//             </div>
//         )
//     }
// }

export default function Header(props) {
    return (
        <div className="header">
            {props.heading}
        </div>
    )
}