import React, {useState} from 'react';
import { GrLinkTop } from "react-icons/gr";
import { Button } from './Styles';
import './footer.css';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<Button >
	<GrLinkTop size={40} onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}} color="white" />
	</Button>
);
}

export default ScrollButton;
