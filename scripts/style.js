//if (process.env.NODE_ENV === 'dev') {
import inlinecss from './../styles/inline.css';
//} else {
import inlinegithub from './../styles/inline-github.css';
//}

const mystyle = process.env.NODE_ENV === 'github' ? inlinegithub : inlinecss;

export default mystyle;