import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        {/* <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li> */}
                        <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#" className="icon fa-linkedin"><span className="label">Linked In</span></a></li>
                        {/* <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li> */}
                        {/* <li><a href="https://github.com/siva-a" target="_blank" className="icon fa-github"><span className="label">Github</span></a></li> */}
                        {/* <li><a href="https://www.linkedin.com/in/sannapareddy" target="_blank" className="icon fa-linkedin"><span className="label">Linked In</span></a></li> */}
                    </ul>
                    <ul className="copyright">
                        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
