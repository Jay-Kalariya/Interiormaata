import './style3.css';
import { translate } from '../../anim';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <div className="footer_navbar">
          
            <ul className='ul'>
                <motion.li
                className="footer_link1"
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    <a href="">INSTAGRAM </a>
                    
                </motion.li>

                <motion.li
                className="footer_link2"
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    <a href="">YOUTUBE</a>
                    
                </motion.li>
            </ul>
           
        </div>
    )
}
